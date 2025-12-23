
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Type 2 Diabetes Natural Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Manage Type 2 Diabetes naturally at Hillton with Ayurvedic therapies, diet changes, and stress management.",
};

export default function DiabetesPage() {
    return (
        <ConditionPageTemplate
            title="Type 2 Diabetes Management – Blood Sugar Balance Naturally"
            subtitle="Diabetes is manageable without relying solely on medications. Discover how dietary changes, targeted therapies and lifestyle modifications can restore healthy blood sugar."

            whatIsSection={{
                title: "What Is Type 2 Diabetes?",
                content: [
                    <p key="1">Type 2 Diabetes develops when your pancreas produces insulin, but cells don't respond to it properly (insulin resistance), often coupled with weak digestion (low Agni) and toxin accumulation (Ama).</p>,
                    <p key="2" className="mt-4">Modern approaches often focus purely on managing numbers with medication. The Ayurvedic approach restores the body's capacity to handle glucose naturally through dietary changes, digestive support, stress management and targeted therapies.</p>
                ]
            }}

            symptoms={[
                "Constant thirst",
                "Frequent urination",
                "Unexplained fatigue",
                "Blurred vision",
                "Slow wound healing",
                "Numbness in feet/hands (neuropathy)",
                "Recurrent infections",
                "Weight gain (especially around middle)"
            ]}

            rootCauses={{
                title: "Ayurvedic View on Diabetes",
                content: [
                    <p key="1">We see diabetes as a disorder of metabolism and water balance, often rooted in Kapha imbalances.</p>
                ],
                listItems: [
                    "**Insulin Resistance:** Cells stop listening to insulin signals.",
                    "**Weak Agni (Digestion):** Inability to metabolize sugar effectively.",
                    "**Ama (Toxins):** Blockages in channels preventing proper insulin function.",
                    "**Stress:** High cortisol levels constantly spike blood sugar.",
                    "**Sedentary Life:** Lack of movement reduces glucose uptake by muscles."
                ]
            }}

            approachSection={{
                title: "How We Support Diabetes Management",
                therapies: [
                    {
                        title: "Herbal Panchakarma",
                        items: [
                            "Virechan (liver cleansing) to clear toxins",
                            "Specific oils and herbs that support pancreatic function",
                            "7–14 day program"
                        ]
                    },
                    {
                        title: "Dietary Reset",
                        items: [
                            "Elimination of refined sugars and processed foods",
                            "Blood-sugar-stabilizing foods",
                            "Timing of meals for optimal glucose handling"
                        ]
                    },
                    {
                        title: "Stress & Sleep Support",
                        items: [
                            "Yoga practices that calm the nervous system",
                            "Meditation to reduce cortisol-driven sugar spikes",
                            "Sleep support for hormonal balance"
                        ]
                    },
                    {
                        title: "Movement & Exercise",
                        items: [
                            "Daily gentle yoga",
                            "Walking (helps glucose utilization)",
                            "Consistency more important than intensity"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Diabetes Improvement Timeline",
                steps: [
                    {
                        title: "Weeks 1–2",
                        items: [
                            "Fasting glucose may improve 10–15%",
                            "Energy levels increase",
                            "Fewer mood swings"
                        ]
                    },
                    {
                        title: "Weeks 3–6",
                        items: [
                            "Consistent improvement in glucose readings",
                            "Reduced thirst and urination",
                            "Weight loss begins"
                        ]
                    },
                    {
                        title: "Months 2–3",
                        items: [
                            "Fasting glucose closer to normal range",
                            "Medications may reduce (with doctor approval)",
                            "Healing of neuropathy symptoms begins"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Lower fasting blood sugar readings",
                "Reduced HbA1c over 3 months",
                "More stable energy throughout the day",
                "Reduced numbness or tingling",
                "Weight loss",
                "Less frequent urination at night"
            ]}

            faqs={[
                {
                    question: "Can Type 2 Diabetes be reversed?",
                    answer: "Significant improvement is possible. Complete reversal depends on duration and severity, but most people see dramatic improvement and can maintain healthy levels with lifestyle alone."
                },
                {
                    question: "Will I need to stop my diabetes medications?",
                    answer: "As your condition improves, your doctor may reduce medications. Never stop on your own."
                },
                {
                    question: "How often do I need treatment?",
                    answer: "Initial 7–14 day intensive program, then 1–2 sessions weekly for ongoing support."
                }
            ]}

            cta={{
                text: "Restore healthy blood sugar naturally.",
                buttonText: "Book Diabetes Consultation",
                link: "/contact"
            }}
        />
    );
}
