
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cardiovascular Disorder Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural support for heart health, cholesterol, and circulation at Hillton using Ayurvedic prevention strategies.",
};

export default function CardioPage() {
    return (
        <ConditionPageTemplate
            title="Heart Health & Cardiovascular Support – Natural Prevention"
            subtitle="Protect your heart naturally. Manage cholesterol, improve circulation, and reduce cardiac risk factors through holistic care."

            whatIsSection={{
                title: "Holistic Heart Care",
                content: [
                    <p key="1">In Ayurveda, the heart is the seat of consciousness as well as a physical pump. Cardiovascular issues often arise from **stress**, **poor diet** (clogging channels), and **sedentary living**.</p>,
                    <p key="2" className="mt-4">Our program is preventive and supportive. We focus on keeping blood vessels clear, reducing stress on the heart, and strengthening cardiac muscle naturally.</p>
                ]
            }}

            symptoms={[
                "High cholesterol levels",
                "Poor circulation (cold hands/feet)",
                "Palpitations (not requiring emergency care)",
                "Shortness of breath",
                "Fatigue",
                "Family history of heart disease"
            ]}

            rootCauses={{
                title: "Risk Factors",
                content: [],
                listItems: [
                    "**Thickened Blood (Kapha/Ama):** High cholesterol and triglycerides.",
                    "**Hardened Arteries (Vata):** Loss of flexibility in vessels.",
                    "**Inflammation (Pitta):** damaging vessel walls.",
                    "**Emotional Stress:** Direct strain on the heart."
                ]
            }}

            approachSection={{
                title: "Natural Heart Therapies",
                therapies: [
                    {
                        title: "Dietary Modification",
                        items: [
                            "Heart-healthy, anti-inflammatory diet",
                            "Reducing heavy fats and processed foods"
                        ]
                    },
                    {
                        title: "Herbal Prevention",
                        items: [
                            "Arjuna Bark (renowned heart tonic)",
                            "Garlic and Guggulu for cholesterol management"
                        ]
                    },
                    {
                        title: "Stress Management",
                        items: [
                            "Yoga and meditation to lower cortisol",
                            "Relaxation therapies to reduce load on the heart"
                        ]
                    },
                    {
                        title: "Gentle Movement",
                        items: [
                            "Safe exercise plans to improve cardiovascular fitness"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Prevention Timeline",
                steps: [
                    {
                        title: "Weeks 4–8",
                        items: [
                            "Improvement in energy",
                            "Better circulation",
                            "Initial changes in cholesterol markers"
                        ]
                    },
                    {
                        title: "Months 3–6",
                        items: [
                            "Sustainable weight management",
                            "Reduced cardiac risk profile",
                            "Mental peace"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Normalized cholesterol levels",
                "Warm hands and feet",
                "Stable heart rate",
                "Feeling calm and resilient"
            ]}

            faqs={[
                {
                    question: "Can I do this if I've had heart surgery?",
                    answer: "Yes, our programs are gentle and supportive for recovery, but we always coordinate with your cardiologist."
                },
                {
                    question: "Will herbs interfere with blood thinners?",
                    answer: "Some can. It is crucial to disclose all medications so our doctors can prescribe safely."
                }
            ]}

            cta={{
                text: "Invest in your heart's future.",
                buttonText: "Book Heart Health Consult",
                link: "/contact"
            }}
        />
    );
}
