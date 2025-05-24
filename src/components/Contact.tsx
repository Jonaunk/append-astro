
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  // Estado para WhatsApp
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://append.com.ar/api/v1/Utilities/Contact";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        origin: 'append',
        type: formData.subject,
        description: formData.message
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((data) => {
        toast({
          title: t('contact.sendMessageTitle'),
          description: t('contact.sendMessageDesc'),
          variant: "default",
        });

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion_event_contact');
        }
  
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        toast({
          title: "Hubo un problema",
          description: "No pudimos procesar tu solicitud. Inténtalo más tarde.",
          variant: "destructive",
        });
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

      //   // Construir el mensaje para WhatsApp
      //   const message = `*Nuevo mensaje desde el formulario de contacto:*\n\n` +
      //   `*Nombre:* ${formData.name}\n` +
      //   `*Email:* ${formData.email}\n` +
      //   `*Tipo de Proyecto:* ${formData.subject}\n` +
      //   `*Detalles del Proyecto:* ${formData.message}`;
  
      // // Crear el enlace de WhatsApp
      // const whatsappUrl = `https://wa.me/5491138880723?text=${encodeURIComponent(message)}`;
      // setWhatsappLink(whatsappUrl);
      
      // window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative bg-append-darker py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
            <span className="text-append-blue-accent font-mono text-sm">{t('contact.getInTouchTitle')}</span>
          </div>
          <h2 className="section-title">{t('contact.startYourProject')}</h2>
          <p className="section-subtitle">
          {t('contact.startYourProjectDesc')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-append-metal-light mb-2 text-sm">
                  {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-append-metal-light mb-2 text-sm">
                  {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-append-metal-light mb-2 text-sm">
                {t('contact.projectType')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>{t('contact.selectProjectType')}</option>
                  <option value="Web Application">{t('contact.selectProjectType1')}</option>
                  <option value="Mobile App">{t('contact.selectProjectType2')}</option>
                  <option value="Custom Software">{t('contact.selectProjectType3')}</option>
                  <option value="System Integration">{t('contact.selectProjectType4')}</option>
                  <option value="Maintenance Systems">{t('contact.selectProjectType6')}</option>
                  <option value="Other">{t('contact.selectProjectType5')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-append-metal-light mb-2 text-sm">
                {t('contact.projectDetails')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder={t('contact.projectDetailsPlaceholder')}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-append-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sendProcessing')}
                    </>
                  ) : (
                    <>
                      {t('contact.sendMessage')}
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{t('contact.location')}</h3>
              <p className="text-append-metal-light text-sm">
                Primera Junta 197<br />
                Quilmes, CP 1878
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-append-metal-light text-sm">
                hello@append.com.ar <br></br>
                info@append.com.ar
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{t('contact.phone')}</h3>
              <p className="text-append-metal-light text-sm">
                +54 11 3888-0723<br />
                {t('contact.businessHours')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
