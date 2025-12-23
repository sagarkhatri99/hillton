
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Obesity & Weight Gain Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural weight loss treatment at Hillton using metabolism resetting, detox, and personalized diet plans.",
};

export default function ObesityPage() {
    return (
        <ConditionPageTemplate
            title="Natural Weight Loss & Obesity Management"
            subtitle="Weight gain isn't just about calories. Learn how our integrated approach addresses metabolism, digestion, emotional eating and imbalances."

            whatIsSection={{
                title: "Beyond Calories: Why Weight Gets Stuck",
                content: [
                    <p key="1">Modern approaches focus only on calories in/calories out. But from an Ayurvedic perspective, weight gain is caused by deeper imbalances like weak digestive fire (Agni), hormonal issues, and toxin accumulation (Ama).</p>,
                    <p key="2" className="mt-4">At Hillton, we don't just focus on the number on the scale. We focus on resetting your metabolism, improving digestion, and building sustainable habits that keep the weight off for good.</p>
                ]
            }}

            symptoms={[
                "Unexplained weight gain",
                "Difficulty losing weight despite dieting",
                "Constant hunger or cravings (especially sweets)",
                "Fatigue and low energy",
                "Bloating and sluggish digestion",
                "Brain fog",
                "Sluggish metabolism",
                "Sleep issues"
            ]}

            rootCauses={{
                title: "Why Weight Gets Stuck",
                content: [],
                listItems: [
                    "**Slow Metabolism (Agni):** Weak digestive fire means food isn't properly converted to energy.",
                    "**Kapha Imbalance:** Excess heavy, oily qualities slow movement and metabolism.",
                    "**Poor Digestion:** Undigested food becomes fat and toxins (Ama).",
                    "**Hormonal Imbalance:** Especially insulin resistance and thyroid issues.",
                    "**Emotional Eating:** Using food for comfort rather than nourishment.",
                    "**Stress:** Cortisol drives fat storage, especially around abdomen."
                ]
            }}

            approachSection={{
                title: "Natural Weight Management at Hillton",
                therapies: [
                    {
                        title: "Hydrotherapy & Detox",
                        items: [
                            "Therapeutic baths activate metabolism",
                            "Hydro-colon cleansing removes stored toxins",
                            "Improves circulation and nutrient absorption"
                        ]
                    },
                    {
                        title: "Mud Therapy",
                        items: [
                            "Full-body mud applications support detoxification",
                            "Reduces bloating and fluid retention",
                            "Multiple sessions per week"
                        ]
                    },
                    {
                        title: "Ayurvedic Metabolism Support",
                        items: [
                            "Specific herbs to boost Agni (digestive fire)",
                            "Panchakarma to clear deep toxins",
                            "Medicated oils that improve fat metabolism"
                        ]
                    },
                    {
                        title: "Massage & Movement",
                        items: [
                            "Stimulating massage activates metabolism",
                            "Daily yoga supports lymphatic drainage",
                            "Improve circulation"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Weight Loss Timeline",
                steps: [
                    {
                        title: "Weeks 1–3: Reset Phase",
                        items: [
                            "Initial bloating reduction",
                            "Energy increases",
                            "Cravings start reducing",
                            "Loss: 2–4 kg (varies individually)"
                        ]
                    },
                    {
                        title: "Weeks 4–8: Active Loss Phase",
                        items: [
                            "Consistent, sustainable weight loss",
                            "Metabolism noticeably improved",
                            "Clothes fitting differently",
                            "Mood and energy much better"
                        ]
                    },
                    {
                        title: "Weeks 8–12: Acceleration Phase",
                        items: [
                            "Continued weight loss",
                            "Strength and fitness improving",
                            "Sustainable habits becoming automatic"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Weight decreasing (0.5–1 kg per week is healthy)",
                "Clothes fitting loosely",
                "Energy increasing",
                "Digestion improving",
                "Cravings disappearing",
                "Better sleep and mental clarity"
            ]}

            faqs={[
                {
                    question: "Will I have to starve myself?",
                    answer: "No. We focus on eating the right foods, not eating less. Quality over quantity."
                },
                {
                    question: "How much weight can I expect to lose?",
                    answer: "Healthy loss is 0.5–1 kg per week. Faster loss is often water and returns quickly."
                },
                {
                    question: "What if I have thyroid issues or PCOD?",
                    answer: "These require specific approaches. We'll address the underlying condition while supporting weight loss."
                }
            ]}

            cta={{
                text: "Ready for sustainable results?",
                buttonText: "Book a Weight Loss Assessment",
                link: "/contact"
            }}
        />
    );
}
