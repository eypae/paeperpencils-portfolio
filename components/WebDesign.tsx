'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TbArrowBigRightFilled } from "react-icons/tb";

import imgStrengthCorpLogo from '@/public/images/str-corp-logo.svg';
import imgPhones from '@/public/images/str-corp-phones.svg';

const WebDesign = () => {
    return (
        <section className="lg:mt-32 mt-24 xl:px-12 relative">
            <h2 className="font-bold text-4xl mb-12 text-right">
                I do web design as well!
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Card Placeholder */ }
                <div
                    className="lg:col-span-4 bg-[#a1bc98] border-3 border-black rounded-2xl h-100 shadow-[0_15px_0_rgba(0,0,0,0.2)]">
                </div>

                {/* Strength Corp Banner */ }
                <motion.div
                    className="lg:col-span-8 group relative cursor-pointer"
                >
                    <Link href="https://www.strengthcorp.com.sg/" target="_blank">
                        {/* Main Container (Styled like Doodle Card) */ }
                        <div className="
                            relative bg-[#f2ecd4] border-4 border-black rounded-2xl 
                            overflow-hidden shadow-[0_15px_0_rgba(0,0,0,0.2)] 
                            flex flex-row items-stretch transition-all duration-300
                            group-hover:-translate-y-2 group-hover:shadow-[0_18px_0_rgba(0,0,0,0.2)]
                        ">

                            {/* Left Side: Content */ }
                            <div
                                className="p-6 lg:p-10 flex-1 shrink flex flex-col justify-center relative z-10 group-hover:opacity-25">
                                <Image
                                    src={ imgStrengthCorpLogo }
                                    alt="Strength Corp"
                                    className="w-56 lg:w-72"
                                />
                                <div className="relative mt-4">
                                    <h3 className="font-league-spartan font-bold text-5xl lg:text-6xl text-[#272b3a] leading-[0.85] tracking-tighter">
                                        ONLINE <br/>
                                        COACHING <br/>
                                    </h3>
                                    <div className="relative inline-block">
                                        <h3 className="relative z-10 text-[#fc493e] font-league-spartan font-bold text-5xl lg:text-6xl tracking-wide">
                                            REDEFINED.
                                        </h3>
                                        <div className="absolute bottom-1 left-0 bg-[#fbd8d8] w-full h-4 lg:h-5 z-0"/>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Image Container */ }
                            <div
                                className="flex-1 relative min-h-75 md:min-h-0 overflow-hidden hidden min-[476px]:block group-hover:opacity-25">
                                <Image
                                    src={ imgPhones }
                                    alt="Mobile App"
                                    className="absolute max-[526px]:top-1/2 max-[526px]:-translate-y-1/2"
                                />
                            </div>

                            {/* 1. Gradient Overlay (Mimicking DoodleGrid) */ }
                            <div className="
                                absolute inset-0 pointer-events-none bg-[rgba(0,0,0,0.6)]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                z-20
                            "/>

                            {/* 2. Sliding Label (Mimicking DoodleGrid) */ }
                            <div className="absolute inset-0 overflow-hidden pointer-events-none z-30 transform
                                translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white
                                flex flex-col justify-between p-6 lg:p-10"
                            >
                                {/* Description - No longer absolute, let flexbox handle it */ }
                                <p className="font-quicksand text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-snug">
                                    Strength Corp is a Singapore-based fitness startup providing online coaching
                                    services.
                                </p>

                                {/* Footer Link - No longer absolute, sits at the bottom due to justify-between */ }
                                <div className="font-quicksand font-bold leading-none text-[42px] sm:text-[48px] flex items-center justify-start gap-3">
                                    <p>View Website</p>
                                    <TbArrowBigRightFilled className="mt-2 h-6 sm:h-8 w-auto"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WebDesign;