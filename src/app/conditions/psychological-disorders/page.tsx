
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Psychological Disorder Support | Natural & Ayurvedic Solutions | Hillton",
    description: "Holistic support for depression, anxiety, and emotional balance at Hillton using Ayurveda, yoga, and meditation.",
};

export default function PsychologicalPage() {
    return (
        <ConditionPageTemplate
            title="Mental Health & Emotional Wellbeing – Natural Support"
            subtitle="Healing the mind requires more than just talk. Restore emotional resilience and mental clarity by balancing the subtle energies of the body."

            whatIsSection={{
                title: "Holistic Mental Health",
                content: [
                    <p key="1">In Ayurveda, the mind and body are inseparable. Psychological conditions like depression, anxiety, and emotional instability often have physiological roots—imbalances in the gut, hormonal system, or vital energies (Prana, Tejas, Ojas).</p>,
                    <p key="2" className="mt-4">Our approach complements conventional therapy by addressing the physical side of mental health. We use calming therapies, gut-healing nutrition, and specific yoga practices to build a stable foundation for emotional wellbeing.</p>
                ]
            }}

            symptoms={[
                "Persistent sadness or low mood",
                "Overwhelming anxiety",
                "Emotional instability",
                "Lack of motivation or energy",
                "Brain fog and poor concentration",
                "Insomnia or oversleeping"
            ]}

            rootCauses={{
                title: "Ayurvedic Perspective",
                content: [],
                listItems: [
                    "**Tamas Increase:** Heavy, dark energy causing lethargy and depression.",
                    "**Rajas Increase:** Aggressive, restless energy causing anxiety.",
                    "**Weak Ojas:** Depletion of vital vitality due to stress or poor digestion.",
                    "**Gut-Brain Axis:** Poor digestion (Ama) directly affecting mood hormones."
                ]
            }}

            approachSection={{
                title: "Natural Therapies for Mental Health",
                therapies: [
                    {
                        title: "Meditation & Yoga Nidra",
                        items: [
                            "Deep conscious rest to reset the nervous system",
                            "Practices to cultivate Sattva (clarity and peace)"
                        ]
                    },
                    {
                        title: "Sound Healing",
                        items: [
                            "Vibrational therapy to release trapped emotions",
                            "Bypasses the thinking mind to induce calm"
                        ]
                    },
                    {
                        title: "Lifestyle Counseling",
                        items: [
                            "Routine (Dinacharya) to stabilize biological rhythms",
                            "Dietary changes to support neurotransmitter health"
                        ]
                    },
                    {
                        title: "Shirodhara",
                        items: [
                            "Oil flow therapy to calm the central nervous system",
                            "Promotes deep mental clarity"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Healing Timeline",
                steps: [
                    {
                        title: "Weeks 2–4",
                        items: [
                            "Improved sleep",
                            "Feeling more grounded",
                            "Small increases in energy"
                        ]
                    },
                    {
                        title: "Weeks 6–12",
                        items: [
                            "Mood stabilization",
                            "Returned sense of joy",
                            "Increased resilience to stress"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Waking up with purpose",
                "Ability to handle stress without spiraling",
                "Consistent energy levels",
                "Better focus"
            ]}

            faqs={[
                {
                    question: "Can this help with clinical depression?",
                    answer: "It is an excellent supportive therapy. It builds the physiological resilience needed for recovery, though it does not replace acute psychiatric care."
                },
                {
                    question: "Do I have to stop taking antidepressants?",
                    answer: "No. Our treatments can work alongside medication. Any changes to medication must come from your prescribing doctor."
                }
            ]}

            cta={{
                text: "Restore your peace of mind.",
                buttonText: "Book Wellbeing Consultation",
                link: "/contact"
            }}
        />
    );
}
