import React from 'react';

export function Achievements() {
  const testimonials = [
    {
      name: "Joujou",
      achievement: "First Pull-up",
      quote: "Thanks to Zaher's guidance, I achieved my first pull-up after weeks of dedicated training."
    },
    {
      name: "Wafa",
      achievement: "Strength Goals",
      quote: "The personalized program helped me reach my strength goals faster than I expected."
    },
    {
      name: "Yara",
      achievement: "Technique Mastery",
      quote: "Zaher's attention to detail in form correction made all the difference in my training."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Client Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-red-600 font-semibold">{testimonial.achievement}</p>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-full">CrossFit Level 2 Trainer</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">CrossFit Gymnastics</span>
          </div>
        </div>
      </div>
    </section>
  );
}