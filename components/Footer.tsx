'use client';

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "CV", href: "#" },
];

const Footer = () => {
    return (
        <footer
            className="max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col md:flex-row justify-between items-start gap-12 text-[#2e3e10]">

            {/* Copyright */ }
            <div className="flex font-bold items-center gap-2">
                <span className="text-4xl">©</span>
                <p className="font-quicksand font-bold text-xl">
                    { new Date().getFullYear() } En Yang • Singapore
                </p>
            </div>

            {/* Socials */ }
            <div className="flex flex-col gap-8">
                <h3 className="text-4xl">Stalk me!</h3>

                <ul className="font-quicksand font-bold text-xl space-y-4 list-none">
                    { SOCIAL_LINKS.map((link) => (
                        <li key={ link.label } className={ "flex items-center gap-2" }>
                            <FaInstagram className={ "h-6 w-6" }/>
                            <Link
                                href={ link.href }
                                className="hover:opacity-60 transition-opacity"
                            >
                                { link.label }
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </footer>
    );
};

export default Footer;