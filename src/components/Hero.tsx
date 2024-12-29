import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Your Fitness Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Level 2 CrossFit Trainer specializing in remote coaching and performance optimization. Let's achieve your fitness goals together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
          >
            Start Training Now
          </a>
          <a 
            href="#services" 
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
          >
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}