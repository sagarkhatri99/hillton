
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Medical Disclaimer | Hillton Prakritik Chikitsa Kendra",
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-700">
            {/* Hero */}
            <section className="bg-teal-900 text-cream-50 py-16 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Medical Disclaimer</h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 container mx-auto max-w-3xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 prose prose-lg prose-stone max-w-none">

                    <p className="lead text-xl text-stone-800 font-medium">
                        The information, services, and content provided by Hillton Prakritik Chikitsa Kendra are for informational and educational purposes only.
                    </p>

                    <p>
                        They are not intended as medical advice and should not be treated as a substitute for professional medical consultation, diagnosis, or treatment.
                    </p>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                        <h3 className="text-red-800 mt-0">Important Safety Information</h3>
                        <ul className="text-red-900 mb-0">
                            <li><strong>Always consult</strong> with a qualified medical doctor for serious health conditions.</li>
                            <li><strong>Do not stop</strong> prescribed medications without your doctor's approval.</li>
                            <li>If you experience <strong>severe symptoms</strong>, seek emergency medical care immediately.</li>
                            <li>Natural therapies are intended to <strong>complement</strong> medical treatment, not replace it.</li>
                        </ul>
                    </div>

                    <p>
                        Every individual is unique. Results from our therapies vary from person to person and are not guaranteed. We recommend a full consultation to understand what is suitable for your specific health needs.
                    </p>

                </div>
            </section>
        </div>
    );
}
