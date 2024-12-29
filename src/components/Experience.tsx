import React from 'react';
import { Calendar, Award } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Remote Assistant Coach",
      company: "True Strength by Tanner Shuck",
      period: "Feb 2023 - Present",
      location: "United Arab Emirates · Remote"
    },
    {
      title: "CrossFit Coach",
      period: "2016 - Present",
      description: "Over 7 years of experience in CrossFit coaching"
    },
    {
      title: "ELFIT Presence",
      period: "2018 - Present",
      description: "Regular participant and competitor in ELFIT events"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                {index === 0 ? <Award className="text-red-500 w-6 h-6" /> : <Calendar className="text-red-500 w-6 h-6" />}
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  {exp.company && <p className="text-gray-700">{exp.company}</p>}
                  <p className="text-gray-600">{exp.period}</p>
                  {exp.location && <p className="text-gray-600">{exp.location}</p>}
                  {exp.description && <p className="text-gray-600 mt-2">{exp.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}