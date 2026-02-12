'use client';

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import imgFrogChar from "@/public/images/enyang-logo.png";
import { Doodle } from "@/constants/doodles";
import Link from "next/link";

interface DoodleModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDoodle: Doodle | null;
    allDoodles: Doodle[];
    onSelect: (id: number) => void;
    onNext: () => void;
    onPrev: () => void;
}

const DoodleModal = ({ isOpen, onClose, selectedDoodle, allDoodles, onSelect, onNext, onPrev, }: DoodleModalProps) => {
    /* prevents background scrolling */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!selectedDoodle) return null;

    const currentIndex = allDoodles.findIndex(d => d.id === selectedDoodle.id);

    return (
        <AnimatePresence>
            { isOpen && (
                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                    className={ "fixed inset-0 z-50 flex items-center " +
                        "justify-center p-4 lg:p-8 bg-black/75 backdrop-blur-md" }
                    onClick={ onClose }
                >
                    {/* Close Button */}
                    <button onClick={ (e) => {
                        e.stopPropagation();
                        onClose();
                    } } className="fixed top-3 right-3 lg:top-6 lg:right-6 z-[60] rounded-full bg-white/10 p-2
                    text-white transition-transform hover:scale-110 hover:bg-white/20 cursor-pointer"
                            aria-label="Close modal">
                        <X size={ 24 } strokeWidth={ 2 } />
                    </button>

                    {/* Navigation - Prev (Only visible on Desktop) */}
                    <button onClick={ (event) => {
                        event.stopPropagation();
                        onPrev();
                    } } className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 p-2
                    text-white/50 hover:text-white transition-colors z-[60]">
                        <ChevronLeft size={ 48 }/>
                    </button>

                    {/* Navigation - Next (Only visible on Desktop) */}
                    <button onClick={ (event) => {
                        event.stopPropagation();
                        onNext();
                    } } className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 p-2
                    text-white/50 hover:text-white transition-colors z-[60]">
                        <ChevronRight size={ 48 }/>
                    </button>

                    {/* Modal Container */}
                    <motion.div
                        initial={ { scale: 0.95, opacity: 0 } }
                        animate={ { scale: 1, opacity: 1 } }
                        exit={ { scale: 0.95, opacity: 0 } }
                        // CHANGE: Moved side-by-side logic to 'lg'. Added w-fit for horizontal mode.
                        className={ "bg-white w-full max-w-[500px] lg:max-w-[95vw] lg:w-fit max-h-[90vh] " +
                            "flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden shadow-2xl relative rounded-lg" }
                        onClick={ (event) => event.stopPropagation() }>

                        {/* Left Side: Image Wrapper */}
                        <div className={ "relative bg-[#fafafa] flex items-center justify-center group/img " +
                            "w-full lg:w-fit lg:max-w-none flex-none overflow-hidden" }>

                            <Image
                                src={ selectedDoodle.src }
                                alt={ selectedDoodle.label }
                                width={ 1000 }
                                height={ 1000 }
                                priority
                                // CHANGE: Heights adjusted to ensure image dictates width on desktop
                                className="max-h-[50vh] lg:max-h-[90vh] w-auto h-auto object-contain block"
                            />

                            {/* Mobile/Tablet Nav Buttons (Inside Image) */}
                            <button onClick={ (event) => {
                                event.stopPropagation();
                                onPrev();
                            } } className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black/50
                            hover:text-black transition-all rounded-full p-1.5 shadow-md lg:opacity-0 lg:group-hover/img:opacity-100">
                                <ChevronLeft size={ 20 }/>
                            </button>
                            <button onClick={ (event) => {
                                event.stopPropagation();
                                onNext();
                            } } className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black/50
                            hover:text-black transition-all rounded-full p-1.5 shadow-md lg:opacity-0 lg:group-hover/img:opacity-100">
                                <ChevronRight size={ 20 }/>
                            </button>

                            {/* Pagination Dots */}
                            <div className={ "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20" }>
                                { allDoodles.map((doodle, index) => (
                                    <button key={ doodle.id } onClick={ (event) => {
                                        event.stopPropagation();
                                        onSelect(doodle.id);
                                    } } className={ `w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                        index === currentIndex ? "bg-black/60 scale-125" : "bg-black/20 hover:bg-black/40"
                                    }` } aria-label={ `Go to doodle ${ index + 1 }` }/>
                                )) }
                            </div>
                        </div>

                        {/* Right Side: Info Section */}
                        <div className={ "w-full lg:w-[350px] xl:w-[400px] flex flex-col " +
                            "bg-white border-l border-gray-100 shrink-0 min-h-[200px]" }>
                            {/* Header */}
                            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border-2 border-pink-500 p-0.5 shrink-0">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-50 flex
                                        items-center justify-center border border-gray-100">
                                        <Image src={ imgFrogChar } alt="Avatar"
                                               className="w-full h-full object-contain -scale-x-100"/>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold font-league-spartan text-black text-[16px]">paeperpencils</span>
                                        <Link href={ "https://www.instagram.com/paeperpencils/" }
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-blue-500 text-xs font-bold cursor-pointer">Follow</Link>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">Original Artwork</span>
                                </div>
                            </div>

                            {/* Content / Caption */}
                            <div className="flex-1 p-4 pr-6 overflow-y-auto scrollbar-hide">
                                <div className="flex gap-3 items-start mb-4">
                                    <div className="border-2 border-pink-500 p-1 w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-50">
                                        <Image src={ imgFrogChar } alt="Avatar"
                                               className="w-full h-full object-contain -scale-x-100"/>
                                    </div>
                                    <div className="text-[14px] leading-snug">
                                        <span className="font-semibold mr-2 text-black font-league-spartan text-[16px]">paeperpencils</span>
                                        <span className="font-['Quicksand'] text-gray-800 font-normal">
                                            { selectedDoodle.caption }
                                        </span>
                                        <div className="mt-4 flex flex-wrap gap-x-1 text-blue-900">
                                            { selectedDoodle.tags.map((tag) => (
                                                <span key={ tag }
                                                      className="hover:underline cursor-pointer">{ tag }</span>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Links */}
                            <Link href={ selectedDoodle.post_link } target="_blank" rel="noopener noreferrer"
                                  className="p-4 border-t border-gray-100 flex items-center justify-between
                            group/footer cursor-pointer hover:bg-gray-50 transition-colors mt-auto">
                                <span className="text-[16px] font-league-spartan font-medium text-gray-800">Go to post</span>
                                <ExternalLink size={ 18 } className="text-gray-400 group-hover/footer:text-gray-900 transition-colors"/>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    );
};

export default DoodleModal;