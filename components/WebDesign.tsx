import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

import imgStrengthCorpLogo from '@/public/images/str-corp-logo.svg';
import imgPhones from '@/public/images/str-corp-phones.svg';

const WebDesign = () => {
    return (
        <section className="lg:mt-32 mt-24 xl:px-12 relative">
            <h2 className="font-bold text-4xl mb-12 text-right">
                I do web design as well!
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Card - Placeholder style from Figma */ }
                <div
                    className="lg:col-span-4 bg-[#a1bc98] border-3 border-black rounded-2xl h-100 shadow-[0_15px_0_rgba(0,0,0,0.2)]">
                    {/* Background character could go here */ }
                </div>

                {/* Strength Corp Banner */ }
                <motion.div
                    whileHover={ { scale: 1.02 } }
                    className="lg:col-span-8 bg-[#f2ecd4] border-3 border-black rounded-2xl
                    overflow-hidden shadow-[0_15px_0_rgba(0,0,0,0.2)] relative flex flex-row items-stretch"
                >
                    {/* Left Side: Content */ }
                    <div className="p-6 lg:p-10 flex-1 shrink flex flex-col justify-center">
                        <Image
                            src={ imgStrengthCorpLogo }
                            alt="Strength Corp"
                            className="w-56 lg:w-72"
                        />
                        <div className="relative mt-4">
                            <h3 className="font-league-spartan font-bold text-5xl lg:text-6xl
                            text-[#272b3a] leading-[0.85] tracking-tighter">
                                ONLINE <br/>
                                COACHING <br/>
                            </h3>

                            <div className="relative inline-block">
                                <h3 className="relative z-10 text-[#fc493e] font-league-spartan
                                font-bold text-5xl lg:text-6xl tracking-wide">
                                    REDEFINED.
                                </h3>
                                <div className="absolute bottom-1 left-0 bg-[#fbd8d8] w-full h-4 lg:h-5 z-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative min-h-75 md:min-h-0 overflow-hidden hidden min-[476px]:block">
                        <Image
                            src={ imgPhones }
                            alt="Mobile App"
                            className="absolute max-[526px]:top-1/2 max-[526px]:-translate-y-1/2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default WebDesign;
