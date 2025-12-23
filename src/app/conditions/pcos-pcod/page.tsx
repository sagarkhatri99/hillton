
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "PCOS & PCOD Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Holistic treatment for PCOS/PCOD at Hillton. Restore fertility and cycle regularity with Ayurveda and lifestyle changes.",
};

export default function PcosPage() {
    return (
        <ConditionPageTemplate
            title="PCOS & PCOD Treatment – Hormonal Balance Naturally"
            subtitle="Polycystic Ovarian Disease affects millions of women. Learn how Ayurveda addresses hormonal root causes to restore cycle regularity and fertility."

            whatIsSection={{
                title: "Understanding PCOS/PCOD",
                content: [
                    <p key="1">PCOS (Polycystic Ovarian Syndrome) is a hormonal condition characterized by irregular cycles, ovarian cysts, elevated male hormones, and insulin resistance.</p>,
                    <p key="2" className="mt-4">Conventional treatment often relies on birth control pills to manage symptoms. The Ayurvedic approach goes deeper, addressing the root imbalances (usually Kapha excess and weak metabolism) to restore the body's natural hormonal rhythm and fertility.</p>
                ]
            }}

            symptoms={[
                "Irregular or absent menstrual cycles",
                "Heavy periods or prolonged bleeding",
                "Difficulty getting pregnant",
                "Unwanted facial/body hair growth",
                "Acne (face, chest, back)",
                "Thinning scalp hair",
                "Weight gain or difficulty losing weight",
                "Pelvic pain",
                "Depression or anxiety"
            ]}

            rootCauses={{
                title: "What Causes PCOS from an Ayurvedic Perspective",
                content: [],
                listItems: [
                    "**Kapha Imbalance:** Excess heaviness and stagnation in reproductive organs.",
                    "**Weak Agni:** Poor digestion leads to toxin accumulation (Ama).",
                    "**Insulin Resistance:** Weak metabolism affects hormone production.",
                    "**Stress:** Chronic stress dysregulates the pituitary-ovarian axis.",
                    "**Sedentary Lifestyle:** Exacerbates stagnation.",
                    "**Poor Sleep:** Disrupts hormonal rhythms."
                ]
            }}

            approachSection={{
                title: "How We Restore Hormonal Balance",
                therapies: [
                    {
                        title: "Panchakarma (Cleanse)",
                        items: [
                            "Virechana (Purgation): Clears excess heat and hormonal buildup",
                            "Nasya: Restores hormonal signaling",
                            "Uttar Basti: Specialized uterine cleansing",
                            "Duration: 7–14 days"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Ashwagandha for stress",
                            "Shatavari for reproductive nourishment",
                            "Cinnamon & Fenugreek for insulin sensitivity"
                        ]
                    },
                    {
                        title: "Dietary Intervention",
                        items: [
                            "Anti-inflammatory diet",
                            "Eliminate refined sugar",
                            "Foods to support progesterone production"
                        ]
                    },
                    {
                        title: "Yoga & Movement",
                        items: [
                            "Poses stimulating reproductive organs",
                            "Movement to improve insulin sensitivity",
                            "Daily practice recommended"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "PCOS Improvement Timeline",
                steps: [
                    {
                        title: "Months 1–2",
                        items: [
                            "Cycles become more regular",
                            "Energy levels improve",
                            "Acne starts clearing",
                            "Weight loss begins"
                        ]
                    },
                    {
                        title: "Months 2–3",
                        items: [
                            "Cycle regularity established",
                            "Hair growth reducing",
                            "Mood and anxiety improving"
                        ]
                    },
                    {
                        title: "Months 3–6",
                        items: [
                            "Hormone levels normalizing",
                            "Fertility improving",
                            "Body composition improving"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Regular menstrual cycles",
                "Clearer skin",
                "Steady weight loss",
                "Reduced hair fall",
                "Improved mood stability",
                "Successful conception (if trying)"
            ]}

            faqs={[
                {
                    question: "Can PCOS be cured?",
                    answer: "PCOS can be significantly managed and many symptoms reversed. Complete restoration of normal cycling and fertility is possible with consistent treatment."
                },
                {
                    question: "How does this help fertility?",
                    answer: "By restoring regular ovulation and hormonal balance, fertility naturally improves. Many women conceive within 3–6 months."
                },
                {
                    question: "Will I need to be on birth control forever?",
                    answer: "No. Many women can discontinue hormonal contraceptives once hormonal balance is restored naturally."
                }
            ]}

            cta={{
                text: "Reclaim your hormonal balance.",
                buttonText: "Book PCOS Consultation",
                link: "/contact"
            }}
        />
    );
}
