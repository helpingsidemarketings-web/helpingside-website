import React, { useMemo, useState } from 'react';

const PHONE = '919235114305';
const EMAIL = 'helpingsidemarketings@gmail.com';
const WA = `https://wa.me/${PHONE}`;

const copy = {
  en: {
    nav: ['Home', 'About', 'Services', 'Become a Partner', 'Contact'],
    eyebrow: 'FINANCIAL • BUSINESS • DIGITAL SOLUTIONS',
    hero: 'Your goals deserve the right support.',
    sub: 'A single destination for financial services, business registrations and digital growth solutions.',
    explore: 'Explore services', partner: 'Become a partner',
    trust: 'Practical support. Clear communication. Service with responsibility.',
    servicesTitle: 'Solutions for every stage of your journey',
    servicesSub: 'Explore our service categories and send an enquiry to get started.',
    aboutTitle: 'A helping side for your business journey',
    aboutText: 'HELPINGSIDE MARKETINGS brings financial, business and digital service enquiries together through one accessible platform. Our team helps customers understand the next steps and connect with relevant service processes.',
    whyTitle: 'Why connect with us?',
    why: ['Multiple service categories in one place', 'Simple enquiry and follow-up process', 'Customer and partner-focused support'],
    partnerTitle: 'Grow with the HelpingSide partner network',
    partnerText: 'Interested in referring customers and building business opportunities? Register your interest and our team can guide you through the partner onboarding process.',
    register: 'Register interest',
    contactTitle: 'Let’s talk about what you need',
    contactText: 'Reach out to us for service enquiries, business collaborations or general support.',
    call: 'Call us', email: 'Email us', address: 'Office address',
    addressText: 'Sana Palace 1 A, Opposite Saharaganj Mall, Hazratganj, Lucknow, Uttar Pradesh',
    enquire: 'Enquire on WhatsApp', footer: 'All rights reserved.',
    formName: 'Your name', formPhone: 'Mobile number', formService: 'Interested service', formNote: 'Tell us briefly what you need', send: 'Continue on WhatsApp',
    choose: 'Choose a service', about: 'About HelpingSide', quick: 'Quick links', disclaimer: 'Services are subject to eligibility, documentation, and the terms of the relevant bank, NBFC, insurer, government department or authorised service provider. HelpingSide Marketings does not guarantee loan approval, insurance issuance or government approvals.',
    language: 'हिंदी'
  },
  hi: {
    nav: ['होम', 'हमारे बारे में', 'सेवाएं', 'पार्टनर बनें', 'संपर्क'],
    eyebrow: 'वित्तीय • व्यवसाय • डिजिटल समाधान',
    hero: 'आपके लक्ष्य, हमारा सहयोग।',
    sub: 'वित्तीय सेवाओं, बिजनेस रजिस्ट्रेशन और डिजिटल ग्रोथ के लिए एक ही जगह।',
    explore: 'सेवाएं देखें', partner: 'पार्टनर बनें',
    trust: 'व्यावहारिक सहयोग। स्पष्ट जानकारी। जिम्मेदारी के साथ सेवा।',
    servicesTitle: 'आपकी जरूरतों के लिए व्यापक समाधान',
    servicesSub: 'हमारी सेवाओं की श्रेणियां देखें और शुरुआत करने के लिए पूछताछ भेजें।',
    aboutTitle: 'आपके बिजनेस सफर में आपका सहयोगी',
    aboutText: 'HELPINGSIDE MARKETINGS वित्तीय, व्यावसायिक और डिजिटल सेवाओं से जुड़ी पूछताछ को एक आसान प्लेटफॉर्म पर लाता है। हमारी टीम ग्राहकों को अगले चरण समझने और संबंधित सेवा प्रक्रिया से जुड़ने में मदद करती है।',
    whyTitle: 'हमसे क्यों जुड़ें?',
    why: ['एक ही जगह कई सेवा श्रेणियां', 'आसान पूछताछ और फॉलो-अप प्रक्रिया', 'ग्राहक और पार्टनर केंद्रित सहयोग'],
    partnerTitle: 'HelpingSide पार्टनर नेटवर्क के साथ आगे बढ़ें',
    partnerText: 'क्या आप ग्राहकों को रेफर करके बिजनेस अवसर बनाना चाहते हैं? अपनी रुचि दर्ज करें। हमारी टीम पार्टनर ऑनबोर्डिंग की प्रक्रिया समझाएगी।',
    register: 'रुचि दर्ज करें',
    contactTitle: 'अपनी जरूरत के बारे में बात करें',
    contactText: 'सेवा संबंधी पूछताछ, बिजनेस सहयोग या सामान्य सहायता के लिए संपर्क करें।',
    call: 'कॉल करें', email: 'ईमेल करें', address: 'ऑफिस का पता',
    addressText: 'Sana Palace 1 A, Saharaganj Mall के सामने, Hazratganj, Lucknow, Uttar Pradesh',
    enquire: 'WhatsApp पर पूछताछ करें', footer: 'सर्वाधिकार सुरक्षित।',
    formName: 'आपका नाम', formPhone: 'मोबाइल नंबर', formService: 'किस सेवा में रुचि है', formNote: 'अपनी जरूरत संक्षेप में बताएं', send: 'WhatsApp पर आगे बढ़ें',
    choose: 'सेवा चुनें', about: 'HelpingSide के बारे में', quick: 'महत्वपूर्ण लिंक', disclaimer: 'सेवाएं पात्रता, दस्तावेजों और संबंधित बैंक, NBFC, बीमा कंपनी, सरकारी विभाग या अधिकृत सेवा प्रदाता की शर्तों के अधीन हैं। HelpingSide Marketings लोन स्वीकृति, बीमा जारी होने या सरकारी मंजूरी की गारंटी नहीं देता।',
    language: 'English'
  }
};

