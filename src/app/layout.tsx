import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-serif',
    display: 'swap',
});

const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ["latin"],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Hillton Prakritik Chikitsa Kendra | Natural Healing Center",
    description: "Experience holistic wellness with Naturopathy, Ayurveda, and Hydrotherapy at Hillton Prakritik Chikitsa Kendra.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <body className="font-sans antialiased text-stone-800 bg-cream-50 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
