
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { ReactNode } from 'react';

interface FAQItem {
    question: string;
    answer: ReactNode;
}

interface TherapyGroup {
    title: string;
    description: string;
    items?: string[] | { name: string; description: string }[];
    duration?: string;
}

interface ServicePageProps {
    title: string;
    subtitle: string;
    introText: ReactNode[]; // Array of nodes to support Links
    keyTherapies: TherapyGroup[];
    bestFor: string[];
    timelineSteps: { title: string; duration?: string; description: string }[];
    timelineNote?: string;
    faqs: FAQItem[];
    ctaText: string;
    ctaButtonText: string;
    ctaLink: string;
}

export default function ServicePageTemplate({
    title,
    subtitle,
    introText,
    keyTherapies,
    bestFor,
    timelineSteps,
    timelineNote,
    faqs,
    ctaText,
    ctaButtonText,
    ctaLink,
}: ServicePageProps) {
    return (
        <div className="flex flex-col min-h-screen text-stone-700 animate-fade-in font-serif">

            {/* ---------------------------------------------------------------------------
         HERO SECTION
      --------------------------------------------------------------------------- */}
            <section className="bg-primary text-cream-50 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                    <p className="text-xl md:text-2xl opacity-90 font-light font-sans">{subtitle}</p>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         WHAT IS SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg md:prose-xl text-stone-600 leading-relaxed mx-auto font-serif">
                        <h2 className="font-sans text-3xl text-primary font-bold mb-8">What Is {title}?</h2>
                        {introText.map((paragraph, index) => (
                            <div key={index} className="mb-6">{paragraph}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         KEY THERAPIES SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-16">Key Therapies</h2>

                    <div className="space-y-12">
                        {keyTherapies.map((group, index) => (
                            <div key={index} className="card-hover bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                <h3 className="font-sans text-2xl font-bold text-stone-800 mb-4">{group.title}</h3>
                                <p className="text-stone-600 mb-6 text-lg font-serif">{group.description}</p>

                                {group.items && (
                                    <div className="bg-stone-50 p-6 rounded-xl mb-6">
                                        <ul className="space-y-3">
                                            {group.items.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-stone-700 font-serif">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></span>
                                                    {typeof item === 'string' ? item : (
                                                        <span><strong>{item.name}:</strong> {item.description}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {group.duration && (
                                    <div className="flex items-center gap-2 text-sm text-stone-500 font-medium bg-secondary/5 w-fit px-4 py-2 rounded-lg font-sans">
                                        <Clock size={16} />
                                        <span>Typical Session: {group.duration}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         BEST FOR SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-primary-dark text-cream-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{title} May Help If You Are Experiencing:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bestFor.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-primary/50 p-6 rounded-xl border border-primary-light">
                                <CheckCircle className="text-mint flex-shrink-0" size={24} />
                                <span className="text-lg font-sans">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         WHAT TO EXPECT (TIMELINE)
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-16">What to Expect</h2>

                    <div className="relative border-l-2 border-stone-200 ml-4 md:ml-8 space-y-12 pb-8">
                        {timelineSteps.map((step, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-white"></div>
                                <h3 className="font-sans text-xl font-bold text-stone-800 mb-1">{step.title}</h3>
                                {step.duration && <span className="text-sm font-bold text-secondary uppercase tracking-wider mb-2 block font-sans">{step.duration}</span>}
                                <p className="text-stone-600 leading-relaxed font-serif">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {timelineNote && (
                        <div className="mt-8 bg-stone-50 p-6 rounded-xl border border-stone-100 text-center text-stone-500 italic font-serif">
                            {timelineNote}
                        </div>
                    )}
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         FAQ SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="card-hover bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg text-stone-800 mb-3 font-sans">{faq.question}</h3>
                                <div className="text-stone-600 leading-relaxed font-serif">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         CTA SECTION
      --------------------------------------------------------------------------- */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-sans text-3xl md:text-4xl text-stone-800 font-bold mb-8">{ctaText}</h2>
                    <Link href={ctaLink} className="btn-hover bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-sans">
                        {ctaButtonText} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
