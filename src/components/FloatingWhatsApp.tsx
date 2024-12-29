import React from 'react';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/96171821015"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="hidden md:inline">Chat Now</span>
    </a>
  );
}