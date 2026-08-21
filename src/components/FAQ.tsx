import React, { useState } from 'react';
import { FAQS_DATA } from '../data';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#060D1A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>إجابات واضحة وشفافة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-4">
            الأسئلة الأكثر <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">شيوعاً</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            جمعنا لك هنا أهم الاستفسارات التي تهم أصحاب الأعمال قبل بدء التعاقد والتنفيذ.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-slate-900/90 border-cyan-500/60 shadow-[0_4px_25px_rgba(0,102,255,0.15)]'
                    : 'bg-slate-900/50 border-blue-900/30 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-alexandria text-white flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-cyan-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/70 to-slate-900/80 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <h4 className="text-base font-bold text-white">لديك سؤال آخر لم تجد إجابته هنا؟</h4>
            <p className="text-xs text-slate-400 mt-1">فريق سهلي ويب متاح للرد الفوري على كل استفساراتك عبر واتساب في أي وقت.</p>
          </div>
          <a
            href={OFFICIAL_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-2 shrink-0 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>اسألنا مباشرة على واتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
};
