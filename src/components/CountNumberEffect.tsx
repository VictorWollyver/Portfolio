"use client";
import React from "react";

const CountNumberEffect = ({
	number,
	mode,
	duration = 1000,
}: { number: number; mode: "int" | "decimal"; duration: number }) => {
	const [count, setCount] = React.useState(0);
	const increment = mode === "int" ? 1 : 0.1;

	React.useEffect(() => {
		if (count >= number) return;
		const interval = setInterval(() => {
			setCount((prev) => prev + increment);
		}, duration);
		return () => clearInterval(interval);
	}, [count, number, increment, duration]);

	return (
		<span className="text-off-white text-3xl font-bold">
			{count.toFixed(1).replace(/\.0$/, "")}
		</span>
	);
};

export default CountNumberEffect;
