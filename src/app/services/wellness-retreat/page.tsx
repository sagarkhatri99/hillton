
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Yoga, Meditation & Wellness Retreat | Stress Relief & Mental Health | Hillton",
    description: "Wellness & Retreat programs at Hillton: Yoga therapy, meditation, sound healing and deep relaxation for stress relief.",
};

export default function WellnessPage() {
    return (
        <ServicePageTemplate
            title="Wellness & Retreat Programs"
            subtitle="More than just treatment – A reset for your whole self."

            introText={[
                <p key="1">Not every visit needs to be intensive medical treatment. Our Wellness & Retreat offerings are for those who want to slow down, reset their nervous system and care intentionally for mental and emotional wellbeing.</p>,
                <p key="2" className="mt-4">Whether you're burnt out, stressed, preparing for a big change or simply want to take time to remember what feeling good feels like – these programs are designed for you.</p>
            ]}

            keyTherapies={[
                {
                    title: "Yoga Therapy",
                    description: "Gentle, guided yoga sessions tailored to your body's current capacity and needs – not generic group fitness.",
                    items: [
                        "Gentle, therapeutic movements",
                        "Modifications for all bodies",
                        "Focus on breath and nervous system",
                        "Poses held longer for therapeutic benefit"
                    ],
                    duration: "45–60 minutes"
                },
                {
                    title: "Meditation & Breath Practices",
                    description: "Guided meditation and pranayama tailored to your current mental state.",
                    items: [
                        "Focused Attention Meditation",
                        "Body Scan Meditation",
                        "Loving-Kindness Meditation",
                        "Breath Work (Pranayama) for calming or energizing"
                    ],
                    duration: "20–45 minutes"
                },
                {
                    title: "Sound Healing Therapy",
                    description: "Use of specific sounds, instruments (singing bowls, gongs) and frequencies to encourage deep relaxation.",
                    items: [
                        "Deep relaxation and stress relief",
                        "Pain reduction",
                        "Improved sleep",
                        "Enhanced mood and emotional clearing"
                    ],
                    duration: "45–60 minutes"
                },
                {
                    title: "Deep Relaxation (Yoga Nidra)",
                    description: "Structured, guided lying-down sessions combining breath awareness and deep conscious rest.",
                    items: [
                        "Yoga Nidra (yogic sleep)",
                        "Conscious rest",
                        "Reduces deep-seated tension"
                    ],
                    duration: "30–60 minutes"
                }
            ]}

            bestFor={[
                "Stress management",
                "Sleep issues and insomnia",
                "Mental fatigue / Burnout",
                "Emotional balance",
                "Prevention and maintenance",
                "Those seeking a 'reset'"
            ]}

            timelineSteps={[
                {
                    title: "Assessment",
                    duration: "Day 1",
                    description: "We discuss your stress levels, goals, and comfort with different practices."
                },
                {
                    title: "Daily Practice",
                    duration: "Ongoing",
                    description: "A mix of morning yoga, afternoon rest/nidra, and evening meditation tailored to you."
                },
                {
                    title: "Integration",
                    duration: "Final Day",
                    description: "We help you design a simple 10-15 minute home routine to keep the calm."
                }
            ]}

            faqs={[
                {
                    question: "Do I need to be flexible to do Yoga Therapy?",
                    answer: "Not at all. Yoga therapy is about function and breath, not touching your toes. We use props and chairs if needed."
                },
                {
                    question: "Is this a religious practice?",
                    answer: "No. Our wellness programs are secular and focused on physiological and mental health benefits."
                },
                {
                    question: "Can I just come for a weekend?",
                    answer: <span>Yes! We offer 2-day and 3-day <Link href="/services/wellness-retreat" className="text-secondary hover:underline">wellness retreat packages</Link> perfect for a quick reset.</span>
                }
            ]}

            ctaText="Time to prioritize your peace."
            ctaButtonText="Book a Wellness Retreat"
            ctaLink="/contact"
        />
    );
}
