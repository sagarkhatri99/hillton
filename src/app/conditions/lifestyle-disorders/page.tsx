
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Lifestyle Disorder Management | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural treatment for hypertension, cholesterol, and pre-diabetes at Hillton. Reverse lifestyle disorders with holistic care.",
};

export default function LifestyleDisordersPage() {
    return (
        <ConditionPageTemplate
            title="Lifestyle Disorder Management – Prevent & Reverse Disease"
            subtitle="High blood pressure, pre-diabetes, high cholesterol – these don't appear overnight. Learn how lifestyle changes and natural therapies can prevent and often reverse them."

            whatIsSection={{
                title: "Understanding Lifestyle Disorders",
                content: [
                    <p key="1">Lifestyle disorders are conditions directly caused or worsened by how we live: what we eat, how much we move, how we manage stress, how we sleep.</p>,
                    <p key="2" className="mt-4">Common lifestyle disorders include High blood pressure (Hypertension), Pre-diabetes, High cholesterol, and Heart disease risk. Unlike infectious diseases, lifestyle disorders develop slowly and can also be reversed or significantly improved through lifestyle changes combined with natural therapies.</p>
                ]
            }}

            symptoms={[
                "High blood pressure readings",
                "Elevated blood sugar",
                "High cholesterol levels",
                "Chronic fatigue",
                "Weight gain around the midsection",
                "Poor sleep quality",
                "Brain fog or difficulty concentrating",
                "Shortness of breath with minimal exertion"
            ]}

            rootCauses={{
                title: "Why Lifestyle Disorders Develop",
                content: [],
                listItems: [
                    "**Poor Diet:** Processed, heavy, inflammatory foods overload the system",
                    "**Sedentary Lifestyle:** Lack of movement causes metabolic decline",
                    "**Chronic Stress:** Long-term tension dysregulates hormones and immunity",
                    "**Poor Sleep:** Less than 7 hours impairs metabolism, mood and immunity",
                    "**Toxic Overload:** Poor digestion allows toxins to accumulate (Ama)",
                    "**Hormonal Imbalance:** Stress hormones elevate continuously",
                    "**Weak Digestion:** Can't properly process food, creating inflammation"
                ]
            }}

            approachSection={{
                title: "Reversing Lifestyle Disorders Naturally",
                therapies: [
                    {
                        title: "Detoxification",
                        items: [
                            "Remove accumulated toxins (Ama) through hydrotherapy and mud therapy",
                            "1–2 week intensive detox program or ongoing weekly sessions"
                        ]
                    },
                    {
                        title: "Metabolism Reset",
                        items: [
                            "Strengthen digestive fire through herbal support and dietary changes",
                            "Panchakarma for deep reset if needed"
                        ]
                    },
                    {
                        title: "Stress & Sleep Support",
                        items: [
                            "Meditation and breathing practices",
                            "Massage for nervous system calming",
                            "Sleep hygiene guidance"
                        ]
                    },
                    {
                        title: "Nutrition Overhaul",
                        items: [
                            "Whole foods only",
                            "Elimination of processed items",
                            "Cooking methods that support digestion",
                            "Timing of meals for optimal metabolism"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "When You'll See Results",
                steps: [
                    {
                        title: "Weeks 1–2",
                        items: [
                            "More energy",
                            "Better sleep",
                            "Reduced inflammation",
                            "Blood pressure and glucose readings improve"
                        ]
                    },
                    {
                        title: "Weeks 3–6",
                        items: [
                            "Significant energy increase",
                            "Weight loss begins",
                            "Mental clarity improves",
                            "Lab markers improving"
                        ]
                    },
                    {
                        title: "Months 2–3",
                        items: [
                            "Consistent improvement in measurements",
                            "Medications may reduce (with doctor approval)",
                            "Sustainable new habits forming"
                        ]
                    },
                    {
                        title: "Months 3–6",
                        items: [
                            "Disease markers normalizing",
                            "Return to fitness and strength",
                            "Prevention of future disease progression"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Blood pressure stabilizing",
                "Blood sugar levels normalizing",
                "Improved energy levels",
                "Better sleep quality",
                "Weight loss",
                "Reduced need for medication"
            ]}

            faqs={[
                {
                    question: "Can I stop my medication?",
                    answer: "Never stop medication on your own. As your condition improves through lifestyle changes, your doctor can guide you in reducing dosages."
                },
                {
                    question: "Is this a temporary diet?",
                    answer: "No, we help you build a sustainable way of eating and living that you can maintain long-term to keep diseases away."
                },
                {
                    question: "How long does the program take?",
                    answer: "We recommend an initial 2-3 week intensive phase to reset your system, followed by long-term maintenance habits."
                }
            ]}

            cta={{
                text: "Don't wait for disease to fully develop.",
                buttonText: "Book a Lifestyle Assessment",
                link: "/contact"
            }}
        />
    );
}
