import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import Code from "./Code";
import MotionComponent from "./MotionComponent";

import { slugify } from "@/utils/utils";
import cn from "@/utils/cn";

import neon from "../../public/assets/icons/Group 771.svg";

interface props {
  children: React.ReactNode;
  LineClasses?: string;
  className?: string;
  heading?: string;
  HideSymbol?: boolean;
  onView?: (sectionName: string) => void;
  notOnView?: any;
}

const LineLayout = ({ children, LineClasses, className, HideSymbol = false, heading, onView, notOnView = false }: props) => {
  const ref: any = useRef(null);
  const isInView = useInView(ref, { amount: 0.52 });

  useEffect(() => {
    onView && onView(heading ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    onView && onView("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ANIMATION VARIANTS
  let lineAnimVariants = {
    whileInView: {
      opacity: [0.6, 0.9, 0.6, 1],
      filter: [
        "brightness(1) hue-rotate(0deg)",
        "brightness(2) hue-rotate(60deg)",
        "brightness(1) hue-rotate(90deg)",
        "brightness(2) hue-rotate(120deg)",
        "brightness(1) hue-rotate(150deg)",
        "brightness(2) hue-rotate(180deg)",
        "brightness(1) hue-rotate(150deg)",
        "brightness(2) hue-rotate(120deg)",
        "brightness(1) hue-rotate(150deg)",
        "brightness(2) hue-rotate(90deg)",
        "brightness(1) hue-rotate(60deg)",
        "brightness(2) hue-rotate(0deg)",
      ],
    },

    viewport: { amount: 0.3 },
  };
  let headingAnimVariants = { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, viewport: { amount: 0.7, once: true } };

  return (
    <MotionComponent ref={ref} id={`${slugify(slugify(heading), "/") ?? ""}`} className='line-layout'>
      {/* LINE */}
      <MotionComponent
        {...lineAnimVariants}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", repeatDelay: 0 }}
        className={cn("relative isolate h-full [grid-area:line] max-lg:hidden", LineClasses)}>
        {!HideSymbol && (
          <Code className='absolute -top-2 right-0 z-10 translate-x-[calc(50%-3px)] rounded-full text-dark/70  backdrop-blur-3xl dark:text-white' />
        )}
        <div className='z-0 ml-auto h-full w-1 [background-image:linear-gradient(to_bottom,transparent_40px,#245F00_55px,#55D163_80%,transparent_99%)]' />
        {/* GRID */}
      </MotionComponent>
      <div className={cn("[grid-area:main] lg:pl-16", className, "mt-0")}>
        {heading && (
          <div>
            <Image src={neon} alt='' className='mx-auto h-14 w-14 rounded-full  lg:hidden' />
            <MotionComponent
              as='h2'
              {...headingAnimVariants}
              transition={{ duration: 0.5 }}
              className='primary-heading mt-1.5 w-fit max-lg:mx-auto max-lg:mb-0 xl:mb-10'>
              {heading}
            </MotionComponent>
          </div>
        )}
        {children}
      </div>
    </MotionComponent>
  );
};

export default LineLayout;
