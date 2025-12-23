
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Hillton Prakritik Chikitsa Kendra",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-700">
            {/* Hero */}
            <section className="bg-teal-900 text-cream-50 py-16 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="mt-4 opacity-80">Last Updated: December 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 container mx-auto max-w-3xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 prose prose-lg prose-stone max-w-none">

                    <h3>1. Introduction</h3>
                    <p>This Privacy Policy explains how Hillton Prakritik Chikitsa Kendra ("we," "us," "our") collects, uses, protects and shares your personal information when you visit our website or book services.</p>

                    <h3>2. Information We Collect</h3>
                    <p><strong>Personal Information:</strong></p>
                    <ul>
                        <li>Name, email, phone number (from contact form)</li>
                        <li>Age and health information (from consultation)</li>
                        <li>Payment information (if booking services)</li>
                    </ul>
                    <p><strong>Automatic Information:</strong></p>
                    <ul>
                        <li>Browser type, IP address, pages visited</li>
                        <li>Device information</li>
                        <li>Usage patterns (via Google Analytics)</li>
                    </ul>

                    <h3>3. How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Schedule and manage your appointments</li>
                        <li>Provide personalized health recommendations</li>
                        <li>Send appointment reminders</li>
                        <li>Respond to inquiries and improve our services</li>
                    </ul>

                    <h3>4. Data Protection</h3>
                    <p>We protect your data through secure website protocols (HTTPS/SSL), access restrictions (only staff who need to know), and regular security updates. We never share your details with third parties for marketing without consent.</p>

                    <h3>5. Your Rights</h3>
                    <p>You have the right to access your personal data, correct inaccurate information, request deletion (with some legal exceptions), and opt-out of communications.</p>

                    <h3>6. Contact Us</h3>
                    <p>For privacy concerns, please contact us at info@hillton.com.</p>

                </div>
            </section>
        </div>
    );
}
