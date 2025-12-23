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
    Mail,
    Quote
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Natural Healing Centre | Naturopathy, Ayurveda & Wellness | Hillton",
    description: "Holistic wellness with Naturopathy, Hydrotherapy, Ayurveda & Yoga. Over 100 therapies for arthritis, diabetes, stress, skin health & more.",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-700 animate-fade-in">

            {/* ---------------------------------------------------------------------------
         SECTION 1: HERO
         Goal: Trust + Clarity + Booking CTA
      --------------------------------------------------------------------------- */}
            <section className="relative bg-teal-900 text-cream-50 py-24 md:py-32 lg:py-40 overflow-hidden">
                {/* Abstract Texture/Image Placeholder */}
                <div className="absolute inset-0 bg-primary opacity-20 pattern-grid-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-3/5 lg:w-1/2">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Natural Healing.<br />Complete Wellness.<br />One Center.
                        </h1>
                        <p className="text-lg md:text-xl text-cream-100/90 mb-10 max-w-xl font-light leading-relaxed">
                            Hillton Prakritik Chikitsa Kendra brings together Naturopathy, Hydrotherapy, Ayurveda and Wellness therapies to help you heal naturally, detox deeply and restore balance – in a calm, caring environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/contact" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:cursor-pointer">
                                Book a Consultation <ArrowRight size={18} />
                            </Link>
                            <a href="tel:+919266423944" className="btn-hover border-2 border-cream-50/20 hover:bg-cream-50/10 text-cream-50 px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2">
                                <Phone size={18} /> Call / WhatsApp Us
                            </a>
                        </div>
                        <p className="text-sm text-cream-200/80 font-medium tracking-wide">
                            Personalised treatment plans • Experienced practitioners • 100+ natural therapies
                        </p>
                    </div>
                    {/* Visual Placeholder for Hero Image */}
                    <div className="hidden md:block md:w-2/5 lg:w-1/2 h-full pl-12">
                        <div className="aspect-square rounded-2xl bg-teal-800/30 backdrop-blur-sm border border-teal-700/50 flex items-center justify-center">
                            <span className="text-teal-200/50 font-serif italic text-xl">[Serene Treatment Scene Image]</span>
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
                            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6">About Hillton Prakritik Chikitsa Kendra</h2>
                            <div className="prose prose-stone text-lg leading-relaxed text-stone-600">
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
                                <Link href="/about" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1">
                                    Learn More About Us <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid gap-6">
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-green-100 text-green-700 p-3 rounded-full h-fit"><Leaf size={24} /></div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Prakritik (Natural)</h3>
                                    <p className="text-stone-600">Only nature-based methods and therapies – no harsh interventions.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-blue-100 text-blue-700 p-3 rounded-full h-fit"><Layers size={24} /></div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Sampoorna (Complete)</h3>
                                    <p className="text-stone-600">4 specialized departments under one roof – get everything you need in one place.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex gap-4">
                                <div className="bg-amber-100 text-amber-700 p-3 rounded-full h-fit"><User size={24} /></div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Vyaktigat (Personalised)</h3>
                                    <p className="text-stone-600">Every plan tailored to your body type, lifestyle, constitution and health goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 3: OUR FOUR SERVICE BUCKETS
         Goal: Overview of core offerings
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Our Core Therapies</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Card 1: Naturopathy */}
                        <div className="card-hover bg-cream-50 rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-green-100 text-green-800 p-4 rounded-xl w-fit mb-6"><Leaf size={28} /></div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Naturopathy</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                                Mud therapy, acupuncture, therapeutic massages, diet therapy, sun therapy and more – designed to support the body's natural ability to heal and detox. Simple, gentle and deeply effective.
                            </p>
                            <Link href="/services/naturopathy" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2">
                                Explore Naturopathy <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 2: Hydrotherapy */}
                        <div className="card-hover bg-cream-50 rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-blue-100 text-blue-800 p-4 rounded-xl w-fit mb-6"><Droplets size={28} /></div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Hydrotherapy</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                                Therapeutic baths, packs, leps and hydro-colon cleansing using the healing power of water to improve circulation, relieve pain and support deep cleansing. Ancient wisdom, modern comfort.
                            </p>
                            <Link href="/services/hydrotherapy" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2">
                                Explore Hydrotherapy <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 3: Ayurveda */}
                        <div className="card-hover bg-cream-50 rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-orange-100 text-orange-800 p-4 rounded-xl w-fit mb-6"><Sun size={28} /></div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Ayurveda & Panchakarma</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                                Classical Panchakarma, Abhyanga, Shirodhara, Basti and other Ayurvedic therapies to balance doshas, clear toxins and rejuvenate at a deeper level.
                            </p>
                            <Link href="/services/ayurveda-panchakarma" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2">
                                Explore Ayurveda <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Card 4: Wellness */}
                        <div className="card-hover bg-cream-50 rounded-2xl p-8 transition hover:shadow-lg border border-stone-100 flex flex-col">
                            <div className="bg-purple-100 text-purple-800 p-4 rounded-xl w-fit mb-6"><Brain size={28} /></div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Wellness & Retreat</h3>
                            <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                                Yoga therapy, meditation, sound healing and deep relaxation sessions that calm the mind, reset the nervous system and support emotional wellbeing.
                            </p>
                            <Link href="/services/wellness-retreat" className="text-secondary font-bold hover:text-secondary-light inline-flex items-center gap-2">
                                Explore Wellness <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 4: CONDITIONS WE SUPPORT
         Goal: Show breath of coverage
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6">Who We Commonly Work With</h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-6">
                                People come to Hillton for many reasons. Some are managing long-standing health issues, others are looking to reset, detox or simply slow down and reconnect with themselves.
                            </p>
                            <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                Here are common concerns we support:
                            </p>
                            <Link href="/conditions" className="hidden lg:inline-flex bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium transition items-center gap-2">
                                View All Conditions We Support <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-stone-700 font-medium">
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
                                <Link href="/conditions" className="w-full justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium transition inline-flex items-center gap-2">
                                    View All Conditions We Support <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* Callout Box */}
                            <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-secondary mb-2">Not sure which therapy is right for you?</h3>
                                    <p className="text-stone-700">Book a short discovery call. We'll listen to your concerns and recommend the best starting point.</p>
                                </div>
                                <Link href="/contact" className="hidden md:inline-flex whitespace-nowrap bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition items-center gap-2">
                                    Schedule Free Call <ArrowRight size={16} />
                                </Link>
                                <Link href="/contact" className="md:hidden w-full justify-center whitespace-nowrap bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition inline-flex items-center gap-2">
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
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Why People Choose Hillton</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {/* Card 1 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Building size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Complete Care Under One Roof</h3>
                            <p className="text-stone-600 leading-relaxed">Naturopathy, Ayurveda, Hydrotherapy and Wellness therapies integrated into one personalized plan. No bouncing between specialists.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Stethoscope size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Experienced Practitioners</h3>
                            <p className="text-stone-600 leading-relaxed">A team trained in traditional systems with modern clinical understanding. Caring, patient-centered approach.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sliders size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Personalised Treatment Plans</h3>
                            <p className="text-stone-600 leading-relaxed">We consider your constitution, history, lifestyle and goals – no one-size-fits-all protocols. Your plan is truly yours.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sprout size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Calm, Safe Environment</h3>
                            <p className="text-stone-600 leading-relaxed">Simple, clean, non-intimidating space designed for rest and healing. Privacy in every room.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Evidence-Informed</h3>
                            <p className="text-stone-600 leading-relaxed">Classical principles applied with practical, realistic guidance for today's lifestyle.</p>
                        </div>

                        {/* Card 6 */}
                        <div className="text-center px-4">
                            <div className="bg-cream-100 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <LifeBuoy size={32} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Ongoing Support</h3>
                            <p className="text-stone-600 leading-relaxed">Guidance on diet, movement and habits – not just in-center sessions. We help you sustain changes.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 6: TESTIMONIALS (Stories)
         Goal: Social Proof
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Stories From Our Guests</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed">
                                "After 3 weeks of combined Naturopathy and Ayurveda sessions, I finally started sleeping deeply and waking up refreshed. The team was gentle and explained every step. I feel like my body is actually healing, not just getting 'managed'."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-serif">— Priya M., Delhi</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide">#Sleep #Stress #Wellness</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed">
                                "I had chronic back pain from sitting long hours. Mud packs, hydrotherapy and guided yoga made a real difference within a few sessions. My posture is better and I'm not reaching for painkillers anymore."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-serif">— Rajesh K., Gurgaon</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide">#BackPain #Hydrotherapy #Naturopathy</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                            <Quote className="text-secondary/20 mb-4" size={40} />
                            <p className="text-stone-700 italic mb-6 leading-relaxed">
                                "Coming to Hillton felt like finally finding someone who gets that my skin issues are connected to my digestion and stress levels. The personalised plan addressed all of it. My skin is clearer and I feel more balanced overall."
                            </p>
                            <div className="mt-auto">
                                <p className="font-bold text-primary font-serif">— Anjali S., Noida</p>
                                <p className="text-xs text-stone-400 mt-2 font-medium tracking-wide">#Skin #Holistic #Ayurveda</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/testimonials" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1">
                            Read More Experiences <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 7: BLOG TEASER
         Goal: Education & Authority
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Learn About Natural Healing</h2>
                            <p className="text-stone-600 max-w-2xl leading-relaxed">
                                Short, practical articles and guides to help you understand therapies, conditions and small changes you can start at home.
                            </p>
                        </div>
                        <Link href="/blog" className="hidden md:inline-flex text-secondary font-medium hover:text-secondary-light hover:underline items-center gap-1 whitespace-nowrap">
                            Visit Our Full Blog <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blog Card 1 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="aspect-video bg-stone-100 rounded-xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">[Blog Image]</div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                            </div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">4 min read</p>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2 group-hover:text-primary transition">What Is Naturopathy? A Simple Introduction</h3>
                            <p className="text-stone-600 text-sm mb-4 line-clamp-3">Naturopathy is not about supplements or strict diets. It's about supporting your body's natural healing intelligence...</p>
                            <span className="text-primary font-medium text-sm flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform">Read Article <ArrowRight size={14} /></span>
                        </div>

                        {/* Blog Card 2 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="aspect-video bg-stone-100 rounded-xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">[Blog Image]</div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                            </div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">5 min read</p>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2 group-hover:text-primary transition">Panchakarma Explained Without the Jargon</h3>
                            <p className="text-stone-600 text-sm mb-4 line-clamp-3">Panchakarma sounds complex, but it's essentially a gentle detox process that clears toxins and resets your system...</p>
                            <span className="text-primary font-medium text-sm flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform">Read Article <ArrowRight size={14} /></span>
                        </div>

                        {/* Blog Card 3 */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="aspect-video bg-stone-100 rounded-xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">[Blog Image]</div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                            </div>
                            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">3 min read</p>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2 group-hover:text-primary transition">Sleep Better Naturally: Simple Night-Time Rituals</h3>
                            <p className="text-stone-600 text-sm mb-4 line-clamp-3">You don't need medication to sleep well. Small changes to your evening routine can transform your rest...</p>
                            <span className="text-primary font-medium text-sm flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform">Read Article <ArrowRight size={14} /></span>
                        </div>
                    </div>

                    <div className="mt-8 md:hidden text-center">
                        <Link href="/blog" className="text-secondary font-medium hover:text-secondary-light hover:underline inline-flex items-center gap-1">
                            Visit Our Full Blog <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ---------------------------------------------------------------------------
         SECTION 8: FINAL CTA + CONTACT
         Goal: Conversion
      --------------------------------------------------------------------------- */}
            <section className="bg-cream-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 max-w-5xl mx-auto text-center md:text-left">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
                                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                    Share what you're going through and we'll help you choose the right starting point – whether that's a single relaxing session or a structured program.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link href="/contact" className="btn-hover bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                        Book a Consultation <ArrowRight size={18} />
                                    </Link>
                                    <a href="tel:+919266423944" className="btn-hover border border-secondary/30 hover:bg-secondary/5 text-secondary px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2">
                                        Call / WhatsApp Us
                                    </a>
                                </div>
                            </div>

                            {/* Quick Contact Divider Line (Vertical on desktop, Horizontal on mobile) */}
                            <div className="hidden md:block w-px bg-stone-200 h-48"></div>
                            <div className="md:hidden w-full h-px bg-stone-200"></div>

                            <div className="md:w-1/2 w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-serif text-lg font-bold text-stone-800">Location</h3>
                                        </div>
                                        <p className="text-stone-600 text-sm ml-8">
                                            3, Bharat Yatra Kendra Rd<br />
                                            Near BSF Road<br />
                                            Gurugram, Haryana 122102<br />
                                            India
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <Clock className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-serif text-lg font-bold text-stone-800">Hours</h3>
                                        </div>
                                        <p className="text-stone-600 text-sm ml-8">
                                            Monday – Sunday: 8:00 AM – 8:00 PM<br />
                                            <span className="text-stone-400">Open 7 days a week</span>
                                        </p>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <div className="flex items-start gap-3 mb-2">
                                            <Phone className="text-secondary mt-1 flex-shrink-0" size={20} />
                                            <h3 className="font-serif text-lg font-bold text-stone-800">Contact</h3>
                                        </div>
                                        <div className="ml-8 space-y-1">
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
