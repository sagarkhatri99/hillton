
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Skin & Hair Disorder Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Holistic treatment for skin and hair disorders at Hillton. Heal acne, eczema, and hair loss from within.",
};

export default function SkinHairPage() {
    return (
        <ConditionPageTemplate
            title="Skin & Hair Health – Natural Beauty From Within"
            subtitle="Your skin mirrors your internal health. Heal chronic skin issues and restore hair vitality by detoxifying the blood and balancing digestion."

            whatIsSection={{
                title: "Holistic Skin & Hair Care",
                content: [
                    <p key="1">Creams and lotions often only treat the surface. Ayurveda understands that skin disorders like eczema, acne, and psoriasis are expressions of internal toxicity (Ama) and imbalances in the blood (Rakta Dhatu).</p>,
                    <p key="2" className="mt-4">Our treatments focus on deep detoxification to clean the blood and cool the system, leading to lasting clarity and radiance.</p>
                ]
            }}

            symptoms={[
                "Chronic acne or breakouts",
                "Red, itchy, or dry patches (Eczema)",
                "Scaly plaques (Psoriasis)",
                "Premature graying or thinning hair",
                "Dull, lifeless complexion",
                "Excessive hair fall"
            ]}

            rootCauses={{
                title: "Internal Causes of Skin Issues",
                content: [],
                listItems: [
                    "**Impure Blood (Rakta Dushti):** Accumulation of toxins in the bloodstream.",
                    "**Pitta Imbalance:** Excess heat causing inflammation and redness.",
                    "**Poor Digestion:** Creating toxins that the skin tries to eliminate.",
                    "**Hormonal Imbalance:** Triggering acne and hair fall."
                ]
            }}

            approachSection={{
                title: "Natural Therapies for Skin & Hair",
                therapies: [
                    {
                        title: "Detoxification (Virechana)",
                        items: [
                            "Purgation therapy to clean the liver and blood",
                            "Most effective for chronic skin conditions"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Neem and Manjistha to purify blood",
                            "Aloe Vera for cooling and healing",
                            "Bhringraj for hair growth"
                        ]
                    },
                    {
                        title: "Local Applications",
                        items: [
                            "Medicated herbal pastes (Lepam)",
                            "Scalp oils for hair roots"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Healing Timeline",
                steps: [
                    {
                        title: "Weeks 1–4",
                        items: [
                            "Reduction in itching and inflammation",
                            "Digestion improves"
                        ]
                    },
                    {
                        title: "Weeks 6–12",
                        items: [
                            "Clearer skin",
                            "Reduced new breakouts",
                            "New hair growth (hair takes 3+ months to show visible change)"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Reduced redness and itching",
                "Skin healing faster",
                "Reduced hair shedding",
                "Glowing complexion"
            ]}

            faqs={[
                {
                    question: "Will detox make my skin worse first?",
                    answer: "Sometimes a mild 'healing crisis' occurs as toxins leave, but it clears quickly to reveal healthy skin."
                },
                {
                    question: "Does diet affect acne?",
                    answer: "Absolutely. Fried, spicy, and sour foods often aggravate Pitta and skin issues."
                }
            ]}

            cta={{
                text: "Reveal your natural radiance.",
                buttonText: "Book Skin & Hair Consultation",
                link: "/contact"
            }}
        />
    );
}
