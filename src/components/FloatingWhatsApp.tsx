import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data';
import { Logo } from './Logo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = quickMsg.trim() || 'مرحباً سهلي ويب، أرغب في الاستفسار عن تفاصيل تصميم موقع/متجر جديد.';
    const url = `https://wa.me/${OFFICIAL_LINKS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setQuickMsg('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none">
      
      {/* Popover Chat Widget */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#091122] border border-blue-500/40 shadow-2xl p-5 backdrop-blur-xl animate-fadeIn text-right">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-950 border border-cyan-400/50 flex items-center justify-center">
                  <Logo size="sm" showSlogan={false} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">فريق دعم سهلي ويب</h4>
                <span className="text-[11px] text-emerald-400">متصل الآن ومستعد لمساعدتك</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body Bubble */}
          <div className="my-4 p-3.5 rounded-2xl bg-blue-950/60 border border-blue-500/20 text-xs text-slate-200 leading-relaxed">
            <p className="font-semibold text-white mb-1">أهلاً بك في سهلي ويب! 🚀</p>
            جاهزون للرد على استفسارك وتجهيز أفضل عرض سعر لمشروعك في دقائق. اكتب رسالتك واضغط إرسال:
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {[
              'أريد معرفة أسعار المتاجر',
              'باقة الاحتراف 8,500 ج.م',
              'استشارة لموقع شركتي',
            ].map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setQuickMsg(preset)}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-blue-900/40 text-cyan-300 border border-slate-700 transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Input & Send Form */}
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="اكتب استفسارك هنا..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              title="إرسال عبر واتساب"
            >
              <Send className="w-4 h-4 -rotate-90" />
            </button>
          </form>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-4 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="تواصل عبر واتساب مع سهلي ويب"
      >
        {/* Radar wave ping */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
        )}
      </button>

    </div>
  );
};
