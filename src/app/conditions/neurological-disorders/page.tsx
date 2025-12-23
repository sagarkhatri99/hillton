
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Neurological Disorder Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural support for neuropathy, tremors, and nerve health at Hillton using Panchakarma and herbal therapies.",
};

export default function NeurologicalPage() {
    return (
        <ConditionPageTemplate
            title="Neurological Health Support – Natural Nervous System Healing"
            subtitle="Nerve health is vital for movement and sensation. Ayurvedic therapies nourish the nervous system to support repair and function."

            whatIsSection={{
                title: "Supporting the Nervous System",
                content: [
                    <p key="1">Neurological disorders like neuropathy, tremors, or sciatica often involve damage or irritation to the nerves. In Ayurveda, the nervous system is governed by **Vata**, the energy of movement.</p>,
                    <p key="2" className="mt-4">When Vata is aggravated, nerves become dry, hypersensitive, or blocked. Our treatments focus on deeply nourishing and calming the nerves using medicated oils and gentle therapies.</p>
                ]
            }}

            symptoms={[
                "Numbness or tingling (pins and needles)",
                "Burning sensation",
                "Muscle tremors or twitching",
                "Sciatic pain radiating down the leg",
                "Weakness in limbs",
                "Balance issues"
            ]}

            rootCauses={{
                title: "Ayurvedic Perspective",
                content: [],
                listItems: [
                    "**Severe Vata Aggravation:** Dryness and instability in nerve tissue.",
                    "**Nutrient Depletion:** Nerves lacking essential nourishment.",
                    "**Compression:** Physical pressure on nerves due to inflammation."
                ]
            }}

            approachSection={{
                title: "Natural Neurological Care",
                therapies: [
                    {
                        title: "Panchakarma (Basti)",
                        description: "Enema therapy is the primary treatment for Vata disorders.",
                        items: [
                            "Nourishes the nervous system from the colon (Vata's seat)",
                            "Uses medicated oils to repair tissues"
                        ]
                    },
                    {
                        title: "Shirodhara",
                        items: [
                            "Continuous oil flow on the forehead",
                            "Directly calms the central nervous system"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Ashwagandha for nerve strength",
                            "Brahmi for brain-nerve connection"
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
                            "Reduction in burning or sharp pain",
                            "Better sleep"
                        ]
                    },
                    {
                        title: "Weeks 8–12",
                        items: [
                            "improved sensation",
                            "Increased muscle control",
                            "Nerve repair (slow process requiring consistency)"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Less frequent numbness",
                "Reduced burning sensation",
                "Stronger grip or gait",
                "Relaxed muscle tone"
            ]}

            faqs={[
                {
                    question: "Can neuropathy be reversed?",
                    answer: "While dead nerves cannot be revived, damaged nerves can often heal or improve function with consistent nutritional and therapeutic support."
                },
                {
                    question: "Is the treatment painful?",
                    answer: "No, Ayurvedic neurological treatments are generally very gentle, focusing on soothing and nourishing."
                }
            ]}

            cta={{
                text: "Nourish your nerves and restore function.",
                buttonText: "Book Neurological Assessment",
                link: "/contact"
            }}
        />
    );
}
