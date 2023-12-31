import LogoClouds from "@/components/LogoClouds";
import Main from "@/components/Main";
import Heading from "@/components/SectionHeading";
import { PARTNERS_LOGOS, TEAM } from "@/utils/about-data";
import Image from "next/image";
import white from "../../../../public/assets/images/white520.png";
import whiteSmall from "../../../../public/assets/images/placeholder.png";
import blackSmall from "../../../../public/assets/images/black150.png";
import black from "../../../../public/assets/images/black520.png";
import DarkLightImage from "@/components/DarkLightImage";
import cn from "@/utils/cn";
import Button from "@/components/Button";
import DecoratedBanner from "@/components/DecoratedBanner";
const About = () => {
	return (
		<Main data-page='About'>
			<section id='hero' className='section-spacing-p grid min-h-section w-full place-items-center'>
				<Heading
					as='div'
					className='gap-32 lg:gap-5'
					title='DevRiser - Excellence in Every Endeavor'
					description='Driven by a passion for perfection, we at DevRiser tirelessly strive to deliver unparalleled quality in all that we do.'
				/>
				<LogoClouds heading='Our Partners' logos={PARTNERS_LOGOS} />
			</section>

			{/* GRID */}
			<section className='section-spacing-p grid min-h-section w-full place-items-center'>
				<div className='mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr]  lg:gap-20'>
					<DarkLightImage
						darkVisibleImage={white}
						lightVisibleImage={black}
						alt='white'
						className='h-full  grow-0 basis-[500px] rounded-lg object-cover'
					/>
					<div className='grid grid-cols-2 gap-4'>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-[36px]  font-medium lg:text-[48px]'>45k+</span>
							<p className='text-dark dark:text-white'>Client</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-[36px]  font-medium lg:text-[48px]'>19+</span>
							<p className='text-dark dark:text-white'>Countries</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-[36px]  font-medium lg:text-[48px]'>12+</span>
							<p className='text-dark dark:text-white'>Softwares Developed</p>
						</div>
						<div className='flex flex-col items-start justify-center gap-3.5 rounded-lg bg-white px-5   py-8 dark:bg-gray-39 lg:py-12'>
							<span className='text-[36px]  font-medium lg:text-[48px]'>200+</span>
							<p className='text-dark dark:text-white'>Employees</p>
						</div>
					</div>
				</div>
			</section>

			<Heading
				title='What We Do ?'
				gradientText='We Do'
				description='Enabling business success with solutions, fostering growth, and unlocking their limitless potential through our offerings.'
				className='section-spacing-p min-h-section gap-8'>
				<div className='mx-2 mt-8 grid max-w-md grid-cols-1  gap-4 lg:max-w-[900px] lg:grid-cols-2'>
					<div className='grid   place-items-start gap-3 rounded-lg border border-dark/10 bg-white px-6 pb-20 pt-7 hover:border-dark/20  dark:border-white/10 dark:bg-gray-39 dark:hover:border-white/25'>
						<h3 className='font-semibold'>Custom-made solutions</h3>
						<p className='text-left font-350'>
							At DevRiser, we pride ourselves on providing tailor-made solutions that perfectly fit your unique needs and goals.
						</p>
					</div>
					<div className='grid  place-items-start gap-3 rounded-lg border border-dark/10 bg-white px-6 pb-20 pt-7 hover:border-dark/20  dark:border-white/10 dark:bg-gray-39 dark:hover:border-white/25'>
						<h3 className='font-semibold'>Custom-made solutions</h3>
						<p className='text-left font-350'>
							At DevRiser, we pride ourselves on providing tailor-made solutions that perfectly fit your unique needs and goals.
						</p>
					</div>
					<div className='grid  place-items-start gap-3 rounded-lg border border-dark/10 bg-white px-6 pb-20 pt-7 hover:border-dark/20  dark:border-white/10 dark:bg-gray-39 dark:hover:border-white/25'>
						<h3 className='font-semibold'>Custom-made solutions</h3>
						<p className='text-left font-350'>
							At DevRiser, we pride ourselves on providing tailor-made solutions that perfectly fit your unique needs and goals.
						</p>
					</div>
					<div className='grid  place-items-start gap-3 rounded-lg border border-dark/10 bg-white px-6 pb-20 pt-7 hover:border-dark/20  dark:border-white/10 dark:bg-gray-39 dark:hover:border-white/25'>
						<h3 className='font-semibold'>Custom-made solutions</h3>
						<p className='text-left font-350'>
							At DevRiser, we pride ourselves on providing tailor-made solutions that perfectly fit your unique needs and goals.
						</p>
					</div>
				</div>
			</Heading>

			<section className='section-spacing-p grid min-h-section w-full place-items-center'>
				<div className='mx-3 grid w-full max-w-[1080px] place-items-center'>
					<Heading
						as='div'
						title='Our Team'
						description='Meet our exceptional team, a blend of diverse expertise and creativity, dedicated to fostering a work culture that thrives on collaboration and innovation.'
						className={cn(
							// 'grid   grid-cols-2  [&_h2]:text-left [&_p]:text-left',
							"w-[calc(100%-3rem)] gap-4"
						)}
					/>
					<div className=' mx-auto mt-8 grid w-[calc(100%-3rem)]  gap-6 rounded-lg bg-white p-10 dark:bg-gray-39'>
						<h3 className='secondary-heading'>Team</h3>
						<div className='grid w-full max-w-[1080px] grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 '>
							{TEAM.map(({ name, image, role }, index) => (
								<div key={index} className=' flex gap-5'>
									<DarkLightImage
										darkVisibleImage={whiteSmall}
										lightVisibleImage={blackSmall}
										alt=''
										className='h-full max-h-[80px] w-full max-w-[80px] rounded-lg'
									/>
									<div className='flex flex-col justify-center  gap-1'>
										<h4 className='font-medium'>{name}</h4>
										<p className='text-[12px]'>{role}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<Button text='Join Our Team' className='mx-auto mt-16' variant='Primary' />
				</div>
			</section>

			<DecoratedBanner
				title='Ready to Experience Excellence? Join Us on this Journey!'
				btnText='Join Us!'
				variant='Secondary'
				BannerColor='rgba(96, 61, 197, 1)'
				HideRings={true}
				className=' [&_h2]:text-white'
			/>
		</Main>
	);
};

export default About;
