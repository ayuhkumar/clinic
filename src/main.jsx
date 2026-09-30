import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {
  ArrowRight, CalendarDays, Check, ChevronDown, Clock3, CreditCard,
  Droplets, HeartPulse, HelpCircle, Instagram, MapPin, Menu, Phone,
  ShieldCheck, Sparkles, Stethoscope, UserRound, X, Zap
} from "lucide-react";
import "./styles.css";

const concerns = [
  ["Acne","Pimples, breakouts and recurring flare-ups.","/treatments"],
  ["Acne Scars","Texture changes and marks after acne.","/treatments"],
  ["Pigmentation","Uneven tone and stubborn discoloration.","/treatments"],
  ["Oily Skin","Shine, congestion and pore concerns.","/treatments"],
  ["Sensitive Skin","Reactive skin and gentle-care questions.","/treatments"],
  ["Hair Fall","Understand changes in hair shedding.","/treatments"],
  ["Dandruff","Scalp flakes and irritation.","/treatments"],
  ["Unwanted Hair","Explore suitable reduction options.","/specialized"],
  ["Dark Spots","Marks that need a closer look.","/treatments"],
  ["Skin Allergies","Rashes and skin reactions.","/treatments"]
];

const treatments = [
  ["Acne Treatment","Understand your acne and discuss suitable doctor-led options."],
  ["Acne Scar Care","Explore options for texture changes and post-acne marks."],
  ["Pigmentation Care","Personalized care for uneven tone and discoloration."],
  ["Chemical Peels","Professional exfoliation options assessed for suitability."],
  ["Laser-based Treatments","Technology-assisted procedures selected after consultation."],
  ["Hair & Scalp Care","Care for common hair and scalp concerns."]
];

const specialized = [
  ["Chemical Peels","For selected pigmentation, acne and texture concerns."],
  ["Microneedling","A procedure that may be considered for selected scar and texture concerns."],
  ["Laser-based Treatments","Procedure options depend on your condition, skin type and doctor assessment."],
  ["Laser Hair Reduction","Discuss suitability, sessions and expected care with your doctor."],
  ["Pigmentation Procedures","Treatment is selected after identifying the cause of pigmentation."]
];

function Layout({children}) {
  const [open,setOpen] = useState(false);
  return <div className="app">
    <header className="nav">
      <Link className="brand" to="/"><span>aava</span> / skin</Link>
      <nav className={open ? "navlinks open" : "navlinks"}>
        <Link to="/">Home</Link><Link to="/treatments">Treatments</Link><Link to="/specialized">Specialized Care</Link>
        <Link to="/doctor">Doctors</Link><Link to="/pricing">Pricing</Link><Link to="/help">Help</Link>
        <Link to="/signin" className="mobile-auth">Sign In</Link>
      </nav>
      <div className="navactions">
        <Link className="signin" to="/signin">Sign In</Link>
        <Link className="btn btn-dark" to="/appointment">Book Appointment</Link>
      </div>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div><Link className="brand" to="/"><span>aava</span> / skin</Link><p>Thoughtful, doctor-led skin care in Kalol, Gandhinagar.</p></div>
      <div><h4>Explore</h4><Link to="/treatments">Treatments</Link><Link to="/doctor">Doctor</Link><Link to="/pricing">Pricing</Link><Link to="/appointment">Appointments</Link></div>
      <div><h4>Support</h4><Link to="/help">Help Center</Link><Link to="/contact">Contact</Link><a href="#">Privacy</a><a href="#">Terms</a></div>
      <div><h4>Visit</h4><p>Kalol, Gandhinagar, Gujarat</p><a href="tel:+910000000000">+91 [PHONE NUMBER]</a><a href="mailto:hello@example.com">[EMAIL]</a></div>
      <div className="footerbottom"><span>© 2026 Aava Skin — Practice frontend.</span><span>Consult before beginning treatment.</span></div>
    </footer>
    <div className="mobile-book"><Link to="/appointment">Book Appointment <ArrowRight size={17}/></Link></div>
  </div>
}

