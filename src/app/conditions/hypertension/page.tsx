
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hypertension Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural support for high blood pressure at Hillton. Reduce stress and regulate BP with Ayurveda and relaxation therapies.",
};

export default function HypertensionPage() {
    return (
        <ConditionPageTemplate
            title="High Blood Pressure Management – Natural BP Support"
            subtitle="Chronic stress and lifestyle factors take a toll on your heart. Discover natural ways to lower blood pressure and protect cardiovascular health."

            whatIsSection={{
                title: "Managing Hypertension Naturally",
                content: [
                    <p key="1">High blood pressure is often a sign that the body is under constant stress or that arteries have lost their flexibility. While medication manages the numbers, it rarely addresses the root cause: a nervous system in overdrive or poor circulation.</p>,
                    <p key="2" className="mt-4">Our approach focuses on calming the nervous system (Vata), clearing circulatory blockages (Pitta/Kapha), and teaching the body to relax deeply.</p>
                ]
            }}

            symptoms={[
                "Frequent headaches",
                "Shortness of breath",
                "Nosebleeds",
                "Anxiety or palpitations",
                "Dizziness",
                "Chest pain",
                "Visual changes",
                "Fatigue"
            ]}

            rootCauses={{
                title: "Ayurvedic Perspective on Hypertension",
                content: [],
                listItems: [
                    "**Vata Imbalance:** Constriction of blood vessels due to dryness and stress.",
                    "**Pitta Imbalance:** Heat and inflammation affecting blood viscosity.",
                    "**Stress:** Chronic 'fight or flight' activation.",
                    "**Poor Circulation:** Blockages preventing easy blood flow."
                ]
            }}

            approachSection={{
                title: "Natural Therapies for Hypertension",
                therapies: [
                    {
                        title: "Relaxation Practices",
                        items: [
                            "Shirodhara (oil flow on forehead) to deeply calm the mind",
                            "Meditation to lower baseline stress",
                            "Guided relaxation (Yoga Nidra)"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Brahmi and Ashwagandha for nervous system support",
                            "Arjuna for heart health",
                            "Sarpagandha for BP regulation"
                        ]
                    },
                    {
                        title: "Dietary Changes",
                        items: [
                            "Sodium reduction",
                            "Increase in potassium-rich foods",
                            "Elimination of stimulants like caffeine"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Timeline for Improvement",
                steps: [
                    {
                        title: "Weeks 1–2",
                        items: [
                            "Feeling calmer",
                            "Better sleep",
                            "Initial drop in BP readings"
                        ]
                    },
                    {
                        title: "Weeks 4–8",
                        items: [
                            "Noticeable, consistent improvement in BP",
                            "Reduced anxiety",
                            "Medication reduction (with doctor approval)"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Lower daily blood pressure readings",
                "Reduced frequency of headaches",
                "Feeling of calm and control",
                "Better sleep quality"
            ]}

            faqs={[
                {
                    question: "Is it safe to stop BP medication?",
                    answer: "No. Never stop medication abruptly. We work alongside your medical treatment, and your doctor can adjust dosages as your natural health improves."
                },
                {
                    question: "Can stress really cause high BP?",
                    answer: "Yes, chronic stress keeps blood vessels constricted. Learning to relax is a key part of treatment."
                }
            ]}

            cta={{
                text: "Calm your heart and lower your pressure.",
                buttonText: "Book Hypertension Assessment",
                link: "/contact"
            }}
        />
    );
}
