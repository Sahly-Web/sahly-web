import React, { useState } from 'react';
import { SERVICES_DATA, OFFICIAL_LINKS } from '../data';
import { ShoppingCart, Globe, LayoutDashboard, Palette, CheckCircle2, ArrowLeft, Sparkles, MessageSquare, Info, X } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-7 h-7 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-blue-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-7 h-7 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-purple-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#060D1A] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>خدماتنا البرمجية والرقمية المتكاملة</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-5">
            حلول برمجية احترافية تُطلق مشروعك نحو <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">القمة</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            نجمع بين التصميم العصري الجذاب، الأكواد النظيفة فائقة السرعة، وتجربة المستخدم السلسة لمساعدتك في بناء حضور رقمي قوي ومربح.
          </p>
        </div>

        {/* Services Grid (4 interactive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-3xl p-7 sm:p-9 bg-slate-900/80 border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,102,255,0.2)] flex flex-col justify-between"
            >
              {/* Subtle top card glow */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>

              <div>
                {/* Header: Icon, Badge & Title */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950/90 border border-blue-500/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  
                  {service.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs text-blue-400 font-mono tracking-wider font-semibold">
                    {service.subtitle}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Request Service & Details */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id={`btn-order-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>طلب هذه الخدمة</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  id={`btn-details-${service.id}`}
                  onClick={() => setActiveModalService(service)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-4 h-4 text-cyan-400" />
                  <span>التفاصيل والميزات</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#091122] border border-blue-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              id="btn-close-service-modal"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center">
                {getServiceIcon(activeModalService.icon)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-alexandria text-white">
                  {activeModalService.title}
                </h3>
                <span className="text-xs text-cyan-400 font-mono">{activeModalService.subtitle}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>ماذا ستحصل عند طلب هذه الخدمة؟</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {activeModalService.features.map((feature, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-blue-900/30 flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onSelectService(activeModalService.title);
                  setActiveModalService(null);
                }}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <span>احجز الخدمة الآن وابدأ فوراً</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <a
                href={`${OFFICIAL_LINKS.whatsappUrl}%20بخصوص%20${encodeURIComponent(activeModalService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold text-sm hover:bg-emerald-900/60 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
