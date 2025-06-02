import Image from "next/image";
import React from "react";
import TitleDetail from "./TitleDetail";
import CountNumberEffect from "./CountNumberEffect";

const HomeSection = () => {
	return (
		<section
			id="home"
			className="bg-background container mx-auto px-4 mt-8 homepage-size"
		>
			<div className="inline-block">
				<div className="grid grid-cols-[auto_1fr] items-center">
					<h1 className="text-3xl md:text-7xl lg:text-8xl text-off-white font-semibold tracking-widest">
						VICTOR
					</h1>
					<TitleDetail />
				</div>

				<div className="grid grid-cols-[60px_1fr] lg:grid-cols-[144px_1fr] items-center ">
					<TitleDetail />

					<h1 className="text-3xl md:text-7xl lg:text-8xl text-off-white font-semibold tracking-widest">
						WOLLYVER
					</h1>
				</div>
			</div>

			<div className="flex justify-between mt-40 gap-40 flex-wrap">
				<div>
					<p className="font-poppins text-foreground text-2xl md:text-3xl lg:text-4xl  font-light">
						SOLUCIONANDO PROBLEMAS <br /> DA VIDA REAL ATRAVÉS DA <br />
						<span className="font-semibold text-primary"> TECNOLOGIA</span>
					</p>

					<a
						href="/assets/Currículo_Victor_Wollyver.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-off-white bg-primary font-bold py-4 px-12 mt-50 cursor-pointer inline-block text-center"
					>
						VER CURRÍCULO
					</a>
				</div>

				<div className=" items-center justify-center order-[-2] lg:order-2 hidden md:flex">
					<div className="relative grid grid-cols-2 gap-y-20 gap-x-10 max-w-4xl">
						<div className="text-left">
							<div>
								<CountNumberEffect number={1.8} mode="decimal" duration={100} />
								<span className="text-primary text-xl"> anos</span>
							</div>
							<p className="text-sm mt-1 text-foreground">
								De experiência profissional
								<span className="text-primary">.</span>
							</p>
						</div>

						<div className="ml-24">
							<div>
								<CountNumberEffect number={6} mode="int" duration={200} />

								<span className="text-primary text-xl"> anos</span>
							</div>
							<p className="text-sm mt-1 text-foreground">
								De formação<span className="text-primary">.</span>
							</p>
						</div>

						<div className="absolute left-[45%] top-[30%] text-[#f7931e] text-4xl">
							<Image
								src={"/assets/svgs/chart.svg"}
								alt="chart-svg"
								width={133}
								height={133}
							/>
						</div>

						<div className="text-left mt-20">
							<div className="text-3xl font-bold">
								<span className="text-primary">
									mais de{" "}
									<CountNumberEffect number={12} mode="int" duration={100} />
								</span>
							</div>
							<p className="text-sm mt-1 text-foreground">
								Certificações<span className="text-primary">.</span>
							</p>
						</div>

						<div className="">
							<p className="text-foreground mt-8 ml-15 w-40">
								Sempre buscando melhorar
								<span className="text-primary">.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
