"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans text-primary font-bold tracking-tight"
          >
            <span className="sm:hidden text-2xl">Hillton</span>
            <span className="hidden sm:inline text-lg md:text-xl lg:text-2xl leading-none">
              Hillton Prakritik Chikitsa Kendra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-medium text-stone-600">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition py-4">
                Therapies <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-stone-100">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  All Therapies
                </Link>
                <Link
                  href="/services/naturopathy"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Naturopathy
                </Link>
                <Link
                  href="/services/ayurveda-panchakarma"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Ayurveda & Panchakarma
                </Link>
                <Link
                  href="/services/wellness-retreat"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Wellness & Retreat
                </Link>
                <Link
                  href="/services/physiotherapy-hydrotherapy"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Physiotherapy & Hydrotherapy
                </Link>
              </div>
            </div>

            {/* Conditions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition py-4">
                Conditions <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-stone-100">
                <Link
                  href="/conditions"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  All Conditions
                </Link>
                <Link
                  href="/conditions/arthritis-joint-pain"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Arthritis & Pain
                </Link>
                <Link
                  href="/conditions/obesity-weight-gain"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Weight Management
                </Link>
                <Link
                  href="/conditions/lifestyle-disorders"
                  className="block px-4 py-2 hover:bg-cream-100 text-stone-700"
                >
                  Lifestyle Disorders
                </Link>
                {/* Add more key conditions here or link to hub */}
              </div>
            </div>

            <Link href="/#ipd-opd" className="hover:text-primary transition">
              IPD/OPD
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919266423944"
              className="flex items-center  gap-1 ml-2 text-primary font-medium text-sm whitespace-nowrap"
            >
              <Phone size={14} />
              <span className="hidden xl:inline whitespace-nowrap">
                +91 9266423944
              </span>
            </a>

            <Link
              href="/contact"
              className="btn-hover bg-primary hover:bg-primary-hover text-center text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-md hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-stone-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 absolute w-full h-[calc(100vh-80px)] overflow-y-auto mobile-menu-enter">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link
              href="/"
              className="block text-lg font-medium text-stone-800 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-stone-800 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-stone-800 mb-2 hover:text-primary transition"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Therapies{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`pl-4 space-y-3 border-l-2 border-stone-100 ml-1 overflow-hidden transition-[max-height] duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"}`}
              >
                <Link
                  href="/services"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  All Therapies
                </Link>
                <Link
                  href="/services/naturopathy"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Naturopathy
                </Link>
                <Link
                  href="/services/ayurveda-panchakarma"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Ayurveda & Panchakarma
                </Link>
                <Link
                  href="/services/wellness-retreat"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Wellness & Retreat
                </Link>
                <Link
                  href="/services/physiotherapy-hydrotherapy"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Physiotherapy & Hydrotherapy
                </Link>
              </div>
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium text-stone-800 mb-2 hover:text-primary transition"
                onClick={() => setConditionsOpen(!conditionsOpen)}
              >
                Conditions{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${conditionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`pl-4 space-y-3 border-l-2 border-stone-100 ml-1 overflow-hidden transition-[max-height] duration-300 ${conditionsOpen ? "max-h-96" : "max-h-0"}`}
              >
                <Link
                  href="/conditions"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  All Conditions
                </Link>
                <Link
                  href="/conditions/arthritis-joint-pain"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Arthritis
                </Link>
                <Link
                  href="/conditions/obesity-weight-gain"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Weight Loss
                </Link>
                <Link
                  href="/conditions/lifestyle-disorders"
                  className="block text-stone-600 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Lifestyle Disorders
                </Link>
              </div>
            </div>

            <Link
              href="/#ipd-opd"
              className="block text-lg font-medium text-stone-800 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              IPD/OPD
            </Link>
            <Link
              href="/blog"
              className="block text-lg font-medium text-stone-800 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-stone-800 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-6 border-t border-stone-100">
              <Link
                href="/contact"
                className="btn-hover block w-full text-center bg-primary text-white py-3 rounded-lg font-medium mb-4"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919266423944"
                className="flex items-center justify-center gap-2 text-primary font-medium hover:text-primary-hover"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
