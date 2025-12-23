
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Migraine & Headache Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Natural relief for migraines and chronic headaches at Hillton. Address root causes like stress and digestion.",
};

export default function MigrainePage() {
    return (
        <ConditionPageTemplate
            title="Migraine & Headache Management – Natural Pain Relief"
            subtitle="Stop chasing the pain. Understand the triggers and root causes of your headaches to find lasting relief."

            whatIsSection={{
                title: "Understanding Headaches",
                content: [
                    <p key="1">Migraines and chronic headaches are rarely just about the head. They often stem from digestive issues, hormonal fluctuations, accumulated heat (Pitta), or deep-seated tension.</p>,
                    <p key="2" className="mt-4">We treat the whole person, not just the pain. By identifying your unique triggers—whether food, stress, or posture—we can reduce the frequency and intensity of attacks.</p>
                ]
            }}

            symptoms={[
                "Throbbing head pain",
                "Sensitivity to light or sound",
                "Nausea or vomiting",
                "Aura (visual disturbances)",
                "Neck stiffness",
                "Pain worsening with movement"
            ]}

            rootCauses={{
                title: "Common Triggers & Causes",
                content: [],
                listItems: [
                    "**Pitta Imbalance:** Excess heat in the blood and liver.",
                    "**Digestive Toxins:** Poor digestion triggering inflammation.",
                    "**Sinus Congestion:** Blockages causing pressure.",
                    "**Stress/Tension:** Muscle tightness restricting blood flow."
                ]
            }}

            approachSection={{
                title: "Natural Headache Therapies",
                therapies: [
                    {
                        title: "Nasya (Nasal Therapy)",
                        items: [
                            "Herbal oil drops to clear sinus channels",
                            "Relieves pressure and clears the head",
                            "Directly affects the brain center"
                        ]
                    },
                    {
                        title: "Shirodhara",
                        items: [
                            "Cooling oil flow to reduce Pitta heat",
                            "Relieves deep mental tension"
                        ]
                    },
                    {
                        title: "Dietary Changes",
                        items: [
                            "Identifying food triggers (aged cheeses, wine, etc.)",
                            "Cooling, anti-inflammatory foods"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Recovery Timeline",
                steps: [
                    {
                        title: "Weeks 2–4",
                        items: [
                            "Reduction in intensity of attacks",
                            "Less reliance on painkillers"
                        ]
                    },
                    {
                        title: "Months 2–3",
                        items: [
                            "Significant reduction in frequency",
                            "Better management of triggers"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Fewer headache days per month",
                "Attacks are shorter and less severe",
                "Reduced nausea",
                "Clearer mind"
            ]}

            faqs={[
                {
                    question: "Can diet really stop migraines?",
                    answer: "For many people, yes. Trigger foods are a major cause. We help you identify them."
                },
                {
                    question: "Is Nasya uncomfortable?",
                    answer: "It can feel unusual at first, but most patients find the relief it provides to be well worth it."
                }
            ]}

            cta={{
                text: "Live life without the fear of the next headache.",
                buttonText: "Book Migraine Assessment",
                link: "/contact"
            }}
        />
    );
}
