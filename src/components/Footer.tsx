
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-append-dark pt-16 pb-8 border-t border-append-metal-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-white font-mono text-2xl font-bold tracking-tight">
                APPEND<span className="text-append-blue-accent">.</span>
              </span>
            </a>
            <p className="text-append-metal-light mb-6 max-w-md">
            {t('about.title2')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-append-metal hover:text-append-blue-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-append-metal hover:text-append-blue-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-append-metal hover:text-append-blue-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-append-metal hover:text-append-blue-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('menu.company')}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('menu.about')}</a></li>
              <li><a href="#services" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('menu.services')}</a></li>
              <li><a href="#process" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('menu.process')}</a></li>
              <li><a href="#contact" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('menu.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('menu.solutions')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('contact.selectProjectType1')}</a></li>
              <li><a href="#" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('contact.selectProjectType2')}</a></li>
              <li><a href="#" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('contact.selectProjectType3')}</a></li>
              <li><a href="#" className="text-append-metal-light hover:text-append-blue-accent transition-colors">{t('contact.selectProjectType4')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-append-metal-darker flex flex-col md:flex-row justify-between items-center">
          <p className="text-append-metal text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} APPEND Software Factory. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-append-metal text-sm hover:text-append-blue-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-append-metal text-sm hover:text-append-blue-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
