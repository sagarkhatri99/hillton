import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary-hover text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Top Grid: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl mb-4 text-cream-100">Quick Links</h3>
                        <ul className="space-y-2 text-primary-100/90 text-sm">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                            <li><Link href="/conditions" className="hover:text-white transition">Conditions</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-serif text-xl mb-4 text-cream-100">Our Therapies</h3>
                        <ul className="space-y-2 text-primary-100/90 text-sm">
                            <li><Link href="/services/naturopathy" className="hover:text-white transition">Naturopathy</Link></li>
                            <li><Link href="/services/hydrotherapy" className="hover:text-white transition">Hydrotherapy</Link></li>
                            <li><Link href="/services/ayurveda-panchakarma" className="hover:text-white transition">Ayurveda & Panchakarma</Link></li>
                            <li><Link href="/services/wellness-retreat" className="hover:text-white transition">Wellness & Retreat</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Follow Us */}
                    <div>
                        <h3 className="font-serif text-xl mb-4 text-cream-100">Follow Us</h3>
                        <div className="space-y-4 font-sans pb-4">
                            <a href="https://www.instagram.com/hillton_chikitsa_kendra/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition group text-primary-100/90 text-sm">
                                <Instagram size={24} className="text-[#E4405F] transition-transform group-hover:scale-110" />
                                <span className="group-hover:translate-x-1 transition-transform">@hillton_chikitsa_kendra</span>
                            </a>
                            <a href="https://www.facebook.com/p/Hilton-Parakrtik-Chikitsa-Kendra-61571774392786/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition group text-primary-100/90 text-sm">
                                <Facebook size={24} className="text-[#1877F2] transition-transform group-hover:scale-110" />
                                <span className="group-hover:translate-x-1 transition-transform">Hillton Prakritik Chikitsa Kendra</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Legal & Contact */}
                    <div>
                        <h3 className="font-serif text-xl mb-4 text-cream-100">Visit Us</h3>
                        <div className="text-sm text-primary-100/90 space-y-3">
                            <div className="flex items-start gap-2">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <p>Hillton Prakritik Chikitsa Kendra<br />3, Bharat Yatra Kendra Rd<br />Near BSF Road<br />Gurugram, Haryana 122102</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={18} />
                                <p>+91 9266423944</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={18} />
                                <a href="mailto:info@hilltonprakritikchikitsa.in" className="hover:text-white transition">info@hilltonprakritikchikitsa.in</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary-light/30 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-primary-200/60 font-sans">
                    <p>© 2025 Hillton Prakritik Chikitsa Kendra. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/disclaimer" className="hover:text-white transition">Medical Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
