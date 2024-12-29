import React from 'react';

export function Gallery() {
  const images = [
    {
      url: "/crossfit-l2.jpg",
      alt: "CrossFit Level 2 Certification"
    },
    {
      url: "/elfit-competition.jpg",
      alt: "ELFIT Competition Winners"
    },
    {
      url: "/elfit-profile.jpg",
      alt: "ELFIT Profile"
    },
    {
      url: "/muscle-up.jpg",
      alt: "Muscle Up Performance"
    },
    {
      url: "/cedar-games.jpg",
      alt: "Cedar Games Medal"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Training Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}