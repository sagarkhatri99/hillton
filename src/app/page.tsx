import Link from "next/link";
import {
    ArrowRight,
    Phone,
    Leaf,
    Layers,
    User,
    Droplets,
    Sun,
    Brain,
    Building,
    Stethoscope,
    Sliders,
    Sprout,
    BookOpen,
    LifeBuoy,
    MapPin,
    Clock,
    Quote
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hillton Prakritik Chikitsa Kendra | Natural Healing in Gurugram",
    description: "Holistic wellness with Naturopathy, Ayurveda, Hydrotherapy & Yoga in Gurugram. Natural healing for chronic conditions.",
    keywords: "naturopathy Gurugram, ayurveda, panchakarma, wellness retreat, natural healing, hydrotherapy, mud therapy",
};

const blogArticles = [
    {
        title: "What Is Naturopathy?",
        excerpt: "Naturopathy is not about supplements or strict diets. It's about supporting your body's natural healing intelligence through elements like mud, water, and sun.",
        readTime: "4 min read",
        category: "Naturopathy",
        image: "/images/blog/naturopathy.jpg" // Placeholder
    },
    {
        title: "Panchakarma Basics",
        excerpt: "Panchakarma sounds complex, but it's essentially a gentle detox process that clears toxins and resets your system using oil and heat therapies.",
        readTime: "5 min read",
        category: "Ayurveda",
        image: "/images/blog/panchakarma.jpg"
    },
    {
        title: "Hydrotherapy for Pain Relief",
        excerpt: "Why water is one of the most powerful tools for pain relief and circulation, and how therapeutic baths and packs can help joint issues.",
        readTime: "3 min read",
        category: "Hydrotherapy",
        image: "/images/blog/hydrotherapy.jpg"
    },
    {
        title: "Yoga for Stress",
        excerpt: "Simple yoga postures and breathing techniques that you can do daily to calm the nervous system and reduce anxiety naturally.",
        readTime: "4 min read",
        category: "Wellness",
        image: "/images/blog/yoga.jpg"
    },
    {
        title: "Mud Therapy Benefits",
        excerpt: "Discover how earth therapy can draw out toxins, cool the body, and improve skin health. A core practice in natural healing.",
        readTime: "3 min read",
        category: "Naturopathy",
        image: "/images/blog/mud.jpg"
    },
    {
        title: "Daily Detox Rituals",
        excerpt: "You don't need a retreat to detox. Small daily habits like tongue scraping and warm water can make a huge difference to your health.",
        readTime: "4 min read",
        category: "Wellness",
        image: "/images/blog/detox.jpg"
    }
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-stone-700 animate-fade-in">

            {/* ---------------------------------------------------------------------------
         SECTION 1: HERO
         Goal: Trust + Clarity + Booking CTA
      --------------------------------------------------------------------------- */}
            <section className="relative bg-primary text-cream-50 py-24 md:py-32 lg:py-40 overflow-hidden">
                {/* Abstract Texture/Image Placeholder */}
                <div className="absolute inset-0 bg-primary-dark opacity-20 pattern-grid-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-3/5 lg:w-1/2">
                        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Natural Healing.<br />Complete Wellness.<br />One Center.
                        </h1>
                        <p className="text-lg md:text-xl text-cream-100/90 mb-10 max-w-xl font-light leading-relaxed font-serif">
                            Hillton Prakritik Chikitsa Kendra brings together Naturopathy, Hydrotherapy, Ayurveda and Wellness therapies to help you heal naturally, detox deeply and restore balance – in a calm, caring environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/contact" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:cursor-pointer font-sans">
                                Book a Consultation <ArrowRight size={18} />
                            </Link>
                            <a href="tel:+919266423944" className="btn-hover border-2 border-cream-50/20 hover:bg-cream-50/10 text-cream-50 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 font-sans">
                                <Phone size={18} /> Call / WhatsApp Us
                            </a>
                        </div>
                        <p className="text-sm text-cream-200/80 font-medium tracking-wide font-sans">
                            Personalised treatment plans • Experienced practitioners • 100+ natural therapies
                        </p>
                    </div>
                    {/* Visual Placeholder for Hero Image */}
                    <div className="hidden md:block md:w-2/5 lg:w-1/2 h-full pl-12">
                        <div className="aspect-square rounded-2xl bg-primary-dark/30 backdrop-blur-sm border border-primary-light/50 flex items-center justify-center">
                            <span className="text-mint-light/50 font-serif italic text-xl">[Serene Treatment Scene Image]</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 2: WHO WE ARE
         Goal: Build credibility + Philosophy + Human connection
      --------------------------------------------------------------------------- */}
            <section className="py-20 md:py-28 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-6">About Hillton Prakritik Chikitsa Kendra</h2>
                            <div className="prose prose-stone text-lg leading-relaxed text-stone-600 font-serif">
                                <p className="mb-6">
                                    Hillton Prakritik Chikitsa Kendra is a dedicated natural healing center offering more than 100 therapies across Naturopathy, Ayurveda, Hydrotherapy and Wellness.
                                </p>
                                <p className="mb-6">
                                    Our focus is simple: understand the root cause of your concern, support your body's own healing intelligence, and guide you gently towards long-term wellbeing – not just quick symptom relief.
                                </p>
                                <p>
                                    Every person who comes to Hillton is different. Your constitution, lifestyle, history and goals matter. That's why we don't apply templates – we listen, assess and design a plan that's uniquely yours.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/about" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1 font-sans">
                                    Learn More About Us <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid gap-6">
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-mint text-primary-dark p-3 rounded-full h-fit"><Leaf size={24} /></div>
                                <div>
                                    <h3 className="font-sans text-xl font-bold text-stone-800 mb-2">Prakritik (Natural)</h3>
                                    <p className="text-stone-600 font-serif">Only nature-based methods and therapies – no harsh interventions.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-calmBlue text-primary-dark p-3 rounded-full h-fit"><Layers size={24} /></div>
                                <div>
                                    <h3 className="font-sans text-xl font-bold text-stone-800 mb-2">Sampoorna (Complete)</h3>
                                    <p className="text-stone-600 font-serif">4 specialized departments under one roof – get everything you need in one place.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-cream-200 text-secondary p-3 rounded-full h-fit"><User size={24} /></div>
                                <div>
                                    <h3 className="font-sans text-xl font-bold text-stone-800 mb-2">Vyaktigat (Personalised)</h3>
                                    <p className="text-stone-600 font-serif">Every plan tailored to your body type, lifestyle, constitution and health goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 2.5: IPD or OPD
         Goal: Clarity on service models
      --------------------------------------------------------------------------- */}
            <section id="ipd-opd" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-6">IPD or OPD: Your Care Choice</h2>
                        <p className="text-stone-600 text-lg leading-relaxed font-serif max-w-2xl mx-auto">
                            We offer flexible care options to suit your schedule and health needs. Whether you need a quick therapy session or a complete immersive reset, we have a plan for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* OPD Card */}
                        <div className="bg-cream-50 rounded-2xl p-8 border border-stone-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-mint/20 text-primary p-4 rounded-full mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-stone-800 mb-4">OPD (Out-Patient Department)</h3>
                            <p className="text-stone-600 mb-8 leading-relaxed font-serif flex-grow">
                                Day visits for therapies, consultations, no overnight stay – ideal for working professionals who want to integrate healing into their daily routine.
                            </p>
                            <Link href="/contact?type=opd" className="btn-hover bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition font-sans w-full md:w-auto">
                                Schedule OPD
                            </Link>
                        </div>

                        {/* IPD Card */}
                        <div className="bg-calmBlue/10 rounded-2xl p-8 border border-calmBlue/20 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                            <div className="bg-calmBlue/30 text-primary-dark p-4 rounded-full mb-6">
                                <Building size={32} />
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-stone-800 mb-4">IPD (In-Patient Department)</h3>
                            <p className="text-stone-600 mb-8 leading-relaxed font-serif flex-grow">
                                Residential stay with full immersion, meals, ongoing monitoring – for deeper detox, reset, and chronic condition management.
                            </p>
                            <Link href="/contact?type=ipd" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full font-medium transition font-sans w-full md:w-auto">
                                Discuss IPD
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="text-stone-500 hover:text-primary font-medium font-sans inline-flex items-center gap-2">
                            Book a free call to choose based on your needs <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 3: OUR CORE THERAPIES
         Goal: Overview of core offerings
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-4">Our Core Therapies</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Card 1: Naturopathy */}
                        <div className="card-hover bg-white rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-mint/20 text-primary p-4 rounded-xl w-fit mb-6"><Leaf size={28} /></div>
                            <h3 className="font-sans text-2xl font-bold text-primary mb-4">Naturopathy</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed font-serif">
                                Mud therapy, acupuncture, massages, diet therapy, sun therapy – designed to support the body's natural ability to heal and detox. Simple, gentle and deeply effective.
                            </p>
                            <Link href="/services/naturopathy" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2 font-sans">
                                Explore Naturopathy <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 2: Ayurveda */}
                        <div className="card-hover bg-white rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-secondary/10 text-secondary p-4 rounded-xl w-fit mb-6"><Sun size={28} /></div>
                            <h3 className="font-sans text-2xl font-bold text-primary mb-4">Ayurveda & Panchakarma</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed font-serif">
                                Panchakarma, Abhyanga, Shirodhara, Basti to balance doshas, clear toxins and rejuvenate at a deeper level.
                            </p>
                            <Link href="/services/ayurveda-panchakarma" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2 font-sans">
                                Explore Ayurveda <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 3: Wellness */}
                        <div className="card-hover bg-white rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-calmBlue/20 text-primary-dark p-4 rounded-xl w-fit mb-6"><Brain size={28} /></div>
                            <h3 className="font-sans text-2xl font-bold text-primary mb-4">Wellness & Retreat</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed font-serif">
                                Yoga, meditation, sound healing, relaxation sessions that calm the mind, reset the nervous system and support emotional wellbeing.
                            </p>
                            <Link href="/services/wellness-retreat" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2 font-sans">
                                Explore Wellness <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 4: Physiotherapy & Hydrotherapy */}
                        <div className="card-hover bg-white rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-calmBlue text-primary-dark p-4 rounded-xl w-fit mb-6"><Droplets size={28} /></div>
                            <h3 className="font-sans text-2xl font-bold text-primary mb-4">Physiotherapy & Hydrotherapy</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed font-serif">
                                Targeted physio with mud packs, therapeutic baths, water-based exercises for joint pain, back issues, mobility – integrated naturally.
                            </p>
                            <Link href="/services/physiotherapy-hydrotherapy" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2 font-sans">
                                Explore Physiotherapy <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 4: CONDITIONS WE SUPPORT
         Goal: Show breath of coverage
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-6">Who We Commonly Work With</h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-serif">
                                People come to Hillton for many reasons. Some are managing long-standing health issues, others are looking to reset, detox or simply slow down and reconnect with themselves.
                            </p>
                            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif">
                                Here are common concerns we support:
                            </p>
                            <Link href="/conditions" className="hidden lg:inline-flex bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium transition items-center gap-2 font-sans">
                                View All Conditions We Support <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="bg-cream-50 rounded-2xl p-8 shadow-sm border border-stone-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-stone-700 font-medium font-serif">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Arthritis & Joint Pain</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Obesity & Weight Gain</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Lifestyle Disorders (High BP, Pre-Diabetes)</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> PCOD/PCOS & Hormonal Issues</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Stress, Anxiety & Sleep Problems</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Migraine & Headaches</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Skin & Hair Concerns</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Gastrointestinal Issues</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Respiratory Health</li>
                                    </ul>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Musculoskeletal & Postural Issues</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Neurological Concerns</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Diabetes (Type 2) Support</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Psychological Wellbeing</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Natural Anti-Aging</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Cardiovascular Support</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Low Energy & Fatigue</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Women's Health Concerns</li>
                                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Post-Treatment Recovery</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 lg:hidden">
                                <Link href="/conditions" className="w-full justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium transition inline-flex items-center gap-2 font-sans">
                                    View All Conditions We Support <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* Callout Box */}
                            <div className="mt-8 bg-mint/10 border border-mint/30 rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="font-sans text-xl font-bold text-primary mb-2">Not sure which therapy is right for you?</h3>
                                    <p className="text-stone-700 font-serif">Book a short discovery call. We'll listen to your concerns and recommend the best starting point.</p>
                                </div>
                                <Link href="/contact" className="hidden md:inline-flex whitespace-nowrap bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition items-center gap-2 font-sans">
                                    Schedule Free Call <ArrowRight size={16} />
                                </Link>
                                <Link href="/contact" className="md:hidden w-full justify-center whitespace-nowrap bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition inline-flex items-center gap-2 font-sans">
                                    Schedule Free Call <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 5: WHY CHOOSE HILLTON
         Goal: Selling points
      --------------------------------------------------------------------------- */}
            <section className="py-20 md:py-28 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-4">Why People Choose Hillton</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {/* Card 1 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <Building size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Complete Care Under One Roof</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">Naturopathy, Ayurveda, Hydrotherapy and Wellness therapies integrated into one personalized plan. No bouncing between specialists.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <Stethoscope size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Experienced Practitioners</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">A team trained in traditional systems with modern clinical understanding. Caring, patient-centered approach.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <Sliders size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Personalised Treatment Plans</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">We consider your constitution, history, lifestyle and goals – no one-size-fits-all protocols. Your plan is truly yours.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <Sprout size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Calm, Safe Environment</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">Simple, clean, non-intimidating space designed for rest and healing. Privacy in every room.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Evidence-Informed</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">Classical principles applied with practical, realistic guidance for today's lifestyle.</p>
                        </div>

                        {/* Card 6 */}
                        <div className="text-center px-4">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                                <LifeBuoy size={32} />
                            </div>
                            <h3 className="font-sans text-xl font-bold text-stone-800 mb-3">Ongoing Support</h3>
                            <p className="text-stone-600 leading-relaxed font-serif">Guidance on diet, movement and habits – not just in-center sessions. We help you sustain changes.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 6: TESTIMONIALS (Stories)
         Goal: Social Proof
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-4">Stories From Our Guests</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-cream-50 p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed font-serif">
                                "After 3 weeks of combined Naturopathy and Ayurveda sessions, I finally started sleeping deeply and waking up refreshed. The team was gentle and explained every step. I feel like my body is actually healing, not just getting 'managed'."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-sans">— Priya M., Delhi</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide font-sans">#Sleep #Stress #Wellness</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-cream-50 p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed font-serif">
                                "I had chronic back pain from sitting long hours. Mud packs, hydrotherapy and guided yoga made a real difference within a few sessions. My posture is better and I'm not reaching for painkillers anymore."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-sans">— Rajesh K., Gurgaon</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide font-sans">#BackPain #Hydrotherapy #Naturopathy</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-cream-50 p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed font-serif">
                                "Coming to Hillton felt like finally finding someone who gets that my skin issues are connected to my digestion and stress levels. The personalised plan addressed all of it. My skin is clearer and I feel more balanced overall."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-sans">— Anjali S., Noida</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide font-sans">#Skin #Holistic #Ayurveda</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/testimonials" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1 font-sans">
                            Read More Experiences <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 7: BLOG TEASER
         Goal: Education & Authority
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-4">Learn About Natural Healing</h2>
                            <p className="text-stone-600 max-w-2xl leading-relaxed font-serif">
                                Short, practical articles and guides to help you understand therapies, conditions and small changes you can start at home.
                            </p>
                        </div>
                        <Link href="/blog" className="hidden md:inline-flex text-secondary font-medium hover:text-secondary-light hover:underline items-center gap-1 whitespace-nowrap font-sans">
                            Visit Full Blog <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Blog Scrollable Grid */}
                    <div className="flex overflow-x-auto gap-8 pb-8 snap-x">
                        {blogArticles.map((article, index) => (
                             <div key={index} className="min-w-[300px] md:min-w-[350px] flex flex-col group cursor-pointer snap-start">
                                <div className="aspect-video bg-stone-200 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm font-sans">[Image: {article.title}]</div>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                                </div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs font-bold text-secondary uppercase tracking-wider font-sans">{article.category}</p>
                                    <p className="text-xs text-stone-400 font-medium font-sans">{article.readTime}</p>
                                </div>
                                <h3 className="font-sans text-xl font-bold text-stone-800 mb-2 group-hover:text-primary transition">{article.title}</h3>
                                <p className="text-stone-600 text-sm mb-4 line-clamp-3 font-serif flex-grow">{article.excerpt}</p>
                                <span className="text-primary font-medium text-sm flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform font-sans">Read Article <ArrowRight size={14} /></span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:hidden text-center">
                        <Link href="/blog" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1 font-sans">
                            Visit Full Blog <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 8: FINAL CTA + CONTACT
         Goal: Conversion
      --------------------------------------------------------------------------- */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-cream-100 rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 max-w-5xl mx-auto text-center md:text-left">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="font-sans text-3xl md:text-4xl text-primary font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
                                <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif">
                                    Share what you're going through and we'll help you choose the right starting point – whether that's a single relaxing session or a structured program.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href="/contact" className="btn-hover bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-sans">
                                        Book a Consultation <ArrowRight size={18} />
                                    </Link>
                                    <a href="tel:+919266423944" className="btn-hover border border-secondary/30 hover:bg-secondary/5 text-secondary px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 font-sans">
                                        Call / WhatsApp Us
                                    </a>
                                </div>
                            </div>

                            {/* Quick Contact Divider Line (Vertical on desktop, Horizontal on mobile) */}
                            <div className="hidden md:block w-px bg-stone-200 h-48"></div>
                            <div className="md:hidden w-full h-px bg-stone-200"></div>

                            <div className="md:w-1/2 w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left font-sans">
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-sans text-lg font-bold text-stone-800">Location</h3>
                                        </div>
                                        <p className="text-stone-600 text-sm ml-8 font-serif">
                                            3, Bharat Yatra Kendra Rd<br />
                                            Near BSF Road<br />
                                            Gurugram, Haryana 122102<br />
                                            India
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <Clock className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-sans text-lg font-bold text-stone-800">Hours</h3>
                                        </div>
                                        <p className="text-stone-600 text-sm ml-8 font-serif">
                                            Monday – Sunday: 8:00 AM – 8:00 PM<br />
                                            <span className="text-stone-400">Open 7 days a week</span>
                                        </p>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <div className="flex items-start gap-3 mb-2">
                                            <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-sans text-lg font-bold text-stone-800">Contact</h3>
                                        </div>
                                        <div className="ml-8 space-y-1 font-serif">
                                            <p className="text-stone-600 text-sm">☎️ +91 9266423944</p>
                                            <p className="text-stone-600 text-sm">💬 WhatsApp: +91 9266423944</p>
                                            <a href="mailto:info@hilltonprakritikchikitsa.in" className="text-stone-600 text-sm hover:text-primary">📧 info@hilltonprakritikchikitsa.in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
