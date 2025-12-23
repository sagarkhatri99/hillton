
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gastrointestinal Disorder Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Heal IBS, acidity, bloating, and constipation naturally at Hillton. Ayurvedic gut restoration for long-term health.",
};

export default function GastroPage() {
    return (
        <ConditionPageTemplate
            title="Digestive Health – Natural Gut Healing"
            subtitle="Good health begins in the gut. Heal IBS, acidity, bloating, and constipation by restoring your digestive fire (Agni)."

            whatIsSection={{
                title: "The Root of Health",
                content: [
                    <p key="1">Ayurveda considers **Agni** (digestive fire) the cornerstone of health. When digestion is weak, toxins forms. When it's too strong, inflammation occurs. Most chronic diseases start with a gut imbalance.</p>,
                    <p key="2" className="mt-4">We don't just treat symptoms with antacids or laxatives. We re-train your digestive system to process food efficiently and absorb nutrients properly.</p>
                ]
            }}

            symptoms={[
                "Chronic bloating or gas",
                "Acid reflux or heartburn",
                "Constipation or diarrhea (IBS)",
                "Food sensitivities",
                "Heaviness after meals",
                "Fatigue after eating"
            ]}

            rootCauses={{
                title: "Ayurvedic Gut Analysis",
                content: [],
                listItems: [
                    "**Weak Agni:** Sluggish digestion leading to heaviness.",
                    "**High Pitta:** Excess heat causing acidity and loose motion.",
                    "**Vata Imbalance:** Dryness causing constipation and gas.",
                    "**Dysbiosis:** Imbalance in gut flora."
                ]
            }}

            approachSection={{
                title: "Gut Restoration Therapies",
                therapies: [
                    {
                        title: "Dietary Reset",
                        items: [
                            "Simplified meals to rest the gut",
                            "Food combining principles",
                            "Eliminating inflammatory triggers"
                        ]
                    },
                    {
                        title: "Hydrotherapy",
                        items: [
                            "Colon cleansing to remove impacted waste",
                            "Hip baths for local circulation"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Triphala for gentle regulation",
                            "Digestive spices (Cumin, Fennel, Ginger)",
                            "Gut-healing herbs"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Gut Healing Timeline",
                steps: [
                    {
                        title: "Weeks 1–3",
                        items: [
                            "Reduction in bloating",
                            "Regular bowel movements",
                            "Less acidity"
                        ]
                    },
                    {
                        title: "Weeks 4–8",
                        items: [
                            "Improved tolerance to foods",
                            "Increased energy absorption",
                            "Clearer skin (gut-skin connection)"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Daily, complete bowel movements",
                "No bloating after meals",
                "Good appetite without cravings",
                "Feeling light and energetic"
            ]}

            faqs={[
                {
                    question: "Can you help with IBS?",
                    answer: "Yes, Ayurveda is particularly effective for IBS by addressing the underlying nervous system and digestive trigger."
                },
                {
                    question: "Will I have to be on a strict diet forever?",
                    answer: "No. Once your digestive fire is strong, you can handle a wider variety of foods. The strict phase is usually temporary."
                }
            ]}

            cta={{
                text: "Trust your gut again.",
                buttonText: "Book Digestive Health Consult",
                link: "/contact"
            }}
        />
    );
}
