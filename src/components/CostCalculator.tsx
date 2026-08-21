import React, { useState } from 'react';
import { Sparkles, Calculator, Check, MessageSquare, ArrowLeft, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data';

export const CostCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'ecommerce' | 'corporate' | 'dashboard' | 'custom'>('ecommerce');
  const [productTier, setProductTier] = useState<number>(50);
  const [needPaymentGateways, setNeedPaymentGateways] = useState<boolean>(true);
  const [needWhatsAppOrders, setNeedWhatsAppOrders] = useState<boolean>(true);
  const [needCustomBanners, setNeedCustomBanners] = useState<boolean>(true);
  const [needMultilingual, setNeedMultilingual] = useState<boolean>(false);
  const [needAdvancedSEO, setNeedAdvancedSEO] = useState<boolean>(true);
  const [needSpeedBooster, setNeedSpeedBooster] = useState<boolean>(true);
  const [supportMonths, setSupportMonths] = useState<number>(3);

  // Calculate Base Price
  const basePrices = {
    ecommerce: 5100,
    corporate: 4200,
    dashboard: 6500,
    custom: 7500,
  };

  let total = basePrices[projectType];

  // Products modifier
  if (projectType === 'ecommerce') {
    if (productTier === 200) total += 1500;
    if (productTier === 500) total += 2800;
    if (productTier === 1000) total += 4200;
  }

  // Feature add-ons
  if (needPaymentGateways) total += 1200;
  if (needCustomBanners) total += 800;
  if (needMultilingual) total += 1400;
  if (needAdvancedSEO) total += 900;
  if (needSpeedBooster) total += 600;

  // Support modifier
  if (supportMonths === 6) total += 950;
  if (supportMonths === 12) total += 1800;

  // Estimated delivery days
  let deliveryDays = '4 - 6 أيام عمل';
  if (projectType === 'ecommerce' && productTier >= 500) deliveryDays = '6 - 8 أيام عمل';
  if (projectType === 'dashboard' || projectType === 'custom') deliveryDays = '7 - 10 أيام عمل';

  const generateWhatsAppQuote = () => {
    const typeLabel = {
      ecommerce: 'متجر إلكتروني متكامل',
      corporate: 'موقع تعريفي للشركة',
      dashboard: 'لوحة تحكم وإدارة مخصصة',
      custom: 'مشروع وتطبيق ويب مخصص',
    }[projectType];

    const message = `مرحباً سهلي ويب 🚀\nأجريت تقدير تكلفة لمشروعي عبر حاسبة الأسعار:\n- نوع المشروع: ${typeLabel}\n- عدد المنتجات: ${projectType === 'ecommerce' ? productTier : 'غير مخصص'}\n- بوابات دفع إلكتروني: ${needPaymentGateways ? 'نعم' : 'لا'}\n- بنرات إعلانية: ${needCustomBanners ? 'نعم' : 'لا'}\n- لغات متعددة: ${needMultilingual ? 'نعم (عربي + إنجليزي)' : 'عربي فقط'}\n- سيو متقدم وبكسلات: ${needAdvancedSEO ? 'نعم' : 'لا'}\n- إجمالي التقدير: ${total.toLocaleString('ar-EG')} ج.م\n- وقت التسليم المقدر: ${deliveryDays}\n\nأود مراجعة العرض وبدء التنفيذ معكم!`;

    return `https://wa.me/${OFFICIAL_LINKS.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="relative py-20 bg-[#060E1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>حاسبة تكلفة المشروع التفاعلية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-alexandria text-white tracking-tight leading-tight mb-4">
            خصص ميزات موقعك واعرف <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">التكلفة والوقت التقديري</span> في ثوانٍ
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            اختر المتطلبات التي تناسب نشاطك التجاري واحصل على عرض سعر مخصص وشفاف بالكامل.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Selectors Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40">
              <label className="text-sm font-bold text-white mb-3 block flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                <span>ما هو نوع الموقع أو المشروع المطلوب؟</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'ecommerce', title: 'متجر إلكتروني متكامل', desc: 'سلة تسوق، بوابات دفع، منتجات وطلب سريع' },
                  { id: 'corporate', title: 'موقع تعريفي وشركات', desc: 'واجهة تعريفية لعرض خدمات الشركة وأعمالها' },
                  { id: 'dashboard', title: 'لوحة تحكم إدارية خاصة', desc: 'نظام إدارة شامل للعمليات والطلبات والموظفين' },
                  { id: 'custom', title: 'منصة ويب مخصصة', desc: 'فكرة تطبيق متكامل بميزات برمجية حصرية' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-4 rounded-xl text-right transition-all duration-200 border ${
                      projectType === type.id
                        ? 'bg-blue-950/80 border-cyan-400 shadow-[0_0_15px_rgba(0,163,255,0.3)]'
                        : 'bg-slate-800/50 border-slate-700/60 hover:border-slate-600 text-slate-300'
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{type.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Product Volume (if E-commerce) */}
            {projectType === 'ecommerce' && (
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 animate-fadeIn">
                <label className="text-sm font-bold text-white mb-3 block flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>كم عدد المنتجات المخطط إضافتها للمتجر؟</span>
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { count: 50, label: 'حتى 50 منتج' },
                    { count: 200, label: 'حتى 200 منتج' },
                    { count: 500, label: 'حتى 500 منتج' },
                    { count: 1000, label: 'منتجات غير محدودة' },
                  ].map((tier) => (
                    <button
                      key={tier.count}
                      onClick={() => setProductTier(tier.count)}
                      className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all border ${
                        productTier === tier.count
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                          : 'bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Add-on Features Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40">
              <label className="text-sm font-bold text-white mb-3 block flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">3</span>
                <span>الميزات والخدمات التسويقية الإضافية:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setNeedPaymentGateways(!needPaymentGateways)}
                  className={`p-3.5 rounded-xl text-right flex items-center justify-between border transition-all ${
                    needPaymentGateways
                      ? 'bg-blue-950/70 border-cyan-400 text-white'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold">بوابات دفع إلكتروني (فيزا / فوري / محافظ)</div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needPaymentGateways ? 'bg-cyan-500 text-slate-950' : 'border border-slate-600'}`}>
                    {needPaymentGateways && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>

                <button
                  onClick={() => setNeedCustomBanners(!needCustomBanners)}
                  className={`p-3.5 rounded-xl text-right flex items-center justify-between border transition-all ${
                    needCustomBanners
                      ? 'bg-blue-950/70 border-cyan-400 text-white'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold">تصميم بنرات إعلانية احترافية للمتجر</div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needCustomBanners ? 'bg-cyan-500 text-slate-950' : 'border border-slate-600'}`}>
                    {needCustomBanners && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>

                <button
                  onClick={() => setNeedAdvancedSEO(!needAdvancedSEO)}
                  className={`p-3.5 rounded-xl text-right flex items-center justify-between border transition-all ${
                    needAdvancedSEO
                      ? 'bg-blue-950/70 border-cyan-400 text-white'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold">تهيئة محركات البحث (SEO) وربط البيكسلات</div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needAdvancedSEO ? 'bg-cyan-500 text-slate-950' : 'border border-slate-600'}`}>
                    {needAdvancedSEO && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>

                <button
                  onClick={() => setNeedMultilingual(!needMultilingual)}
                  className={`p-3.5 rounded-xl text-right flex items-center justify-between border transition-all ${
                    needMultilingual
                      ? 'bg-blue-950/70 border-cyan-400 text-white'
                      : 'bg-slate-800/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold">موقع ثنائي اللغة (عربي + إنجليزي)</div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needMultilingual ? 'bg-cyan-500 text-slate-950' : 'border border-slate-600'}`}>
                    {needMultilingual && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card Column */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0B1A3A] to-[#060C1A] border-2 border-blue-500/50 shadow-[0_0_35px_rgba(0,102,255,0.25)]">
              
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/50">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-black font-alexandria text-white">ملخص عرض السعر</h3>
                </div>
                <span className="text-xs text-cyan-300 font-bold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30">
                  تقدير فوري
                </span>
              </div>

              {/* Price Calculation Display */}
              <div className="my-6 text-right">
                <div className="text-xs text-slate-400 mb-1">الاستثمار الإجمالي المقدر للمشروع:</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black font-jakarta text-white tracking-tight drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">
                    {total.toLocaleString('ar-EG')}
                  </span>
                  <span className="text-xl font-bold text-cyan-400">ج.م</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">تدفع لمرة واحدة • بدون أي رسوم شهرية خفية</div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-2.5 py-4 border-y border-blue-900/40 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">مدة التسليم القياسية:</span>
                  <span className="text-emerald-400 font-bold">{deliveryDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">الاستضافة والدومين:</span>
                  <span className="text-white font-semibold">مشمولة مجاناً للسنة الأولى</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">لوحة التحكم:</span>
                  <span className="text-white font-semibold">عربية كاملة مع تدريب مجاني</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">الدعم الفني والضمان:</span>
                  <span className="text-cyan-300 font-semibold">{supportMonths} أشهر دعم مجاني</span>
                </div>
              </div>

              {/* Instant WhatsApp Quote Trigger */}
              <div className="mt-6 space-y-3">
                <a
                  id="btn-calculator-whatsapp-quote"
                  href={generateWhatsAppQuote()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 text-center group"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>طلب هذا العرض المخصص عبر واتساب</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>تأكيد المواصفات مع مهندس تطوير مخصص في دقائق</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
