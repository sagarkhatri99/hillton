
import ConditionPageTemplate from '@/components/ConditionPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stress & Anxiety Treatment | Natural & Ayurvedic Solutions | Hillton",
    description: "Calm your mind and nervous system naturally at Hillton with meditation, Shirodhara, and yoga therapy.",
};

export default function StressAnxietyPage() {
    return (
        <ConditionPageTemplate
            title="Stress & Anxiety Relief – Calm Your Mind Naturally"
            subtitle="Chronic stress rewires your brain for anxiety. Reset your nervous system and find deep lasting peace with proven natural therapies."

            whatIsSection={{
                title: "Finding Calm in Chaos",
                content: [
                    <p key="1">Anxiety and stress are not just 'in your head' – they are physiological states where your nervous system is stuck in 'fight or flight'. Prolonged stress leads to burnout, insomnia, and physical illness.</p>,
                    <p key="2" className="mt-4">Our goal is to switch your body back into 'rest and digest' mode using therapies that physically soothe the nervous system, bypassing the busy mind.</p>
                ]
            }}

            symptoms={[
                "Racing thoughts",
                "Difficulty sleeping or staying asleep",
                "Muscle tension (shoulders/jaw)",
                "Irritability",
                "Fatigue despite resting",
                "Digestive issues driven by stress",
                "Panic attacks"
            ]}

            rootCauses={{
                title: "Ayurvedic View on Stress",
                content: [
                    <p key="1">Stress is a classic sign of **Vata aggravation** (excess movement in the mind) or **Pitta aggravation** (intensity and burnout).</p>
                ],
                listItems: [
                    "**Overstimulation:** Too much sensory input.",
                    "**Suppressed Emotions:** Unprocessed feelings creating internal tension.",
                    "**Irregular Routine:** Lack of grounding habits."
                ]
            }}

            approachSection={{
                title: "Natural Stress Relief Therapies",
                therapies: [
                    {
                        title: "Shirodhara",
                        description: "The ultimate stress-buster.",
                        items: [
                            "Warm oil poured on forehead",
                            "Induces a deep meditative state",
                            "Calms the hypothalamus"
                        ]
                    },
                    {
                        title: "Meditation & Breathwork",
                        items: [
                            "Guided practices to anchor the mind",
                            "Pranayama to regulate the nervous system"
                        ]
                    },
                    {
                        title: "Sound Healing",
                        items: [
                            "Vibrational therapy to release deep tension",
                            "Promotes profound relaxation"
                        ]
                    }
                ]
            }}

            timeline={{
                title: "Relief Timeline",
                steps: [
                    {
                        title: "Session 1",
                        items: [
                            "Immediate feeling of physical relaxation",
                            "Best sleep in a long time"
                        ]
                    },
                    {
                        title: "Weeks 1–3",
                        items: [
                            "Reduced baseline anxiety",
                            "Better emotional resilience",
                            "Clearer thinking"
                        ]
                    }
                ]
            }}

            signsOfProgress={[
                "Sleeping through the night",
                "Waking up refreshed",
                "Reacting calmly to stressors",
                "Reduced muscle tension"
            ]}

            faqs={[
                {
                    question: "I can't meditate. Will this work?",
                    answer: "Yes! Therapies like Shirodhara induce a meditative state passively. You don't have to 'do' anything but lie there."
                },
                {
                    question: "Is this therapy or medical treatment?",
                    answer: "It is complementary. We focus on the physiological regulation of the nervous system, which supports psychological therapy."
                }
            ]}

            cta={{
                text: "It's time to breathe again.",
                buttonText: "Book Stress Relief Session",
                link: "/contact"
            }}
        />
    );
}
