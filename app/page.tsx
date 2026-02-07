import React from 'react';
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import DoodleGrid from "../components/DoodleGrid";
import Footer from "../components/Footer";
import Image from "next/image";

import kasso from "@/public/images/kasso.png";
import coffee from "@/public/images/making-coffee.png";
import starbucks from "@/public/images/starbucks.png";

const Page = () => {
    return (
        <div className={ "relative text-[#2e3e10] min-h-screen overflow-x-hidden overflow-y-hidden" }>
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
            <Navbar/>
            <main>
                <HeroSection/>
                <DoodleGrid/>
            </main>
            <Footer/>
        </div>
    );
};
export default Page;
