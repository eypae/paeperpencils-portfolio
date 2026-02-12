'use client';

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/paeperpencils/", icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pae-en-yang/", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/eypae", icon: FaGithub },
];

const Footer = () => {
    return (
        <footer
            className="xl:max-w-6xl lg:max-w-4xl mx-auto lg:px-6 px-[100] pt-20 pb-32 flex flex-col
            md:flex-row justify-between items-start gap-12 text-[#2e3e10]">

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
                        <li key={ link.label }
                            className={ "hover:opacity-60 transition-opacity flex items-center gap-2" }>

                            <Link
                                href={ link.href }
                                target="_blank"
                                rel="noopener noreferrer"
                                className={"flex items-center gap-2"}
                            >
                                <link.icon className={ "h-6 w-6" }/>
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