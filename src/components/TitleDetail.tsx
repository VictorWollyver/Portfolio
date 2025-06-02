"use client";
import React, { useRef, useEffect, useState } from "react";

const TitleDetail = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	console.log(divRef.current?.offsetWidth);

	useEffect(() => {
		setWidth(divRef.current?.offsetWidth || 0);
	}, []);

	return (
		<div className="w-full">
			<p className="text-primary font-poppins text-[10px] text-center">
				{width} px
			</p>
			<div className="h-[1px] w-full bg-primary" ref={divRef} />
		</div>
	);
};

export default TitleDetail;
