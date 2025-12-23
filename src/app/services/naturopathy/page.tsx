
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Naturopathy Treatment | Mud Therapy, Massage & Natural Healing | Hillton",
    description: "Discover naturopathy therapies at Hillton: mud therapy, acupuncture, massage, diet guidance and more for natural healing.",
};

export default function NaturopathyPage() {
    return (
        <ServicePageTemplate
            title="Naturopathy at Hillton"
            subtitle="The core belief is simple: your body knows how to heal."

            introText={[
                <p key="1">Naturopathy is a system of healing that uses natural methods – food, water, mud, massage, sunlight and gentle detoxification – to support the body's own repair mechanisms.</p>,
                <p key="2" className="mt-4">The core belief is simple: your body knows how to heal. It just needs the right support and conditions to do so.</p>,
                <p key="3" className="mt-4">At Hillton, our naturopathic team designs simple, practical plans that work alongside your daily life rather than against it. You won't be asked to turn your life upside down – just to make small, sustainable shifts that add up over time.</p>
            ]}

            keyTherapies={[
                {
                    title: "Mud Therapy",
                    description: "Full body and local mud applications using medicinal earth to support detoxification, reduce inflammation, soothe joints and cool the body.",
                    items: [
                        "Draws out toxins through the skin",
                        "Reduces inflammation and swelling",
                        "Soothes sunburns, rashes and heat-related discomfort",
                        "Supports joint and muscle recovery"
                    ],
                    duration: "45–60 minutes"
                },
                {
                    title: "Acupuncture & Acupressure",
                    description: "Gentle stimulation of specific points to balance energy flow, reduce pain, improve sleep and support organ functions.",
                    items: [
                        "Relieves chronic and acute pain",
                        "Improves sleep quality",
                        "Supports digestion",
                        "Enhances overall energy and sense of wellbeing"
                    ],
                    duration: "30–45 minutes"
                },
                {
                    title: "Massage Therapies",
                    description: "From full body and deep tissue to potli massage and dry massage – each technique chosen for your specific needs.",
                    items: [
                        "Full body massage (relaxation and detox)",
                        "Deep tissue massage (muscle tension and knots)",
                        "Potli massage (warm herbal bolus)",
                        "Dry massage (stimulation and circulation)",
                        "Salt glow massage (exfoliation and renewal)"
                    ],
                    duration: "60–90 minutes"
                },
                {
                    title: "Diet & Lifestyle Guidance",
                    description: "Personalised food and routine recommendations that align with your body type, current imbalances and health goals.",
                    items: [
                        "Improves digestion and energy",
                        "Stabilizes blood sugar",
                        "Supports weight management",
                        "Reduces inflammation",
                        "Builds sustainable healthy habits"
                    ],
                    duration: "30–45 minutes (consultation)"
                }
            ]}

            bestFor={[
                "Low energy, fatigue or 'always tired' feeling",
                "Digestive issues (acidity, bloating, constipation)",
                "Joint and muscle pain",
                "Recurrent headaches or migraines",
                "Skin concerns linked to lifestyle or digestion",
                "Sleep issues and stress-related discomfort",
                "Weight management challenges",
                "General desire to reset and detox"
            ]}

            timelineSteps={[
                {
                    title: "Step 1: Assessment",
                    duration: "15–20 minutes",
                    description: "We understand your concerns, daily routine, diet and health goals."
                },
                {
                    title: "Step 2: Examination",
                    duration: "10–15 minutes",
                    description: "Simple observations of your tongue, digestion, energy levels and overall vitality."
                },
                {
                    title: "Step 3: Selection",
                    duration: "5 minutes",
                    description: "We recommend a combination of therapies suited to you (e.g., a massage + mud pack + simple breathing practice)."
                },
                {
                    title: "Step 4: Explanation",
                    duration: "5 minutes",
                    description: "Clear explanation of what each therapy does and why it's being chosen for you."
                },
                {
                    title: "Step 5: Treatment",
                    duration: "45–60 minutes",
                    description: "Relaxing, often transformative therapy session."
                },
                {
                    title: "Step 6: Guidance",
                    duration: "5 minutes",
                    description: "Simple home recommendations to extend the benefits (diet, hydration, sleep timing, movement)."
                }
            ]}

            timelineNote="Timeline varies based on your condition and consistency. Chronic issues take longer than acute ones."

            faqs={[
                {
                    question: "Will naturopathy conflict with my current medications?",
                    answer: "Naturopathy therapies generally complement medical treatment. In your first consultation, tell us about any medications or medical conditions so we can plan accordingly."
                },
                {
                    question: "How many sessions do I need?",
                    answer: "It depends on your condition. Some people feel better after 3–4 sessions; others benefit from a longer course of 10–20 sessions or a structured program. We'll recommend based on your assessment."
                },
                {
                    question: "Can I combine naturopathy with other therapies?",
                    answer: <span>Absolutely. Many people get the best results combining naturopathy with <Link href="/services/ayurveda-panchakarma" className="text-secondary hover:underline">Ayurveda</Link> or <Link href="/services/hydrotherapy" className="text-secondary hover:underline">hydrotherapy</Link>. That's part of our integrated approach.</span>
                },
                {
                    question: "What should I wear/bring to a session?",
                    answer: "Wear comfortable, loose clothing. Bring a water bottle (stay hydrated). We provide robes for therapy sessions."
                }
            ]}

            ctaText="Ready to experience naturopathy's gentle power?"
            ctaButtonText="Book a Naturopathy Consultation"
            ctaLink="/contact"
        />
    );
}