const categories = [
  { icon:'⌂', en:'Loan Services', hi:'लोन सेवाएं', enDesc:'Home, LAP, Gold, Vehicle, Personal, Business, Micro, Mudra, PMEGP and Education loans.', hiDesc:'होम, LAP, गोल्ड, वाहन, पर्सनल, बिजनेस, माइक्रो, मुद्रा, PMEGP और एजुकेशन लोन।', items:['Home Loans','Loan Against Property (LAP)','Gold Loans','Car & Vehicle Loans','Personal & Business Loans','Micro Loans','Mudra & PMEGP','Education Loans'] },
  { icon:'▤', en:'Taxation & Business Registration', hi:'टैक्सेशन और बिजनेस रजिस्ट्रेशन', enDesc:'GST, MSME, ITR, PAN, Aadhaar assistance, audit and company registrations.', hiDesc:'GST, MSME, ITR, PAN, आधार सहायता, ऑडिट और कंपनी रजिस्ट्रेशन।', items:['Taxation Services','GST Services','MSME / Udyam Registration','ITR Filing','PAN & Aadhaar Services','Audit & Project Reports','NGO Registration','Private Ltd. & OPC Registration','Digital Signature (DSC)'] },
  { icon:'♡', en:'Insurance Services', hi:'इंश्योरेंस सेवाएं', enDesc:'Enquiries for life, health, motor and other insurance policies.', hiDesc:'लाइफ, हेल्थ, मोटर और अन्य बीमा पॉलिसियों के लिए पूछताछ।', items:['Life Insurance','Health Insurance','Motor Insurance','Business & Other Policies'] },
  { icon:'▣', en:'Banking & Financial Services', hi:'बैंकिंग और वित्तीय सेवाएं', enDesc:'Bank account, demat, credit card and CIBIL-related services.', hiDesc:'बैंक अकाउंट, डीमैट, क्रेडिट कार्ड और CIBIL संबंधी सेवाएं।', items:['Bank Account Opening','Demat Account','Credit Card Services','CIBIL Report Services'] },
  { icon:'✧', en:'Branding & Digital Marketing', hi:'ब्रांडिंग और डिजिटल मार्केटिंग', enDesc:'Brand identity, promotion, advertising, website and app design.', hiDesc:'ब्रांड पहचान, प्रमोशन, विज्ञापन, वेबसाइट और ऐप डिजाइन।', items:['Branding','Promotion & Advertising','Website Designing','App Designing','Digital Marketing'] }
];