function Button({children,to="/appointment",dark=false}) {
  return <Link className={"btn "+(dark?"btn-dark":"btn-light")} to={to}>{children}<ArrowRight size={17}/></Link>
}

function SectionTitle({eyebrow,title,text}) {
  return <div className="sectiontitle"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>
}

function Home(){
 return <Layout>
  <section className="hero">
    <div className="hero-copy">
      <span className="eyebrow">DERMATOLOGY CARE · KALOL</span>
      <h1>Clearer skin starts with the <em>right care.</em></h1>
      <p>Doctor-led dermatology care for acne, scars, pigmentation and everyday skin concerns — right here in Kalol.</p>
      <div className="actions"><Button dark>Book a Consultation</Button><Button to="/treatments">Explore Treatments</Button></div>
      <div className="hero-trust"><ShieldCheck/><span>Doctor-led care</span><i/> <span>10+ years experience</span></div>
    </div>
    <div className="hero-image"><img src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=1200&q=85" alt="Doctor speaking with a patient"/></div>
  </section>

  <section className="section concerns"><SectionTitle eyebrow="START WITH YOUR CONCERN" title="What is bothering your skin?" text="Start with the concern you recognize. A consultation helps determine the right next step."/>
    <div className="concern-grid">{concerns.map(([n,d,l],i)=><Link className={"concern c"+i} to={l} key={n}><span>0{i+1}</span><h3>{n}</h3><p>{d}</p><ArrowRight size={18}/></Link>)}</div>
  </section>

  <section className="section trust"><SectionTitle eyebrow="OUR APPROACH" title="Care that starts with listening" text="Good skin care is a conversation, not a one-size-fits-all routine."/>
    <div className="feature-grid">
      <Feature icon={<Stethoscope/>} title="Doctor-led consultation" text="Your concerns are assessed before a plan is discussed."/>
      <Feature icon={<HeartPulse/>} title="Personalized plans" text="Care is shaped around your skin and goals."/>
      <Feature icon={<Sparkles/>} title="Modern approach" text="Evidence-informed options, clearly explained."/>
      <Feature icon={<CreditCard/>} title="Transparent pricing" text="Discuss costs before deciding on treatment."/>
    </div>
  </section>

  <section className="doctor-banner">
    <div className="doctor-photo"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85" alt="Dermatology doctor"/></div>
    <div><span className="eyebrow">MEET YOUR DOCTOR</span><h2>Your skin is personal. Your treatment should be too.</h2><p>Consult with MBBS-qualified doctors with 10+ years of experience in dermatology.</p><div className="doctor-stats"><b>MBBS<small>Medical qualification</small></b><b>10+<small>Years experience</small></b><b>1:1<small>Doctor consultation</small></b></div><Button to="/doctor">Meet Your Doctor</Button></div>
  </section>

  <section className="section"><SectionTitle eyebrow="TREATMENTS" title="Explore care for real skin concerns" text="Treatment suitability is determined after consultation."/>
    <div className="treatment-grid">{treatments.map(([n,d])=><TreatmentCard key={n} name={n} text={d}/>)}</div>
  </section>

  <section className="section process"><SectionTitle eyebrow="YOUR JOURNEY" title="How it works" text="A simple path from questions to a treatment plan you understand."/>
    <div className="steps">{[["01","Book","Choose your preferred appointment."],["02","Consult","Discuss your concerns with the doctor."],["03","Personalize","Receive a plan suited to your condition."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div>
  </section>

  <CTA/>
 </Layout>
}

function Feature({icon,title,text}){return <div className="feature"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function TreatmentCard({name,text}){return <Link className="treatment" to="/treatments"><div className="treaticon"><Droplets/></div><h3>{name}</h3><p>{text}</p><span>Explore care <ArrowRight size={16}/></span></Link>}
function CTA(){return <section className="cta"><span className="eyebrow">READY WHEN YOU ARE</span><h2>Your skin deserves informed care.</h2><p>Ready to understand your skin better?</p><Button dark>Book Appointment</Button></section>}

function Treatments(){
 return <Layout><PageHero eyebrow="TREATMENTS" title="Care built around your skin concern." text="Explore common dermatology concerns and learn what a consultation may involve."/>
 <section className="section"><div className="treatment-grid">{treatments.concat([["Sensitive Skin Care","Gentle, personalized care for reactive or sensitive skin."]]).map(([n,d])=><TreatmentCard key={n} name={n} text={d}/>)}</div></section><CTA/></Layout>
}

function Specialized(){
 return <Layout><PageHero eyebrow="SPECIALIZED CARE" title="Advanced care for specific skin concerns." text="Procedure-based options are discussed only after a doctor assesses your skin and treatment goals."/>
 <section className="section"><div className="special-grid">{specialized.map(([n,d])=><div className="special" key={n}><div className="special-art"><Zap/></div><span className="eyebrow">SPECIALIZED</span><h3>{n}</h3><p>{d}</p><Link to="/appointment">Discuss with doctor <ArrowRight size={16}/></Link></div>)}</div></section><CTA/></Layout>
}

function Doctor(){
 return <Layout><section className="doctor-page"><div className="doctor-large"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85" alt="Doctor"/></div><div><span className="eyebrow">CARE YOU CAN TRUST</span><h1>Know who is treating your skin.</h1><h2>Dr. [Doctor Name]</h2><p className="lead">MBBS · 10+ Years Experience · Dermatology Experience</p><p>Every treatment begins with understanding your skin condition, concerns, lifestyle and goals.</p><div className="cred-grid"><Feature icon={<Stethoscope/>} title="Medical first" text="Diagnosis and discussion before treatment."/><Feature icon={<ShieldCheck/>} title="Transparent" text="Treatment options and costs are explained."/><Feature icon={<HeartPulse/>} title="Follow-up" text="Care continues beyond the first appointment."/></div><Button>Book a Consultation</Button></div></section><section className="section"><SectionTitle eyebrow="OUR PROCESS" title="Listen → Examine → Explain → Plan → Follow Up"/><div className="steps">{["Listen","Examine","Explain","Plan","Follow Up"].map((x,i)=><div className="step" key={x}><span>0{i+1}</span><h3>{x}</h3><p>Part of a clear, doctor-led consultation.</p></div>)}</div></section></Layout>
}

function Pricing(){
 const [selected,setSelected]=useState(null);
 return <Layout><PageHero eyebrow="PRICING" title="Know the cost before you book." text="Transparent starting points help you understand what to expect. Replace the practice values below with the clinic's actual prices."/>
 <section className="section"><div className="price-grid">{[["Consultation","₹[XX]","Doctor consultation"],["Follow-up","₹[XX]","For existing patients"],["Procedures","Personalized","Price depends on diagnosis and treatment plan"]].map(([n,p,d])=><div className="price" key={n}><span className="eyebrow">{n}</span><strong>{p}</strong><p>{d}</p><button onClick={()=>setSelected(n)}>Ask about charges <ArrowRight size={16}/></button></div>)}</div><div className="notice"><ShieldCheck/><span>Treatment costs can vary depending on the condition, procedure, number of sessions and individual treatment plan. Final pricing should be discussed before treatment.</span></div></section>{selected&&<Modal title="Charges enquiry"><p>You selected <b>{selected}</b>. This practice frontend does not submit a real enquiry.</p><button className="btn btn-dark" onClick={()=>setSelected(null)}>Close</button></Modal>}</Layout>
}

function Appointment(){
 const [step,setStep]=useState(1),[concern,setConcern]=useState(""),[slot,setSlot]=useState(""),[done,setDone]=useState(false);
 const slots=["10:00 AM","11:30 AM","04:00 PM","05:30 PM","07:00 PM"];
 if(done) return <Layout><div className="success"><Check size={46}/><span className="eyebrow">PRACTICE CONFIRMATION</span><h1>Appointment flow complete.</h1><p>This frontend simulates booking. No real appointment or payment has been created.</p><div className="summary"><b>Concern:</b> {concern||"General consultation"}<br/><b>Time:</b> {slot||"Selected slot"}</div><Button to="/">Back Home</Button></div></Layout>;
 return <Layout><section className="booking"><div className="booking-head"><span className="eyebrow">BOOK A CONSULTATION</span><h1>Your skin consultation, step by step.</h1><p>Choose a concern, select a time, review your details and continue to the practice payment screen.</p></div><div className="progress">{["Concern","Doctor","Date & Time","Details","Payment"].map((x,i)=><span className={step>i?"active":""} key={x}>{i+1}. {x}</span>)}</div><div className="booking-card">
 {step===1&&<><h2>What would you like help with?</h2><div className="choice-grid">{concerns.slice(0,8).map(([n])=><button className={concern===n?"choice selected":"choice"} onClick={()=>setConcern(n)} key={n}>{n}<Check size={16}/></button>)}</div></>}
 {step===2&&<><h2>Select your doctor</h2><div className="doctor-select"><UserRound/><div><h3>Dr. [Doctor Name]</h3><p>MBBS · 10+ years dermatology experience</p></div><Check/></div></>}
 {step===3&&<><h2>Select a time</h2><div className="datefake"><CalendarDays/> October 2026</div><div className="slotgrid">{slots.map(x=><button className={slot===x?"choice selected":"choice"} onClick={()=>setSlot(x)} key={x}><Clock3/> {x}</button>)}</div></>}
 {step===4&&<><h2>Your details</h2><div className="formgrid"><input placeholder="Full name"/><input placeholder="Mobile number"/><input placeholder="Email"/><input placeholder="Age"/></div><textarea placeholder="Briefly describe your concern (optional)"/></>}
 {step===5&&<><h2>Review & practice payment</h2><div className="review"><p><b>Concern:</b> {concern||"General consultation"}</p><p><b>Doctor:</b> Dr. [Doctor Name]</p><p><b>Time:</b> {slot||"Not selected"}</p><p><b>Consultation:</b> ₹[XX]</p></div><div className="payment-options"><span><CreditCard/> UPI / Card / Net Banking</span></div></>}
 <div className="booking-actions">{step>1&&<button className="btn btn-light" onClick={()=>setStep(step-1)}>Back</button>}<button className="btn btn-dark" onClick={()=>step===5?setDone(true):setStep(step+1)}>{step===5?"Simulate Payment":"Continue"} <ArrowRight size={17}/></button></div>
 </div></section></Layout>
}

function SignIn(){
 const [mode,setMode]=useState("signin");
 return <Layout><section className="auth"><div className="auth-art"><span className="eyebrow">AAVA / SKIN</span><h1>Start taking better care of your skin.</h1><p>Create an account to manage appointments, consultations and treatment information.</p></div><div className="auth-card"><div className="tabs"><button className={mode==="signin"?"on":""} onClick={()=>setMode("signin")}>Sign In</button><button className={mode==="signup"?"on":""} onClick={()=>setMode("signup")}>Create Account</button></div><h2>{mode==="signin"?"Welcome back.":"Create your account."}</h2>{mode==="signup"&&<input placeholder="Full name"/>}<input placeholder="Mobile number or email"/><input placeholder="Password" type="password"/>{mode==="signup"&&<><input placeholder="Confirm password" type="password"/><label className="checkline"><input type="checkbox"/> I agree to the Terms & Privacy Policy.</label></>}<button className="btn btn-dark full">{mode==="signin"?"Sign In":"Create Account"} <ArrowRight size={17}/></button><div className="or">or</div><button className="social">Continue with Google</button>{mode==="signup"&&<small>Patients under 18 may require parent/guardian involvement for certain consultations or treatments.</small>}</div></section></Layout>
}

function Payment(){
 return <Layout><section className="payment-page"><div><span className="eyebrow">PAYMENT</span><h1>Complete your booking.</h1><p>This is a frontend-only practice payment screen.</p></div><div className="paycard"><div className="payrow"><span>Consultation</span><b>₹[XX]</b></div><div className="payrow"><span>Doctor</span><b>Dr. [Doctor Name]</b></div><hr/><div className="payrow total"><span>Total</span><b>₹[XX]</b></div><div className="paymethods"><button>UPI</button><button>Card</button><button>Net Banking</button></div><button className="btn btn-dark full" onClick={()=>alert("Practice UI only — no payment processed.")}>Pay Securely <CreditCard size={17}/></button></div></section></Layout>
}

function Help(){
 const faqs=["Do I need a consultation before treatment?","How do I reschedule an appointment?","Can teenagers book a consultation?","What should I bring to my first visit?","How do I receive my receipt?","Can I cancel my appointment?"];
 return <Layout><PageHero eyebrow="HELP CENTER" title="Have a question? Let's make it simple." text="Find answers about appointments, treatments, payments and your visit."/><section className="section help"><div className="searchfake"><HelpCircle/><input placeholder="Search your question..."/></div><FAQ items={faqs}/><div className="support"><h2>Still need help?</h2><p>Contact the clinic directly for assistance with your appointment.</p><div className="actions"><a className="btn btn-dark" href="tel:+910000000000"><Phone size={17}/> Call Clinic</a><a className="btn btn-light" href="https://wa.me/910000000000">WhatsApp <ArrowRight size={17}/></a></div></div></section></Layout>
}
function FAQ({items}){const [open,setOpen]=useState(-1);return <div className="faq">{items.map((q,i)=><button key={q} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span>{open===i?<X size={18}/>:<ChevronDown size={18}/>} {open===i&&<p>Answer placeholder for the practice frontend. Replace this with the clinic's verified policy or medical guidance.</p>}</button>)}</div>}
function Contact(){
 return <Layout><PageHero eyebrow="CONTACT" title="Visit us in Kalol." text="Use the details below as placeholders until the real clinic information is available."/><section className="section contactgrid"><div className="contactcard"><h2>Aava Skin</h2><p><MapPin/> Kalol, Gandhinagar, Gujarat</p><p><Phone/> +91 [PHONE NUMBER]</p><p><Clock3/> [CLINIC HOURS]</p><p>✉ [EMAIL]</p><div className="actions"><a className="btn btn-dark" href="https://maps.google.com/?q=Kalol,Gandhinagar,Gujarat">Get Directions</a><a className="btn btn-light" href="tel:+910000000000">Call Clinic</a></div></div><div className="map"><MapPin size={40}/><h3>Clinic location</h3><p>Replace this practice map block with the verified clinic address and embedded map.</p></div></section><section className="section"><SectionTitle eyebrow="BEFORE YOU VISIT" title="Come prepared for your consultation."/><div className="feature-grid"><Feature icon={<CalendarDays/>} title="Appointment details" text="Keep your confirmation or booking reference handy."/><Feature icon={<HeartPulse/>} title="Relevant history" text="Bring previous prescriptions or reports when relevant."/><Feature icon={<HelpCircle/>} title="Your questions" text="Write down concerns you'd like to discuss."/><Feature icon={<ShieldCheck/>} title="Be honest" text="Tell your doctor about relevant medicines and products." /></div></section></Layout>
}
function PageHero({eyebrow,title,text}){return <section className="pagehero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>}
function Modal({title,children}){return <div className="modal"><div className="modalbox"><h2>{title}</h2>{children}</div></div>}

function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/treatments" element={<Treatments/>}/><Route path="/specialized" element={<Specialized/>}/><Route path="/doctor" element={<Doctor/>}/><Route path="/pricing" element={<Pricing/>}/><Route path="/appointment" element={<Appointment/>}/><Route path="/signin" element={<SignIn/>}/><Route path="/payment" element={<Payment/>}/><Route path="/help" element={<Help/>}/><Route path="/contact" element={<Contact/>}/></Routes>}
createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
