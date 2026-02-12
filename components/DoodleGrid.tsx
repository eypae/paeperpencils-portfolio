'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { DOODLES } from "@/constants/doodles";

interface DoodleGridProps {
    onSelectDoodle: (id: number) => void;
}

const DoodleGrid = ({ onSelectDoodle }: DoodleGridProps) => {
    return (
        <section id="doodles" className="lg:mt-39 xl:px-12 relative">
            <h2 className="font-quicksand font-bold text-4xl text-[#2e3e10] mb-6">
                I doodle. A lot.
            </h2>

            {/* Masonry via CSS Columns */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {DOODLES.map((doodle, index) => (
                    <motion.div
                        key={doodle.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="group relative break-inside-avoid cursor-pointer"
                        onClick={() => onSelectDoodle(doodle.id)}
                        data-clickable
                    >
                        {/* Card Container */}
                        <div
                            className="
                                relative rounded-[10px] overflow-hidden
                                border-4 border-black
                                shadow-[0_12px_0_rgba(0,0,0,0.15)]
                                transition-all duration-300
                                group-hover:-translate-y-2
                                group-hover:shadow-[0_15px_0_rgba(0,0,0,0.2)]
                            "
                        >
                            {/* Image Section */}
                            <div className="relative w-full">
                                <Image
                                    src={doodle.src}
                                    alt={doodle.label}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto block"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-linear-to-b
                                        from-[rgba(0,0,0,0.08)]
                                        to-[rgba(0,0,0,0.2)]
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity duration-300
                                        pointer-events-none
                                    "
                                />
                            </div>

                            {/* Sliding Label */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <p
                                    className={`
                                        absolute left-[4.65%] bottom-0
                                        transform translate-y-full
                                        group-hover:translate-y-[-10%]
                                        transition-transform duration-300
                                        font-sugar-peachy leading-none text-white
                                        ${
                                        doodle.label === "Devastation of Baal"
                                            ? "text-[48px]"
                                            : "text-[56px]"
                                    }
                                    `}
                                >
                                    {doodle.label}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DoodleGrid;
