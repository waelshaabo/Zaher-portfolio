import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Phone className="text-red-500 flex-shrink-0" />
                <a href="tel:+96171821015" className="hover:text-red-500 transition-colors">
                  +961 71 821 015
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-red-500 flex-shrink-0" />
                <a href="mailto:contact@zaherchaabo.com" className="hover:text-red-500 transition-colors break-all">
                  contact@zaherchaabo.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-red-500 flex-shrink-0" />
                <span>Available for Remote Coaching Worldwide</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Connect With Me</h3>
              <SocialLinks />
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}