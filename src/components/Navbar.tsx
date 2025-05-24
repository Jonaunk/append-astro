
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-append-darker/90 backdrop-blur-lg shadow-md" : "py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1">
          <span className="text-white font-mono text-xl font-bold tracking-tight">
            APPEND<span className="text-append-blue-accent">.</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link">{t('nav.services')}</a>
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#process" className="nav-link">{t('nav.process')}</a>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="p-0 h-8 text-append-metal-light hover:text-white hover:bg-transparent mr-2"
          >
            <Globe size={18} className="mr-1" />
            {language === 'en' ? 'ES' : 'EN'}
          </Button>
          <a href="#contact" className="btn-primary">
            {t('nav.contact')}
            <ChevronRight size={16} />
          </a>
        </div>
        
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-append-darker/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          <a 
            href="#services"
            className="text-lg py-2 border-b border-append-metal-darker"
            onClick={toggleMenu}
          >
            {t('nav.services')}
          </a>
          <a 
            href="#about"
            className="text-lg py-2 border-b border-append-metal-darker"
            onClick={toggleMenu}
          >
            {t('nav.about')}
          </a>
          <a 
            href="#process"
            className="text-lg py-2 border-b border-append-metal-darker"
            onClick={toggleMenu}
          >
            {t('nav.process')}
          </a>
          <div className="flex items-center py-2 border-b border-append-metal-darker">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="p-0 h-8 text-append-metal-light hover:text-white hover:bg-transparent"
            >
              <Globe size={18} className="mr-1" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
          </div>
          <a 
            href="#contact"
            className="btn-primary mt-4 text-center"
            onClick={toggleMenu}
          >
            {t('nav.contact')}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
