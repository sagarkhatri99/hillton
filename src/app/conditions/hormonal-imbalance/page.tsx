
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hormonal Imbalance Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural treatment for thyroid issues, menopause, and hormonal imbalances at Hillton using Ayurveda and Panchakarma.",
};

export default function HormonalPage() {
    return (
        <ConditionPageTemplate
            title="Hormonal Balance – Natural Endocrine Support"
            subtitle="From thyroid issues to menopause, hormonal ups and downs affect everything. stabilizing your endocrine system naturally."

            whatIsSection={{
                title: "Restoring Hormonal Harmony",
                content: [
                    <p key="1">Hormones are the body's chemical messengers. When they are out of balance—whether it's thyroid hormones, cortisol, or reproductive hormones—the effects are felt everywhere, from energy levels to weight to mood.</p>,
                    <p key="2" className="mt-4">Ayurveda views hormonal issues as a disruption in the flow of information and nutrients. We focus on clearing blockages (Ama) and nourishing the glands that produce these vital chemicals.</p>
                ]
            }}

            symptoms={[
                "Unexplained weight changes",
                "Fatigue or exhaustion",
                "Mood swings and irritability",
                "Hot flashes or night sweats",
                "Hair loss",
                "Irregular cycles"
            ]}

            rootCauses={{
                title: "Causes of Imbalance",
                content: [],
                listItems: [
                    "**Chronic Stress:** High cortisol depletes other hormones.",
                    "**Liver Congestion:** Inability to metabolize excess hormones.",
                    "**Nutrient Deficiencies:** Lack of building blocks for hormones.",
                    "**Ama (Toxins):** Interfering with hormone receptor sites."
                ]
            }}

            approachSection={{
                title: "Natural Endocrine Therapies",
                therapies: [
                    {
                        title: "Panchakarma (Cleanse)",
                        items: [
                            "Deep cleansing to remove endocrine disruptors",
                            "Resets the body's natural rhythms"
                        ]
                    },
                    {
                        title: "Specific Herbal Support",
                        items: [
                            "Ashwagandha for thyroid and adrenal health",
                            "Shatavari for female reproductive balance",
                            "Guggulu for metabolism"
                        ]
                    },
                    {
                        title: "Lifestyle Balancing",
                        items: [
                            "Sleep timing optimization",
                            "Stress reduction techniques"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Stabilization Timeline",
                steps: [
                    {
                        title: "Weeks 4–8",
                        items: [
                            "Energy levels stabilize",
                            "Better sleep",
                            "Reduction in hot flashes (if applicable)"
                        ]
                    },
                    {
                        title: "Weeks 12+",
                        items: [
                            "Weight normalization",
                            "Improved hair and skin health",
                            "Consistent mood"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Steady energy throughout the day",
                "Comfortable body temperature",
                "Regular cycles",
                "Clear thinking"
            ]}

            faqs={[
                {
                    question: "Can Ayurveda help with menopause symptoms?",
                    answer: "Yes, it is highly effective for managing hot flashes, mood swings, and sleep issues naturally."
                },
                {
                    question: "Do you treat thyroid conditions?",
                    answer: "We offer supportive treatment for both Hypo and Hyperthyroidism to improve function and reduce symptoms."
                }
            ]}

            cta={{
                text: "Find your balance again.",
                buttonText: "Book Hormonal Health Assessment",
                link: "/contact"
            }}
        />
    );
}
