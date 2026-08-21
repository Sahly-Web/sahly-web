import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { CostCalculator } from './components/CostCalculator';
import { WhyUs } from './components/WhyUs';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(`${pkg.name} (${pkg.price} ج.م)`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 font-cairo selection:bg-blue-600 selection:text-white relative">
      {/* Sticky Global Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExplorePackages={() => scrollToSection('packages')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Pricing & Packages Section */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* 4. Interactive Project Cost Calculator */}
        <CostCalculator />

        {/* 5. Why Sahly Web Section */}
        <WhyUs />

        {/* 6. Live Interactive Portfolio Showcase */}
        <PortfolioShowcase />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Contact & Social Links Section */}
        <Contact
          initialService={selectedService}
          initialPackage={selectedPackage}
        />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating 24/7 WhatsApp Chat Support Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

