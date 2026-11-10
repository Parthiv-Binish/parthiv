import React from 'react';
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, Network, Code2, Database, Shield, Menu, X, MonitorCog, Globe2, Activity, Ticket, Layers } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {name:'VALO Community',kind:'Web application',description:'A community platform for discovering Kick and YouTube streamers.',stack:'React · FastAPI · Supabase',href:'https://github.com/Parthiv-Binish/valo-community'},
  {name:'Face Detection',kind:'Computer vision',description:'A computer-vision project exploring face detection and recognition.',stack:'Python · OpenCV',href:'https://github.com/Parthiv-Binish/Face-Detection'},
  {name:'Utharam Browser',kind:'Desktop application',description:'A desktop browser project built with Python.',stack:'Python',href:'https://github.com/Parthiv-Binish/Utharam-Browser-PyBrowser-'}
];
const experienceTools=[
 {name:'ThousandEyes',type:'Network assurance',mark:'TE',tone:'orange',icon:Globe2},
 {name:'Cisco DNAC',type:'Network management',mark:'cisco',tone:'cisco',icon:Network},
 {name:'Cisco vManage',type:'SD-WAN management',mark:'cisco',tone:'cisco',icon:Network},
 {name:'Datadog',type:'Monitoring & observability',mark:'✣',tone:'purple',icon:Activity},
 {name:'Nagios Core',type:'Infrastructure monitoring',mark:'N',tone:'nagios',icon:Radar},
 {name:'ServiceNow',type:'IT service management',mark:'servicenow',tone:'snow',icon:Ticket},
 {name:'Liebert SiteScan Web',type:'Data centre monitoring · Vertiv',logo:'https://cdn.simpleicons.org/vertiv'},
 {name:'EcoStruxure IT Data Center Expert',type:'Data centre infrastructure management · Schneider Electric',logo:'https://cdn.simpleicons.org/schneiderelectric'},
 {name:'Infoblox',type:'DNS · DHCP · IPAM',mark:'infoblox',tone:'blue',icon:Layers}
];
const skills=[
 {icon:Code2,title:'Programming & Frontend',items:'C · C++ · JavaScript · Python · PHP · HTML · CSS · React'},
 {icon:MonitorCog,title:'Backend & Frameworks',items:'Node.js · NestJS · FastAPI · Django · Flutter · MERN stack'},
 {icon:Database,title:'Databases & Developer Tools',items:'MySQL · MongoDB · PostgreSQL · Supabase · Redis · Git · VS Code · Android Studio'},
 {icon:Shield,title:'Systems & Security',items:'Linux administration · Cybersecurity fundamentals · Cyber Security Analytics'}
];
function LinkOut({href,children,className=''}){return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15}/></a>}
export default function App(){
 const [open,setOpen]=useState(false);const close=()=>setOpen(false);
 return <main>
  <header className="header"><a className="brand" href="#home" onClick={close}>Parthiv Binish</a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav nav-open':'nav'}>{['About','Experience','Projects','Skills','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={close}>{x}</a>)}<LinkOut href="https://github.com/Parthiv-Binish">GitHub</LinkOut></nav></header>
  <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow">IT OPERATIONS <i>/</i> NETWORK <i>/</i> DEVELOPMENT</p><h1>Building reliable systems<br/>and <em>practical solutions.</em></h1><p className="lead">I work across enterprise network operations and software development, bringing an operations mindset to the systems and applications I build.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><LinkOut href="https://github.com/Parthiv-Binish" className="quiet-link">GitHub</LinkOut></div></div></section>
  <section className="split" id="about"><p className="index">01 / ABOUT</p><div><h2>Technology is most useful when it solves a real problem.</h2><p>I’m an IT professional currently working in Network Operations at Tata Consultancy Services on the TMNA project. My work involves incident handling, monitoring, troubleshooting coordination and working with sites and vendors toward service restoration.</p><p>Alongside operations, I build software projects spanning frontend interfaces, backend APIs, databases and integrations.</p></div></section>
  <section className="split" id="experience"><p className="index">02 / EXPERIENCE</p><div><div className="role"><span className="tcs">tcs</span><div><h3>Tata Consultancy Services</h3><p>Infrastructure Support Engineer · Network Operations · TMNA Project</p></div></div><p>Monitor network health, review alerts and incidents, coordinate with site teams and ISPs/vendors, and support troubleshooting, escalation and service restoration for enterprise connectivity.</p><small className="date">AUG 2025 — PRESENT</small><div className="experience-tools"><h4>Tools & platforms</h4><div className="tool-grid">{experienceTools.map(({name,type,mark,tone,icon:Icon,logo})=><div className="tool-card" key={name}><span className={"tool-mark "+(tone||'vendor-logo')}>{logo?<img src={logo} alt={name+' logo'}/>:tone==="cisco"?<span className="cisco-mark">cisco</span>:tone==="snow"?<span className="servicenow-mark">servicenow</span>:tone==="purple"?<span className="datadog-mark">✣</span>:tone==="blue"?<span className="infoblox-mark">infoblox</span>:<span className="tool-monogram">{mark}</span>}</span><span className="tool-name">{name}</span><span className="tool-type">{type}</span></div>)}</div></div></div></section>
  <section className="projects" id="projects"><div className="section-heading"><p className="index">03 / SELECTED PROJECTS</p></div>{projects.map((p,i)=><article className="project" key={p.name}><span className="number">0{i+1}</span><div><small>{p.kind}</small><h3>{p.name}</h3><p>{p.description}</p><label>{p.stack}</label></div><LinkOut href={p.href} className="repo-link">Repository</LinkOut></article>)}</section>
  <section className="split" id="skills"><p className="index">04 / TECHNICAL SKILLS</p><div><h2>Languages, frameworks and tools.</h2><div className="skill-grid">{skills.map(({icon:Icon,title,items})=><div className="skill" key={title}><div><Icon size={19}/><h3>{title}</h3></div><p>{items}</p></div>)}</div></div></section>
  <section className="split education"><p className="index">05 / EDUCATION</p><div><h3>Bachelor of Computer Applications</h3><p>Mahatma Gandhi University · 2022–2025</p><p>St. Joseph’s Academy of Higher Education & Research</p><p>Certification: Cyber Security Analytics (CCSA)</p></div></section>
  <footer id="contact"><div><p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s connect.</h2><p>For professional opportunities and collaboration, find me on GitHub or LinkedIn.</p></div><div className="social"><LinkOut href="https://github.com/Parthiv-Binish"><Github size={17}/> GitHub</LinkOut><LinkOut href="https://www.linkedin.com/in/parthiv-binish/"><Linkedin size={17}/> LinkedIn</LinkOut></div><div className="bottom"><span>Parthiv Binish</span><span>Network Operations · Software Development</span><a href="#home">Back to top ↑</a></div></footer>
 </main>
}