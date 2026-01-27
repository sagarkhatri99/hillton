
import Link from 'next/link';
import { ArrowRight, Leaf, Layers, User, CheckCircle, Clock, Stethoscope, ClipboardCheck, HeartHandshake } from 'lucide-react';
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Hillton Prakritik Chikitsa Kendra | Our Story & Approach",
    description: "Learn about Hillton's holistic philosophy, experienced practitioners, and personalized approach to natural healing.",
};

export default function About() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-700 animate-fade-in">

            {/* ---------------------------------------------------------------------------
         SECTION 1: PAGE INTRO
         Goal: Brand Story and Vision
      --------------------------------------------------------------------------- */}
            <section className="bg-cream-50 pt-16 pb-20 md:pt-24 md:pb-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">Our Story</h1>
                        <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                              src="/images/new/about-reception.png"
                              alt="Reception at Hillton Prakritik Chikitsa Kendra"
                              fill
                              sizes="100vw"
                              className="object-cover"
                            />
                        </div>
                        <div className="prose prose-lg md:prose-xl mx-auto text-stone-600 leading-relaxed">
                            <p className="mb-6">
                                Hillton Prakritik Chikitsa Kendra was born from a simple observation: most people are tired of quick fixes and want deeper, more natural healing.
                            </p>
                            <p className="mb-6">
                                We created Hillton as a quiet, grounded space where traditional systems like Naturopathy and Ayurveda can be practiced calmly, with time to listen, understand and guide each person properly.
                            </p>
                            <p>
                                What started as a vision to bridge ancient wisdom with modern wellness has become a trusted center where hundreds of people have found relief, restored balance and reconnected with their body's natural healing intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 2: OUR HEALING PHILOSOPHY
         Goal: Define Core Values
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Our Healing Philosophy</h2>
                        <p className="text-lg text-stone-600">At Hillton, we follow three simple principles that guide every consultation, every treatment plan and every interaction with our guests.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Principle 1 */}
                        <div className="bg-cream-50 p-8 rounded-2xl border border-stone-100">
                            <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                                <Leaf size={28} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Prakritik – Natural</h3>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                We work with the body's own intelligence using natural therapies, whole foods, rest and gentle movement – not harsh interventions.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                Every therapy we offer uses methods that align with nature: mud from the earth, water from natural sources, herbal medicines that have been tested over thousands of years.
                            </p>
                            <p className="font-medium text-primary mt-4">We believe the best medicine is often the simplest one.</p>
                        </div>

                        {/* Principle 2 */}
                        <div className="bg-cream-50 p-8 rounded-2xl border border-stone-100">
                            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                                <Layers size={28} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Sampoorna – Complete</h3>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Health is not just "no disease". It's physical comfort, mental clarity and emotional balance.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                That's why we don't ask you to see a different doctor for your digestion, a different one for your stress, and yet another for your skin. We bring Naturopathy, Hydrotherapy, Ayurveda and mind-body practices together into one integrated plan.
                            </p>
                            <p className="font-medium text-primary mt-4">Support from every angle under one roof.</p>
                        </div>

                        {/* Principle 3 */}
                        <div className="bg-cream-50 p-8 rounded-2xl border border-stone-100">
                            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-6">
                                <User size={28} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Vyaktigat – Personalised</h3>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Every person's journey, history, constitution and goals are different. A treatment that works beautifully for one person might not be right for another.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                In your first consultation, we don't just listen to your complaint – we understand your lifestyle, your digestion, your sleep patterns, your stress triggers and your deepest health goals.
                            </p>
                            <p className="font-medium text-primary mt-4">Only then do we design a plan that's truly yours.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 3: HOW WE WORK WITH YOU
         Goal: Process transparency
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">What Your Journey With Us Looks Like</h2>
                        <p className="text-lg text-stone-600">Whether you're coming for a single session or a structured program, here's what to expect:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                                <Clock size={24} />
                            </div>
                            <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">Step 1</span>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Listen</h3>
                            <p className="text-xs font-medium text-stone-500 mb-4">First Consultation (60–90 mins)</p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">We start with detailed conversation to understand:</p>
                            <ul className="text-stone-600 text-sm list-disc pl-4 space-y-1">
                                <li>What brought you here</li>
                                <li>Health history & concerns</li>
                                <li>Lifestyle & stress levels</li>
                                <li>Short term & long term goals</li>
                            </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                                <Stethoscope size={24} />
                            </div>
                            <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">Step 2</span>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Assess</h3>
                            <p className="text-xs font-medium text-stone-500 mb-4">During Consultation</p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">Using Naturopathic & Ayurvedic methods, we evaluate:</p>
                            <ul className="text-stone-600 text-sm list-disc pl-4 space-y-1">
                                <li>Body type & constitution</li>
                                <li>Digestion & metabolism</li>
                                <li>Stress & sleep patterns</li>
                                <li>Energy levels & imbalances</li>
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                                <ClipboardCheck size={24} />
                            </div>
                            <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">Step 3</span>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Plan</h3>
                            <p className="text-xs font-medium text-stone-500 mb-4">End of Consultation</p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">We create a personalized plan covering:</p>
                            <ul className="text-stone-600 text-sm list-disc pl-4 space-y-1">
                                <li>Recommended therapies</li>
                                <li>Course duration & expectations</li>
                                <li>Simple home recommendations</li>
                                <li>Timeline for improvement</li>
                            </ul>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                                <HeartHandshake size={24} />
                            </div>
                            <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">Step 4</span>
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Support</h3>
                            <p className="text-xs font-medium text-stone-500 mb-4">Throughout Your Course</p>
                            <p className="text-stone-600 text-sm leading-relaxed mb-2">As you progress:</p>
                            <ul className="text-stone-600 text-sm list-disc pl-4 space-y-1">
                                <li>Monitor response & adjust plan</li>
                                <li>Answer questions & guide you</li>
                                <li>Reinforce home practices</li>
                                <li>Prepare for long-term sustainability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 4: OUR PRACTITIONERS
         Goal: Humanize the brand
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Meet Our Practitioners</h2>
                        <p className="text-lg text-stone-600">Our team brings years of training in traditional systems, combined with a genuine care for each person who walks through our door.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Practitioner 1 */}
                        <div className="bg-cream-50 rounded-xl overflow-hidden group">
                            <div className="aspect-[4/5] bg-stone-200 relative flex items-center justify-center">
                                <span className="text-stone-400 font-serif italic text-lg">[Photo Placeholder]</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-stone-800">[Name]</h3>
                                <p className="text-sm text-secondary font-medium mb-4">Naturopathy & Lifestyle Medicine</p>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    [X] years of experience. Specializes in detoxification, digestive health, and stress-related conditions. Known for patient explanations and sustainable guidance.
                                </p>
                            </div>
                        </div>

                        {/* Practitioner 2 */}
                        <div className="bg-cream-50 rounded-xl overflow-hidden group">
                            <div className="aspect-[4/5] bg-stone-200 relative flex items-center justify-center">
                                <span className="text-stone-400 font-serif italic text-lg">[Photo Placeholder]</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-stone-800">[Name]</h3>
                                <p className="text-sm text-secondary font-medium mb-4">Ayurveda & Panchakarma</p>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Trained in classical Ayurveda with focus on Panchakarma. Brings warmth and clarity to Ayurvedic principles. Blends traditional protocols with modern work-life demands.
                                </p>
                            </div>
                        </div>

                        {/* Practitioner 3 */}
                        <div className="bg-cream-50 rounded-xl overflow-hidden group">
                            <div className="aspect-[4/5] bg-stone-200 relative flex items-center justify-center">
                                <span className="text-stone-400 font-serif italic text-lg">[Photo Placeholder]</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-stone-800">[Name]</h3>
                                <p className="text-sm text-secondary font-medium mb-4">Wellness & Mind-Body Therapies</p>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Certified in Yoga Therapy and meditation. Specializes in stress management and nervous system balance. Creates a safe space for emotional healing alongside physical recovery.
                                </p>
                            </div>
                        </div>

                        {/* Practitioner 4 */}
                        <div className="bg-cream-50 rounded-xl overflow-hidden group">
                            <div className="aspect-[4/5] bg-stone-200 relative flex items-center justify-center">
                                <span className="text-stone-400 font-serif italic text-lg">[Photo Placeholder]</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold text-stone-800">[Name]</h3>
                                <p className="text-sm text-secondary font-medium mb-4">Hydrotherapy & Massage</p>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Expert in therapeutic massage and hydrotherapy. Known for intuitive touch. Helps relieve pain and support detoxification through water-based and manual therapies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 5: OUR FACILITY
         Goal: Atmosphere reassurance
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-teal-900 text-cream-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">A Calm, Simple Space for Deep Rest</h2>
                            <p className="text-lg opacity-90 leading-relaxed mb-6">
                                Hillton is intentionally simple – not fancy, but carefully designed for healing.
                            </p>
                            <p className="opacity-90 leading-relaxed mb-6">
                                Clean rooms with soft lighting. Soothing colors and natural materials. Quiet surroundings so you can actually rest. Privacy in every therapy room so you can fully relax without wondering who might hear or see you.
                            </p>
                            <p className="opacity-90 leading-relaxed mb-8">
                                Every detail, from the temperature of the water in our baths to the music we play during meditation sessions, has been chosen to support your nervous system's shift into rest and healing mode.
                            </p>
                            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
                                <p className="font-medium">You're welcome to visit for a short walk-through before you decide to book. No pressure, just come and feel the space.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <span className="text-sm opacity-50">[Facility Room]</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mt-8">
                                <span className="text-sm opacity-50">[Meditation Space]</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 -mt-8">
                                <span className="text-sm opacity-50">[Treatment Area]</span>
                            </div>
                            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <span className="text-sm opacity-50">[Gardens]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 6: OUR COMMITMENT
         Goal: Alignment on values
      --------------------------------------------------------------------------- */}
            <section className="py-20 bg-cream-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">What We Believe In</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 max-w-4xl mx-auto">
                        <div className="grid gap-8">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">Your health is your own.</h3>
                                    <p className="text-stone-600">We're guides, not saviors. You're the expert on your body – we help you listen to it better.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">Slow healing is deep healing.</h3>
                                    <p className="text-stone-600">We don't promise overnight miracles. What we offer is lasting change through steady, gentle support.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">Prevention is powerful.</h3>
                                    <p className="text-stone-600">Once you've healed a condition, we help you build habits to keep it from returning.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">Natural doesn't mean passive.</h3>
                                    <p className="text-stone-600">You'll be an active participant in your healing – with guidance on diet, movement and daily practices.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">We don't replace doctors.</h3>
                                    <p className="text-stone-600">If you have a serious medical condition, we support you alongside your medical care, never instead of it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
         SECTION 7: FINAL CTA
         Goal: Conversion
      --------------------------------------------------------------------------- */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-8">Ready to experience a different approach to your health?</h2>
                    <Link href="/contact" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                        Book Your First Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
