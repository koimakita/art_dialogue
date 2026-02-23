import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Clock, CreditCard, CheckCircle, 
  HelpCircle, MessageCircle, Info, Sparkles, ChevronRight 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Tailwind CSS プレイCDNの注入 (ビルド環境が不完全な場合でもデザインを適用するため)
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // 2. カスタム設定とフォントの注入
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap');
      
      /* Tailwindの設定をJSから直接制御 */
      window.tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              serif: ['"Noto Serif JP"', 'serif'],
              sans: ['"Noto Sans JP"', 'sans-serif'],
            }
          }
        }
      }

      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .animate-spin-slow {
        animation: spin-slow 12s linear infinite;
      }

      /* スムーズなスクロール */
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-teal-100">
      
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
          <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[80%] rounded-full bg-teal-100/30 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[70%] rounded-full bg-purple-100/20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-600/30 text-teal-700 text-[10px] md:text-xs tracking-widest uppercase font-bold rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
            <Sparkles size={14} />
            <span>知識ゼロから楽しむアート体験</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-serif mb-8 leading-[1.2] md:leading-tight tracking-tight text-slate-900">
            対話型アート<br className="md:hidden" />鑑賞会<br />
            <span className="italic text-teal-600 block mt-2 md:inline md:mt-0">〜モネと睡蓮〜</span>
          </h1>
          
          <p className="text-base md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium px-4">
            知識はいりません。必要なのは「あなたの目」だけ。<br className="hidden md:block" />
            巨匠モネの世界を、みんなで言葉にしながら旅しませんか？
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-semibold">
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl shadow-teal-900/5 border border-white">
              <Calendar size={20} className="text-teal-600" />
              <span>3/19(木) 19:30 - 21:00</span>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl shadow-teal-900/5 border border-white">
              <MapPin size={20} className="text-teal-600" />
              <span>六本木駅周辺</span>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-lg md:text-xl font-bold hover:bg-teal-700 transition-all shadow-2xl shadow-slate-300">
              イベントに参加する <span className="text-teal-400">¥1,000</span>
            </button>
            <p className="mt-6 text-xs md:text-sm text-slate-400 font-medium">※初心者・お一人様での参加も大歓迎です</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">対話型鑑賞（VTS）とは？</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "知識は不要", desc: "歴史や技法を覚える必要はありません。「何が見えるか」を話すことから始まります。", bg: "bg-teal-100", text: "text-teal-600" },
              { icon: Sparkles, title: "新しい発見", desc: "自分以外の人の言葉を聞くことで、「そんな見方があったのか！」という驚きに出会えます。", bg: "bg-blue-100", text: "text-blue-600" },
              { icon: Info, title: "正解はない", desc: "アートには1つの正解はありません。あなたの感じたことが、そのまま作品の一部になります。", bg: "bg-purple-100", text: "text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.text}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monet Intro */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        <div className="aspect-[4/5] bg-slate-200 rounded-[60px] shadow-2xl overflow-hidden flex items-center justify-center">
                            <div className="text-center opacity-60">
                                <p className="font-serif italic text-xl mb-4 text-slate-700">Water Lilies Series</p>
                                <div className="text-6xl">🎨</div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 animate-spin-slow">
                            <div className="text-center p-2">
                                <p className="text-[10px] font-bold text-teal-600 tracking-widest">CLAUDE</p>
                                <p className="text-lg font-serif font-bold">MONET</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-slate-900">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">「光の画家」モネ。<br />なぜ彼は睡蓮を描き続けたのか？</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        クロード・モネは、移ろいゆく光の色を捉えようとした印象派の巨匠です。晩年の彼は、自宅の庭に作った「水の庭」にある睡蓮を、250点以上も描き続けました。
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="text-teal-600 font-bold">Point 1</div>
                            <p className="text-sm font-bold">刻一刻と変化する「水面の光」の表現</p>
                        </div>
                        <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="text-teal-600 font-bold">Point 2</div>
                            <p className="text-sm font-bold">形ではなく、空気感を描き出そうとした情熱</p>
                        </div>
                    </div>
                </div>
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

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12">よくあるご質問</h2>
            <div className="space-y-4">
                {[
                    { q: "一人での参加でも大丈夫ですか？", a: "はい。約7割の方がお一人様です。対話を通じて自然と会話が生まれます。" },
                    { q: "知識が全くないのですが...", a: "むしろ知識がない方が、純粋な驚きや発見を楽しめるので大歓迎です。" },
                    { q: "開催場所の詳細は？", a: "六本木駅から徒歩5分圏内のスペースです。申込完了後に地図をお送りします。" }
                ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <p className="font-bold mb-2 flex gap-2"><span className="text-teal-600 font-bold">Q.</span> {faq.q}</p>
                        <p className="text-sm text-slate-600 leading-relaxed ml-6">A. {faq.a}</p>
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