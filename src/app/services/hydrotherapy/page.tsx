
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Hydrotherapy Treatment | Water Therapies for Healing & Detox | Hillton",
    description: "Experience the healing power of water with therapeutic baths, packs, and cleansing therapies at Hillton.",
};

export default function HydrotherapyPage() {
    return (
        <ServicePageTemplate
            title="Hydrotherapy at Hillton"
            subtitle="Ancient wisdom, modern comfort using the healing power of water."

            introText={[
                <p key="1">Hydrotherapy uses water in different temperatures, pressures and forms – baths, showers, packs, compresses and cleansing therapies – to encourage circulation, relax muscles, ease pain and support detoxification.</p>,
                <p key="2" className="mt-4">Water is one of nature's most powerful healing agents. Hot water opens pores and relaxes. Cold water invigorates and tones. Contrast therapy (alternating hot and cold) resets circulation and boosts immunity.</p>,
                <p key="3" className="mt-4">At Hillton, we use water mindfully and specifically – never as a generic treatment, always tailored to your needs.</p>
            ]}

            keyTherapies={[
                {
                    title: "Therapeutic Baths",
                    description: "Immersion in water at specific temperatures, often with added herbal infusions, to relax and heal.",
                    items: [
                        "Steam baths (opens pores, aids detox)",
                        "Immersion baths (full relaxation and circulation)",
                        "Sitz baths (pelvic/reproductive health)",
                        "Spinal spray baths (nervous system support)",
                        "Hip baths (lower body and digestive support)",
                        "Contrast baths (circulation and immunity)"
                    ],
                    duration: "20–30 minutes"
                },
                {
                    title: "Packs & Leps (Herbal Pastes)",
                    description: "Warm or cool applications of medicinal mud, herbs and oils to specific body areas.",
                    items: [
                        "Mustard pack (muscle and joint warmth)",
                        "Organ packs – kidney, liver, thyroid (targeted support)",
                        "Joint packs (arthritis, inflammation)",
                        "Wet sheet pack (full body detox)",
                        "Face pack (skin rejuvenation)"
                    ],
                    duration: "30–45 minutes"
                },
                {
                    title: "Hydro-Colon Therapy",
                    description: "Gentle cleansing of the colon using filtered water to remove accumulated toxins and waste.",
                    items: [
                        "Deep intestinal cleansing",
                        "Improves nutrient absorption",
                        "Relieves constipation",
                        "Supports detoxification programs"
                    ],
                    duration: "45–60 minutes"
                },
                {
                    title: "Fomentation & Compresses",
                    description: "Warm, often herbal-infused cloths applied to muscles, joints or specific areas.",
                    items: [
                        "Relieves muscle pain and stiffness",
                        "Improves local circulation",
                        "Reduces inflammation",
                        "Prepares tissue for deeper massage"
                    ],
                    duration: "15–30 minutes"
                }
            ]}

            bestFor={[
                "Joint and muscle pain",
                "Swelling and stiffness",
                "Poor circulation",
                "Chronic fatigue",
                "Constipation or sluggish digestion",
                "Need for detoxification support",
                "Post-injury or post-illness recovery",
                "Stress and muscle tension"
            ]}

            timelineSteps={[
                {
                    title: "1. Assessment",
                    duration: "10 minutes",
                    description: "We understand your concerns and medical history."
                },
                {
                    title: "2. Selection",
                    duration: "5 minutes",
                    description: "Choose which bath or pack suits you best."
                },
                {
                    title: "3. Preparation",
                    duration: "5 minutes",
                    description: "We prepare the space and get the water/therapy ready."
                },
                {
                    title: "4. Treatment",
                    duration: "30–45 minutes",
                    description: "Relaxing immersion or application."
                },
                {
                    title: "5. Rest",
                    duration: "10–15 minutes",
                    description: "Brief rest to allow benefits to integrate."
                },
                {
                    title: "6. Guidance",
                    duration: "5 minutes",
                    description: "Simple aftercare (hydration, what to avoid, when to resume activities)."
                }
            ]}

            faqs={[
                {
                    question: "Is hydrotherapy safe for heart conditions or blood pressure issues?",
                    answer: "Generally yes, but tell us about these conditions in your first visit so we can select the right water temperatures and methods."
                },
                {
                    question: "How often can I do hydrotherapy?",
                    answer: <span>You can do it 2–3 times per week or even daily as part of a <Link href="/services/ayurveda-panchakarma" className="text-secondary hover:underline">detox program</Link>. We'll recommend based on your needs.</span>
                },
                {
                    question: "What should I wear?",
                    answer: "We provide privacy and robes. You'll be comfortable and fully supported."
                }
            ]}

            ctaText="Experience the healing power of water."
            ctaButtonText="Book a Hydrotherapy Session"
            ctaLink="/contact"
        />
    );
}
