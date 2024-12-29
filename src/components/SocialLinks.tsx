import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <a 
        href="https://www.linkedin.com/in/zaherchaabo/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006396] text-white px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base"
      >
        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>LinkedIn</span>
      </a>
      <a 
        href="https://www.instagram.com/zaherchaabo/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-4 sm:px-6 py-2 rounded-full transition-opacity text-sm sm:text-base"
      >
        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Instagram</span>
      </a>
    </div>
  );
}