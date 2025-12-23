
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQs | Hillton Prakritik Chikitsa Kendra",
    description: "Answers to common questions about natural therapies, treatments, booking and what to expect at Hillton.",
};

export default function FAQPage() {
    const faqSections = [
        {
            title: "General Questions About Hillton",
            questions: [
                {
                    q: "Is Hillton a medical clinic or a wellness center?",
                    a: "We're a holistic wellness center offering traditional natural healing systems (Naturopathy, Ayurveda, Hydrotherapy, Yoga). We're not a hospital, but we work in conjunction with medical practitioners. If you have a serious medical condition, we support your medical treatment alongside our therapies."
                },
                {
                    q: "Are your practitioners qualified?",
                    a: "Yes. All our practitioners are trained in their respective fields with proper certification and experience."
                },
                {
                    q: "Do you treat serious medical conditions?",
                    a: "We support people with serious conditions as a complement to medical care, never as a replacement. Always continue your medical treatment properly."
                },
                {
                    q: "What's the difference between Naturopathy and Ayurveda?",
                    a: "Naturopathy uses nature-based methods (mud, water, massage) to support healing. Ayurveda is a complete medical system balancing body types (Doshas). At Hillton, we combine both for comprehensive healing."
                }
            ]
        },
        {
            title: "About Specific Therapies",
            questions: [
                {
                    q: "What is Panchakarma?",
                    a: "Panchakarma is an ancient Ayurvedic detoxification process involving five main therapies for deep cleansing."
                },
                {
                    q: "Is Panchakarma safe?",
                    a: "Yes, when done by trained practitioners after assessment. We only recommend it when indicated."
                },
                {
                    q: "Will mud therapy stain my skin?",
                    a: "No, we use medicinal mud that washes off completely, leaving skin soft and rejuvenated."
                },
                {
                    q: "Is hydrotherapy safe for heart conditions?",
                    a: "Generally yes, but please tell us about your condition so we can select safe temperatures."
                }
            ]
        },
        {
            title: "First Visit & Appointments",
            questions: [
                {
                    q: "What should I wear?",
                    a: "Comfortable, loose clothes. We provide robes for therapy sessions."
                },
                {
                    q: "Should I eat before coming?",
                    a: "A light meal 2–3 hours before is fine. Don't come on a full stomach."
                },
                {
                    q: "What happens in my first appointment?",
                    a: "A detailed consultation (30–45 min), physical assessment, recommendations, and potentially your first treatment."
                },
                {
                    q: "How far in advance should I book?",
                    a: "We recommend 3–7 days, but try to accommodate same-week bookings."
                }
            ]
        },
        {
            title: "Cost & Payments",
            questions: [
                {
                    q: "Do you offer package discounts?",
                    a: "Yes. Booking multiple sessions or a structured program usually includes a 10–20% discount."
                },
                {
                    q: "Do you accept insurance?",
                    a: "Most standard health insurance doesn't cover natural therapies yet, but check with your provider."
                }
            ]
        },
        {
            title: "Health & Safety",
            questions: [
                {
                    q: "Will these therapies interfere with my medications?",
                    a: "Generally no. Therapies like massage and yoga are safe. Some herbs may interact, so please disclose all medications."
                },
                {
                    q: "What if I'm pregnant?",
                    a: "Many therapies are safe, but some need modification. Tell us so we can adapt the treatment."
                },
                {
                    q: "Are there any conditions you don't treat?",
                    a: "We support most conditions but do not replace acute medical intervention (surgery, emergency care)."
                }
            ]
        },
        {
            title: "Results & Expectations",
            questions: [
                {
                    q: "How long before I see results?",
                    a: "Stress often improves in 1–2 weeks; chronic pain in 2–4 weeks; skin issues in 8–12 weeks. Consistency is key."
                },
                {
                    q: "How long do results last?",
                    a: "If you maintain the recommended lifestyle changes, results are lasting."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-700">

            {/* Hero */}
            <section className="bg-teal-900 text-cream-50 py-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                        Answers to common questions about natural therapies, treatments, and what to expect at Hillton.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 container mx-auto max-w-4xl">
                <div className="space-y-16">
                    {faqSections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-8 border-b border-stone-200 pb-4">{section.title}</h2>
                            <div className="grid gap-6">
                                {section.questions.map((item, qIdx) => (
                                    <div key={qIdx} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                                        <h3 className="font-bold text-lg text-stone-800 mb-3">{item.q}</h3>
                                        <p className="text-stone-600 leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
