"use client";
import { postEmail } from "@/actions/postEmail";
import React from "react";
import { set } from "zod/v4";
import { ca, th } from "zod/v4/locales";

const PostEmailForm = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	const [successMessage, setSuccessMessage] = React.useState("");

	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			setIsLoading(true);
			const { ok, message } = await postEmail(
				new FormData(event.currentTarget),
			);
			if (!ok) {
				throw new Error(message);
			}
			setErrorMessage("");
			setSuccessMessage("E-mail enviado com sucesso!");
			setName("");
			setEmail("");
			setMessage("");
		} catch (error) {
			setSuccessMessage("");
			if (error instanceof Error) {
				return setErrorMessage(error.message);
			}
			setErrorMessage(
				"Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.",
			);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name" className="text-[16px] text-off-white font-bold">
					NOME
				</label>
				<input
					className="bg-off-white w-full py-1 px-2 outline-0 font-literata mt-1"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>

			<div className="mt-3">
				<label htmlFor="email" className="text-[16px] text-off-white font-bold">
					E-MAIL
				</label>
				<input
					className="bg-off-white w-full py-1 px-2 outline-0 font-literata mt-1"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="mt-3">
				<label
					htmlFor="message"
					className="text-[16px] text-off-white font-bold"
				>
					MENSAGEM
				</label>
				<textarea
					className="bg-off-white w-full h-32 py-1 px-2 outline-0 font-literata mt-1"
					name="message"
					maxLength={500}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>

			{isLoading && (
				<button
					type="button"
					className="bg-primary text-off-white font-bold py-2 px-12 mt-5 cursor-not-allowed brightness-75"
				>
					ENVIANDO...
				</button>
			)}

			{!isLoading && (
				<button
					type="submit"
					className="bg-primary text-off-white font-bold py-2 px-12 mt-5 cursor-pointer"
				>
					ENVIAR
				</button>
			)}
			{errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
			{successMessage && (
				<p className="text-green-500 mt-3">{successMessage}</p>
			)}
		</form>
	);
};

export default PostEmailForm;
