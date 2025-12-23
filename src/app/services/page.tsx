
import Link from 'next/link';
import { ArrowRight, Leaf, Droplets, Sun, Brain } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Natural Therapies | Naturopathy, Ayurveda, Hydrotherapy & Wellness | Hillton",
    description: "Explore our complete range of natural therapies: Naturopathy, Hydrotherapy, Ayurveda & Panchakarma, and Wellness retreats.",
};

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-700 bg-stone-50 animate-fade-in">

            {/* ---------------------------------------------------------------------------
         SECTION 1: PAGE INTRO
      --------------------------------------------------------------------------- */}
            <section className="bg-teal-900 text-cream-50 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Our Services</h1>
                    <p className="text-xl opacity-90 leading-relaxed mb-6">
                        At Hillton, we offer more than 100 therapies across four integrated systems of natural healing. Whether you're looking for relief from a specific condition or a complete detox and reset, we have the right approach for you.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        Each therapy is chosen based on your unique constitution, concerns and goals – never applied as a one-size-fits-all template.
                    </p>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 2: SERVICE CARDS
      --------------------------------------------------------------------------- */}
            <section className="py-20 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card 1: Naturopathy */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-md border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                                    <Leaf size={32} />
                                </div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Naturopathy</h2>
                            <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                Mud therapy, acupuncture, therapeutic massages, diet therapy, sun therapy and more – designed to support the body's natural ability to heal and detox. Simple, gentle and deeply effective.
                            </p>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Best For</p>
                                <p className="text-stone-600 font-medium">Low energy, digestive issues, joint pain, skin concerns, stress relief.</p>
                            </div>
                            <Link href="/services/naturopathy" className="w-full text-center bg-stone-100 hover:bg-primary hover:text-white text-stone-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Card 2: Hydrotherapy */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-md border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-blue-100 text-blue-700 p-4 rounded-xl">
                                    <Droplets size={32} />
                                </div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Hydrotherapy</h2>
                            <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                Therapeutic baths, packs, leps and hydro-colon cleansing using the healing power of water to improve circulation, relieve pain and support deep cleansing. Ancient wisdom, modern comfort.
                            </p>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Best For</p>
                                <p className="text-stone-600 font-medium">Muscle tension, poor circulation, detoxification, post-illness recovery, joint and muscle pain.</p>
                            </div>
                            <Link href="/services/hydrotherapy" className="w-full text-center bg-stone-100 hover:bg-primary hover:text-white text-stone-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Card 3: Ayurveda */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-md border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-orange-100 text-orange-700 p-4 rounded-xl">
                                    <Sun size={32} />
                                </div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Ayurveda & Panchakarma</h2>
                            <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                Classical Panchakarma, Abhyanga, Shirodhara, Basti and other Ayurvedic therapies to balance doshas, clear toxins and rejuvenate at a deeper level. Holistic restoration.
                            </p>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Best For</p>
                                <p className="text-stone-600 font-medium">Chronic conditions, deep detox, hormonal imbalance, immunity boost, long-term wellness.</p>
                            </div>
                            <Link href="/services/ayurveda-panchakarma" className="w-full text-center bg-stone-100 hover:bg-primary hover:text-white text-stone-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Card 4: Wellness */}
                        <div className="card-hover bg-white rounded-2xl p-8 shadow-md border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-purple-100 text-purple-700 p-4 rounded-xl">
                                    <Brain size={32} />
                                </div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Wellness & Retreat</h2>
                            <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                Yoga therapy, meditation, sound healing and deep relaxation sessions that calm the mind, reset the nervous system and support emotional wellbeing.
                            </p>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Best For</p>
                                <p className="text-stone-600 font-medium">Stress management, sleep issues, mental fatigue, emotional balance, prevention and maintenance.</p>
                            </div>
                            <Link href="/services/wellness-retreat" className="w-full text-center bg-stone-100 hover:bg-primary hover:text-white text-stone-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>

                    <div className="text-center mt-16">
                        <h3 className="text-2xl font-serif text-stone-800 mb-6">Ready to explore?</h3>
                        <Link href="/contact" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-10 py-4 rounded-full font-medium transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                            Book a Consultation <ArrowRight size={18} />
                        </Link>
                        <p className="mt-4 text-stone-500">to discuss which therapies suit you best.</p>
                    </div>

                </div>
            </section>

        </div>
    );
}
