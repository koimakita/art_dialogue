import React, { useState, useEffect, useRef } from 'react';

// アイコンをインラインSVGとして定義
const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconCreditCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);
const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const IconHelp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
);
const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 10"/><line x1="10" y1="14" x2="22" y2="2"/></svg>
);
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  const MAP_URL = "https://maps.app.goo.gl/eiuerk9SsZFzgdep9";

  const timelineSteps = [
    { time: '10:00', title: '自己紹介/アイスブレイク', desc: 'お互いを知ることでリラックスして話せる雰囲気をつくります。' },
    { time: '10:10', title: 'イントロダクション', desc: 'モネの生涯や作品の物語をわかりやすく10分で解説します。' },
    { time: '10:20', title: '対話型鑑賞', desc: '選りすぐりの2つの作品を、グループでじっくり紐解きます。' },
    { time: '11:45', title: '交流・振り返り', desc: '最後に感想をシェアし、アンケートを記入して終了です。' }
  ];

  const faqItems = [
    { 
      q: "一人での参加でも大丈夫ですか？", 
      a: "はい。心配は不要です。対話型鑑賞のワークを通じて自然と会話が生まれます。" 
    },
    { 
      q: "開催場所は分かりやすいですか？", 
      a: "麻布十番駅から徒歩圏内の「BIRTH LAB」にて開催いたします。詳細はgoogle Mapリンクからご確認ください。" 
    },
    { 
      q: "知識が全くないのですが...", 
      a: "むしろ知識がない方が、純粋な視点で作品を楽しめるため大歓迎です。ファシリテーターが丁寧にガイドします。" 
    }
  ];

  useEffect(() => {
    // Tailwind CDNの注入
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap');
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      html { scroll-behavior: smooth; }
      .font-serif { font-family: 'Noto Serif JP', serif !important; }
      .font-sans { font-family: 'Noto Sans JP', sans-serif !important; }
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.4s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    tailwindScript.onload = () => {
      window.tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              serif: ['"Noto Serif JP"', 'serif'],
              sans: ['"Noto Sans JP"', 'sans-serif'],
            }
          }
        }
      };
      setTimeout(() => setIsReady(true), 100);
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);

    // タイムラインの監視ロジック
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveTimelineStep(index);
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, [isReady]);

  if (!isReady) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-serif text-slate-400 italic tracking-widest">Reading Art...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ART <span className="text-teal-600 font-sans">DIALOGUE</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-0 text-slate-900">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/monet.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-600/30 text-teal-700 text-[10px] md:text-xs tracking-widest uppercase font-bold rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <IconSparkles />
            <span className="ml-2">知識ゼロから楽しむアート体験</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.2] md:leading-tight tracking-tight drop-shadow-sm">
            対話型アート<br className="md:hidden" />鑑賞会<br />
            <span className="italic text-teal-700 block mt-2 md:inline md:mt-0">〜モネと睡蓮〜</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto font-medium px-4">
            知識はいりません。必要なのは「あなたの目」だけ。<br className="hidden md:block" />
            巨匠モネの世界を、みんなで言葉にしながら旅しませんか？
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-semibold">
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white">
              <IconCalendar />
              <span>3/15(土) 10:00 - 12:00</span>
            </div>
            <a 
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white hover:bg-teal-50 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-teal-600 group-hover:scale-110 transition-transform">
                <IconMapPin />
              </div>
              <span>麻布十番（BIRTH LAB）</span>
              <IconExternalLink />
            </a>
          </div>

          <div className="mt-12 md:mt-16">
            <p className="text-xs md:text-sm text-slate-500 font-medium italic">※初心者・お一人様での参加大歓迎</p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white relative text-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">対話型鑑賞（VTS）とは？</h2>
            <div className="w-20 h-0.5 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: IconMessage, title: "知識は不要", desc: "歴史や技法を覚える必要はありません。「何が見えるか」を話すことから始まります。", bg: "bg-teal-50", text: "text-teal-600" },
              { icon: IconSparkles, title: "新しい発見", desc: "自分以外の人の言葉を聞くことで、「そんな見方があったのか！」という驚きに出会えます。", bg: "bg-blue-50", text: "text-blue-600" },
              { icon: IconInfo, title: "正解はない", desc: "アートには1つの正解はありません。あなたの感じたことが、そのまま作品の一部になります。", bg: "bg-purple-50", text: "text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50/50 rounded-[40px] border border-slate-100 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.text}`}>
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monet Intro Section */}
      <section className="py-24 bg-slate-50 overflow-hidden text-slate-900 relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2">
                    <div className="relative group">
                        <div className="aspect-[4/3] md:aspect-[4/5] bg-slate-100 rounded-lg shadow-2xl overflow-hidden relative ring-8 ring-white">
                            <img 
                                src="/monet.jpg" 
                                alt="Claude Monet Water Lilies"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Claude_Monet_-_Water_Lilies_-_1906.jpg/1024px-Claude_Monet_-_Water_Lilies_-_1906.jpg';
                                }}
                            />
                            <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border border-slate-100 animate-spin-slow z-10 hidden md:flex text-center">
                            <div className="p-2">
                                <p className="text-[10px] font-bold text-teal-600 tracking-widest uppercase mb-1 font-sans">Impressionism</p>
                                <p className="text-lg md:text-xl font-serif font-bold tracking-tighter leading-none text-slate-900">Claude<br/>MONET</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-left">
                    <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 font-sans">About the Artist</div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">「光の画家」モネ。<br />なぜ彼は睡蓮を描き続けたのか？</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                        クロード・モネは、刻一刻と移ろう光の表情を追い求め続けた、印象派の巨匠です。晩年、フランス・ジヴェルニーの自邸に自ら造り上げた「水の庭」の睡蓮を、200点以上にわたって描き続けました。白内障で視力を失いながらも、筆を置かなかった画家です。
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
                            <div className="text-teal-600 font-bold text-lg">01</div>
                            <p className="text-sm md:text-base font-bold text-slate-700">刻一刻と変化する「水面の光」の表現</p>
                        </div>
                        <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
                            <div className="text-teal-600 font-bold text-lg">02</div>
                            <p className="text-sm md:text-base font-bold text-slate-700">形ではなく、空気感を描き出そうとした情熱</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Program Timeline Section */}
      <section className="py-32 bg-white overflow-hidden text-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-24 tracking-tight">当日のタイムライン</h2>
            
            <div className="relative">
                {/* 垂直線 */}
                <div className="absolute left-[15px] md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-100 md:-ml-[1px]"></div>
                
                <div className="space-y-24 relative text-left">
                    {timelineSteps.map((step, i) => (
                        <div 
                          key={i} 
                          data-index={i}
                          className={`timeline-item flex flex-col md:flex-row items-start transition-all duration-700 ease-out ${
                            activeTimelineStep === i 
                            ? 'opacity-100 scale-100 translate-x-0' 
                            : 'opacity-20 scale-95 translate-x-4 md:translate-x-0'
                          } ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* アニメーションドット */}
                            <div className={`absolute left-[15px] md:left-1/2 w-[16px] h-[16px] rounded-full transition-all duration-500 md:-ml-[8px] mt-1.5 md:mt-4 z-10 ring-4 ring-white ${
                              activeTimelineStep === i ? 'bg-teal-600 scale-125 shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-slate-200'
                            }`}></div>
                            
                            {/* カードコンテンツ */}
                            <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                                <div className={`inline-block font-mono font-bold text-sm px-4 py-1.5 rounded-full mb-4 transition-colors duration-500 ${
                                  activeTimelineStep === i ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'
                                }`}>
                                  {step.time}
                                </div>
                                <div className={`p-8 rounded-[32px] border transition-all duration-500 ${
                                  activeTimelineStep === i 
                                  ? 'bg-white shadow-2xl shadow-teal-900/5 border-teal-100 scale-100' 
                                  : 'bg-transparent border-transparent scale-95 blur-[1px]'
                                }`}>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                                    <p className="text-base text-slate-500 leading-relaxed font-medium">
                                      {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Access / Details Section */}
      <section className="py-24 bg-white border-b border-slate-100 text-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[50px] overflow-hidden shadow-3xl text-white relative border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px]"></div>
            <div className="grid lg:grid-cols-2">
                <div className="p-12 md:p-16 text-left">
                    <h2 className="text-3xl font-serif mb-10">開催概要</h2>
                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <IconCalendar />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-bold font-sans">Date & Time</p>
                                <p className="text-lg font-medium font-sans">3/15 (土) 10:00 - 12:00</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <IconMapPin />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-bold font-sans">Location</p>
                                <p className="text-lg font-medium font-sans text-white">BIRTH LAB/WORK 麻布十番</p>
                                <a 
                                  href={MAP_URL} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-teal-400 mt-1 font-bold hover:underline font-sans group"
                                >
                                  Google Maps で見る <IconExternalLink />
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <IconCreditCard />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-bold font-sans">Admission</p>
                                <p className="text-2xl font-serif font-bold">¥1,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-teal-900/40 p-12 md:p-16 flex flex-col justify-center backdrop-blur-sm border-l border-white/5 text-white text-left">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <IconCheckCircle />
                        こんな人におすすめ
                    </h3>
                    <ul className="space-y-3">
                        {[
                            "アートの知識を深めたい",
                            "自分の感性を言葉にしたい",
                            "日常を離れて癒やされたい",
                            "新しい仲間と対話を楽しみたい"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-teal-50/80 font-medium font-sans">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b border-slate-100 text-slate-900">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12 flex items-center justify-center gap-3">
                <IconHelp /> よくあるご質問
            </h2>
            <div className="grid gap-4">
                {faqItems.map((faq, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 transition-shadow hover:shadow-md">
                        <p className="font-bold mb-3 flex gap-2 font-sans text-left"><span className="text-teal-600 font-bold tracking-tighter">Q.</span> {faq.q}</p>
                        <p className="text-sm text-slate-600 leading-relaxed ml-6 border-l-2 border-slate-200 pl-4 font-sans text-left">A. {faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="font-serif font-bold text-white text-2xl tracking-tighter mb-4">
                ART <span className="text-teal-600 font-sans">DIALOGUE</span>
            </div>
            <div className="flex justify-center gap-8 mb-8 text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">
                <button 
                  onClick={() => setShowComingSoon(true)}
                  className="hover:text-teal-400 transition-colors cursor-pointer outline-none"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setShowComingSoon(true)}
                  className="hover:text-teal-400 transition-colors cursor-pointer outline-none"
                >
                  Instagram
                </button>
            </div>
            <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase font-sans">© 2026 Art Dialogue Tokyo</p>
        </div>
      </footer>

      {/* Coming Soon オーバーレイ */}
      {showComingSoon && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setShowComingSoon(false)}
          ></div>
          <div className="relative bg-white p-12 rounded-[40px] shadow-2xl border border-teal-100 max-w-sm w-full text-center animate-fade-in-up">
            <button 
              onClick={() => setShowComingSoon(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <IconX />
            </button>
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconSparkles />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 tracking-tight">Coming Soon</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              現在、準備中です。<br />公開までしばらくお待ちください。
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;