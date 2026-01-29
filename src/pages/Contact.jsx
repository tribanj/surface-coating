// pages/Contact.jsx
import { useState } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactDetails from '../components/Contact/ContactDetails';
import TeamContacts from '../components/Contact/TeamContacts';
import LocationMap from '../components/Contact/LocationMap';
import ContactCTAs from '../components/Contact/ContactCTAs';
import SocialConnect from '../components/Contact/SocialConnect';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <ContactHero />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <ContactForm setFormSubmitted={setFormSubmitted} />
            </div>
            <div>
              <ContactDetails />
              <TeamContacts />
            </div>
          </div>
        </div>
        <LocationMap />
        <ContactCTAs />
        <SocialConnect />
        
        {/* Floating Contact Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M6 12H18M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-ping"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;