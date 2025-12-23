
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Post-Treatment Recovery | Natural & Ayurvedic Solutions | Hillton",
    description: "Maintain your health gains at Hillton. Post-treatment recovery plans to prevent relapse and support long-term wellness.",
};

export default function RecoveryPage() {
    return (
        <ConditionPageTemplate
            title="Recovery After Treatment – Rebuild & Sustain"
            subtitle="Healing doesn't end when the treatment stops. Solidify your results and prevent relapse with a dedicated maintenance plan."

            whatIsSection={{
                title: "Sustaining Wellness",
                content: [
                    <p key="1">Many people experience amazing results during a retreat or treatment program, only to slide back into old habits once they return home. Post-treatment recovery is about **integration**.</p>,
                    <p key="2" className="mt-4">This program is designed for those who have completed a major treatment (like chemo, surgery, or a rigorous detox) or those transitioning from our intensive therapies back to daily life. It focuses on gentle rebuilding and habit formation.</p>
                ]
            }}

            symptoms={[
                "Fatigue after medical treatments",
                "Fear of relapse",
                "Difficulty sticking to new habits",
                "Need for ongoing support",
                "Physical weakness"
            ]}

            rootCauses={{
                title: "Why Maintenance Matters",
                content: [
                    <p key="1">The body needs time to stabilize (Satmya). Returning to stress too quickly can undo deep healing work. Maintenance supports the rebuilding of **Ojas** (vital immunity) which is often depleted after major illness or intensive procedures.</p>
                ]
            }}

            approachSection={{
                title: "Maintenance Therapies",
                therapies: [
                    {
                        title: "Rejuvenation (Rasayana)",
                        items: [
                            "Nourishing tones to rebuild strength",
                            "Gentle massage to maintain circulation"
                        ]
                    },
                    {
                        title: "Lifestyle Design",
                        items: [
                            "Creating a realistic home routine",
                            "Meal planning for busy schedules"
                        ]
                    },
                    {
                        title: "Quarterly Check-ins",
                        items: [
                            "Short 3-day retreats to reset",
                            "Regular consultations to adjust herbs"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Maintenance Journey",
                steps: [
                    {
                        title: "Month 1 Post-Treatment",
                        items: [
                            "Guidance on reintegration",
                            "Stabilizing energy"
                        ]
                    },
                    {
                        title: "Ongoing",
                        items: [
                            "Seasonal adjustments to diet/routine",
                            "Prevention of recurrence"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Sustained energy levels",
                "No return of original symptoms",
                "Feeling confident in self-care",
                "Strong immunity"
            ]}

            faqs={[
                {
                    question: "Is this only for Hillton patients?",
                    answer: "No. If you have undergone treatment elsewhere (like surgery or chemotherapy) and need support rebuilding your strength, this is for you."
                }
            ]}

            cta={{
                text: "Keep your health on track.",
                buttonText: "Plan Your Recovery",
                link: "/contact"
            }}
        />
    );
}
