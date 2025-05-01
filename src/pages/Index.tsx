
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import About from '@/components/AboutUs';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Programs />
      <About />
      <Faculty />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
