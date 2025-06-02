"use server";

import { z } from "zod";

const emailSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
	message: z
		.string()
		.min(1, "Mensagem é obrigatória")
		.max(500, "Mensagem muito longa"),
});

export async function postEmail(formData: FormData) {
	const data = {
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	};

	try {
		const parsedData = emailSchema.parse(data);

		const body = {
			service_id: process.env.SERVICE_ID,
			template_id: process.env.TEMPLATE_ID,
			user_id: process.env.USER_ID,
			accessToken: process.env.ACCESS_TOKEN,
			template_params: {
				name: parsedData.name,
				message: parsedData.message,
				email: parsedData.email,
			},
		};

		const response = await fetch(
			"https://api.emailjs.com/api/v1.0/email/send",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			},
		);

		if (!response.ok) {
			throw new Error("Erro ao enviar o e-mail");
		}

		return { ok: true, message: "E-mail enviado com sucesso!" };
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				ok: false,
				message: error.errors[0].message,
			};
		}
		if (error instanceof Error) {
			return { ok: false, message: error.message };
		}
		return { ok: false, message: "Erro desconhecido ao enviar o e-mail" };
	}
}
