import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../data';
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle2, Sparkles, ArrowLeft } from 'lucide-react';

interface ContactProps {
  initialService?: string;
  initialPackage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '', initialPackage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'تصميم متجر إلكتروني',
    package: initialPackage || 'باقة الاحتراف (8,500 ج.م)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build rich WhatsApp Message
    const text = `مرحباً سهلي ويب 🚀\nأود طلب خدمة جديدة:\n- الاسم: ${formData.name}\n- الهاتف: ${formData.phone}\n- الخدمة المطلوبة: ${formData.service}\n- الباقة المفضلة: ${formData.package}\n- تفاصيل المشروع: ${formData.message || 'لا توجد ملاحظات إضافية'}`;

    const whatsappDirect = `https://wa.me/${OFFICIAL_LINKS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Automatically open WhatsApp in new tab after 1 second
    setTimeout(() => {
      window.open(whatsappDirect, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050B14] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ابدأ مشروعك اليوم مع سهلي ويب</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-4">
            تواصل معنا وخلّي <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">انطلاقتك الرقمية</span> تبدأ فوراً!
          </h2>

          <p className="text-base text-slate-300">
            أرسل لنا تفاصيل فكرتك أو اختر باقتك، وسيقوم مهندسو ومستشارو سهلي ويب بالتواصل معك في الحال.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Official Social Media & Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-blue-900/40">
              <h3 className="text-xl font-bold font-alexandria text-white mb-6">
                قنوات الاتصال المباشرة
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  id="contact-box-whatsapp"
                  href={OFFICIAL_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-white flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">محادثة فورية (WhatsApp)</div>
                      <div className="text-sm font-bold text-emerald-300 font-mono" dir="ltr">+20 109 968 4128</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    متاح 24/7
                  </span>
                </a>

                {/* Email */}
                <a
                  id="contact-box-email"
                  href={`mailto:${OFFICIAL_LINKS.email}`}
                  className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 text-white flex items-center gap-3 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">البريد الإلكتروني الرسمي</div>
                    <div className="text-sm font-bold text-white font-mono">{OFFICIAL_LINKS.email}</div>
                  </div>
                </a>

                {/* Work Location */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">نطاق الخدمة والعمل</div>
                    <div className="text-sm font-bold text-white">جمهورية مصر العربية وكافة دول الوطن العربي (عن بُعد)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Media Accounts (Required Exact Links) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-blue-900/40">
              <h3 className="text-lg font-bold font-alexandria text-white mb-2">
                روابطنا الرسمية على السوشيال ميديا
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                تابعنا لمشاهدة أحدث المشاريع، النصائح التقنية، وعروض التجارة الإلكترونية.
              </p>

              <div className="grid grid-cols-2 gap-3">
                
                {/* TikTok Button */}
                <a
                  id="social-link-tiktok"
                  href={OFFICIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-black/60 hover:bg-black border border-slate-700 hover:border-pink-500/80 text-white flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,128,0.3)] group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67a6.34 6.34 0 0 0 6.34 6.33 6.34 6.34 0 0 0 6.34-6.33V8.87a8.16 8.16 0 0 0 4.81 1.55V7a4.85 4.85 0 0 1-.9-.31z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">تيك توك</div>
                    <div className="text-[10px] text-slate-400 font-mono">@sahlyweb</div>
                  </div>
                </a>

                {/* YouTube Button */}
                <a
                  id="social-link-youtube"
                  href={OFFICIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-red-950/20 hover:bg-red-950/40 border border-slate-700 hover:border-red-500 text-white flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] group"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">يوتيوب</div>
                    <div className="text-[10px] text-slate-400 font-mono">@SahlyWeb</div>
                  </div>
                </a>

                {/* Instagram Button */}
                <a
                  id="social-link-instagram"
                  href={OFFICIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-purple-950/20 hover:bg-purple-950/40 border border-slate-700 hover:border-pink-500 text-white flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">إنستغرام</div>
                    <div className="text-[10px] text-slate-400 font-mono">@sahlyweb</div>
                  </div>
                </a>

                {/* Facebook Button */}
                <a
                  id="social-link-facebook"
                  href={OFFICIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-blue-950/30 hover:bg-blue-950/60 border border-slate-700 hover:border-blue-500 text-white flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">فيسبوك</div>
                    <div className="text-[10px] text-slate-400 font-mono">Sahly Web</div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-500/40 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-black font-alexandria text-white">
                  استمارة طلب مشروع جديد
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  املأ البيانات وسيقوم أحد مهندسينا بمراجعة متطلباتك وبدء التنفيذ معك فوراً.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center rounded-2xl bg-blue-950/40 border border-cyan-500/40 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-alexandria text-white mb-2">
                    تم تجهيز طلبك بنجاح!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    جاري توجيهك الآن إلى محادثة واتساب الرسمية مع فريق سهلي ويب لتأكيد تفاصيل الباقة وبدء العمل فوراً.
                  </p>
                  <a
                    href={OFFICIAL_LINKS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>فتح محادثة واتساب يدوياً</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الاسم بالكامل <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        placeholder="مثال: محمد أحمد"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        رقم الهاتف / واتساب <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        required
                        placeholder="مثال: 01012345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors text-right"
                      />
                    </div>
                  </div>

                  {/* Service & Package Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الخدمة المطلوبة
                      </label>
                      <select
                        id="select-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 text-white text-sm"
                      >
                        <option value="تصميم متجر إلكتروني">تصميم وتطوير متجر إلكتروني</option>
                        <option value="موقع تعريفي للشركة">موقع تعريفي لشركة أو نشاط تجاري</option>
                        <option value="لوحة تحكم وإدارة مخصصة">لوحة تحكم وإدارة عمليات</option>
                        <option value="تصميم هوية بصرية وبنرات">تصميم هوية بصرية وبنرات</option>
                        <option value="أخرى / استشارة مخصصة">أخرى / استشارة وتطوير مخصص</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الباقة المفضلة
                      </label>
                      <select
                        id="select-package"
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 text-white text-sm"
                      >
                        <option value="باقة الانطلاقة (5,100 ج.م)">باقة الانطلاقة (5,100 ج.م)</option>
                        <option value="باقة الاحتراف (8,500 ج.م)">باقة الاحتراف - الأكثر طلباً (8,500 ج.م)</option>
                        <option value="باقة التوسع (12,750 ج.م)">باقة التوسع الشاملة (12,750 ج.م)</option>
                        <option value="طلب عرض سعر مخصص">طلب عرض سعر مخصص</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      تفاصيل إضافية أو ملاحظات عن مشروعك
                    </label>
                    <textarea
                      id="input-message"
                      rows={3}
                      placeholder="اكتب نبذة مختصرة عن فكرة مشروعك، مجالك التجاري، أو أي ميزات خاصة تريدها..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-base shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>إرسال الطلب والتواصل الفوري عبر واتساب</span>
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    🔒 بياناتك ومعلومات مشروعك محمية بالكامل ولا يتم مشاركتها مع أي طرف ثالث.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
