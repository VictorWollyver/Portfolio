import React from "react";
import ProjectCard from "./ProjectCard";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import TitleDetail from "./TitleDetail";

const projects = [
	{
		name: "LARGEEE",
		type: "personal project",
		technologies: "NEXT.JS - NODE.JS - MONGODB - ",
		mainTechnologie: "STRIPE",
	},
	{
		name: "ERP - RH",
		type: "professional project",
		technologies: "NEXT.JS - NODE.JS - SQL - ",
		mainTechnologie: "GOOGLE MAPS API",
	},
	{
		name: "FIGHT",
		type: "personal project",
		technologies: "NEXT.JS - NODE.JS - ",
		mainTechnologie: "SOCKET.IO",
	},
	{
		name: "DOGS",
		type: "course project",
		technologies: "REACT - ",
		mainTechnologie: "STYLED COMPONENTS",
	},
];

const ProjectsPage = () => {
	return (
		<Slide direction="left" fraction={0.3} cascade triggerOnce>
			<section id="projects" className="mt-12 py-16">
				<div className="container mx-auto px-4 ">
					<div className="grid grid-cols-[auto_1fr] gap-4 items-center mb-10">
						<h2 className="text-off-white text-4xl md:text-6xl lg:text-7xl font-bold ">
							PROJETOS
						</h2>
						<TitleDetail />
					</div>

					{projects.map(
						({ mainTechnologie, name, technologies, type }, index) => {
							return (
								<ProjectCard
									key={name}
									name={name}
									type={type}
									technologies={technologies}
									mainTechnologie={mainTechnologie}
									index={index}
									isLast={index === projects.length - 1}
								/>
							);
						},
					)}
				</div>
			</section>
		</Slide>
	);
};

export default ProjectsPage;
