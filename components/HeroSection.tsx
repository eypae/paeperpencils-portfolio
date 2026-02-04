'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { svgPaths } from "../lib/constants";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const titleText = "Hi. I'm En Yang.";

    return (
        <section id={ "home" } className="relative pt-64 pb-24 px-6 flex items-center justify-center overflow-hidden">
            <motion.div
                animate={ { rotate: 360 } }
                transition={ { duration: 30, repeat: Infinity, ease: "linear" } }
                className="absolute right-[12%] top-[25%] w-20 h-20 text-[#FFFFFF] opacity-80 hidden lg:block"
            >
                <svg className="w-full h-full" viewBox="0 0 66 66" fill="currentColor">
                    <path d={ svgPaths.p4d30e00 }/>
                </svg>
            </motion.div>

            <motion.div
                animate={ { y: [0, -10, 0] } }
                transition={ { duration: 4, repeat: Infinity, ease: "easeInOut" } }
                className="absolute left-[10%] bottom-[0%] w-20 h-20 text-[#FFFFFF] opacity-80 hidden lg:block"
            >
                <svg className="w-full h-full" viewBox="0 0 68 68" fill="currentColor">
                    <path d={ svgPaths.p1681700 }/>
                </svg>
            </motion.div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-7xl mx-auto w-full">
                {/* Paeperpencils Logo */ }
                <motion.div
                    initial={ { x: -40, opacity: 0 } }
                    animate={ { x: 0, opacity: 1 } }
                    transition={ { type: "spring", damping: 15, stiffness: 100 } }
                    className="relative w-44 h-44 mt-4 md:w-56 md:h-56 lg:w-[280px] lg:h-[280px] shrink-0"
                >
                    <img
                        src={ "/images/enyang-logo.png" }
                        alt="En Yang Character"
                    />
                </motion.div>

                {/* Text Section Container */ }
                <div className="flex flex-col items-center lg:items-start select-none relative">
                    <motion.div
                        className="relative cursor-pointer z-30"
                        onMouseEnter={ () => setIsHovered(true) }
                        onMouseLeave={ () => setIsHovered(false) }
                        animate={ { y: isHovered ? 15 : 0 } }
                        transition={ { type: "spring", stiffness: 300, damping: 20 } }
                    >
                        {/* 1. Base Shadow Layer - Now consistent with the banner's solid block shadow */ }
                        {/* We use an offset version of the text to mimic the solid drop shadow */ }
                        <div style={ { filter: "drop-shadow(0px 15px 0px rgba(0,0,0,0.15))" } }>
                            {/* Outer Black Stroke Layer */ }
                            <h1 className="absolute text-stroke-black inset-0 text-6xl md:text-9xl lg:text-[128px] font-sugar-peachy text-black whitespace-nowrap leading-none tracking-tight pointer-events-none">
                                { titleText }
                            </h1>

                            {/* Inner White Outline Layer */ }
                            <h1 className="absolute text-stroke-white inset-0 text-6xl md:text-9xl lg:text-[128px] font-sugar-peachy text-white whitespace-nowrap leading-none tracking-tight pointer-events-none">
                                { titleText }
                            </h1>

                            {/* Main Text Layer */ }
                            <h1 className="relative text-6xl md:text-9xl lg:text-[128px] font-sugar-peachy whitespace-nowrap leading-none tracking-tight transition-colors duration-300"
                                style={ { color: isHovered ? "#2E3E10" : "#121212" } }>
                                { titleText }
                            </h1>
                        </div>
                    </motion.div>

                    {/* Designer & Doodler Banner */ }
                    <motion.div
                        initial={ { rotate: -3.5, opacity: 0, scale: 0.9 } }
                        animate={ {
                            rotate: -3.5,
                            opacity: 1,
                            scale: 1
                            // Removed y: isHovered movement as requested
                        } }
                        transition={ { type: "spring", stiffness: 300, damping: 20 } }
                        // Moved down by 16px (adjusted margins: -mt-10 to -mt-6, -mt-14 to -mt-10)
                        className="z-10 bg-[#a1bc98] px-4 py-2 lg:px-[40px] lg:py-[12px] rounded-[12px] border-3 border-black shadow-[0px_15px_0px_0px_rgba(0,0,0,0.2)] mt-2 lg:mt-2 pointer-events-none"
                    >
                        <p className="font-sugar-peachy text-4xl lg:text-[84px] text-white leading-none tracking-tight">
                            Designer & Doodler.
                        </p>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};
export default HeroSection;