function App() {
  const [lang, setLang] = useState('en');
  const [form, setForm] = useState({name:'', phone:'', service:'', note:''});
  const t = copy[lang];
  const waMessage = useMemo(() => {
    const lines = [
      'Hello HELPINGSIDE MARKETINGS, I would like to make an enquiry.',
      `Name: ${form.name}`, `Mobile: ${form.phone}`,
      `Service: ${form.service}`, `Requirement: ${form.note}`
    ];
    return `${WA}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [form]);
  const jump = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  const update = (key, value) => setForm(prev => ({...prev, [key]:value}));

  return <div className="site">
    <header className="header">
      <a className="brand" href="#home" aria-label="HelpingSide Marketings home">
        <img src="/helpingside-logo.jpg" alt="HELPINGSIDE MARKETINGS logo" />
      </a>
      <nav className="nav">
        {t.nav.map((label, i) => <button key={label} onClick={() => jump(['home','about','services','partner','contact'][i])}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <button className="lang" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>{t.language}</button>
        <a className="small-cta" href={`${WA}?text=${encodeURIComponent('Hello HELPINGSIDE MARKETINGS, I need information about your services.')}`} target="_blank" rel="noreferrer">{lang === 'en' ? 'Talk to us' : 'बात करें'}</a>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span></span>{t.eyebrow}</div>
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => jump('services')}>{t.explore} <b>↗</b></button>
            <button className="secondary" onClick={() => jump('partner')}>{t.partner}</button>
          </div>
          <div className="hero-note"><span className="note-mark">✓</span>{t.trust}</div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="hero-panel">
            <div className="panel-top"><span>HS</span><span className="live-dot">●</span></div>
            <div className="panel-line wide"></div><div className="panel-line"></div>
            <div className="panel-grid"><i>₹</i><i>▤</i><i>↗</i></div>
            <div className="panel-caption">BUSINESS • FINANCE • GROWTH</div>
          </div>
          <div className="float-card float-a"><span>↗</span><div><b>Business</b><small>Solutions</small></div></div>
          <div className="float-card float-b"><span>₹</span><div><b>Financial</b><small>Services</small></div></div>
        </div>
        <div className="hero-bottom"><span>01 / 05</span><span className="bottom-rule"></span><span>HELPINGSIDE MARKETINGS</span></div>
      </section>

      <section className="stats">
        <div><strong>01</strong><span>{lang==='en'?'Connected service platform':'एकीकृत सेवा प्लेटफॉर्म'}</span></div>
        <div><strong>05</strong><span>{lang==='en'?'Core service categories':'मुख्य सेवा श्रेणियां'}</span></div>
        <div><strong>02</strong><span>{lang==='en'?'Languages at launch':'शुरुआत में भाषाएं'}</span></div>
      </section>

      <section className="section services" id="services">
        <div className="section-head">
          <div><div className="eyebrow dark"><span></span>{lang==='en'?'WHAT WE DO':'हम क्या करते हैं'}</div><h2>{t.servicesTitle}</h2></div>
          <p>{t.servicesSub}</p>
        </div>
        <div className="service-grid">
          {categories.map((cat, i) => <article className="service-card" key={cat.en}>
            <div className="service-top"><span className="service-icon">{cat.icon}</span><span className="service-number">0{i+1}</span></div>
            <h3>{lang==='en'?cat.en:cat.hi}</h3>
            <p>{lang==='en'?cat.enDesc:cat.hiDesc}</p>
            <ul>{cat.items.slice(0,4).map(item => <li key={item}>{item}</li>)}</ul>
            <a href={`${WA}?text=${encodeURIComponent(`Hello, I want to enquire about ${cat.en}.`)}`} target="_blank" rel="noreferrer">{t.enquire} <span>↗</span></a>
          </article>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-mark"><img src="/helpingside-logo.jpg" alt="HelpingSide Marketings" /></div>
        <div className="about-copy">
          <div className="eyebrow"><span></span>{t.about}</div>
          <h2>{t.aboutTitle}</h2><p>{t.aboutText}</p>
          <h3>{t.whyTitle}</h3>
          <div className="why-list">{t.why.map((item,i)=><div key={item}><span>0{i+1}</span>{item}</div>)}</div>
        </div>
      </section>

      <section className="partner section" id="partner">
        <div><div className="eyebrow"><span></span>PARTNER NETWORK</div><h2>{t.partnerTitle}</h2><p>{t.partnerText}</p></div>
        <button className="partner-button" onClick={() => {update('service', 'Smart Business Partner Registration'); jump('contact');}}>{t.register} <span>↗</span></button>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro">
          <div className="eyebrow dark"><span></span>GET IN TOUCH</div>
          <h2>{t.contactTitle}</h2><p>{t.contactText}</p>
          <div className="contact-detail"><span>☎</span><div><small>{t.call}</small><a href="tel:+919235114305">+91 92351 14305</a></div></div>
          <div className="contact-detail"><span>✉</span><div><small>{t.email}</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
          <div className="contact-detail"><span>⌖</span><div><small>{t.address}</small><p>{t.addressText}</p></div></div>
        </div>
        <form className="enquiry-form" onSubmit={e => {e.preventDefault(); window.open(waMessage, '_blank', 'noopener,noreferrer');}}>
          <h3>{lang==='en'?'Send an enquiry':'पूछताछ भेजें'}</h3>
          <label>{t.formName}<input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder={lang==='en'?'Enter your name':'अपना नाम लिखें'} /></label>
          <label>{t.formPhone}<input required inputMode="tel" pattern="[0-9+ -]{10,16}" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="10-digit mobile number" /></label>
          <label>{t.formService}<select required value={form.service} onChange={e=>update('service',e.target.value)}><option value="">{t.choose}</option>{categories.map(c=><option key={c.en} value={c.en}>{lang==='en'?c.en:c.hi}</option>)}<option value="Smart Business Partner Registration">Smart Business Partner Registration</option></select></label>
          <label>{t.formNote}<textarea rows="3" value={form.note} onChange={e=>update('note',e.target.value)} placeholder={lang==='en'?'Write your requirement...':'अपनी जरूरत लिखें...'} /></label>
          <button className="primary submit" type="submit">{t.send} <b>↗</b></button>
          <small className="form-hint">{lang==='en'?'Your enquiry opens in WhatsApp for you to review and send.':'आपकी पूछताछ WhatsApp में खुलेगी, जहां आप उसे देखकर भेज सकते हैं।'}</small>
        </form>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main"><img src="/helpingside-logo.jpg" alt="HELPINGSIDE MARKETINGS" /><p>{lang==='en'?'Financial and business solutions with a helping side.':'वित्तीय और व्यावसायिक समाधानों में आपका सहयोगी।'}</p></div>
      <div><h4>{t.quick}</h4>{t.nav.map((x,i)=><button key={x} onClick={()=>jump(['home','about','services','partner','contact'][i])}>{x}</button>)}</div>
      <div><h4>{t.contactTitle}</h4><a href="tel:+919235114305">+91 92351 14305</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={WA} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} HELPINGSIDE MARKETINGS. {t.footer}</span><span>{t.disclaimer}</span></div>
    </footer>
    <a className="whatsapp-float" href={`${WA}?text=${encodeURIComponent('Hello HELPINGSIDE MARKETINGS, I need information about your services.')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">☏</a>
  </div>;
}

export default App;