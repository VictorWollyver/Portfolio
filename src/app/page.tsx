import ContactPage from "@/components/ContactPage";
import ExperiencesPage from "@/components/ExperiencesPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Victor Wollyver - Portfolio",
	description: "Portfolio do Victor Wollyver",
	keywords: [
		"Victor Wollyver",
		"Portfolio",
		"Desenvolvedor Frontend",
		"Desenvolvedor Web",
		"Programador",
		"JavaScript",
		"React",
		"Next.js",
		"HTML",
		"CSS",
		"Tailwind CSS",
		"JavaScript Developer",
		"Frontend Developer",
		"Web Developer",
	],
	authors: [
		{ name: "Victor Wollyver", url: "www.linkedin.com/in/victorwollyver" },
	],
	openGraph: {
		url: "https://wollyver.com.br",
		type: "website",
		title: "Victor Wollyver - Portfolio",
		description: "Portfolio do Victor Wollyver",
		siteName: "Victor Wollyver - Portfolio",
		locale: "pt-BR",
		images: [
			{
				url: "/assets/OG-image.jpg",
				width: 1200,
				height: 630,
				alt: "Victor Wollyver - Portfolio",
			},
		],
	},
};

const PortfolioPage = () => {
	return (
		<>
			<Header />
			<HomeSection />
			<ProjectsPage />
			<ExperiencesPage />
			<ContactPage />
			<Footer />
		</>
	);
};

export default PortfolioPage;
