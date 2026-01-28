'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919266423944"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
