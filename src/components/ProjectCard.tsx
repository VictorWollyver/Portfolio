import Image from "next/image";
import React from "react";

function isOdd(index: number): boolean {
	return index % 2 !== 0;
}

const ProjectCard = ({
	name,
	type,
	technologies,
	mainTechnologie,
	index,
	isLast,
}: {
	name: string;
	type: string;
	technologies: string;
	mainTechnologie: string;
	index: number;
	isLast: boolean;
}) => {
	const isIndexOdd = isOdd(index);
	const color = isIndexOdd ? "text-off-white" : "text-primary";
	const border = isLast ? "" : "border-b-2 border-foreground";
	return (
		<div className={`${border} py-4`}>
			<div className="flex items-center justify-between flex-wrap">
				<div className="flex lg:items-center gap-y-4 lg:gap-10 flex-wrap flex-col lg:flex-row">
					<p className="text-xs text-foreground font-light w-40">{type}</p>

					<h3
						className={`font-light text-4xl md:text-6xl lg:text-7xl ${color}`}
					>
						{name}
					</h3>
				</div>

				<div className="flex items-center gap-40">
					<p className="text-foreground text-xs">
						{technologies}
						<span className={`${color}`}>{mainTechnologie}</span>
					</p>

					<div>
						<Image
							alt="arrow icon"
							src={"/assets/svgs/rigthArrow.svg"}
							width={12}
							height={24}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
