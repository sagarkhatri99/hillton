import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-sans',
    display: 'swap',
});

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-serif',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Hillton Prakritik Chikitsa Kendra | Natural Healing in Gurugram",
    description: "Holistic wellness with Naturopathy, Ayurveda, Hydrotherapy & Yoga in Gurugram. Natural healing for chronic conditions.",
    keywords: "naturopathy Gurugram, ayurveda, panchakarma, wellness retreat, natural healing, hydrotherapy, mud therapy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
            <body className="font-serif antialiased text-stone-800 bg-cream-50 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
