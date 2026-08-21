import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft, PhoneCall, Sparkles, MessageSquare } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'packages', label: 'الباقات والعروض' },
    { id: 'calculator', label: 'حاسبة التكلفة', badge: 'جديد' },
    { id: 'why-us', label: 'لماذا نحن' },
    { id: 'portfolio', label: 'نماذج أعمالنا' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050B14]/90 backdrop-blur-md border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,102,255,0.15)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="Sahly Web الرئيسية"
        >
          <Logo size="md" showSlogan={true} />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-blue-900/30 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-blue-600/20 group flex items-center gap-1.5"
            >
              {link.label}
              {link.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-whatsapp-btn"
            href={OFFICIAL_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 text-sm font-semibold px-3 py-2 rounded-xl transition-colors duration-200"
            title="محادثة واتساب سريعة"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>واتساب سريع</span>
          </a>

          <button
            id="nav-cta-order"
            onClick={() => handleLinkClick('packages')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 transform active:scale-95 flex items-center gap-2"
          >
            <span>اطلب موقعك الآن</span>
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-blue-900/40 text-slate-200 hover:text-white focus:outline-none"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[72px] bg-[#050B14]/98 border-b border-blue-900/50 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-right py-3 px-4 rounded-xl text-slate-200 hover:text-white hover:bg-blue-900/20 font-medium transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge ? (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowLeft className="w-4 h-4 text-slate-500" />
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3 mt-2">
              <a
                id="mobile-whatsapp-btn"
                href={OFFICIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold text-center flex items-center justify-center gap-2 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>تواصل معنا عبر واتساب</span>
              </a>

              <button
                id="mobile-cta-order"
                onClick={() => handleLinkClick('packages')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
              >
                <Sparkles className="w-5 h-5" />
                <span>اطلب موقعك الآن واستلم في أيام</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
