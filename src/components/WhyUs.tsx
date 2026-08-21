import React from 'react';
import { WHY_US_POINTS } from '../data';
import { Zap, ShieldCheck, Database, Smartphone, Cpu, Gauge, Sparkles, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-300" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#050B14] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>مزايا تنافسية لا تضاهى</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-5">
            لماذا يختار أصحاب الأعمال <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">سهلي ويب</span>؟
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            لا نكتفي بإنشاء موقع عادي، بل نبني لك منظومة تقنية متكاملة تمنحك السيطرة المطلقة على نشاطك وتضمن لك توفير آلاف الجنيهات شهرياً.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_POINTS.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="p-7 rounded-3xl bg-slate-900/80 border border-blue-900/40 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,102,255,0.2)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/90 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {getWhyIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-950 text-cyan-300 border border-blue-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-alexandria text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>مشمول قياسياً في جميع خدماتنا</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
