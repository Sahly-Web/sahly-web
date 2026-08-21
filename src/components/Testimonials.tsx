import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#050A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>قصص نجاح حقيقية لعملائنا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-4">
            ماذا يقول عملاؤنا عن تجربتهم مع <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">سهلي ويب</span>؟
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            فخورون بثقة أصحاب المتاجر والمشاريع الناجحة الذين اعتمدوا على حلولنا التقنية لتوسيع تجارتهم.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-7 bg-slate-900/80 border border-blue-900/40 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,102,255,0.15)] relative group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-500/30 group-hover:text-cyan-400/50 transition-colors" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div>
                {/* Metric Badge */}
                {t.metrics && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{t.metrics}</span>
                  </div>
                )}

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-950 border border-blue-500/40 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <div className="text-xs text-slate-400">{t.role} • {t.business}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
