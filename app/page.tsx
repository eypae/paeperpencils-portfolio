import React from 'react';
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import DoodleGrid from "../components/DoodleGrid";

const Page = () => {
    return (
        <main>
            <Navbar/>
            <HeroSection/>
            <DoodleGrid/>
        </main>

    );
};
export default Page;
