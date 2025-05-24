
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Cog, Terminal } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const gearRef1 = useRef<HTMLDivElement>(null);
  const gearRef2 = useRef<HTMLDivElement>(null);
  const gearRef3 = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      
      if (gearRef1.current) {
        gearRef1.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px) rotate(0deg)`;
      }
      
      if (gearRef2.current) {
        gearRef2.current.style.transform = `translate(${moveX * 0.02}px, ${moveY * 0.02}px) rotate(0deg)`;
      }
      
      if (gearRef3.current) {
        gearRef3.current.style.transform = `translate(${moveX * 0.03}px, ${moveY * 0.03}px) rotate(0deg)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 circuit-background"></div>
      
      {/* Production line background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="production-line">
          <div className="code-block"></div>
          <div className="code-block"></div>
          <div className="code-block"></div>
          <div className="server-node"></div>
          <div className="code-block"></div>
          <div className="server-node"></div>
          <div className="code-block"></div>
        </div>
      </div>
      
      {/* Animated gears */}
      <div ref={gearRef1} className="gear-small top-1/4 left-1/4 text-append-metal">
        <Cog size="100%" strokeWidth={0.5} />
      </div>
      
      <div ref={gearRef2} className="gear-medium bottom-1/4 right-1/3 text-append-metal">
        <Cog size="100%" strokeWidth={0.5} />
      </div>
      
      <div ref={gearRef3} className="gear-large -top-20 -right-20 text-append-metal">
        <Cog size="100%" strokeWidth={0.5} />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 left-10 opacity-20 animate-float">
        <Code size={40} className="text-append-blue-accent" />
      </div>
      
      <div className="absolute bottom-1/3 right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Terminal size={40} className="text-append-metal-light" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
            <span className="text-append-blue-accent font-mono text-sm">{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight text-white">
            {t('hero.title1')} <span className="text-append-blue-accent animate-pulse">{t('hero.title2')}</span> {t('hero.title3')} <br className="hidden md:block" />
            {t('hero.title4')} <span className="text-append-blue-accent animate-pulse">{t('hero.title5')}</span>
          </h1>
          
          <p className="text-base md:text-lg text-append-metal-light max-w-3xl mx-auto mb-10">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="btn-primary w-full sm:w-auto">
              {t('hero.exploreServices')}
              <ArrowRight size={16} />
            </a>
            
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              {t('hero.getInTouch')}
            </a>
          </div>
          
          <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
            <div className="text-left font-mono text-xs text-append-metal-light overflow-hidden">
              <span className="text-append-blue-accent">$ </span>
              <span className="animate-typing typing">{t('hero.terminal1')}</span>
              <br/>
              <span className="text-append-blue-accent">Building </span>
              <span>{t('hero.terminal2')}</span>
              <br/>
              <span className="text-green-500">✓ </span>
              <span>{t('hero.terminal3')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-append-metal-light animate-bounce">
        <a href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
