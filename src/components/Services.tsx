
import React from 'react';
import { Code, Server, Database, Laptop, Cloud, BarChart, LineChart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  
  return (
    <div className="feature-card h-full flex flex-col">
      <div className="bg-append-blue-accent/10 p-3 rounded-md w-fit mb-4">
        <Icon className="text-append-blue-accent" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-append-metal-light text-sm flex-grow">{description}</p>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Code,
      title: t('capabilities1.title'),
      description: t('capabilities1.desc')
    },
    {
      icon: Laptop,
       title: t('capabilities2.title'),
      description: t('capabilities2.desc')
    },
    {
      icon: Database,
      title: t('capabilities3.title'),
      description: t('capabilities3.desc')
    },
    {
      icon: Server,
     title: t('capabilities4.title'),
      description: t('capabilities4.desc')
    },
    {
      icon: Cloud,
    title: t('capabilities5.title'),
      description: t('capabilities5.desc')
    },
    {
      icon: LineChart,
     title: t('capabilities6.title'),
      description: t('capabilities6.desc')
    },
    {
      icon: BarChart,
  title: t('capabilities7.title'),
      description: t('capabilities7.desc')
    },
    {
      icon: Zap,
    title: t('capabilities8.title'),
      description: t('capabilities8.desc')
    }
  ];

  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 circuit-background"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
            <span className="text-append-blue-accent font-mono text-sm">{t('capabilities.title')}</span>
          </div>
          <h2 className="section-title">{t('capabilities.subtitle')}</h2>
          <p className="section-subtitle">{t('capabilities.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
