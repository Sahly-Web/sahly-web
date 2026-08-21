import React from 'react';
import { Logo } from './Logo';
import { ArrowLeft, MessageSquare, Zap, ShieldCheck, Database, Smartphone, CheckCircle, Sparkles, Star, Terminal } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data';

interface HeroProps {
  onExplorePackages: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glows & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Center Blue Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px]"></div>
        {/* Left Cyan Glow */}
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        {/* Right Indigo Glow */}
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px]"></div>
        
        {/* High-tech Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        {/* Animated Light Streaks */}
        <div className="absolute top-20 right-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="absolute bottom-32 left-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & CTAs Content Column */}
          <div className="lg:col-span-7 text-right flex flex-col items-start lg:items-start">
            
            {/* Top Brand Pill / Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950/80 to-slate-900/90 border border-blue-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-cyan-300 tracking-wide font-alexandria">
                سهلي ويب • وكالتك الرقمية الأولى في مصر والشرق الأوسط
              </span>
            </div>

            {/* Catchy Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black font-alexandria tracking-tight text-white leading-[1.2] mb-6">
              وقف ضياع الوقت والفلوس..{' '}
              <span className="block mt-2 bg-gradient-to-l from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,102,255,0.4)]">
                المستقبل وصل مع سهلي ويب! 🚀
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl text-justify">
              نصمم ونطور لك <strong className="text-white font-semibold">مواقع احترافية، متاجر إلكترونية فائقة السرعة، ولوحات تحكم مخصصة</strong> تمكنك من مضاعفة مبيعاتك وإدارة تجارتك بضغطة زر وبدون أي اشتراكات شهرية معقدة.
            </p>

            {/* Dual CTAs & Social Proof Quick Line */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary CTA */}
              <button
                id="hero-cta-order"
                onClick={onExplorePackages}
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-lg shadow-[0_0_25px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3"
              >
                <span>احصل على موقعك الآن</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
              </button>

              {/* WhatsApp Secondary CTA */}
              <a
                id="hero-cta-whatsapp"
                href={OFFICIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold text-base border border-slate-700/80 hover:border-emerald-500/60 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-900/20 group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-400">استشارة مجانية</span>
                  <span className="text-emerald-400 font-bold">تواصل معنا عبر واتساب</span>
                </div>
              </a>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>تسليم يبدأ من 3 أيام</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>بدون اشتراكات شهرية</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>قاعدة بيانات سحابية مجاناً</span>
              </div>
            </div>

          </div>

          {/* High-Tech Visual Card & Brand Showcase Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Holographic Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative Tech Orbit Box */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 via-[#091122]/95 to-[#050B14] border border-blue-500/30 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,102,255,0.25)] overflow-hidden">
                
                {/* Neon Header Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-blue-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-[11px] text-cyan-300 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>sahly-web-engine.v2</span>
                  </div>
                </div>

                {/* Center Brand Emblem Showcase */}
                <div className="my-8 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl"></div>
                    <Logo size="xl" showSlogan={false} />
                  </div>
                  
                  <div className="mt-3">
                    <h2 className="text-2xl sm:text-3xl font-black font-alexandria text-white">
                      سهلي <span className="text-cyan-400">Web</span>
                    </h2>
                    <div className="mt-2 text-sm text-slate-300 font-medium flex items-center justify-center gap-2">
                      <span className="text-cyan-300 font-bold">سرعة</span>
                      <span className="text-blue-500">•</span>
                      <span className="text-white font-bold">سهولة</span>
                      <span className="text-blue-500">•</span>
                      <span className="text-blue-400 font-bold">احترافية</span>
                    </div>
                  </div>
                </div>

                {/* Floating Interactive Metric Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">سرعة التحميل القياسية</div>
                        <div className="text-sm font-bold text-white font-mono">0.6s • Google 100/100</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                      فائق السرعة
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-blue-900/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">تكامل قواعد البيانات</div>
                        <div className="text-sm font-bold text-white">سحابية مجاناً مدى الحياة</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                      مجاناً
                    </span>
                  </div>
                </div>

                {/* Live Client Counter Footer */}
                <div className="mt-6 pt-4 border-t border-blue-900/30 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>تقييم 5.0 من أصحاب المتاجر</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">جاهز للتنفيذ فوراً</span>
                </div>

              </div>

              {/* Decorative Corner Circuit Dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
