import type { Metadata } from "next";
import { Quicksand, League_Spartan } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";

const quickSand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
    variable: "--font-league-spartan",
    subsets: ["latin"],
});

const sugarPeachy = localFont({
    src: "./fonts/Sugarpeachy-Medium.woff2",
    variable: "--font-sugar-peachy",
    display: "swap",
});

export const metadata: Metadata = {
    title: "En Yang • Designer & Doodler",
    description: "The portfolio of En Yang, Product Designer.",

    openGraph: {
        title: "En Yang • Designer & Doodler",
        description: "The portfolio of En Yang, Product Designer.",
        url: "https://paeperpencils-portfolio.vercel.app",
        siteName: "En Yang",
        images: [
            {
                url: "https://paeperpencils-portfolio.vercel.app/images/enyang-logo.png", // must be in /public
                width: 666,
                height: 703,
                alt: "En Yang – Designer & Doodler",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={ `${ quickSand.variable } ${ leagueSpartan.variable } 
            ${ sugarPeachy.variable } min-h-screen antialiased` }>
        <Navbar/>
        <div className="hidden lg:block">
            <CustomCursor/>
        </div>
        { children }
        </body>
        </html>
    );
}
