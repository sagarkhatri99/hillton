
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Arthritis & Joint Pain Treatment | Natural Solutions | Hillton",
    description: "Natural relief for arthritis and joint pain through Ayurveda, mud therapy, and specialized massage therapy.",
};

export default function ArthritisPage() {
    return (
        <ConditionPageTemplate
            title="Arthritis & Joint Pain – Natural Relief & Recovery"
            subtitle="Chronic joint pain doesn't have to be permanent. Learn how Ayurvedic therapies, mud applications and targeted massage can restore mobility and comfort."

            whatIsSection={{
                title: "Understanding Arthritis & Joint Pain",
                content: [
                    <p key="1">Arthritis is inflammation of one or more joints, causing pain, stiffness and reduced mobility. It can develop over time (osteoarthritis) or appear suddenly (rheumatoid arthritis). Additional musculoskeletal pain can arise from poor posture, overuse, age-related changes or injury.</p>,
                    <p key="2" className="mt-4">Most conventional approaches focus on pain management through medications or injections. While these can help acutely, they don't address the root cause – inflammation, weak tissue, poor circulation and accumulated toxins (Ama).</p>
                ]
            }}

            symptoms={[
                "Joint pain (constant or intermittent)",
                "Stiffness, especially in the morning",
                "Swelling or redness around joints",
                "Reduced range of motion",
                "Weakness in affected limbs",
                "Creaking or grinding sensation",
                "Pain that worsens with certain movements",
                "Fatigue from chronic pain"
            ]}

            rootCauses={{
                title: "What Causes Arthritis & Joint Pain?",
                content: [
                    <p key="1">From an Ayurvedic perspective, arthritis is usually caused by deeper imbalances in the body's elements and digestion.</p>
                ],
                listItems: [
                    "**Vata Imbalance:** Aggravated Vata (air element) causes dryness, stiffness and pain in joints. Lack of nourishment to joints.",
                    "**Ama (Toxins):** Poor digestion allows toxins to accumulate in joints, causing inflammation.",
                    "**Poor Circulation:** Reduced blood flow to joints limits healing and increases stiffness.",
                    "**Age-Related Changes:** Decline in natural lubrication and nutrient delivery to joints over time.",
                    "**Lifestyle Factors:** Sedentary habits, poor posture, irregular routines, stress and inadequate rest.",
                    "**Diet:** Excessive cold, dry or inflammatory foods that aggravate Vata."
                ]
            }}

            approachSection={{
                title: "Natural Treatment for Arthritis at Hillton",
                intro: <p>Rather than suppressing pain, we focus on reducing inflammation, nourishing joints, improving circulation, and clearing toxins.</p>,
                therapies: [
                    {
                        title: "Mud Therapy & Joint Packs",
                        items: [
                            "Full-body mud applications reduce heat and inflammation",
                            "Targeted mud packs on affected joints draw out toxins",
                            "Reduces swelling and pain naturally"
                        ],
                        duration: "2–3 sessions per week"
                    },
                    {
                        title: "Warm Oil Massage & Potli",
                        items: [
                            "Warm medicated oils penetrate deep into joints",
                            "Potli (herbal bolus) massage applies concentrated heat",
                            "Reduces stiffness and improves mobility"
                        ],
                        duration: "1–2 sessions per week"
                    },
                    {
                        title: "Targeted Hydrotherapy",
                        items: [
                            "Warm baths and therapeutic fomentation",
                            "Contrast baths to improve circulation",
                            "Reduces pain perception"
                        ],
                        duration: "2–3 per week"
                    },
                    {
                        title: "Ayurvedic Panchakarma",
                        description: "If indicated for chronic cases.",
                        items: [
                            "Virechan (purgation) clears inflammation",
                            "Basti (oil enema) nourishes Vata and joints",
                            "Deepest level of healing"
                        ],
                        duration: "7–21 day program"
                    }
                ]
            }}

            timeline={{
                title: "Your Journey With Arthritis Treatment",
                steps: [
                    {
                        title: "Weeks 1–2: Initial Relief",
                        items: [
                            "Pain starts reducing with regular massage",
                            "Stiffness decreases, especially in mornings",
                            "Better sleep due to pain reduction"
                        ]
                    },
                    {
                        title: "Weeks 3–4: Visible Improvement",
                        items: [
                            "Noticeably better mobility",
                            "Inflammation visibly reduced",
                            "Increased ability to move without medication"
                        ]
                    },
                    {
                        title: "Weeks 4–8: Sustained Recovery",
                        items: [
                            "Significant improvement in pain",
                            "Return to activities previously limited",
                            "Reduced medication dependence"
                        ]
                    },
                    {
                        title: "Months 2–3: Long-Term Management",
                        items: [
                            "Pain is manageable and often minimal",
                            "Focus shifts to maintenance",
                            "Home practices sustain improvement"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Morning stiffness decreases",
                "Pain reduces even when not actively treating",
                "Range of motion improves",
                "Ability to climb stairs, bend, or grip improves",
                "Sleep quality improves",
                "Reduction or elimination of pain medications"
            ]}

            faqs={[
                {
                    question: "Can arthritis be completely cured?",
                    answer: "Depending on type and duration, significant improvement is possible. Osteoarthritis may never fully 'disappear' but becomes manageable and often painless. Rheumatoid arthritis can be well-controlled."
                },
                {
                    question: "How long before I notice improvement?",
                    answer: "Most people notice reduced pain and stiffness within 2–4 weeks of consistent treatment."
                },
                {
                    question: "Can I do this alongside my current medications?",
                    answer: "Yes. As you improve, many people can reduce medications with doctor approval. Never stop medications on your own."
                }
            ]}

            cta={{
                text: "Ready to reduce pain and restore mobility?",
                buttonText: "Book an Arthritis Consultation",
                link: "/contact"
            }}
        />
    );
}
