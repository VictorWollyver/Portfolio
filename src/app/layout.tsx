import type { Metadata } from "next";
import "./globals.css";
import { Literata, Poppins } from "next/font/google";

const literata = Literata({
	subsets: ["latin"],
	weight: ["200", "400", "600", "700"],
	style: ["normal"],
	variable: "--font-literata",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "400"],
	style: ["normal"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Victor Wollyver - Portfolio",
	description: "Portfolio do Victor Wollyver",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="scroll-smooth">
			<body className={`antialiased ${literata.variable} ${poppins.variable}`}>
				{children}
			</body>
		</html>
	);
}
