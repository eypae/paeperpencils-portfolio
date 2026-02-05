import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

const quickSand = Quicksand({
    variable: "--font-quicksand",
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
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={ `${ quickSand.variable } ${ sugarPeachy.variable } min-h-screen antialiased` }
        >
        <CustomCursor/>
        { children }
        </body>
        </html>
    );
}
