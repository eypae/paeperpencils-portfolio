'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

type navItem = {
    label: string;
    href: string;
}

const navItems: navItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Doodles", href: "/doodles" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className={ "fixed top-0 left-0 right-0 z-50 bg-[#d2dcb6]/90 backdrop-blur-sm border-b-2 border-black" }>
            <div className={ "mx-auto flex h-20 max-w-6xl items-center justify-center gap-12 px-6" }>
                { navItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link key={ label } href={ href }
                              className={ "group relative font-quicksand text-[21px] font-bold " }>
                            { label }
                            {/* Active underline */ }
                            { isActive && (<span
                                className={ "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-black" }/>) }
                            {/* Hover underline */ }
                            <span
                                className={ "absolute -bottom-1 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-[#2e3e10] transition-transform duration-300 group-hover:scale-x-100" }/>
                        </Link>
                    );
                }) }
            </div>
        </nav>
    );
};
export default Navbar;
