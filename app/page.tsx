'use client';

import React, { useState } from 'react';
import HeroSection from "../components/HeroSection";
import DoodleGrid from "../components/DoodleGrid";
import Footer from "../components/Footer";
import DoodleModal from "../components/DoodleModal";
import { DOODLES } from "@/constants/doodles";
import Image from "next/image";

import kasso from "@/public/images/kasso.png";
import coffee from "@/public/images/making-coffee.png";
import starbucks from "@/public/images/starbucks.png";
import WebDesign from "../components/WebDesign";

const Page = () => {
    const [selectedDoodleId, setSelectedDoodleId] = useState<number | null>(null);

    const selectedDoodle = DOODLES.find(d => d.id === selectedDoodleId) || null;

    const handleNext = () => {
        if (selectedDoodleId === null) return;
        const currentIndex = DOODLES.findIndex(d => d.id === selectedDoodleId);
        const nextIndex = (currentIndex + 1) % DOODLES.length;
        setSelectedDoodleId(DOODLES[nextIndex].id);
    };

    const handlePrev = () => {
        if (selectedDoodleId === null) return;
        const currentIndex = DOODLES.findIndex(d => d.id === selectedDoodleId);
        const prevIndex = (currentIndex - 1 + DOODLES.length) % DOODLES.length;
        setSelectedDoodleId(DOODLES[prevIndex].id);
    };

    return (
        <div className={ "relative min-h-screen overflow-hidden" }>
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <Image
                    src={ kasso }
                    alt="kasso-skateboard"
                    width={ 350 }
                    height={ 350 }
                    className="absolute top-[10%] right-[-20%] lg:top-[23%] lg:right-[0%] opacity-15 mix-blend-multiply"
                />

                <Image
                    src={ coffee }
                    alt="making-coffee"
                    width={ 500 }
                    height={ 500 }
                    className="absolute bottom-[-75] right-[-25%] lg:bottom-[-85] lg:right-[-2%] opacity-15 mix-blend-multiply"
                />

                <Image
                    src={ starbucks }
                    alt="enjoying-starbucks"
                    width={ 400 }
                    height={ 400 }
                    className="absolute -scale-x-100 top-[45%] left-[-6%] opacity-15 rotate-[-5deg] mix-blend-multiply"
                />
            </div>
            <main>
                <HeroSection/>
                <DoodleGrid onSelectDoodle={ setSelectedDoodleId }/>
                <WebDesign/>
            </main>
            <Footer/>

            <DoodleModal
                isOpen={ !!selectedDoodle }
                onClose={ () => setSelectedDoodleId(null) }
                selectedDoodle={ selectedDoodle }
                allDoodles={ DOODLES }
                onSelect={ setSelectedDoodleId }
                onNext={ handleNext }
                onPrev={ handlePrev }
            />
        </div>
    );
};
export default Page;
