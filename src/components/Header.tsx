import React from 'react';
import { Menu, X } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Zaher Chaabo</h1>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-red-500 transition-colors">Experience</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#achievements" className="hover:text-red-500 transition-colors">Achievements</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </nav>

          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}