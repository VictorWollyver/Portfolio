import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Fade, Slide } from "react-awesome-reveal";

const experiences = [
	{
		enterprise: "DBS SYSTEM 1",
		position: "desenvolvedor web",
		description:
			"Atuei durante quase 2 anos desenvolvendo aplicações web com foco em ERP’s de gestão empresarial.",
	},
	// {
	// 	enterprise: "DBS SYSTEM 2",
	// 	position: "desenvolvedor web",
	// 	description:
	// 		"Atuei durante quase 2 anos desenvolvendo aplicações web com foco em ERP’s de gestão empresarial.",
	// },
	// {
	// 	enterprise: "DBS SYSTEM 3",
	// 	position: "desenvolvedor web",
	// 	description:
	// 		"Atuei durante quase 2 anos desenvolvendo aplicações web com foco em ERP’s de gestão empresarial.",
	// },
];

const ExperiencesPage = () => {
	return (
		<Slide cascade direction="right" fraction={0.3} triggerOnce>
			<section id="experiences" className="py-20">
				<div className="container mx-auto px-4 mb-10">
					<h2 className="font-bold text-4xl md:text-6xl lg:text-7xl text-off-white">
						EXPERIÊNCIAS
					</h2>
				</div>
				<div className="flex gap-15 px-4 lg:px-25 flex-col lg:flex-row">
					{experiences.map(({ enterprise, description, position }) => {
						return (
							<ExperienceCard
								key={enterprise}
								enterprise={enterprise}
								description={description}
								position={position}
							/>
						);
					})}

					<div className="bg-off-white p-10 h-[430px] flex-2">
						<div className="flex flex-col justify-between h-full">
							<div>
								<h4 className="font-poppins text-primary text-[16px]">
									disponível para novas oportunidades
								</h4>
								<h3 className="text-background font-bold text-3xl">EM BUSCA</h3>
								<p className="text-background text-[16px] font-poppins mt-5">
									Atualmente estou disponível para novas contratações, caso
									tenha se interessado, basta entrar em contato.
								</p>
							</div>

							<a
								href="#contact"
								type="button"
								className="mt-5 lg:mt-0 border-2 border-primary text-primary hover:bg-primary hover:text-off-white font-bold py-4 px-12 cursor-pointer transition-colors duration-300 text-center"
							>
								ENTRAR EM CONTATO
							</a>
						</div>
					</div>
				</div>
			</section>
		</Slide>
	);
};

export default ExperiencesPage;
