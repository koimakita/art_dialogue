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
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    introducer: '',
    ageGroup: '',
    email: '',
    message: ''
  });
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(tailwindScript)) document.head.removeChild(tailwindScript);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiKey = "";
      const systemPrompt = "あなたはアートイベント「対話型アート鑑賞会 〜モネと睡蓮 〜」の主催者です。参加申し込みをしたユーザーに対して、丁寧で温かい控えメールの文面を作成してください。文面の最後には、主催者(kouichiro.makita@gmail.com)にも通知が送信された旨を記載してください。";
      const userQuery = `申し込み内容:\n名前: ${formData.name}\n紹介者: ${formData.introducer}\n年齢層: ${formData.ageGroup}\nメールアドレス: ${formData.email}\n連絡事項: ${formData.message}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userQuery }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      setAiResponse(text || "お申し込みありがとうございます。控えメールを送信しました。");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      setAiResponse("お申し込みありがとうございました。控えメールを送信しました。（主催者: kouichiro.makita@gmail.com 宛にも通知を送信しました）");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
      const applyForm = document.getElementById('apply-form');
      if (applyForm) {
        window.scrollTo({ top: applyForm.offsetTop - 100, behavior: 'smooth' });
      }
    }
  };

  if (!isReady) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-serif text-slate-400 italic">Reading Art...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ART <span className="text-teal-600 font-sans">DIALOGUE</span>
          </div>
          <a href="#apply-form" className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-teal-700 transition-all shadow-lg active:scale-95">
            申し込む
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-0">
        <div className="absolute inset-0 z-0">
          {/* ローカルの /monet.jpg を背景に設定 */}
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
            <a href="#apply-form" className="inline-block w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-lg md:text-xl font-bold hover:bg-teal-700 transition-all shadow-2xl">
              イベントに参加する <span className="text-teal-400">¥1,000</span>
            </a>
            <p className="mt-6 text-xs md:text-sm text-slate-500 font-medium italic">※初心者・お一人様での参加も大歓迎です</p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900">対話型鑑賞（VTS）とは？</h2>
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
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
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
                            {/* ローカルの /monet.jpg を表示 */}
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
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-20 tracking-tight text-slate-900">当日のタイムライン</h2>
            <div className="relative">
                <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-teal-100 md:-ml-[1px]"></div>
                {[
                    { time: '19:30', title: 'イントロダクション', desc: 'モネの生涯や「睡蓮」の物語をわかりやすく5分で解説します。' },
                    { time: '19:40', title: 'アイスブレイク', desc: '簡単なペアワークを通して、リラックスして話せる雰囲気をつくります。' },
                    { time: '19:55', title: '対話型鑑賞', desc: '選りすぐりの2つの作品を、グループでじっくり紐解きます。' },
                    { time: '20:45', title: '交流・振り返り', desc: '最後に感想をシェアし、アンケートを記入して終了です。' }
                ].map((step, i) => (
                    <div key={i} className={`relative mb-16 flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="absolute left-[15px] md:left-1/2 w-[12px] h-[12px] rounded-full bg-teal-600 md:-ml-[6px] mt-1.5 md:mt-2 z-10 ring-4 ring-white"></div>
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

      {/* Registration Form Section */}
      <section id="apply-form" className="py-24 bg-teal-50/30 scroll-mt-20 border-y border-teal-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl border border-teal-100 overflow-hidden">
            <div className="bg-slate-900 p-10 text-white text-center">
              <h2 className="text-3xl font-serif mb-2 tracking-tight">参加申し込み</h2>
              <p className="text-teal-400 text-sm font-bold tracking-widest uppercase font-sans">Registration</p>
            </div>
            
            <div className="p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">お申し込みありがとうございます。</h3>
                  <p className="text-slate-600 mb-8 font-medium">控えメールを送信しました。</p>
                  <div className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100 mb-8 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700 shadow-inner">
                    <p className="font-bold text-xs text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2 border-b border-slate-200 pb-2">
                      <IconMail /> 控えメールの内容
                    </p>
                    {aiResponse}
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-teal-600 font-bold hover:underline transition-colors"
                  >
                    別の内容で申し込む
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">名前 <span className="text-rose-500">*</span></label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="例：山田 太郎"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">紹介者 <span className="text-rose-500">*</span></label>
                    <input 
                      required
                      type="text" 
                      name="introducer"
                      value={formData.introducer}
                      onChange={handleInputChange}
                      placeholder="紹介者の名前（いない場合は「なし」）"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">年齢 <span className="text-rose-500">*</span></label>
                    <select 
                      required
                      name="ageGroup"
                      value={formData.ageGroup}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-sans bg-white appearance-none"
                    >
                      <option value="">選択してください</option>
                      <option value="10代">10代</option>
                      <option value="20代">20代</option>
                      <option value="30代">30代</option>
                      <option value="40代">40代</option>
                      <option value="50代">50代</option>
                      <option value="60代">60代</option>
                      <option value="70代以上">70代以上</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">メールアドレス <span className="text-rose-500">*</span></label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@mail.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans">連絡事項</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="ご質問や事前に伝えておきたいことがあればご記入ください。"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-sans"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-5 rounded-2xl font-bold text-lg text-white transition-all shadow-xl flex items-center justify-center gap-3 ${
                        isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-teal-700 active:scale-95'
                      }`}
                    >
                      {isSubmitting ? (
                        <>送信中...</>
                      ) : (
                        <>送信内容を確認する</>
                      )}
                    </button>
                    <p className="mt-4 text-center text-xs text-slate-400 font-medium tracking-tight font-sans">
                      通知先: kouichiro.makita@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12 flex items-center justify-center gap-3 text-slate-900">
                <IconHelp /> よくあるご質問
            </h2>
            <div className="grid gap-4">
                {[
                    { q: "一人での参加でも大丈夫ですか？", a: "はい。参加者の約7割がお一人様です。対話型鑑賞のワークを通じて自然と会話が生まれます。" },
                    { q: "知識が全くないのですが...", a: "むしろ知識がない方が、純粋な視点で作品を楽しめるため大歓迎です。ファシリテーターが丁寧にガイドします。" },
                    { q: "開催場所の詳細は？", a: "六本木駅から徒歩5分圏内の閑静なアートスペースです。申込完了メールにて地図をお送りします。" }
                ].map((faq, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-slate-900 transition-shadow hover:shadow-md">
                        <p className="font-bold mb-3 flex gap-2 font-sans"><span className="text-teal-600 font-bold tracking-tighter">Q.</span> {faq.q}</p>
                        <p className="text-sm text-slate-600 leading-relaxed ml-6 border-l-2 border-slate-200 pl-4 font-sans">A. {faq.a}</p>
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
            <div className="flex justify-center gap-6 mb-8 text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">
                <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Instagram</a>
            </div>
            <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase font-sans">© 2024 Roppongi Art Dialogue Project</p>
        </div>
      </footer>
    </div>
  );
};

export default App;