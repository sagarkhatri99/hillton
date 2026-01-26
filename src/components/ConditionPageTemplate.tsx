"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface FAQItem {
    question: string;
    answer: ReactNode;
}

interface ConditionPageProps {
    title: string;
    subtitle: string;
    whatIsSection: {
        title: string;
        content: ReactNode[];
    };
    symptoms: string[];
    rootCauses: {
        title: string;
        content: ReactNode[];
        listItems?: string[]; // Optional if root causes are just list items
    };
    approachSection: {
        title: string;
        intro?: ReactNode;
        therapies: {
            title: string;
            description?: string;
            items?: string[];
            duration?: string;
        }[];
    };
    timeline: {
        title: string;
        steps: {
            title: string;
            items?: string[];
            description?: string;
        }[];
    };
    signsOfProgress: string[];
    faqs: FAQItem[];
    cta: {
        text: string;
        buttonText: string;
        link: string;
    };
}

export default function ConditionPageTemplate({
    title,
    subtitle,
    whatIsSection,
    symptoms,
    rootCauses,
    approachSection,
    timeline,
    signsOfProgress,
    faqs,
    cta,
}: ConditionPageProps) {

    // State for FAQ accordion
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen text-stone-700 bg-stone-50 animate-fade-in font-serif">

            {/* ---------------------------------------------------------------------------
         HERO SECTION
      --------------------------------------------------------------------------- */}
            <section className="bg-primary text-cream-50 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                    <p className="text-xl md:text-2xl opacity-90 font-light max-w-2xl mx-auto">{subtitle}</p>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         WHAT IS SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg md:prose-xl text-stone-600 leading-relaxed mx-auto font-serif">
                        <h2 className="font-sans text-3xl text-primary font-bold mb-8">{whatIsSection.title}</h2>
                        {whatIsSection.content.map((paragraph, index) => (
                            <div key={index} className="mb-6">{paragraph}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SYMPTOMS SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-12">Common Symptoms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {symptoms.map((symptom, index) => (
                            <div key={index} className="card-hover bg-white p-5 rounded-xl border border-stone-100 flex items-start gap-4 shadow-sm hover:shadow-md transition">
                                <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
                                <span className="text-lg text-stone-700">{symptom}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         ROOT CAUSES SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-8">{rootCauses.title}</h2>

                    {rootCauses.content.length > 0 && (
                        <div className="prose prose-lg text-stone-600 mb-8 mx-auto font-serif">
                            {rootCauses.content.map((p, i) => <div key={i} className="mb-4">{p}</div>)}
                        </div>
                    )}

                    {rootCauses.listItems && (
                        <div className="bg-cream-50 p-8 rounded-2xl border border-stone-100">
                            <ul className="space-y-4">
                                {rootCauses.listItems.map((item, index) => (
                                    <li key={index} className="flex gap-3 text-lg text-stone-700">
                                        <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                                        {/* Handle bold text markup if present in string */}
                                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         APPROACH / THERAPIES SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-primary-dark text-cream-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-6">{approachSection.title}</h2>
                    {approachSection.intro && <div className="text-center max-w-3xl mx-auto mb-16 text-lg opacity-90">{approachSection.intro}</div>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {approachSection.therapies.map((therapy, index) => (
                            <div key={index} className="card-hover bg-primary/50 p-8 rounded-2xl border border-primary-light hover:bg-primary/70 transition">
                                <h3 className="font-sans text-2xl font-bold text-cream-50 mb-4">{therapy.title}</h3>
                                {therapy.description && <p className="text-cream-100 mb-4">{therapy.description}</p>}

                                {therapy.items && (
                                    <ul className="space-y-2 mb-6">
                                        {therapy.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-cream-100/90 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-mint mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {therapy.duration && (
                                    <div className="text-xs font-bold uppercase tracking-wider text-mint">
                                        {therapy.duration}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         TIMELINE SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-16">{timeline.title}</h2>

                    <div className="relative border-l-2 border-stone-200 ml-4 md:ml-8 space-y-12 pb-8">
                        {timeline.steps.map((step, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-white"></div>
                                <h3 className="font-sans text-xl font-bold text-stone-800 mb-4">{step.title}</h3>

                                {step.description && <p className="text-stone-600 mb-4">{step.description}</p>}

                                {step.items && (
                                    <ul className="space-y-2">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-stone-600">
                                                <Clock size={16} className="text-secondary mt-1 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SIGNS OF PROGRESS
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-12">How You'll Know It's Working</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {signsOfProgress.map((sign, index) => (
                            <div key={index} className="card-hover flex items-center gap-4 bg-white p-5 rounded-xl border border-stone-100">
                                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                <span className="text-stone-700">{sign}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         FAQ & CTA
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-4 mb-20">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-stone-50 rounded-xl border border-stone-100 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <h3 className="font-bold text-lg text-stone-800 font-sans">{faq.question}</h3>
                                    <ArrowRight
                                        size={20}
                                        className={`text-secondary transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-90' : 'rotate-0'}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <div className="px-6 pb-6 text-stone-600 leading-relaxed font-serif">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-primary-dark rounded-3xl p-10 md:p-16 text-cream-50">
                        <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">{cta.text}</h2>
                        <Link href={cta.link} className="btn-hover bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-sans">
                            {cta.buttonText} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
