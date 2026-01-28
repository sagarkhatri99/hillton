'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPageContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        concern: '',
        description: '',
        services: [] as string[],
        contactMethod: 'phone', // Default
        time: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (service: string) => {
        setFormData(prev => {
            const services = prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service];
            return { ...prev, services };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center max-w-lg border border-stone-100">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Thank You!</h2>
                    <p className="text-stone-600 mb-8 leading-relaxed">
                        We've received your information. Our team will contact you within 24 hours to confirm your appointment and answer any questions. We're excited to support your health journey!
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-medium hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-700 animate-fade-in">

            {/* Hero */}
            <section className="bg-primary text-cream-50 py-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's Talk About Your Health Goals</h1>
                    <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto font-light">
                        Share a few details about your concerns and preferred way to connect, and our team will get in touch to suggest the most suitable starting point.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-8">Consultation Request</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Age</label>
                                        <input
                                            type="text"
                                            name="age"
                                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-stone-700">Primary Health Concern</label>
                                    <select
                                        name="concern"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select a concern...</option>
                                        <option value="Arthritis & Joint Pain">Arthritis & Joint Pain</option>
                                        <option value="Stress & Anxiety">Stress & Anxiety</option>
                                        <option value="Skin Issues">Skin Issues</option>
                                        <option value="Obesity & Weight Gain">Obesity & Weight Gain</option>
                                        <option value="Digestive Disorders">Digestive Disorders</option>
                                        <option value="Other">Other (Please describe below)</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-stone-700">Brief Description</label>
                                    <textarea
                                        name="description"
                                        rows={3}
                                        placeholder="Tell us a bit about what you're experiencing..."
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-stone-700">Preferred Service Category</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Naturopathy', 'Hydrotherapy', 'Ayurveda', 'Wellness'].map(service => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => handleServiceChange(service)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${formData.services.includes(service)
                                                    ? 'bg-secondary text-white border-secondary'
                                                    : 'bg-white text-stone-600 border-stone-200 hover:border-secondary'
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Preferred Contact Method</label>
                                        <div className="flex gap-4 pt-2">
                                            {['Phone Call', 'WhatsApp', 'Email'].map(method => (
                                                <label key={method} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="contactMethod"
                                                        value={method}
                                                        checked={formData.contactMethod === method}
                                                        onChange={handleInputChange}
                                                        className="text-secondary focus:ring-secondary"
                                                    />
                                                    <span className="text-sm">{method}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-stone-700">Preferred Time</label>
                                        <select
                                            name="time"
                                            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Anytime</option>
                                            <option value="Morning">Morning</option>
                                            <option value="Afternoon">Afternoon</option>
                                            <option value="Evening">Evening</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-stone-700">Additional Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-stone-50"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-hover w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
                                >
                                    Send My Information
                                </button>

                            </form>
                        </div>

                        {/* First Appointment FAQ */}
                        <div className="mt-12 bg-cream-50 rounded-3xl p-8 md:p-10 border border-stone-100">
                            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">About Your First Appointment</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-2">Q: How long is the first consultation?</h3>
                                    <p className="text-stone-600">A: First appointments are typically 60–90 minutes. This includes assessment, evaluation and initial recommendations.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-2">Q: Do I need to bring anything?</h3>
                                    <p className="text-stone-600">A: Please bring any recent medical reports, a list of current medications, and your health history. Comfortable clothes are appreciated.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-2">Q: What if I&apos;m new to natural therapies?</h3>
                                    <p className="text-stone-600">A: Perfect! Our practitioners explain everything clearly. No prior knowledge needed.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-2">Q: What&apos;s your cancellation policy?</h3>
                                    <p className="text-stone-600">A: Cancellations must be made at least 48 hours in advance for a full refund/reschedule.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Info */}
                    <div className="space-y-8">

                        {/* Contact Methods */}
                        <div className="bg-primary text-cream-50 rounded-3xl p-8 shadow-md">
                            <h2 className="font-serif text-2xl font-bold mb-6">Other Ways to Reach Us</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-sm opacity-80 mb-2">Monday – Sunday, 8:00 AM – 8:00 PM</p>
                                        <a href="tel:+919266423944" className="text-secondary font-bold hover:underline block mb-1">+91 9266423944</a>
                                        <span className="text-xs opacity-60">Open 7 days a week</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <MessageCircle size={20} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">WhatsApp Us</h3>
                                        <p className="text-sm opacity-80 mb-2">Quick messages & scheduling.</p>
                                        <a href="https://wa.me/919266423944" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline block">+91 9266423944</a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-sm opacity-80 mb-2">Detailed inquiries. Response in 24h.</p>
                                        <a href="mailto:info@hilltonprakritikchikitsa.in" className="text-secondary font-bold hover:underline block">info@hilltonprakritikchikitsa.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-6">Visit Us In Person</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-stone-800 mb-1">Hillton Prakritik Chikitsa Kendra</h3>
                                        <p className="text-stone-600 text-sm">
                                            3, Bharat Yatra Kendra Rd<br />
                                            Near BSF Road<br />
                                            Gurugram, Haryana 122102<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Clock className="text-secondary flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-stone-800 mb-1">Hours of Operation</h3>
                                        <p className="text-stone-600 text-sm">
                                            Monday – Sunday: 8:00 AM – 8:00 PM<br />
                                            <span className="opacity-60">Open 7 days a week</span>
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.app.goo.gl/Qhy88sT3XcEHCnBa6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-stone-100 h-48 rounded-xl w-full flex items-center justify-center text-stone-500 hover:bg-stone-200 transition group"
                                >
                                    <span className="flex items-center gap-2 font-medium group-hover:text-primary">
                                        <MapPin size={18} /> View on Google Maps
                                    </span>
                                </a>

                                <div className="text-sm text-stone-500">
                                    <p><strong>Parking:</strong> Available on-site</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
