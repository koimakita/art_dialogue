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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const IconHelp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Tailwind CDNを注入
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // 2. カスタム設定を注入
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

    // Tailwindの設定と準備完了を待つ
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
    };
  }, []);

  if (!isReady) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-serif text-slate-400 italic">Reading Art...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
            ART <span className="text-teal-600 font-sans">DIALOGUE</span>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-teal-700 transition-all shadow-lg active:scale-95">
            申し込む
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-0">
        <div className="absolute inset-0 z-0">
          {/* Monet Painting Background with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Claude_Monet_-_Water_Lilies_-_Google_Art_Project_2.jpg/1280px-Claude_Monet_-_Water_Lilies_-_Google_Art_Project_2.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-600/30 text-teal-700 text-[10px] md:text-xs tracking-widest uppercase font-bold rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <IconSparkles />
            <span className="ml-2">知識ゼロから楽しむアート体験</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.2] md:leading-tight tracking-tight text-slate-900 drop-shadow-sm">
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
              <span>3/19(木) 19:30 - 21:00</span>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white">
              <IconMapPin />
              <span>六本木駅周辺</span>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-lg md:text-xl font-bold hover:bg-teal-700 transition-all shadow-2xl">
              イベントに参加する <span className="text-teal-400">¥1,000</span>
            </button>
            <p className="mt-6 text-xs md:text-sm text-slate-500 font-medium italic">※初心者・お一人様での参加も大歓迎です</p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white relative">
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

      {/* Monet Intro Section (Picture Focused) */}
      <section className="py-24 bg-slate-50 overflow-hidden text-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2">
                    <div className="relative group">
                        {/* Artwork with Frame Style */}
                        <div className="aspect-[4/3] md:aspect-[4/5] bg-slate-100 rounded-lg shadow-2xl overflow-hidden relative ring-8 ring-white">
                            <img 
                                src="/monet.jpg" 
                                alt="Claude Monet Water Lilies 1906"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                        </div>
                        {/* Spinning Artist Badge */}
                        <div className="absolute -bottom-8 -right-8 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border border-slate-100 animate-spin-slow z-10 hidden md:flex">
                            <div className="text-center p-2">
                                <p className="text-[10px] font-bold text-teal-600 tracking-widest uppercase mb-1">Impressionism</p>
                                <p className="text-lg md:text-xl font-serif font-bold tracking-tighter leading-none">Claude<br/>MONET</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">About the Artist</div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">「光の画家」モネ。<br />なぜ彼は睡蓮を描き続けたのか？</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                        クロード・モネは、移ろいゆく光の色を捉えようとした印象派の巨匠です。晩年の彼は、自宅の庭に作った「水の庭」にある睡蓮を、250点以上も描き続けました。
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

      {/* Program Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 tracking-tight">当日のタイムライン</h2>
            
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-teal-100 md:-ml-[1px]"></div>
                
                {[
                    { time: '19:30', title: 'イントロダクション', desc: 'モネの生涯や「睡蓮」の物語をわかりやすく5分で解説します。' },
                    { time: '19:40', title: 'アイスブレイク', desc: '簡単なペアワークを通して、リラックスして話せる雰囲気をつくります。' },
                    { time: '19:55', title: '対話型鑑賞', desc: '選りすぐりの2つの作品を、グループでじっくり紐解きます。' },
                    { time: '20:45', title: '交流・振り返り', desc: '最後に感想をシェアし、アンケートを記入して終了です。' }
                ].map((step, i) => (
                    <div key={i} className={`relative mb-16 flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Dot */}
                        <div className="absolute left-[15px] md:left-1/2 w-[12px] h-[12px] rounded-full bg-teal-600 md:-ml-[6px] mt-1.5 md:mt-2 z-10 ring-4 ring-white"></div>
                        
                        {/* Content */}
                        <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                            <div className="text-teal-600 font-mono font-bold text-sm mb-1">{step.time}</div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-sm md:ml-0 md:mr-0 inline-block">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12 flex items-center justify-center gap-3">
                <IconHelp /> よくあるご質問
            </h2>
            <div className="grid gap-4">
                {[
                    { q: "一人での参加でも大丈夫ですか？", a: "はい。参加者の約7割がお一人様です。対話型鑑賞のワークを通じて自然と会話が生まれます。" },
                    { q: "知識が全くないのですが...", a: "むしろ知識がない方が、純粋な視点で作品を楽しめるため大歓迎です。ファシリテーターが丁寧にガイドします。" },
                    { q: "開催場所の詳細は？", a: "六本木駅から徒歩5分圏内の閑静なアートスペースです。申込完了メールにて地図をお送りします。" }
                ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-slate-900 transition-shadow hover:shadow-md">
                        <p className="font-bold mb-3 flex gap-2"><span className="text-teal-600 font-bold tracking-tighter">Q.</span> {faq.q}</p>
                        <p className="text-sm text-slate-600 leading-relaxed ml-6 border-l-2 border-slate-100 pl-4">A. {faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="font-serif font-bold text-slate-800 text-2xl tracking-tighter mb-4">
                ART <span className="text-teal-600">DIALOGUE</span>
            </div>
            <div className="flex justify-center gap-6 mb-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-teal-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-teal-600 transition-colors">Contact</a>
                <a href="#" className="hover:text-teal-600 transition-colors">Instagram</a>
            </div>
            <p className="text-slate-300 text-[10px] font-bold tracking-widest uppercase">© 2024 Roppongi Art Dialogue Project</p>
        </div>
      </footer>
    </div>
  );
};

export default App;