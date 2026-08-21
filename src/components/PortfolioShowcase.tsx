import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data';
import { ShoppingBag, LayoutDashboard, Building2, Palette, Sparkles, ExternalLink, Check, Star, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { PortfolioProject } from '../types';

export const PortfolioShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('store-demo');

  const selectedProject = PORTFOLIO_PROJECTS.find((p) => p.id === activeTab) || PORTFOLIO_PROJECTS[0];

  return (
    <section id="portfolio" className="relative py-24 bg-[#060D1B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-xs font-bold font-alexandria mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>معرض نماذج وحلول سابقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-alexandria text-white tracking-tight leading-tight mb-4">
            شاهد الجودة والتصميم الاستثنائي مع <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">سهلي ويب</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تصفح نماذج تفاعلية لمتاجر ولوحات تحكم ومواقع تم تصميمها بأعلى معايير السرعة وسلاسة الاستخدام.
          </p>
        </div>

        {/* Project Type Selectors (Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              id={`portfolio-tab-${proj.id}`}
              onClick={() => setActiveTab(proj.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 border ${
                activeTab === proj.id
                  ? 'bg-blue-600 text-white border-cyan-400 shadow-[0_0_20px_rgba(0,163,255,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {proj.previewType === 'store' && <ShoppingBag className="w-4 h-4" />}
              {proj.previewType === 'dashboard' && <LayoutDashboard className="w-4 h-4" />}
              {proj.previewType === 'corporate' && <Building2 className="w-4 h-4" />}
              {proj.previewType === 'branding' && <Palette className="w-4 h-4" />}
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Interactive Frame */}
        <div className="rounded-3xl bg-slate-900/90 border border-blue-900/50 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Side */}
            <div className="lg:col-span-5 text-right">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-alexandria text-white mt-1 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Highlights & Tech Tags */}
              <div className="mb-6 space-y-2">
                <div className="text-xs font-bold text-slate-400">التقنيات المستخدمة:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((t, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-500/30 text-cyan-300 font-mono font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">مؤشر الأداء والنتيجة</div>
                    <div className="text-sm font-bold text-white">{selectedProject.metrics}</div>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  معتمد 100%
                </span>
              </div>
            </div>

            {/* Interactive Mockup Visual Window */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#040812] border border-blue-500/30 p-4 sm:p-6 shadow-2xl">
                
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
                  </div>
                  <div className="px-4 py-1 rounded-md bg-slate-900 border border-slate-700 text-[11px] text-slate-300 font-mono w-1/2 text-center truncate">
                    https://demo.sahlyweb.com/{selectedProject.previewType}
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Interactive Inner Preview Content based on Type */}
                {selectedProject.previewType === 'store' && (
                  <div className="space-y-4">
                    {/* Store Hero Banner */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/60 to-cyan-900/40 border border-blue-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-cyan-300 font-bold px-2 py-0.5 rounded bg-blue-950">خصم 30% لفترة محدودة</span>
                        <h4 className="text-base font-bold text-white mt-1">تشكيلة الصيف العصرية</h4>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs">
                        تسوق الآن
                      </button>
                    </div>

                    {/* Products Grid Sample */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { title: 'ساعة ذكية فاخرة', price: '850 ج.م', tag: 'الأكثر مبيعاً' },
                        { title: 'سماعة رأس لاسلكية', price: '620 ج.م', tag: 'شحن مجاني' },
                        { title: 'باور بانك فائق السرعة', price: '490 ج.م', tag: 'خصم 15%' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                          <div>
                            <div className="h-20 rounded-lg bg-slate-800/80 mb-2 flex items-center justify-center text-xs text-slate-500">
                              صورة المنتج
                            </div>
                            <span className="text-[10px] text-cyan-400 font-bold">{item.tag}</span>
                            <div className="text-xs font-bold text-white truncate">{item.title}</div>
                            <div className="text-xs font-bold text-emerald-400 font-mono mt-1">{item.price}</div>
                          </div>
                          <button className="mt-2 w-full py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1">
                            <span>طلب واتساب</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.previewType === 'dashboard' && (
                  <div className="space-y-4">
                    {/* Dashboard Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">إجمالي مبيعات اليوم</div>
                        <div className="text-sm font-black text-cyan-400 font-mono mt-0.5">١٨,٤٥٠ ج.م</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">الطلبات الجديدة</div>
                        <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">٣٤ طلب</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400">معدل التحويل</div>
                        <div className="text-sm font-black text-amber-400 font-mono mt-0.5">4.8%</div>
                      </div>
                    </div>

                    {/* Orders Table Mock */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs font-bold text-white mb-2">أحدث طلبات المتجر المباشرة:</div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-2 rounded bg-slate-800/60 flex items-center justify-between text-slate-300">
                          <span className="font-bold text-white">#ORD-9821 • أحمد سمير</span>
                          <span className="text-emerald-400 font-bold">1,250 ج.م</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">مكتمل الشحن</span>
                        </div>
                        <div className="p-2 rounded bg-slate-800/60 flex items-center justify-between text-slate-300">
                          <span className="font-bold text-white">#ORD-9820 • مروة عادل</span>
                          <span className="text-emerald-400 font-bold">890 ج.م</span>
                          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">قيد التجهيز</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedProject.previewType === 'corporate' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-800/60 text-right">
                      <span className="text-[10px] text-cyan-400 font-bold">شركة رائدة في الاستشارات</span>
                      <h4 className="text-base font-bold text-white mt-1">نبني المستقبل بشراكات استراتيجية</h4>
                      <p className="text-xs text-slate-300 mt-1">أكثر من 15 عاماً من الخبرة في تقديم الاستشارات المؤسسية والحلول الذكية.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                        <div className="font-bold text-cyan-300">دراسات الجدوى</div>
                        <div className="text-[11px] text-slate-400 mt-1">تخطيط مالي وهندسي شامل</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                        <div className="font-bold text-cyan-300">التطوير الإداري</div>
                        <div className="text-[11px] text-slate-400 mt-1">أتمتة الأعمال ورفع الإنتاجية</div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedProject.previewType === 'branding' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/80 to-blue-950/80 border border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400 flex items-center justify-center font-black text-purple-300">
                          NV
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Nova Gadgets Kit</div>
                          <div className="text-[10px] text-slate-400">Palette: #0066FF, #8B5CF6, #00F0FF</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-bold">Vector 4K</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">Primary #0066FF</div>
                      <div className="h-16 rounded-lg bg-cyan-400 flex items-center justify-center text-[10px] text-slate-950 font-bold">Accent #00F0FF</div>
                      <div className="h-16 rounded-lg bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold">Brand #8B5CF6</div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
