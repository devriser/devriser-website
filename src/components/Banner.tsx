import React from "react";
import Button from "./Button";
import { BannerProps } from "@/types/types";

const Banner = (props: BannerProps) => {
	return (
		<section className='before-overlay before:banner-bg isolate  mt-[130px] flex h-[200px] w-[calc(100%-1.25rem)] max-w-[1300px] flex-wrap  items-center justify-center gap-4 rounded-[18px]  px-12 text-center  before:-z-20 before:rounded-[18px]   lg:mx-auto lg:gap-[75px]  xl:gap-[300px]  '>
			<div className='bg-noise absolute -z-10 h-full w-full'></div>
			<div className=' flex w-full flex-wrap items-center justify-center gap-4'>
				<h3 className='md:primary-heading   mx-auto w-fit text-[20px]/[24px] !font-normal text-white'>{props.heading}</h3>
				<Button text={props.btnText} variant='Secondary' className='mx-auto' />
			</div>
		</section>
	);
};

export default Banner;
