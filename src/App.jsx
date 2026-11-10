import React from 'react';
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, Network, Code2, Database, Shield, Menu, X, MonitorCog, Globe2, Radar, Activity, Ticket, Layers, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {name:'VALO Community',kind:'Web application',description:'A community platform for discovering Kick and YouTube streamers.',stack:'React · FastAPI · Supabase',href:'https://github.com/Parthiv-Binish/valo-community'},
  {name:'Face Detection',kind:'Computer vision',description:'A computer-vision project exploring face detection and recognition.',stack:'Python · OpenCV',href:'https://github.com/Parthiv-Binish/Face-Detection'},
  {name:'Utharam Browser',kind:'Desktop application',description:'A desktop browser project built with Python.',stack:'Python',href:'https://github.com/Parthiv-Binish/Utharam-Browser-PyBrowser-'}
];
const experienceTools=[
 {name:'ThousandEyes',type:'Network assurance',logo:'https://cdn.simpleicons.org/thousandeyes',domain:'thousandeyes.com'},
 {name:'Cisco DNA Center (DNAC)',type:'Network management',logo:'https://cdn.simpleicons.org/cisco',domain:'cisco.com'},
 {name:'Cisco vManage',type:'SD-WAN management',logo:'https://cdn.simpleicons.org/cisco',domain:'cisco.com'},
 {name:'Datadog',type:'Monitoring & observability',logo:'https://cdn.simpleicons.org/datadog',domain:'datadoghq.com'},
 {name:'Nagios Core',type:'Infrastructure monitoring',logo:'https://cdn.simpleicons.org/nagios',domain:'nagios.com'},
 {name:'ServiceNow',type:'IT service management',logo:'https://cdn.simpleicons.org/servicenow',domain:'servicenow.com'},
 {name:'Liebert SiteScan Web',type:'Data centre monitoring · Vertiv',logo:'https://cdn.simpleicons.org/vertiv',domain:'vertiv.com'},
 {name:'EcoStruxure IT Data Center Expert',type:'Data centre infrastructure management · Schneider Electric',logo:'https://cdn.simpleicons.org/schneiderelectric',domain:'se.com'},
 {name:'Infoblox',type:'DNS · DHCP · IPAM',logo:'https://cdn.simpleicons.org/infoblox',domain:'infoblox.com'}
];
const skills=[
 {icon:Code2,title:'Programming & Frontend',items:'C · C++ · JavaScript · Python · PHP · HTML · CSS · React'},
 {icon:MonitorCog,title:'Backend & Frameworks',items:'Node.js · NestJS · FastAPI · Django · Flutter · MERN stack'},
 {icon:Database,title:'Databases & Developer Tools',items:'MySQL · MongoDB · PostgreSQL · Supabase · Redis · Git · VS Code · Android Studio'},
 {icon:Shield,title:'Systems & Security',items:'Linux administration · Cybersecurity fundamentals · Cyber Security Analytics'}
];
function LinkOut({href,children,className=''}){return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15}/></a>}

