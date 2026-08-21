import React from 'react';
import { PACKAGES_DATA, OFFICIAL_LINKS } from '../data';
import { Check, X as XIcon, Zap, Shield, Sparkles, MessageSquare, ArrowLeft, Clock, Gift } from 'lucide-react';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="relative py-24 bg-[#050B14] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>باقات وأسعار واضحة بدون مصاريف خفية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-5">
            استثمر في نجاحك مع باقات <span className="bg-gradient-to-l from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">سهلي ويب</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            جميع الباقات تدفع لمرة واحدة فقط وتشمل استضافة سحابية فائقة السرعة، شهادة أمان SSL، ولوحة تحكم عربية لإدارة نشاطك بكل حرية وسهولة.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#0B1736] via-[#091126] to-[#060B18] border-2 border-cyan-400/80 shadow-[0_0_45px_rgba(0,163,255,0.35)] lg:-translate-y-3'
                  : 'bg-slate-900/85 border border-blue-900/40 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(0,102,255,0.15)]'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg uppercase tracking-wider font-alexandria">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Package Title & Subtitle */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black font-alexandria text-white">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-blue-400 font-mono font-medium">
                      {pkg.nameEn}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-6 my-4 border-y border-blue-900/30">
                  <div className="flex items-baseline gap-1.5 justify-start">
                    <span className="text-4xl sm:text-5xl font-black font-jakarta text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-lg font-bold text-cyan-400">ج.م</span>
                    <span className="text-xs text-slate-400 font-medium mr-2">/ تدفع مرة واحدة</span>
                  </div>
                  
                  {/* Delivery Time Badge */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.deliveryTime}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    الميزات المشمولة في الباقة:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        feat.included
                          ? feat.highlight
                            ? 'text-white font-semibold'
                            : 'text-slate-300'
                          : 'text-slate-600 line-through'
                      }`}
                    >
                      {feat.included ? (
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                          <XIcon className="w-3 h-3 text-slate-600" />
                        </div>
                      )}
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions: Choose Package & Direct WhatsApp */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <button
                  id={`btn-choose-package-${pkg.id}`}
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-5 rounded-xl font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/30'
                      : 'bg-blue-600 hover:bg-blue-500 text-white'
                  }`}
                >
                  <span>اختيار {pkg.name}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <a
                  id={`btn-whatsapp-pkg-${pkg.id}`}
                  href={`https://wa.me/${OFFICIAL_LINKS.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/40 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>طلب فوري عبر واتساب</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Card */}
        <div className="mt-14 p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-cyan-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">ضمان الجودة والدعم الفني الكامل</h4>
              <p className="text-xs text-slate-400 mt-0.5">مع كل باقة تحصل على تدريب مجاني، وضمان سلامة الكود، وبدون أي مصاريف خفية.</p>
            </div>
          </div>
          
          <a
            href={OFFICIAL_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-cyan-300 hover:text-white hover:bg-blue-900/40 text-xs font-bold transition-all shrink-0 flex items-center gap-2"
          >
            <Gift className="w-4 h-4 text-amber-400" />
            <span>طلب عرض مخصص لمشروع ضخم</span>
          </a>
        </div>

      </div>
    </section>
  );
};
