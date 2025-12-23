
import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
    title: "Book Consultation | Appointment Booking | Hillton",
    description: "Schedule your wellness consultation with Hillton. Easy online booking, phone and WhatsApp options available.",
};

export default function ContactPage() {
    return <ContactPageContent />;
}