const legalContent = {
 '/privacy-policy': {title:'Privacy Policy',updated:'10 November 2026',intro:'This policy explains what information may be handled when you visit this personal portfolio website.',sections:[
  ['Who operates this site','This website is a personal portfolio operated by Parthiv Binish, India. It is not a user community, social network, marketplace or account-based service.'],
  ['Information collected','This site does not provide registration, contact forms, comments, file uploads, newsletters or user profiles. If you use the optional Katzy chat assistant, the messages you submit and recent conversation context are sent to third-party AI services (currently LLMFaucet, with Pollinations as a fallback) so they can generate a reply. These services may route requests to upstream model providers. Do not submit sensitive, confidential or financial information. The hosting and delivery providers may also process basic technical request data such as IP address, request time, browser and device information, and requested URL in server logs for delivery, security and abuse prevention.'],
  ['How information is used','Katzy uses submitted messages only to generate conversational answers about the portfolio. The site owner does not intentionally save chat transcripts in a portfolio database. Messages are processed by the selected AI gateway and its upstream model providers under their respective terms, privacy policies and abuse-prevention practices. The portfolio does not intentionally save chat transcripts in its own database. Do not submit sensitive, confidential or personal information to Katzy. Technical information is used by infrastructure providers to deliver the website, maintain availability, diagnose failures and protect the service. This site does not intentionally use personal information for profiling, targeted advertising or sale.'],
  ['Cookies and similar technologies','The portfolio does not intentionally set analytics, advertising or preference-tracking cookies. Hosting infrastructure or linked third-party services may use strictly necessary technical mechanisms. See the Cookie Policy for details.'],
  ['External websites','Links to GitHub, LinkedIn and project websites are operated by third parties. Their own privacy policies and practices apply when you visit them.'],
  ['Retention and security','Technical logs are retained and protected by the hosting provider according to its operational and security policies. The site owner does not receive or maintain a separate visitor database through this portfolio.'],
  ['Your choices and requests','You may choose not to use external links. For a privacy-related question or request, contact the site owner through the LinkedIn profile linked below. Requests will be reviewed and handled where applicable law provides a right or obligation.'],
  ['Applicable Indian privacy law','India’s Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 have phased commencement. The main processing obligations are scheduled to commence 18 months after the November 2025 notifications, subject to the notified provisions and any subsequent changes. This policy is written for the site as it currently operates and should be reviewed if new data collection or interactive features are introduced.'],
  ['Changes','This policy may be updated if the website’s features or applicable legal requirements change. The updated date will be shown at the top of this page.']
 ]},
 '/terms': {title:'Terms of Use',updated:'10 November 2026',intro:'By using this website, you agree to the following basic terms.',sections:[
  ['Purpose','This website presents professional information, skills, experience and personal projects. It includes an optional AI-powered portfolio assistant (Katzy) that can answer questions about the information published on this site. It is provided for general informational and portfolio purposes only.'],
  ['Accuracy','Reasonable care is taken to keep information current, but project details, availability, technologies and experience may change. Nothing on this website is a job offer, service-level commitment or professional guarantee.'],
  ['Intellectual property','Unless otherwise stated, the text, layout and original visual materials on this site belong to the site owner. Third-party names, logos and marks remain the property of their respective owners and are used only to identify technologies, employers, products or platforms.'],
  ['External links','External websites are provided for convenience. The site owner does not control and is not responsible for their content, availability, security or privacy practices.'],
  ['Acceptable use','Do not attempt to disrupt, probe, scrape in a harmful manner, or gain unauthorised access to this website or its hosting infrastructure.'],
  ['Disclaimer and liability','The website is provided on an “as is” and “as available” basis to the extent permitted by law. Nothing in these terms excludes liability that cannot lawfully be excluded under applicable Indian law.'],
  ['Governing law','These terms are governed by the laws of India. Courts with jurisdiction under applicable law may hear disputes.'],
  ['Updates','These terms may be revised when the website or applicable requirements change. Continued use after an update constitutes use of the revised website terms, to the extent permitted by law.']
 ]},
 '/cookie-policy': {title:'Cookie Policy',updated:'10 November 2026',intro:'This portfolio is designed to work without advertising or analytics cookies.',sections:[
  ['Cookies used by this site','The website does not intentionally set analytics, advertising, social-media tracking or cross-site profiling cookies. It does not run a consent-based advertising or analytics platform.'],
  ['Essential infrastructure','The hosting provider, content-delivery network or security layer may use strictly necessary technical storage or request identifiers to deliver pages, balance traffic, prevent abuse and protect the service. These mechanisms are controlled by the relevant provider.'],
  ['Third-party links','If you open GitHub, LinkedIn or another external website, that provider may use its own cookies and similar technologies under its own policy.'],
  ['Managing cookies','You can manage or clear cookies through your browser settings. Blocking essential technical storage may affect the operation of some third-party services.']
 ]},
 '/grievance': {title:'Privacy & Grievance Contact',updated:'10 November 2026',intro:'For questions about this website, privacy concerns, accessibility issues or suspected misuse of content, use the contact route below.',sections:[
  ['Website operator','Parthiv Binish · India. This is a personal portfolio and does not operate user accounts, public posting or a hosting platform for third-party content. It includes an optional AI chat assistant for portfolio-related questions.'],
  ['How to raise a concern','Send a clear message through the site owner’s LinkedIn profile. Include the page URL, a description of the issue and a way to respond. Avoid sending sensitive personal information unless it is necessary for the request.'],
  ['Scope of this contact route','This is a voluntary contact point for website-related questions and privacy requests. It is not a representation that the website is an intermediary under the Information Technology Act, 2000 or that a statutory Grievance Officer has been appointed.'],
  ['Response','Messages will be reviewed and a response provided where reasonably possible. Statutory timelines and procedures apply only where the relevant law makes them applicable.']
 ]}
};
function LegalPage({page}) {
 return <main className="legal-shell"><header className="header"><a className="brand" href="/">Parthiv Binish</a><a className="legal-back" href="/">Back to portfolio <ArrowUpRight size={14}/></a></header><article className="legal-document"><p className="eyebrow">WEBSITE INFORMATION <i>/</i> INDIA</p><h1>{page.title}</h1><p className="legal-updated">Last updated: {page.updated}</p><p className="legal-intro">{page.intro}</p>{page.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<section><h2>Contact</h2><p>Connect with Parthiv Binish via <a href="https://www.linkedin.com/in/parthiv-binish/" target="_blank" rel="noreferrer">LinkedIn</a>.</p></section><p className="legal-note">These pages provide general website information and are not legal advice or a certification of statutory compliance. Applicability depends on the website’s actual operation and the law in force.</p></article><footer className="legal-footer"><span>© {new Date().getFullYear()} Parthiv Binish</span><a href="/">Return home</a></footer></main>;
}
const assistantFaq = [
 {q:'Tell me about your experience',a:'I work at Tata Consultancy Services on the TMNA project in Network Operations. My work includes monitoring network health, reviewing incidents, coordinating with sites and vendors, and supporting troubleshooting and service restoration.'},
 {q:'What tools do you work with?',a:'My portfolio lists ThousandEyes, Cisco DNA Center (DNAC), Cisco vManage, Datadog, Nagios Core, ServiceNow, Liebert SiteScan Web, EcoStruxure IT Data Center Expert and Infoblox.'},
 {q:'What technologies do you know?',a:'My technical skills include C, C++, JavaScript, Python, PHP, React, Node.js, NestJS, FastAPI, Django, Flutter, MySQL, MongoDB, PostgreSQL, Supabase and Redis.'},
 {q:'Tell me about VALO Community',a:'VALO Community is a project for discovering Kick and YouTube streamers. It uses React, FastAPI and Supabase.'},
 {q:'Are you open to opportunities?',a:'Yes. I am open to relevant IT operations, network operations and software development opportunities. You can reach out through LinkedIn.'},
 {q:'How can I contact you?',a:'Connect through my LinkedIn profile or explore my GitHub repositories.'}
];
function ConnectionAssistant(){
 const [expanded,setExpanded]=useState(false);
 const [messages,setMessages]=useState([]);
 const [input,setInput]=useState('');
 const [sending,setSending]=useState(false);
 const [typing,setTyping]=useState(false);
 const [error,setError]=useState('');
 const bottomRef=useRef(null);
 useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:'smooth',block:'end'});},[messages,typing,error]);
 const [greeting]=useState(()=>{const hour=new Date().getHours();return hour<12?'Good morning':hour<17?'Good afternoon':'Good evening'});
 const prompts=['Tell me about your TCS experience','Which network tools do you use?','Tell me about VALO Community'];
 const sendMessage=async(text)=>{const clean=text.trim();if(!clean||sending)return;const next=[...messages,{role:'user',content:clean}].slice(-12);setMessages(next);setInput('');setError('');setSending(true);setTyping(true);try{const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:next})});const data=await response.json();if(!response.ok)throw new Error(data.error||'Katzy could not respond right now. Please try again.');const reply=String(data.reply||'').trim();setTyping(false);setMessages([...next,{role:'assistant',content:''}]);const words=reply.match(/\\S+\\s*/g)||[reply];let visible='';for(let i=0;i<words.length;i++){visible+=words[i];setMessages([...next,{role:'assistant',content:visible}]);await new Promise(resolve=>setTimeout(resolve,42));}}catch(err){setTyping(false);setError(err.message||'Something went wrong. Please try again.');}finally{setSending(false);}};
 const handleSubmit=e=>{e.preventDefault();sendMessage(input)};
 return <div className="assistant-widget"><button className="assistant-bubble" onClick={()=>setExpanded(v=>!v)} aria-label={expanded?'Close Katzy chat':'Chat with Katzy'}>{expanded?<X size={22}/>:<img className="katzy-bubble-photo" src="/katzy-girl-bot.webp" alt="Katzy"/>}</button>{expanded&&<aside className="connect-assistant katzy-chat" aria-label="Chat with Katzy"><div className="assistant-top katzy-top"><img className="katzy-avatar" src="/katzy-girl-bot.webp" alt="Katzy"/><div className="katzy-identity"><strong>Katzy</strong><small><i></i> AI portfolio assistant</small></div><button onClick={()=>setExpanded(false)} aria-label="Close chat"><X size={16}/></button></div><div className="katzy-chat-body"><div className="katzy-greeting"><span className="katzy-speaker">Katzy</span><p>{greeting}! 😊 I’m Katzy. Nice to meet you!</p><p>I’m here to help you get to know Parthiv — his TCS experience, network tools, skills and projects. What would you like to know? ✨</p></div>{messages.length===0&&<div className="katzy-suggestions">{prompts.map(prompt=><button key={prompt} className="faq-question" onClick={()=>sendMessage(prompt)}>{prompt}<ArrowUpRight size={13}/></button>)}</div>}{messages.map((message,index)=><div className={message.role==='user'?'katzy-user-question':'katzy-reply'} key={index}>{message.role==='assistant'&&<span className="katzy-speaker">Katzy</span>}<p>{message.content}</p></div>)}{typing&&<div className="katzy-reply katzy-thinking"><span className="katzy-speaker">Katzy is typing</span><p className="typing-dots"><i></i><i></i><i></i></p></div>}{error&&<p className="katzy-error" role="alert">{error}</p>}<div ref={bottomRef}/></div><form className="katzy-composer" onSubmit={handleSubmit}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask Katzy anything…" maxLength={1200} aria-label="Message Katzy" disabled={sending}/><button type="submit" disabled={sending||!input.trim()} aria-label="Send message"><ArrowUpRight size={17}/></button></form><div className="katzy-footer-note">I’m Katzy, an AI robot assistant — here to guide you around Parthiv’s portfolio. 🤖</div><div className="assistant-actions katzy-actions"><a href="https://www.linkedin.com/in/parthiv-binish/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/Parthiv-Binish" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={14}/></a></div></aside>}</div>;
}
function BuildAnimation(){
 const [visible,setVisible]=useState(()=>{try{return !sessionStorage.getItem('portfolio_build_seen')}catch{return true}});
 const [phase,setPhase]=useState('Creating a new document');
 const [progress,setProgress]=useState(0);
 const [tool,setTool]=useState('Move');
 const [cursor,setCursor]=useState({x:260,y:180});
 const [drawing,setDrawing]=useState(null);
 const [swatch,setSwatch]=useState('#398cff');
 const [layers,setLayers]=useState(['00 · Background']);
 const [activeLayer,setActiveLayer]=useState('00 · Background');
 const [asset,setAsset]=useState(null);
 useEffect(()=>{
  if(!visible)return;
  let cancelled=false;
  const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const reveal=(selector,kind='type')=>{
   document.querySelectorAll(selector).forEach(el=>{
    el.classList.remove('ps-unbuilt');
    el.classList.add('ps-built',kind==='asset'?'ps-asset-built':kind==='shape'?'ps-shape-built':'ps-type-built');\n    const section=el.closest('section,footer');if(section)section.classList.add('ps-section-ready');
   });
  };
  const addLayer=name=>{setLayers(current=>current.includes(name)?current:[...current,name]);setActiveLayer(name)};
  const cleanup=()=>{
   document.body.classList.remove('portfolio-building');
   document.querySelectorAll('.ps-unbuilt,.ps-built,.ps-type-built,.ps-shape-built,.ps-asset-built,.ps-section-ready').forEach(el=>el.classList.remove('ps-unbuilt','ps-built','ps-type-built','ps-shape-built','ps-asset-built','ps-section-ready'));
  };
  const finish=()=>{
   cleanup();
   try{sessionStorage.setItem('portfolio_build_seen','1')}catch{}
   setVisible(false);
   window.dispatchEvent(new Event('portfolio-build-complete'));
  };
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return;}
  const run=async()=>{
   document.body.classList.add('portfolio-building');
   window.scrollTo({top:0,behavior:'instant'});
   const allTargets=[
    '.header','.hero .eyebrow','.hero h1','.hero .lead','.hero .actions',
    '#about .index','#about h2','#about div > p',
    '#experience .index','#experience .role','#experience > div > p','#experience .date','#experience .experience-tools h4','#experience .tool-card',
    '#projects .section-heading','#projects .project',
    '#skills .index','#skills h2','#skills .skill',
    '.education .index','.education > div',
    'footer > div','footer .bottom'
   ];
   allTargets.forEach(selector=>document.querySelectorAll(selector).forEach(el=>el.classList.add('ps-unbuilt')));
   const moveTo=async(x,y)=>{setCursor({x,y});await wait(280)};
   const selectTool=async(name,x,y)=>{setTool(name);await moveTo(x,y);await wait(180)};
   const drawFrame=async(x,y,w,h)=>{setDrawing({x,y,w:0,h:0});await wait(80);setDrawing({x,y,w,h});await wait(420);setDrawing(null)};
   const scrollToSection=async(selector)=>{
    const el=document.querySelector(selector);if(!el)return;
    const top=Math.max(0,window.scrollY+el.getBoundingClientRect().top-112);
    window.scrollTo({top,behavior:'smooth'});await wait(420);
   };
   const step=async(label,amount)=>{setPhase(label);setProgress(amount);await wait(100)};
   await wait(380);
   await step('Setting canvas size · 1440 px',4);
   await selectTool('Move',46,80);
   await moveTo(Math.min(window.innerWidth*.52,720),112);
   await wait(180);
   await step('Drawing the page grid and section frames',9);
   await selectTool('Rectangle',24,224);
   await drawFrame(120,128,Math.max(220,window.innerWidth-240),Math.min(150,window.innerHeight*.22));
   await drawFrame(120,Math.min(330,window.innerHeight*.42),Math.max(220,window.innerWidth-240),Math.min(190,window.innerHeight*.25));
   await step('Sampling the portfolio colour palette',15);
   await selectTool('Eyedropper',24,260);
   await moveTo(Math.min(window.innerWidth-130,window.innerWidth*.78),58);
   setSwatch('#1687f8');await wait(260);
   await step('Building the navigation and hero typography',23);
   reveal('.header','shape');addLayer('01 · Navigation');
   await scrollToSection('.hero');
   await selectTool('Type',24,190);
   reveal('.hero .eyebrow');await moveTo(170,Math.max(180,window.innerHeight*.31));await wait(180);
   reveal('.hero h1');addLayer('02 · Hero / Heading');await wait(260);
   reveal('.hero .lead');addLayer('03 · Hero / Description');await wait(220);
   reveal('.hero .actions','shape');addLayer('04 · Hero / Actions');
   await step('Composing the profile section',34);
   await scrollToSection('#about');
   await selectTool('Rectangle',24,224);
   const about=document.querySelector('#about');if(about){const r=about.getBoundingClientRect();await drawFrame(Math.max(90,r.left),Math.max(120,r.top),Math.max(200,r.width),Math.min(150,r.height));}
   reveal('#about .index');reveal('#about h2');reveal('#about div > p');addLayer('05 · About / Content');
   await step('Constructing the experience timeline',46);
   await scrollToSection('#experience');
   await selectTool('Rectangle',24,224);
   const exp=document.querySelector('#experience');if(exp){const r=exp.getBoundingClientRect();await drawFrame(Math.max(90,r.left),Math.max(120,r.top),Math.max(200,r.width),Math.min(160,r.height));}
   reveal('#experience .index');reveal('#experience .role','shape');reveal('#experience > div > p');reveal('#experience .date');reveal('#experience .experience-tools h4');addLayer('06 · Experience');
   await step('Placing network tools and vendor assets',58);
   await selectTool('Move',24,80);
   const cards=Array.from(document.querySelectorAll('#experience .tool-card'));
   for(let i=0;i<cards.length;i++){
    if(cancelled)return;
    const el=cards[i],r=el.getBoundingClientRect();
    if(r.top>window.innerHeight-40){window.scrollBy({top:Math.min(160,r.top-window.innerHeight+120),behavior:'smooth'});await wait(180);}
    setAsset(i);setCursor({x:Math.max(100,window.innerWidth-170),y:Math.max(130,Math.min(window.innerHeight-90,150+(i%3)*35))});
    await wait(120);reveal('#experience .tool-card:nth-of-type('+(i+1)+')','asset');
    el.classList.remove('ps-unbuilt');el.classList.add('ps-built','ps-asset-built');
    setCursor({x:Math.max(110,Math.min(window.innerWidth-50,r.left+r.width*.55)),y:Math.max(120,Math.min(window.innerHeight-40,r.top+r.height*.5))});
    await wait(150);
   }
   addLayer('07 · Tools & Vendor Logos');
   await step('Drawing project cards and placing previews',70);
   await scrollToSection('#projects');
   await selectTool('Rectangle',24,224);
   reveal('#projects .section-heading');reveal('#projects .project','shape');addLayer('08 · Projects');
   for(const [i,el] of Array.from(document.querySelectorAll('#projects .project')).entries()){
    const r=el.getBoundingClientRect();await drawFrame(Math.max(90,r.left),Math.max(120,r.top),Math.max(120,r.width),Math.max(40,r.height));await moveTo(r.left+r.width*.72,r.top+r.height*.55);await wait(90);
   }
   await step('Sampling accents and styling skill groups',81);
   await scrollToSection('#skills');
   await selectTool('Eyedropper',24,260);setSwatch('#1687f8');
   reveal('#skills .index');reveal('#skills h2');reveal('#skills .skill','shape');addLayer('09 · Skills & Platforms');
   await step('Adding education and contact details',91);
   await scrollToSection('.education');
   await selectTool('Type',24,190);
   reveal('.education .index');reveal('.education > div');addLayer('10 · Education');
   await scrollToSection('footer');
   reveal('footer > div');reveal('footer .bottom');addLayer('11 · Contact & Footer');
   await step('Aligning layers and saving the finished design',97);
   setTool('Move');setDrawing(null);setAsset(null);
   await moveTo(window.innerWidth-42,20);
   await wait(700);
   if(!cancelled)finish();
  };
  run();
  return()=>{cancelled=true;cleanup()};
 },[visible]);
 if(!visible)return null;
 const toolDefs=[['Move','move'],['Marquee','square-dashed'],['Lasso','lasso-select'],['Brush','paintbrush'],['Type','type'],['Eyedropper','pipette'],['Rectangle','rectangle-horizontal']];
 const layerNames=layers.slice().reverse();
 return <div className="photoshop-mode" aria-hidden="true">
  <div className="ps-topbar"><span className="ps-mark">Ps</span><span>Parthiv_Portfolio.psd</span><span className="ps-doc-meta">1440 × Auto px · RGB / 8</span><span className="ps-top-right">100% · Modified</span></div>
  <div className="ps-options"><b>{tool} Tool</b><span>{tool==='Rectangle'?'Shape · Fill none · Stroke 1 px':tool==='Eyedropper'?'Sample size · Point sample':tool==='Type'?'Manrope · 600 · 48 px':'Auto-select · Layer · Align'}</span><span className="ps-fg"><i style={{background:swatch}}/>{swatch}</span></div>
  <aside className="ps-toolbox">{toolDefs.map(([name,icon])=><div key={name} className={tool===name?'ps-tool selected':'ps-tool'}><span>{icon==='move'?'↖':icon==='square-dashed'?'▧':icon==='lasso-select'?'⌁':icon==='paintbrush'?'╱':icon==='type'?'T':icon==='pipette'?'◉':'□'}</span><small>{name}</small></div>)}</aside>
  <aside className="ps-layers"><div className="ps-panel-heading"><span>LAYERS</span><Layers size={13}/></div><div className="ps-layer-list">{layerNames.map((name,i)=><div key={name} className={name===activeLayer?'ps-layer active':'ps-layer'}><Eye size={11}/><span className="ps-layer-thumb"/><span>{name}</span></div>)}</div><div className="ps-panel-heading ps-properties-heading">COLOUR & PROPERTIES</div><div className="ps-swatches">{['#1687f8','#101820','#e8eef5','#54718b','#8db8d9'].map(c=><i key={c} style={{background:c}}/>)}</div><div className="ps-property-line">Fill <b>{swatch}</b></div><div className="ps-property-line">Stroke <b>1 px</b></div></aside>
  <svg className="ps-selection" viewBox={`0 0 ${typeof window!=='undefined'?window.innerWidth:1200} ${typeof window!=='undefined'?window.innerHeight:800}`} preserveAspectRatio="none">
   {drawing&&<><rect x={drawing.x} y={drawing.y} width={drawing.w} height={drawing.h} fill="rgba(22,135,248,.07)" stroke="#1687f8" strokeWidth="1.5" strokeDasharray="6 4"/><path d={`M ${drawing.x} ${drawing.y+drawing.h} L ${drawing.x+drawing.w} ${drawing.y+drawing.h}`} stroke="#e8eef5" strokeWidth="1"/></>}
  </svg>
  <div className="ps-cursor" style={{left:cursor.x,top:cursor.y}}><svg viewBox="0 0 28 34"><path d="M3 2L3 25L9.5 19L14 30L18 28L13.5 17L22 17Z" fill="#f5f8fc" stroke="#101722" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
  <div className="ps-asset-tray"><span>ASSETS</span>{experienceTools.slice(0,6).map(item=><div key={item.name} className={asset!==null&&experienceTools[asset]?.name===item.name?'selected':''}><img src={item.logo} alt=""/><small>{item.name}</small></div>)}</div>
  <div className="ps-status"><div className="ps-status-head"><span>{tool.toUpperCase()} TOOL · DESIGN SESSION</span><b>{progress}%</b></div><div className="ps-progress"><i style={{width:progress+'%'}}/></div><p>{phase}</p></div>
 </div>;
}
function CookieConsent(){
 const [choice,setChoice]=useState(()=>{try{return localStorage.getItem('portfolio_cookie_choice')}catch{return null}});
 const [ready,setReady]=useState(()=>{try{return !!sessionStorage.getItem('portfolio_build_seen')}catch{return true}});
 const [details,setDetails]=useState(false);
 useEffect(()=>{const show=()=>setReady(true);window.addEventListener('portfolio-build-complete',show);return()=>window.removeEventListener('portfolio-build-complete',show)},[]);
 const save=(value)=>{try{localStorage.setItem('portfolio_cookie_choice',value)}catch{};setChoice(value)};
 if(choice||!ready)return null;
 return <aside className="cookie-consent" aria-label="Cookie preferences"><div className="cookie-copy"><span className="cookie-eyebrow">YOUR PRIVACY</span><h3>Cookies on this website</h3><p>This portfolio does not use advertising or analytics cookies. Essential storage may be used to remember your choice and keep the site working. Read the <a href="/cookie-policy">Cookie Policy</a>.</p>{details&&<p className="cookie-detail">No optional tracking is enabled. Choosing “Essential only” saves your preference in your browser. External websites such as LinkedIn and GitHub have their own cookie practices.</p>}</div><div className="cookie-actions"><button className="cookie-accept" onClick={()=>save('accepted')}>Accept & continue</button><button className="cookie-essential" onClick={()=>save('essential')}>Essential only</button><button className="cookie-customize" onClick={()=>setDetails(v=>!v)}>{details?'Hide details':'More info'}</button></div></aside>;
}
export default function App(){
 const [open,setOpen]=useState(false),[loading,setLoading]=useState(true);const close=()=>setOpen(false);
 const path=window.location.pathname.replace(/\/$/,'')||'/';
 React.useEffect(()=>{const timer=setTimeout(()=>setLoading(false),450);return()=>clearTimeout(timer)},[]);
 React.useEffect(()=>{document.title=(legalContent[path]?.title?legalContent[path].title+' | ':'')+'Parthiv Binish';},[path]);
 if(legalContent[path])return <LegalPage page={legalContent[path]}/>;
 return <><BuildAnimation/><div className={loading?'site-loader':'site-loader site-loader-hidden'} aria-label="Loading portfolio"><span className="loader-ring"></span><span>PARTHIV BINISH</span></div><main>
  <header className="header"><a className="brand" href="#home" onClick={close}>Parthiv Binish</a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav nav-open':'nav'}>{['About','Experience','Projects','Skills','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={close}>{x}</a>)}<LinkOut href="https://github.com/Parthiv-Binish">GitHub</LinkOut></nav></header>
  <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow">IT OPERATIONS <i>/</i> NETWORK <i>/</i> DEVELOPMENT</p><h1>Building reliable systems<br/>and <em>practical solutions.</em></h1><p className="lead">I work across enterprise network operations and software development, bringing an operations mindset to the systems and applications I build.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><LinkOut href="https://github.com/Parthiv-Binish" className="quiet-link">GitHub</LinkOut></div></div></section>
  <section className="split" id="about"><p className="index">01 / ABOUT</p><div><h2>Technology is most useful when it solves a real problem.</h2><p>I’m an IT professional currently working in Network Operations at Tata Consultancy Services on the TMNA project. My work involves incident handling, monitoring, troubleshooting coordination and working with sites and vendors toward service restoration.</p><p>Alongside operations, I build software projects spanning frontend interfaces, backend APIs, databases and integrations.</p></div></section>
  <section className="split" id="experience"><p className="index">02 / EXPERIENCE</p><div><div className="role"><span className="tcs">tcs</span><div><h3>Tata Consultancy Services</h3><p>Infrastructure Support Engineer · Network Operations · TMNA Project</p></div></div><p>Monitor network health, review alerts and incidents, coordinate with site teams and ISPs/vendors, and support troubleshooting, escalation and service restoration for enterprise connectivity.</p><small className="date">AUG 2025 — PRESENT</small><div className="experience-tools"><h4>Tools & platforms</h4><div className="tool-grid">{experienceTools.map(({name,type,mark,tone,icon:Icon,logo})=><div className="tool-card" key={name}><span className="tool-mark vendor-logo"><img src={logo} alt={name+' logo'} loading="lazy" onError={e=>{const img=e.currentTarget;if(img.dataset.fallback!=='used'){img.dataset.fallback='used';img.src='https://www.google.com/s2/favicons?domain='+img.dataset.domain+'&sz=128';}else{img.style.display='none';img.nextElementSibling.hidden=false;}}} data-domain={experienceTools.find(tool=>tool.name===name)?.domain}/><span className="tool-wordmark" hidden>{name==='Cisco DNA Center (DNAC)'||name==='Cisco vManage'?'cisco':name==='EcoStruxure IT Data Center Expert'?'Schneider Electric':name==='Liebert SiteScan Web'?'Vertiv':name}</span></span><span className="tool-name">{name}</span><span className="tool-type">{type}</span></div>)}</div></div></div></section>
  <section className="projects" id="projects"><div className="section-heading"><p className="index">03 / SELECTED PROJECTS</p></div>{projects.map((p,i)=><article className="project" key={p.name}><span className="number">0{i+1}</span><div><small>{p.kind}</small><h3>{p.name}</h3><p>{p.description}</p><label>{p.stack}</label></div><LinkOut href={p.href} className="repo-link">Repository</LinkOut></article>)}</section>
  <section className="split" id="skills"><p className="index">04 / TECHNICAL SKILLS</p><div><h2>Languages, frameworks and tools.</h2><div className="skill-grid">{skills.map(({icon:Icon,title,items})=><div className="skill" key={title}><div><Icon size={19}/><h3>{title}</h3></div><p>{items}</p></div>)}</div></div></section>
  <section className="split education"><p className="index">05 / EDUCATION</p><div><h3>Bachelor of Computer Applications</h3><p>Mahatma Gandhi University · 2022–2025</p><p>St. Joseph’s Academy of Higher Education & Research</p><p>Certification: Cyber Security Analytics (CCSA)</p></div></section>
  <footer id="contact"><div><p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s connect.</h2><p>For professional opportunities and collaboration, find me on GitHub or LinkedIn.</p></div><div className="social"><LinkOut href="https://github.com/Parthiv-Binish"><Github size={17}/> GitHub</LinkOut><LinkOut href="https://www.linkedin.com/in/parthiv-binish/"><Linkedin size={17}/> LinkedIn</LinkOut></div><div className="bottom"><span>Parthiv Binish</span><span>Network Operations · Software Development</span><div className="footer-legal"><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a><a href="/cookie-policy">Cookies</a><a href="/grievance">Grievance</a></div><a href="#home">Back to top ↑</a></div></footer>
 </main><ConnectionAssistant/><CookieConsent/></>;
}
