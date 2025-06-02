import React from "react";
import ContactCard from "./ContactCard";
import { Fade } from "react-awesome-reveal";

const ContactPage = () => {
	return (
		<Fade fraction={0.5} triggerOnce>
			<section id="contact" className="py-20">
				<div className="container mx-auto px-4">
					<div className="flex justify-between content-center flex-wrap ">
						<div className="self-center">
							<h2 className="text-primary text-4xl font-bold">MEUS CONTATOS</h2>
							<p className="font-poppins text-[16px] text-foreground mt-2">
								Caso tenha gostado do que viu, entre em contato para <br />
								conversarmos.
							</p>

							<ul className="mt-6">
								<li>
									<h3 className="text-off-white text-2xl">E-Mail</h3>
									<p className="text-foreground text-[16px]">
										victorwollyver50@gmail.com
									</p>
								</li>

								<li className="mt-5">
									<h3 className="text-off-white text-2xl">Celular</h3>
									<p className="text-foreground text-[16px]">(19) 98117-1034</p>
								</li>
							</ul>
						</div>

						<ContactCard />
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default ContactPage;
