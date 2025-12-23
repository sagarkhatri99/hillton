
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Natural Anti-Aging Therapies | Natural & Ayurvedic Solutions | Hillton",
    description: "Age gracefully with Ayurvedic anti-aging (Rasayana) therapies at Hillton. Rejuvenate cells and restore vitality.",
};

export default function AntiAgingPage() {
    return (
        <ConditionPageTemplate
            title="Natural Anti-Aging & Longevity – Age Gracefully"
            subtitle="True anti-aging isn't just about looking younger—it's about feeling younger. Rejuvenate your cells and restore vitality with Rasayana therapy."

            whatIsSection={{
                title: "The Art of Rejuvenation (Rasayana)",
                content: [
                    <p key="1">In Ayurveda, anti-aging is a dedicated branch of medicine called **Rasayana**. It focuses on nourishing the deep tissues, improving micro-circulation, and keeping the mind youthful.</p>,
                    <p key="2" className="mt-4">We move beyond superficial treatments to slow down biological aging, prevent degeneration, and keep you active, sharp, and radiant for years to come.</p>
                ]
            }}

            symptoms={[
                "Premature wrinkles or sagging skin",
                "Joint stiffness and loss of flexibility",
                "Declining memory or cognitive sharpness",
                "Lower energy and endurance",
                "Digestive weakness"
            ]}

            rootCauses={{
                title: "Why We Age Faster",
                content: [],
                listItems: [
                    "**Oxidative Stress:** Free radical damage to cells.",
                    "**Poor Agni:** Inability to extract nutrients from food.",
                    "**Vata Increase:** The natural drying and cooling process of aging.",
                    "**Accumulated Toxins:** Slowing down cellular repair."
                ]
            }}

            approachSection={{
                title: "Rasayana Therapies",
                therapies: [
                    {
                        title: "Rejuvenation Therapy",
                        items: [
                            "Specialized massages with anti-aging oils",
                            "Internal herbal tonics (Chyawanprash, etc.)"
                        ]
                    },
                    {
                        title: "Detoxification",
                        items: [
                            "Clearing 'sludge' from the body to allow new growth",
                            "Improving cellular nutrition"
                        ]
                    },
                    {
                        title: "Mind-Body Practices",
                        items: [
                            "Meditation to reduce stress-aging",
                            "Yoga for flexibility and balance"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Rejuvenation Timeline",
                steps: [
                    {
                        title: "Immediate",
                        items: [
                            "Skin glow (Ojas)",
                            "Feeling lighter"
                        ]
                    },
                    {
                        title: "Ongoing",
                        items: [
                            "Improved immunity",
                            "Better joint mobility",
                            "Sharper memory"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Radiant skin",
                "Boundless energy",
                "Sharp memory",
                "Physical flexibility"
            ]}

            faqs={[
                {
                    question: "When should I start anti-aging treatments?",
                    answer: "Prevention is best. Starting in your late 30s or 40s yields the best long-term results, but it is never too late to start."
                }
            ]}

            cta={{
                text: "Add life to your years.",
                buttonText: "Book Rejuvenation Program",
                link: "/contact"
            }}
        />
    );
}
