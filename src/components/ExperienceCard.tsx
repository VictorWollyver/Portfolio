import Image from "next/image";
import React from "react";

const ExperienceCard = ({
	enterprise,
	position,
	description,
}: { enterprise: string; position: string; description: string }) => {
	return (
		<div className="bg-off-white p-10 h-[430px] flex-4">
			<div className="flex flex-col justify-between h-full">
				<div>
					<h4 className="font-poppins text-primary text-[16px]">{position}</h4>
					<h3 className="text-background font-bold text-3xl">{enterprise}</h3>
					<p className="text-background text-[16px] font-poppins mt-5">
						{description}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 mt-5 lg:mt-0">
					<div className="">
						<div>
							<Image
								alt="codificação svg"
								src="/assets/svgs/codificacao.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">Codificação</h5>
						<p className="font-poppins text-xs">
							Desenvolvimento das aplicações de <br /> forma FullStack.
						</p>
					</div>

					<div>
						<div>
							<Image
								alt="comunicação svg"
								src="/assets/svgs/comunicacao.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">Comunicação</h5>
						<p className="font-poppins text-xs">
							Alinhamento técnico e humano <br /> para criar soluções eficazes.
						</p>
					</div>

					<div>
						<div>
							<Image
								alt="manuais svg"
								src="/assets/svgs/manuais.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">Manuais</h5>
						<p className="font-poppins text-xs">
							Elaboração de manuais <br /> para os usuários.
						</p>
					</div>

					<div>
						<div>
							<Image
								alt="suporte svg"
								src="/assets/svgs/suporte.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">Suporte</h5>
						<p className="font-poppins text-xs">
							Correções e suporte continuo <br /> ao sistema em produção.
						</p>
					</div>

					<div>
						<div>
							<Image
								alt="codificação svg"
								src="/assets/svgs/infraestrutura.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">Infraestrutura</h5>
						<p className="font-poppins text-xs">
							Gerenciamento dos servidores <br /> VPS e deploy de aplicações.
						</p>
					</div>

					<div>
						<div>
							<Image
								alt="codificação svg"
								src="/assets/svgs/git.svg"
								width={24}
								height={24}
							/>
						</div>
						<h5 className="font-bold text-[16px]">GIT</h5>
						<p className="font-poppins text-xs">
							Versionamento e trabalho em <br /> equipe com GIT.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
