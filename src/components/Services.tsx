import React from 'react';
import { Dumbbell, Users, Video, Trophy } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Video className="w-12 h-12 text-red-500" />,
      title: "Remote Coaching",
      description: "Personalized training programs and form correction through video analysis, perfect for athletes worldwide."
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Group Classes",
      description: "High-energy CrossFit classes focusing on technique, strength, and conditioning."
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-red-500" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific goals and skill level."
    },
    {
      icon: <Trophy className="w-12 h-12 text-red-500" />,
      title: "Competition Prep",
      description: "Specialized programming for athletes preparing for CrossFit competitions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Training Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}