
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Musculoskeletal Pain Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Relief for back pain, neck pain, and postural issues at Hillton using massage, mud packs, and yoga therapy.",
};

export default function MusculoskeletalPage() {
    return (
        <ConditionPageTemplate
            title="Musculoskeletal Pain & Postural Issues – Natural Relief"
            subtitle="Chronic pain often stems from poor posture, muscle weakness, or old injuries. Restore alignment and comfort with targeted natural therapies."

            whatIsSection={{
                title: "Relieving Musculoskeletal Pain",
                content: [
                    <p key="1">Musculoskeletal disorders affect muscles, bones, nerves, and tendons. Whether it's chronic back pain, stiff neck from computer work, or generalized muscle weakness, these conditions impact daily quality of life.</p>,
                    <p key="2" className="mt-4">Our approach combines manual therapy (massage) to release tension, mud therapy to reduce inflammation, and yoga therapy to correct posture and strengthen the body against future pain.</p>
                ]
            }}

            symptoms={[
                "Chronic back or neck pain",
                "Stiffness after sitting or upon waking",
                "Muscle weakness",
                "Limited range of motion",
                "Postural misalignment (hunching)",
                "Recurring tension headaches"
            ]}

            rootCauses={{
                title: "Common Causes",
                content: [],
                listItems: [
                    "**Sedentary Lifestyle:** Weakens core muscles supporting the spine.",
                    "**Poor Posture:** Tech neck and slouching strain muscles.",
                    "**Vata Imbalance:** Dryness and stiffness in joints and tissues.",
                    "**Ama (Toxins):** Accumulation in muscles leading to stiffness."
                ]
            }}

            approachSection={{
                title: "Our Natural Approach",
                therapies: [
                    {
                        title: "Manual Therapy",
                        items: [
                            "Deep tissue massage to release knots",
                            "Potli massage for heat and herbal penetration"
                        ]
                    },
                    {
                        title: "Mud Therapy",
                        items: [
                            "Localized packs to draw out inflammation",
                            "Cooling applications for acute pain"
                        ]
                    },
                    {
                        title: "Yoga Therapy",
                        items: [
                            "Postural correction exercises",
                            "Gentle strengthening for core stability",
                            "Stretching to improve flexibility"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Recovery Timeline",
                steps: [
                    {
                        title: "Weeks 1–2",
                        items: [
                            "Reduced acute pain",
                            "Better range of motion"
                        ]
                    },
                    {
                        title: "Weeks 3–6",
                        items: [
                            "Significant improvement in posture",
                            "Lasting pain relief",
                            "Strengthened muscles"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Ability to stand/sit longer without pain",
                "Better flexibility",
                "Reduced need for painkillers",
                "Feeling taller and more aligned"
            ]}

            faqs={[
                {
                    question: "Will massage hurt?",
                    answer: "Therapeutic massage can sometimes find tender spots, but we adjust pressure to your comfort level. It should feel like 'good pain' that releases tension."
                },
                {
                    question: "Can yoga help back pain?",
                    answer: "Yes, specific therapeutic yoga is one of the most effective ways to heal and prevent back pain long-term."
                }
            ]}

            cta={{
                text: "Move freely again without pain.",
                buttonText: "Book Pain Consultation",
                link: "/contact"
            }}
        />
    );
}
