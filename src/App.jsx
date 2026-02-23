import React, { useState, useEffect } from 'react';

// アイコンをインラインSVGとして定義（外部ライブラリ不要）
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
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // スタイル注入
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap');
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      html { scroll-behavior: smooth; }
      .font-serif { font-family: 'Noto Serif JP', serif !important; }
      .font-sans { font-family: 'Noto Sans JP', sans-serif !important; }
    `;
    document.head.appendChild(style);

    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
            ART <span className="text-teal-600">DIALOGUE</span>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-teal-700 transition-all shadow-lg active:scale-95">
            申し込む
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white/50 to-white/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[80%] rounded-full bg-teal-100/30 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[70%] rounded-full bg-purple-100/20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-600/30 text-teal-700 text-[10px] md:text-xs tracking-widest uppercase font-bold rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
            <span>知識ゼロから楽しむアート体験</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-serif mb-8 leading-[1.2] md:leading-tight tracking-tight text-slate-900">
            対話型アート<br className="md:hidden" />鑑賞会<br />
            <span className="italic text-teal-600 block mt-2 md:inline md:mt-0">〜モネと睡蓮〜</span>
          </h1>
          
          <p className="text-base md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium px-4">
            知識はいりません。必要なのは「あなたの目」だけ。
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-semibold">
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white">
              <IconCalendar />
              <span>3/19(木) 19:30 - 21:00</span>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white">
              <IconMapPin />
              <span>六本木駅周辺</span>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-lg md:text-xl font-bold hover:bg-teal-700 transition-all shadow-2xl">
              イベントに参加する <span className="text-teal-400">¥1,000</span>
            </button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">対話型鑑賞（VTS）とは？</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: IconMessage, title: "知識は不要", desc: "歴史や技法を覚える必要はありません。「何が見えるか」を話すことから始まります。", bg: "bg-teal-100", text: "text-teal-600" },
              { icon: IconSparkles, title: "新しい発見", desc: "自分以外の人の言葉を聞くことで、「そんな見方があったのか！」という驚きに出会えます。", bg: "bg-blue-100", text: "text-blue-600" },
              { icon: IconInfo, title: "正解はない", desc: "アートには1つの正解はありません。あなたの感じたことが、そのまま作品の一部になります。", bg: "bg-purple-100", text: "text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all">
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

      {/* Program Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">当日の流れ</h2>
            <div className="relative border-l-2 border-teal-100 ml-4 md:ml-0 md:left-1/2">
                {[
                    { time: '19:30', title: 'イントロダクション', desc: 'モネの生涯や「睡蓮」の物語を5分で解説します。' },
                    { time: '19:40', title: 'アイスブレイク', desc: 'リラックスして話せる雰囲気をつくります。' },
                    { time: '19:55', title: '対話型鑑賞', desc: '2つの作品を、グループでじっくり紐解きます。' },
                    { time: '20:45', title: '交流・振り返り', desc: '気づきを共有し、アンケートを記入します。' }
                ].map((step, i) => (
                    <div key={i} className={`relative mb-12 flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="absolute left-[-9px] md:left-1/2 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm md:-translate-x-1/2"></div>
                        <div className={`pl-8 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right md:pl-0'}`}>
                            <div className="text-teal-600 font-mono font-bold text-sm mb-1">{step.time}</div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="font-serif font-bold text-slate-800 text-xl tracking-tighter mb-4">
                ART <span className="text-teal-600">DIALOGUE</span>
            </div>
            <p className="text-slate-400 text-xs font-medium">© 2024 六本木アート対話プロジェクト</p>
        </div>
      </footer>
    </div>
  );
};

export default App;