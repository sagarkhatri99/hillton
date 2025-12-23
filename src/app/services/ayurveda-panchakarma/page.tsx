
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Panchakarma & Ayurveda Treatment | Deep Healing & Detox | Hillton",
    description: "Classical Panchakarma, Abhyanga, Shirodhara, Basti and other Ayurvedic therapies to balance doshas at Hillton.",
};

export default function AyurvedaPage() {
    return (
        <ServicePageTemplate
            title="Ayurveda & Panchakarma at Hillton"
            subtitle="Holistic restoration balancing body, mind and environment."

            introText={[
                <p key="1">Ayurveda is an ancient system of medicine (5000+ years old) that sees health as a state of balance between body, mind and environment. Rather than treating isolated symptoms, Ayurveda addresses root causes by balancing your unique constitution (Dosha).</p>,
                <p key="2" className="mt-4">Panchakarma is Ayurveda's most powerful healing process – a deep cleansing and rejuvenation protocol that removes accumulated toxins (Ama) and resets your system.</p>,
                <p key="3" className="mt-4">At Hillton, we follow classical Panchakarma principles adapted to modern life. You won't need to take months off work – we'll work with your schedule while maintaining the integrity of the process.</p>
            ]}

            keyTherapies={[
                {
                    title: "Classical Panchakarma",
                    description: "Ideally 5 main therapies, chosen based on assessment.",
                    items: [
                        "Vaman (Therapeutic Vomiting) - For Kapha issues",
                        "Virechan (Therapeutic Purgation) - For Pitta issues",
                        "Basti (Enema Therapy) - For Vata/Neurological issues",
                        "Nasya (Nasal Administration) - For Head/Neck issues",
                        "Raktamokshan (Blood Purification) - For Skin/Blood issues"
                    ]
                },
                {
                    title: "Preparation Therapies (Oleation & Fomentation)",
                    description: "Essential preparation before deep cleansing.",
                    items: [
                        "Abhyanga (Warm Oil Massage) - Nourishes tissues",
                        "Swedana (Herbal Steam) - Opens pores"
                    ]
                },
                {
                    title: "Supporting Therapies",
                    description: "Often combined with programs for specific relief.",
                    items: [
                        "Shirodhara (Oil Stream on Forehead) - Nervous system calm",
                        "Kizhi (Herbal Bolus) - Joint & muscle pain",
                        "Pichu (Oil-Soaked Cloth) - Targeted healing",
                        "Uttar Basti - Specialized organ cleansing"
                    ]
                }
            ]}

            bestFor={[
                "Chronic lifestyle disorders",
                "Digestive problems (IBS, constipation)",
                "Skin disorders (psoriasis, eczema)",
                "Hormonal imbalances (PCOS, menopause)",
                "Neurological concerns (anxiety, sleep)",
                "Musculoskeletal pain (arthritis)",
                "General detoxification and immunity"
            ]}

            timelineSteps={[
                {
                    title: "Pre-Panchakarma (Days 1–7)",
                    description: "Daily massage (Abhyanga) and internal oleation to loosen toxins and prepare tissues."
                },
                {
                    title: "Main Panchakarma (Days 7–14)",
                    description: "Specific cleansing therapies (Vaman/Virechan/Basti) performed based on your plan."
                },
                {
                    title: "Post-Panchakarma (Recovery)",
                    description: "Specialized diet and herbal support to rebuild digestion and energy levels."
                }
            ]}

            timelineNote="Courses typically run for 7, 14, or 21 days depending on the depth of healing needed."

            faqs={[
                {
                    question: "Is Panchakarma necessary for everyone?",
                    answer: <span>No. Panchakarma is for deep reset. Many benefit from individual therapies like Abhyanga or Shirodhara without full cleansing.</span>
                },
                {
                    question: "What if I don't have 7–21 days?",
                    answer: "Even 3–5 days of Panchakarma-inspired therapies can help. Talk to us about options that fit your schedule."
                },
                {
                    question: "Will I need to take medications?",
                    answer: "Usually no prescription meds, but we recommend specific Ayurvedic herbs for 1–3 months to sustain benefits."
                }
            ]}

            ctaText="Panchakarma is a transformative process."
            ctaButtonText="Book a Panchakarma Consultation"
            ctaLink="/contact"
        />
    );
}
