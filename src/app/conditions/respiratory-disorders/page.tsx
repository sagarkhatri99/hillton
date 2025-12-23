
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Respiratory Disorder Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural treatment for asthma, allergies, and respiratory issues at Hillton. Improve lung capacity and immunity.",
};

export default function RespiratoryPage() {
    return (
        <ConditionPageTemplate
            title="Respiratory Health – Natural Breathing Support"
            subtitle="Breath is life. Strengthen your lungs, clear congestion, and manage conditions like asthma and sinusitis naturally."

            whatIsSection={{
                title: "Breathe Freely",
                content: [
                    <p key="1">Respiratory issues often stem from an accumulation of **Kapha** (mucus/congestion) or low immunity. Shallow breathing and environmental pollutants worsen the problem.</p>,
                    <p key="2" className="mt-4">Our therapies focus on clearing the airways, reducing inflammation in the respiratory tract, and strengthening the lungs through breathwork (Pranayama) and herbal support.</p>
                ]
            }}

            symptoms={[
                "Chronic cough or congestion",
                "Shortness of breath",
                "Frequent sinus infections",
                "Wheezing or asthma",
                "Seasonal allergies",
                "Low immunity"
            ]}

            rootCauses={{
                title: "Causes of Respiratory Distress",
                content: [],
                listItems: [
                    "**Kapha Aggravation:** Excess mucus production blocking channels.",
                    "**Low Immunity (Ojas):** Susceptibility to infections and allergens.",
                    "**Poor Digestion:** Producing mucus-forming toxins.",
                    "**Stress:** Causing shallow, constricted breathing."
                ]
            }}

            approachSection={{
                title: "Natural Respiratory Care",
                therapies: [
                    {
                        title: "Nasya & Inhalation",
                        items: [
                            "Herbal nasal drops to clear sinuses",
                            "Steam inhalation with eucalyptus and camphor"
                        ]
                    },
                    {
                        title: "Deep Breathing (Pranayama)",
                        items: [
                            "Exercises to expand lung capacity",
                            "Strengthening respiratory muscles"
                        ]
                    },
                    {
                        title: "Herbal Support",
                        items: [
                            "Tulsi, Licorice, and Pippali for lung health",
                            "Immunity-boosting formulations"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Improvement Timeline",
                steps: [
                    {
                        title: "Weeks 1–2",
                        items: [
                            "Clearer sinuses",
                            "Easier breathing at night"
                        ]
                    },
                    {
                        title: "Weeks 4–8",
                        items: [
                            "Fewer allergic reactions",
                            "Reduced inhaler usage (with doctor approval)",
                            "Improved stamina"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Waking up without congestion",
                "Ability to climb stairs without breathlessness",
                "Fewer seasonal colds",
                "Deep, effortless breathing"
            ]}

            faqs={[
                {
                    question: "Can Pranayama help asthma?",
                    answer: "Yes, specific breathing exercises can significantly improve lung function and control over asthma symptoms."
                }
            ]}

            cta={{
                text: "Take a deep breath.",
                buttonText: "Book Respiratory Assessment",
                link: "/contact"
            }}
        />
    );
}
