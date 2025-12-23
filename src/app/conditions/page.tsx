
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conditions We Support | Natural Treatment for Chronic Issues | Hillton",
    description: "Explore natural treatments for arthritis, diabetes, digestive issues, and more at Hillton using Naturopathy & Ayurveda.",
};

// Updated list matching the 18 Markdown definitions
const conditionsList = [
    { name: "Arthritis & Joint Pain", slug: "arthritis-joint-pain", description: "Natural relief for chronic pain, stiffness, and inflammation." },
    { name: "Obesity & Weight Gain", slug: "obesity-weight-gain", description: "Sustainable metabolic resetting and weight management." },
    { name: "Lifestyle Disorders", slug: "lifestyle-disorders", description: "Prevent and reverse hypertension, cholesterol, and metabolic issues." },
    { name: "Type 2 Diabetes", slug: "diabetes", description: "Natural blood sugar regulation and management." },
    { name: "PCOS & PCOD", slug: "pcos-pcod", description: "Hormonal balance, fertility, and cycle regulation." },
    { name: "High Blood Pressure", slug: "hypertension", description: "Natural strategies for managing and lowering blood pressure." },
    { name: "Musculoskeletal Disorders", slug: "musculoskeletal-disorders", description: "Relief for back pain, neck pain, and postural issues." },
    { name: "Neurological Disorders", slug: "neurological-disorders", description: "Support for neuropathy, tremors, and nerve health." },
    { name: "Stress & Anxiety", slug: "stress-anxiety", description: "Nervous system regulation and deep mental relief." },
    { name: "Migraine & Headache", slug: "migraine-headache", description: "Natural pain relief and trigger management." },
    { name: "Skin & Hair Disorders", slug: "skin-hair-disorders", description: "Treatment for acne, eczema, psoriasis, and hair health." },
    { name: "Psychological Disorders", slug: "psychological-disorders", description: "Holistic support for depression, emotional balance, and mood." },
    { name: "Hormonal Imbalance", slug: "hormonal-imbalance", description: "Thyroid support, menopause, and endocrine health." },
    { name: "Natural Anti-Aging", slug: "anti-aging", description: "Rejuvenation therapies for longevity and vitality." },
    { name: "Gastrointestinal Disorders", slug: "gastrointestinal-disorders", description: "Heal IBS, acidity, bloating, and digestive weakness." },
    { name: "Respiratory Disorders", slug: "respiratory-disorders", description: "Improve lung capacity, asthma, and immunity." },
    { name: "Cardiovascular Disorders", slug: "cardiovascular-disorders", description: "Heart health support and risk reduction." },
    { name: "Post-Treatment Recovery", slug: "post-treatment-recovery", description: "Sustain your health gains and prevent relapse." },
];

export default function ConditionsHub() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-700 bg-stone-50 animate-fade-in">

            {/* Hero */}
            <section className="bg-teal-900 text-cream-50 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Conditions We Support</h1>
                    <p className="text-xl opacity-90 leading-relaxed mb-6">
                        Chronic conditions often have deep roots. At Hillton, we don't just suppress symptoms – we address the underlying imbalances that cause disease.
                    </p>
                </div>
            </section>

            {/* Conditions List */}
            <section className="py-20 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {conditionsList.map((condition, index) => (
                                <Link key={index} href={`/conditions/${condition.slug}`} className="card-hover group p-6 rounded-xl border border-stone-100 hover:border-primary/30 hover:shadow-md transition bg-cream-50/50">
                                    <h3 className="font-serif text-xl font-bold text-stone-800 group-hover:text-primary transition mb-2 flex items-center justify-between">
                                        {condition.name}
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    </h3>
                                    <p className="text-sm text-stone-500">{condition.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-6">Don't see your condition listed?</h2>
                    <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
                        We treat a wide range of health concerns. Contact us to discuss your specific needs with our lead practitioner.
                    </p>
                    <Link href="/contact" className="btn-hover bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-medium transition inline-flex items-center gap-2">
                        Talk to a Professional <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
