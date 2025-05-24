
import React from 'react';
import { CheckCircle, Monitor, Factory, FastForward } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const qualities = [
    {
      title: t('about.quality1.title'),
      description: t('about.quality1.desc')
    },
    {
      title: t('about.quality2.title'),
      description: t('about.quality2.desc')
    },
    {
      title: t('about.quality3.title'),
      description: t('about.quality3.desc')
    },
    {
      title: t('about.quality4.title'),
      description: t('about.quality4.desc')
    }
  ];

  return (
    <section id="about" className="relative bg-append-darker py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
              <span className="text-append-blue-accent font-mono text-sm">{t('about.badge')}</span>
            </div>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="text-append-metal-light mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-5">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-append-blue-accent min-w-5 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-white">{quality.title}</h3>
                    <p className="text-append-metal-light text-sm">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 blue-glow relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-5 flex flex-col items-center justify-center text-center">
                  <Monitor className="text-append-blue-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold">{t('about.card1.title')}</h3>
                  <p className="text-append-metal-light text-sm mt-2">
                    {t('about.card1.desc')}
                  </p>
                </div>
                
                <div className="glass-card p-5 flex flex-col items-center justify-center text-center">
                  <Factory className="text-append-blue-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold">{t('about.card2.title')}</h3>
                  <p className="text-append-metal-light text-sm mt-2">
                    {t('about.card2.desc')}
                  </p>
                </div>
                
                <div className="glass-card p-5 flex flex-col items-center justify-center text-center">
                  <FastForward className="text-append-blue-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold">{t('about.card3.title')}</h3>
                  <p className="text-append-metal-light text-sm mt-2">
                    {t('about.card3.desc')}
                  </p>
                </div>
                
                <div className="glass-card p-5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-append-blue-accent/10 flex items-center justify-center">
                    <div className="text-append-blue-accent font-mono">
                      <span className="text-4xl font-bold">100%</span>
                      <span className="block text-sm mt-1">{t('about.uptime')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 glass-card p-4 bg-append-darker/80">
                <div className="font-mono text-xs">
                  <span className="text-append-blue-accent">$ </span>
                  <span>{t('about.terminal1')}</span>
                  <br />
                  <span className="text-green-500">◉ </span>
                  <span className="text-append-metal-light">{t('about.terminal2')}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute h-full w-full top-8 left-8 border border-append-blue-accent/20 rounded-lg -z-10"></div>
            <div className="absolute h-full w-full top-4 left-4 border border-append-blue-accent/10 rounded-lg -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
