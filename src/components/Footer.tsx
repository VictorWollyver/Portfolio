import React from "react";

const Footer = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="w-full bg-off-white h-[300px] px-15 flex items-center ">
					<p className="text-background font-semibold text-1xl lg:text-2xl ">
						Estou disponível para trabalhos, entre em <br /> contato comigo para
						conversarmos.
					</p>
				</div>
				<div className="flex justify-between items-center mt-10">
					<p className="text-[16px] text-foreground">Victor Wollyver</p>

					<div className="flex gap-6">
						<a
							href="https://linkedin.com/in/victorwollyver"
							className="text-[16px] text-foreground"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/VictorWollyver"
							className="text-[16px] text-foreground"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
