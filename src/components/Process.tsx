
import React from 'react';
import { 
  Lightbulb, 
  FileCode, 
  Code, 
  Activity, 
  Rocket, 
  Cog
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();
  const steps = [
    {
      icon: Lightbulb,
      title: `1. ${t('methodology1.title')}`,
      description: t('methodology1.desc')
    },
    {
      icon: FileCode,
       title: `2. ${t('methodology2.title')}`,
      description: t('methodology2.desc')
    },
    {
      icon: Code,
      title: `3. ${t('methodology3.title')}`,
      description: t('methodology3.desc')
    },
    {
      icon: Activity,
      title: `4. ${t('methodology4.title')}`,
      description: t('methodology4.desc')
    },
    {
      icon: Rocket,
      title: `5. ${t('methodology5.title')}`,
      description: t('methodology5.desc')
    },
    {
      icon: Cog,
      title: `6. ${t('methodology6.title')}`,
      description: t('methodology6.desc')
    }
  ];

  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 circuit-background"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
            <span className="text-append-blue-accent font-mono text-sm">{t('methodology.title')}</span>
          </div>
          <h2 className="section-title">{t('methodology.subtitle')}</h2>
          <p className="section-subtitle">
          {t('methodology.description')}
          </p>
        </div>
        
        <div className="relative">
          {/* Process flow line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-append-metal-dark -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="glass-card p-6 transition-all duration-300 hover:border-append-blue-accent">
                  <div className="flex items-center mb-4">
                    <div className="bg-append-blue-accent/10 p-3 rounded-full mr-4">
                      <Icon className="text-append-blue-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-append-metal-light">{step.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Factory animation */}
          <div className="mt-16 glass-card p-8 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('methodology7.title')}</h3>
                <p className="text-append-metal-light text-sm mb-4">
                {t('methodology7.desc')}
                </p>
              </div>
              
              <div className="flex">
                <Cog className="text-append-metal-light animate-gear-spin" size={32} />
                <Cog className="text-append-metal-light animate-gear-spin-reverse -ml-2" size={24} />
              </div>
            </div>
            
            <div className="w-full bg-append-metal-darker h-2 mt-4 rounded-full overflow-hidden">
              <div 
                className="bg-append-blue-accent h-full rounded-full animate-pulse" 
                style={{width: '75%'}}
              ></div>
            </div>
            
            <div className="flex justify-between mt-2 text-xs text-append-metal">
              <span>Input</span>
              <span>Processing...</span>
              <span>Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
