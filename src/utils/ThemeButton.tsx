"use client";

import { useEffect, useState } from "react";
import LightIcon from "../../public/assets/icons/LightIcon";
import MoonIcon from "../../public/assets/icons/MoonIcon";

import { useTheme } from "next-themes";
import cn from "./cn";
const ThemeButton = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	let ctx = useTheme();
	if (!mounted)
		return (
			<div className={cn("mt-auto flex flex-col items-center gap-[9px]", className)}>
				<button aria-label='Theme Button' className='h-[30px] w-[30px] appearance-none'>
					<div className='h-full w-full animate-pulse rounded'></div>
				</button>
			</div>
		);
	return (
		<div className={cn("mt-auto flex flex-col items-center gap-[9px]", className)}>
			{ctx.theme === "dark" && (
				<button
					aria-label='Light Theme Button'
					className='appearance-none'
					onClick={() => {
						ctx.setTheme("light");
					}}>
					<LightIcon className={`box-content h-5 w-5 rounded-full border border-gray p-2 ${className ?? ""}`} />
				</button>
			)}
			{ctx.theme !== "dark" && (
				<button
					aria-label='Dark Theme Button'
					className='appearance-none'
					onClick={() => {
						ctx.setTheme("dark");
					}}>
					<MoonIcon className={`box-content h-5 w-5 rounded-full border border-gray p-2 ${className ?? ""}`} />
				</button>
			)}
		</div>
	);
};

export default ThemeButton;
