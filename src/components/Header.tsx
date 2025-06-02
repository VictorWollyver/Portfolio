import React from "react";

const Header = () => {
	return (
		<header className="h-35">
			<nav className="w-full h-35">
				<div className="flex items-center justify-center h-35">
					<ul className="text-primary flex gap-8">
						<li>
							<a href="#home" className="text-xs lg:text-[16px]">
								HOME
							</a>
						</li>
						<li>
							<a href="#projects" className="text-xs lg:text-[16px]">
								PROJETOS
							</a>
						</li>
						<li>
							<a href="#experiences" className="text-xs lg:text-[16px]">
								EXPERIÊNCIA
							</a>
						</li>
						<li>
							<a href="#contact" className="text-xs lg:text-[16px]">
								CONTATO
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
