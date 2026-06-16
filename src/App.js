import { useState, useEffect, useRef } from "react";
import "./index.css";

const faiths = [
  { icon: "🕌", name: "Islam", story: "Guided a young man from doubt to deep faith through Quran & life coaching – now a community leader in his city." },
  { icon: "✝️", name: "Christianity", story: "Helped a pastor understand Islamic theology for interfaith dialogue – now he leads peace-building workshops across Europe." },
  { icon: "🕎", name: "Judaism", story: "Taught a Jewish scholar about Quranic stories of prophets – we co-wrote an article on Abrahamic brotherhood." },
  { icon: "🕉️", name: "Hinduism", story: "Coached a Hindu business owner on stress management using spiritual principles – his health and family life healed." },
  { icon: "🪷", name: "Buddhism", story: "A Buddhist monk and I exchanged meditation techniques & Quranic mindfulness – both of us were deeply enriched." },
  { icon: "⚛️", name: "Sikhism", story: "Helped a Sikh youth overcome identity crisis through interfaith spiritual mentoring – now proud of both identities." },
  { icon: "☯️", name: "Taoism", story: "Taught a Taoist practitioner about Islamic concept of Tawakkul (trust in God) – she found new inner peace." },
  { icon: "🔯", name: "Jainism", story: "Dialogued with a Jain professor on non-violence – Ahimsa in Jainism vs Islam – joint university lecture delivered." },
  { icon: "🕊️", name: "Zoroastrianism", story: "A Zoroastrian elder shared fire temple wisdom; I shared Quranic light (Nur) – mutual spiritual respect born." },
  { icon: "🌿", name: "Indigenous", story: "Worked with a Native American elder on earth-based spirituality & Islamic stewardship (Khalifah) – eco-faith project launched." },
];

const qualifications = [
  { degree: "Hifz-ul-Quran", field: "Complete Quranic Memorization with Tajweed", institution: "Minhaj-ul-Quran", year: "1998" },
  { degree: "Doctorate", field: "Comparative Global Religion & Islamic Studies", institution: "Advanced Research Institute", year: "2010" },
  { degree: "M.A.", field: "Modern Sciences", institution: "Punjab University", year: "2004" },
  { degree: "M.A.", field: "History", institution: "Punjab University", year: "2005" },
  { degree: "M.A.", field: "Arabic Language & Literature", institution: "Punjab University", year: "2006" },
  { degree: "M.A.", field: "English Language & Literature", institution: "Punjab University", year: "2007" },
  { degree: "M.Ed.", field: "Master of Education", institution: "University of Education, Lahore", year: "2008" },
  { degree: "B.Ed.", field: "Bachelor of Education", institution: "University of Education, Lahore", year: "2003" },
  { degree: "Certificate", field: "Education (USA)", institution: "State University of New York", year: "2012" },
  { degree: "Dars-e-Nizami", field: "Classical Islamic Seminary – 10 Years", institution: "Jamia Islamia", year: "2000" },
];

const testimonials = [
  { quote: "Hafiz Adeel taught me the Quran with such love that I fell in love with Allah again. He also helped me quit smoking through lifestyle coaching.", name: "Amina", origin: "USA", faith: "Muslim", initial: "A" },
  { quote: "As a Christian pastor, I wanted to understand Islam without bias. He gave me that gift and we became true friends.", name: "Pastor David", origin: "UK", faith: "Christian", initial: "D" },
  { quote: "His life coaching changed my marriage, my career, and my connection to God. I am Hindu. He never once asked me to change.", name: "Raj", origin: "India", faith: "Hindu", initial: "R" },
  { quote: "I was a lost seeker. He did not convert me. He guided me back to my own soul and taught me mindfulness from both Buddhist and Islamic traditions.", name: "Sarah", origin: "Canada", faith: "Seeker", initial: "S" },
  { quote: "Our dialogue on non-violence changed how I teach Jainism to young people. He is a true bridge-builder.", name: "Prof. Anjali", origin: "India", faith: "Jain", initial: "A" },
  { quote: "I am Sikh. He helped my son find pride in his turban and his identity. That is real impact.", name: "Harpreet", origin: "Malaysia", faith: "Sikh", initial: "H" },
];

const services = [
  { icon: "📖", title: "Quran & Islamic Studies", desc: "Tajweed, Tafsir, Hifz, and Fiqh for all ages and genders – online or in-person sessions available worldwide.", tag: "Most Popular" },
  { icon: "🌍", title: "Comparative Religion", desc: "Academic and respectful study of any world faith from original scriptures. No conversion agenda – only knowledge.", tag: "" },
  { icon: "🧭", title: "Spiritual Life Coaching", desc: "Faith-based or interfaith coaching to find your purpose, heal relationships, and restore inner peace.", tag: "Top Rated" },
  { icon: "🗣️", title: "Speechwriting & Oratory", desc: "Professional speechwriting and public speaking coaching for scholars, clergy, leaders, and students.", tag: "" },
  { icon: "🧠", title: "Psychological Counseling", desc: "Islamically integrated, spiritually sensitive counseling for individuals, couples, and families.", tag: "" },
  { icon: "🏫", title: "Educational Consulting", desc: "Design interfaith or religious studies curriculum for schools, universities, and Islamic institutions.", tag: "" },
];

const stats = [
  { value: "25+", label: "Years of Service", icon: "🌟" },
  { value: "10", label: "Faith Traditions", icon: "☮️" },
  { value: "1000+", label: "Students Taught", icon: "🎓" },
  { value: "15+", label: "Countries Reached", icon: "🌍" },
];

const awards = [
  { year: "2002", title: "Excellence in Quranic Recitation", by: "Minhaj-ul-Quran" },
  { year: "2005", title: "National Quran Recitation Competition", by: "Govt. High School, Lahore" },
  { year: "2008", title: "Speech Competition – Gold Medal", by: "Govt. of Punjab" },
  { year: "2010", title: "All Punjab Debate & Seerat-un-Nabi Speech", by: "All Punjab Debating Society" },
  { year: "2011", title: "Inter-College Speech Competition", by: "FC College, Lahore" },
  { year: "2014", title: "Tilawat & Naat", by: "University of Education, Lahore" },
];

const socialLinks = [
  { icon: "📘", label: "Facebook", handle: "/hafiz.adeel786", url: "https://www.facebook.com/hafiz.adeel786", color: "#4267B2" },
  { icon: "💼", label: "LinkedIn", handle: "/muhammad-adeel-gailani", url: "https://www.linkedin.com/in/muhammad-adeel-gailani-05394a344/", color: "#0077B5" },
  { icon: "🎯", label: "Upwork", handle: "Hire Me on Upwork", url: "https://tinyurl.com/4uu8tw5n", color: "#14a800" },
  { icon: "⭐", label: "Fiverr", handle: "Order on Fiverr", url: "https://tinyurl.com/4b5953b3", color: "#1dbf73" },
  { icon: "📸", label: "Instagram", handle: "@adeel_830", url: "https://instagram.com/adeel_830", color: "#E1306C" },
  { icon: "▶️", label: "YouTube", handle: "@syedmuhammadadeelgailani", url: "https://www.youtube.com/@syedmuhammadadeelgailani", color: "#FF0000" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      obs.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        obs.unobserve(currentRef);
      }
      obs.disconnect();
    };
  }, [threshold]); // ✅ fixed

  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
      <div style={{ height: 1, width: 48, background: "linear-gradient(90deg, transparent, #c5a55a)" }} />
      <span style={{ fontSize: 11, letterSpacing: 4, color: "#c5a55a", textTransform: "uppercase" }}>{text}</span>
      <div style={{ height: 1, width: 48, background: "linear-gradient(90deg, #c5a55a, transparent)" }} />
    </div>
  );
}

function GoldText({ children }) {
  return (
    <span style={{
      background: "linear-gradient(135deg, #c5a55a, #e8c97a, #c5a55a)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaith, setActiveFaith] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); setActiveSection(id); }
  };

  const openEmail = () => window.open("mailto:muhammadadeelgailani@gmail.com?subject=Inquiry%20from%20Portfolio&body=Assalam%20o%20Alaikum%20Hafiz%20Adeel%20Sahib.");
  const openWhatsApp = () => window.open("https://wa.me/447427738292?text=Assalam%20o%20Alaikum%20Hafiz%20Adeel%20Sahib%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.");
  const openWhatsApp2 = () => window.open("https://wa.me/923129223891?text=Assalam%20o%20Alaikum%20Hafiz%20Adeel%20Sahib%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.");

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#080c10", color: "#e8dcc8", minHeight: "100vh", overflowX: "hidden" }}>

     {/* ══ NAVBAR ══ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(8,12,16,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(197,165,90,0.2)" : "none",
        padding: "0 40px", transition: "all 0.4s",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 52, height: 52, border: "2px solid rgba(197,165,90,0.7)", borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 0 16px rgba(197,165,90,0.3)" }}>
              <img src={require("./profile.jpg")} alt="Hafiz Adeel" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <div style={{ color: "#e8c97a", fontSize: 16, fontWeight: "bold", letterSpacing: 1 }}>Hafiz Adeel</div>
              <div style={{ color: "#665544", fontSize: 9, letterSpacing: 3, textTransform: "uppercase" }}>Bukhari</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 36 }} className="nav-links">
            {[
              ["about", "About"],
              ["faiths", "10 Faiths"],
              ["services", "Services"],
              ["qualifications", "Credentials"],
              ["testimonials", "Testimonials"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <span
                key={id}
                className={`nav-link${activeSection === id ? " active" : ""}`}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveSection(id);
                  }
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <button
  className="btn-primary"
  style={{ padding: "10px 24px", fontSize: 11 }}
  onClick={() => window.open("https://wa.me/447427738292", "_blank")}
>
  📞 Book Session
</button>

        </div>
      </nav>
      {/* ══ HERO ══ */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 72, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[500, 800, 1100].map((s, i) => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%", border: `1px solid rgba(197,165,90,${0.07 - i * 0.02})`, width: s, height: s, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          ))}
          <div style={{ position: "absolute", top: "20%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(197,165,90,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(45,122,78,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 80, justifyContent: "space-between" }} className="hero-flex">

            <div style={{ flex: 1, maxWidth: 660 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", border: "1px solid rgba(197,165,90,0.4)", borderRadius: 1, marginBottom: 32, background: "rgba(197,165,90,0.08)" }}>
                <div className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#2d7a4e" }} />
                <span style={{ color: "#e8c97a", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>Available for Sessions Worldwide</span>
              </div>

              <h1 className="hero-title" style={{ fontSize: 60, fontWeight: "bold", lineHeight: 1.1, marginBottom: 8, color: "#f0e8d0" }}>Hafiz Syed</h1>
              <h1 style={{ fontSize: 60, fontWeight: "bold", lineHeight: 1.1, marginBottom: 28 }}><GoldText>Adeel Bukhari</GoldText></h1>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ height: 1, width: 40, background: "#c5a55a" }} />
                <span style={{ fontSize: 12, color: "#aaa090", letterSpacing: 2, textTransform: "uppercase" }}>Islamic Scholar & Global Peace Educator</span>
              </div>

              <p style={{ fontSize: 17, color: "#aaa090", lineHeight: 2.1, marginBottom: 16, fontStyle: "italic", borderLeft: "2px solid rgba(197,165,90,0.5)", paddingLeft: 20 }}>
                "25 years. 10 faiths. Countless hearts.<br />One mission: Knowledge, Compassion, and Unity."
              </p>

              <p style={{ fontSize: 14, color: "#776655", lineHeight: 2.2, marginBottom: 48 }}>
                Doctorate in Comparative Religion · 10 Years Dars-e-Nizami<br />
                Certified Life Coach · Fluent Arabic & English · 15+ Countries
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollTo("services")}>Explore Services</button>
                <button className="btn-secondary" onClick={openWhatsApp}>💬 WhatsApp Me</button>
              </div>
            </div>

            {/* Hero Picture */}
            <div className="hero-visual float-anim" style={{ position: "relative", width: 400, height: 400, flexShrink: 0 }}>
              <div style={{ width: 320, height: 320, borderRadius: "50%", border: "2px solid rgba(197,165,90,0.5)", overflow: "hidden", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", boxShadow: "0 0 60px rgba(197,165,90,0.2), 0 0 120px rgba(197,165,90,0.08)" }}>
                <img src={require("./profile.jpg")} alt="Hafiz Syed Adeel Bukhari" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              {[{ icon: "✝️", angle: 0 }, { icon: "🕎", angle: 60 }, { icon: "🕉️", angle: 120 }, { icon: "🪷", angle: 180 }, { icon: "⚛️", angle: 240 }, { icon: "☯️", angle: 300 }].map(({ icon, angle }, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 190;
                const y = Math.sin(rad) * 190;
                return (
                  <div key={i} style={{ position: "absolute", width: 46, height: 46, borderRadius: "50%", background: "rgba(197,165,90,0.1)", border: "1px solid rgba(197,165,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, top: "50%", left: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(197,165,90,0.15)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="stats-row">
              {stats.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div style={{ textAlign: "center", padding: "20px 16px", borderRight: i < 3 ? "1px solid rgba(197,165,90,0.15)" : "none" }}>
                    <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
                    <div style={{ fontSize: 46, fontWeight: "bold", lineHeight: 1 }}><GoldText>{s.value}</GoldText></div>
                    <div style={{ fontSize: 11, color: "#776655", letterSpacing: 3, marginTop: 10, textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10 FAITHS ══ */}
      <section id="faiths" style={{ padding: "120px 40px", background: "rgba(197,165,90,0.02)", borderTop: "1px solid rgba(197,165,90,0.12)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="Global Impact" />
            <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 16, color: "#f0e8d0" }}>10 Faiths. <GoldText>10 Lives Changed.</GoldText></h2>
            <p style={{ textAlign: "center", color: "#776655", maxWidth: 500, margin: "0 auto 60px", lineHeight: 2, fontSize: 15 }}>
              Each tradition has taught me as much as I have shared. Select a faith to read the story.
            </p>
          </Reveal>

          <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }} className="faith-layout">
            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 230 }}>
              {faiths.map((f, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className={`faith-btn${activeFaith === i ? " active" : ""}`} onClick={() => setActiveFaith(i)}>
                    <span style={{ fontSize: 22 }}>{f.icon}</span>
                    <span style={{ color: activeFaith === i ? "#e8c97a" : "#998877", fontSize: 14 }}>{f.name}</span>
                    {activeFaith === i && <span style={{ marginLeft: "auto", color: "#c5a55a" }}>›</span>}
                  </div>
                </Reveal>
              ))}
            </div>

            <div style={{ flex: 1 }}>
              <div key={activeFaith} className="glass-card fade-up" style={{ padding: "48px 44px" }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>{faiths[activeFaith].icon}</div>
                <div style={{ fontSize: 11, letterSpacing: 4, color: "#c5a55a", textTransform: "uppercase", marginBottom: 20 }}>{faiths[activeFaith].name} · Impact Story</div>
                <p style={{ fontSize: 19, color: "#c8b898", lineHeight: 2.1, fontStyle: "italic", marginBottom: 32, borderLeft: "2px solid rgba(197,165,90,0.4)", paddingLeft: 24 }}>
                  "{faiths[activeFaith].story}"
                </p>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ height: 1, flex: 1, background: "rgba(197,165,90,0.2)" }} />
                  <span style={{ fontSize: 10, color: "#554433", letterSpacing: 3 }}>REAL STORY · REAL IMPACT</span>
                  <div style={{ height: 1, flex: 1, background: "rgba(197,165,90,0.2)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="What I Offer" />
            <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 16, color: "#f0e8d0" }}>Services for <GoldText>All Souls</GoldText></h2>
            <p style={{ textAlign: "center", color: "#776655", maxWidth: 480, margin: "0 auto 60px", lineHeight: 2, fontSize: 15 }}>
              Judgment-free, compassionate guidance for every faith, every culture, every seeker.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="three-col">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: 36, height: "100%" }}>
                  {s.tag && (
                    <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(197,165,90,0.15)", border: "1px solid rgba(197,165,90,0.4)", borderRadius: 1, fontSize: 10, color: "#e8c97a", letterSpacing: 2, marginBottom: 20 }}>✦ {s.tag}</div>
                  )}
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 18, color: "#e8c97a", marginBottom: 14, lineHeight: 1.4 }}>{s.title}</h3>
                  <p style={{ color: "#776655", lineHeight: 1.9, fontSize: 14, marginBottom: 28 }}>{s.desc}</p>
                  <div style={{ paddingTop: 20, borderTop: "1px solid rgba(197,165,90,0.15)", display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={openWhatsApp}>
                    <span style={{ fontSize: 11, color: "#776655", letterSpacing: 2 }}>BOOK THIS</span>
                    <span style={{ color: "#c5a55a" }}>→</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUALIFICATIONS ══ */}
      <section id="qualifications" style={{ padding: "120px 40px", background: "rgba(197,165,90,0.02)", borderTop: "1px solid rgba(197,165,90,0.12)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="Academic Background" />
            <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 16, color: "#f0e8d0" }}>Qualifications & <GoldText>Credentials</GoldText></h2>
            <p style={{ textAlign: "center", color: "#776655", maxWidth: 480, margin: "0 auto 60px", lineHeight: 2, fontSize: 15 }}>
              Classical Islamic scholarship combined with modern academic excellence.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginBottom: 48 }} className="two-col">
            {qualifications.map((q, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass-card" style={{ padding: "22px 28px", display: "flex", alignItems: "center", gap: 24 }}>
                  <div style={{ textAlign: "center", minWidth: 80 }}>
                    <div style={{ fontSize: 10, color: "#665544", letterSpacing: 1, marginBottom: 6 }}>{q.year}</div>
                    <div style={{ background: "rgba(197,165,90,0.12)", border: "1px solid rgba(197,165,90,0.35)", borderRadius: 2, padding: "8px 10px" }}>
                      <div style={{ color: "#e8c97a", fontSize: 12, fontWeight: "bold", letterSpacing: 1 }}>{q.degree}</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#d4c4a8", fontSize: 15, marginBottom: 6, lineHeight: 1.4 }}>{q.field}</div>
                    <div style={{ color: "#665544", fontSize: 12, letterSpacing: 1 }}>{q.institution}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ padding: "36px 40px", border: "1px solid rgba(197,165,90,0.2)", borderRadius: 2, background: "rgba(197,165,90,0.03)", marginBottom: 48 }}>
              <SectionLabel text="Languages of Proficiency" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 24 }}>
                {[["Arabic","Fluent – Scriptural & Academic"],["English","Fluent – Public Speaking"],["Urdu","Native"],["Classical Hebrew","Research"],["Sanskrit","Research"],["Persian","Research"]].map(([lang, note], i) => (
                  <div key={i} style={{ padding: "12px 24px", border: "1px solid rgba(197,165,90,0.3)", borderRadius: 1, display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "#e8c97a", fontSize: 13, fontWeight: "bold" }}>{lang}</span>
                    <span style={{ color: "#443322" }}>|</span>
                    <span style={{ color: "#776655", fontSize: 12 }}>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <SectionLabel text="Honours & Awards" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 32 }} className="three-col">
              {awards.map((a, i) => (
                <div key={i} className="glass-card" style={{ padding: "22px 24px", display: "flex", gap: 16 }}>
                  <div style={{ color: "#e8c97a", fontSize: 13, fontWeight: "bold", minWidth: 36, fontFamily: "monospace" }}>{a.year}</div>
                  <div>
                    <div style={{ color: "#c8b898", fontSize: 14, marginBottom: 4, lineHeight: 1.5 }}>{a.title}</div>
                    <div style={{ color: "#554433", fontSize: 12 }}>{a.by}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="Voices From Around the World" />
            <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 60, color: "#f0e8d0" }}>Real <GoldText>Testimonials</GoldText></h2>
          </Reveal>
          <Reveal>
            <div style={{ padding: "56px 60px", border: "1px solid rgba(197,165,90,0.2)", borderRadius: 2, background: "rgba(197,165,90,0.03)", marginBottom: 28, position: "relative" }}>
              <div style={{ position: "absolute", top: 20, left: 32, fontSize: 80, color: "#c5a55a", opacity: 0.12, lineHeight: 1 }}>"</div>
              <div style={{ position: "absolute", top: 20, right: 24, padding: "6px 14px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 1, fontSize: 10, color: "#776655", letterSpacing: 2 }}>
                {testimonials[activeTestimonial].faith.toUpperCase()} · {testimonials[activeTestimonial].origin.toUpperCase()}
              </div>
              <p key={activeTestimonial} className="fade-up" style={{ fontSize: 20, lineHeight: 2.1, color: "#c8b898", fontStyle: "italic", marginBottom: 36, paddingTop: 16 }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #c5a55a, #8a6a2a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: "bold", color: "#080c10" }}>
                  {testimonials[activeTestimonial].initial}
                </div>
                <div>
                  <div style={{ color: "#e8c97a", fontWeight: "bold", fontSize: 15 }}>{testimonials[activeTestimonial].name}</div>
                  <div style={{ color: "#665544", fontSize: 12, letterSpacing: 1, marginTop: 3 }}>{testimonials[activeTestimonial].origin} · {testimonials[activeTestimonial].faith}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              {testimonials.map((_, i) => (
                <div key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 32 : 8, height: 8, borderRadius: 4, background: i === activeTestimonial ? "#c5a55a" : "rgba(197,165,90,0.25)", cursor: "pointer", transition: "all 0.4s" }} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section style={{ padding: "100px 40px", background: "rgba(197,165,90,0.03)", borderTop: "1px solid rgba(197,165,90,0.12)", borderBottom: "1px solid rgba(197,165,90,0.12)" }}>
        <Reveal>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 36, color: "#c5a55a", marginBottom: 24, opacity: 0.7 }}>﷽</div>
            <p style={{ fontSize: 22, lineHeight: 2.1, color: "#c8b898", fontStyle: "italic" }}>
              "I am not here to take you away from your faith.<br />
              I am here to help you <GoldText>find more light</GoldText> —<br />
              wherever you are, whoever you are."
            </p>
            <div style={{ marginTop: 28, fontSize: 11, color: "#665544", letterSpacing: 4, textTransform: "uppercase" }}>— Hafiz Syed Adeel Bukhari</div>
          </div>
        </Reveal>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="Begin Your Journey" />
            <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 16, color: "#f0e8d0" }}>Connect <GoldText>With Me</GoldText></h2>
            <p style={{ textAlign: "center", color: "#776655", maxWidth: 480, margin: "0 auto 60px", lineHeight: 2, fontSize: 15 }}>
              Muslim, Christian, Hindu, Buddhist, Sikh, or simply a seeker — you are welcome here.
            </p>
          </Reveal>

          {/* Contact Cards */}
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 32 }} className="three-col">
              <div className="contact-card" onClick={openEmail}>
                <div style={{ fontSize: 44, marginBottom: 20 }}>📧</div>
                <div style={{ fontSize: 10, color: "#665544", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Email</div>
                <div style={{ color: "#e8c97a", fontSize: 13, marginBottom: 20, wordBreak: "break-all" }}>muhammadadeelgailani@gmail.com</div>
                <div style={{ padding: "10px 20px", background: "rgba(197,165,90,0.1)", border: "1px solid rgba(197,165,90,0.3)", borderRadius: 1, fontSize: 11, color: "#e8c97a", letterSpacing: 2 }}>CLICK TO EMAIL →</div>
              </div>

              <div className="contact-card" onClick={openWhatsApp}>
                <div style={{ fontSize: 44, marginBottom: 20 }}>💬</div>
                <div style={{ fontSize: 10, color: "#665544", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>WhatsApp (UK)</div>
                <div style={{ color: "#e8c97a", fontSize: 14, marginBottom: 8 }}>+44 7427 738292</div>
                <div style={{ color: "#776655", fontSize: 13, marginBottom: 16 }}>+92 312 9223891</div>
                <div style={{ padding: "10px 20px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.3)", borderRadius: 1, fontSize: 11, color: "#25d366", letterSpacing: 2 }}>CLICK TO CHAT →</div>
              </div>

              <div className="contact-card">
                <div style={{ fontSize: 44, marginBottom: 20 }}>🌐</div>
                <div style={{ fontSize: 10, color: "#665544", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Virtual Sessions</div>
                <div style={{ color: "#e8c97a", fontSize: 14, marginBottom: 20 }}>Zoom · Skype · Meet</div>
                <div style={{ padding: "10px 20px", background: "rgba(197,165,90,0.06)", border: "1px solid rgba(197,165,90,0.2)", borderRadius: 1, fontSize: 11, color: "#776655", letterSpacing: 2 }}>AVAILABLE WORLDWIDE</div>
              </div>
            </div>
          </Reveal>

          {/* Second WhatsApp Pakistan */}
          <Reveal>
            <div style={{ marginBottom: 40, padding: "20px 28px", border: "1px solid rgba(37,211,102,0.2)", borderRadius: 2, background: "rgba(37,211,102,0.03)", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }} onClick={openWhatsApp2}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 28 }}>🇵🇰</span>
                <div>
                  <div style={{ fontSize: 10, color: "#665544", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>WhatsApp (Pakistan)</div>
                  <div style={{ color: "#e8c97a", fontSize: 15 }}>+92 312 9223891</div>
                </div>
              </div>
              <div style={{ padding: "10px 24px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.3)", borderRadius: 1, fontSize: 11, color: "#25d366", letterSpacing: 2 }}>CHAT NOW →</div>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal>
            <div style={{ marginBottom: 40 }}>
              <SectionLabel text="Find Me Online" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 28 }} className="three-col">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className="social-link">
                    <span style={{ fontSize: 24 }}>{s.icon}</span>
                    <div>
                      <div style={{ color: "#e8c97a", fontSize: 13, fontWeight: "bold" }}>{s.label}</div>
                      <div style={{ color: "#665544", fontSize: 11, marginTop: 2 }}>{s.handle}</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: "#554433", fontSize: 16 }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ padding: "32px 40px", border: "1px solid rgba(197,165,90,0.15)", borderRadius: 2, background: "rgba(197,165,90,0.02)", textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#c5a55a", letterSpacing: 1, marginBottom: 10 }}>
                Pakistan · USA · Canada · UK · UAE · Saudi Arabia · Turkey · Malaysia · India · Australia
              </div>
              <div style={{ fontSize: 12, color: "#554433", letterSpacing: 1 }}>
                Available worldwide via virtual sessions · In-person in Lahore, Pakistan
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid rgba(197,165,90,0.3)", padding: "60px 40px", textAlign: "center", background: "rgba(197,165,90,0.02)" }}>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div style={{ width: 80, height: 80, border: "2px solid rgba(197,165,90,0.6)", borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 30px rgba(197,165,90,0.25)" }}>
            <img src={require("./profile.jpg")} alt="Hafiz Adeel" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#c5a55a", letterSpacing: 4, marginBottom: 16 }}>
          ☪️ In the name of Allah, the Most Gracious, the Most Merciful ☪️
        </div>

        <div style={{ fontSize: 26, marginBottom: 8 }}>
          <GoldText>Hafiz Syed Adeel Bukhari</GoldText>
        </div>

        <div style={{ fontSize: 11, color: "#776655", letterSpacing: 3, textTransform: "uppercase", marginBottom: 36 }}>
          Islamic Scholar · Comparative Religion · Life Coach · Peace Educator
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
          <div onClick={() => window.open("https://www.facebook.com/hafiz.adeel786", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>📘</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>Facebook</span>
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/in/muhammad-adeel-gailani-05394a344/", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>💼</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>LinkedIn</span>
          </div>
          <div onClick={() => window.open("https://tinyurl.com/4uu8tw5n", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>🎯</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>Upwork</span>
          </div>
          <div onClick={() => window.open("https://tinyurl.com/4b5953b3", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>⭐</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>Fiverr</span>
          </div>
          <div onClick={() => window.open("https://instagram.com/adeel_830", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>📸</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>Instagram</span>
          </div>
          <div onClick={() => window.open("https://www.youtube.com/@syedmuhammadadeelgailani", "_blank")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", padding: "12px 16px", border: "1px solid rgba(197,165,90,0.25)", borderRadius: 4, background: "rgba(197,165,90,0.04)", minWidth: 70 }}>
            <span style={{ fontSize: 26 }}>▶️</span>
            <span style={{ fontSize: 10, color: "#c5a55a", letterSpacing: 1 }}>YouTube</span>
          </div>
        </div>

        <p style={{ fontSize: 14, color: "#776655", fontStyle: "italic", maxWidth: 480, margin: "0 auto 28px", lineHeight: 2 }}>
          "The best among you are those who learn the Quran and teach it."<br />
          <span style={{ fontSize: 11, letterSpacing: 2, color: "#554433" }}>— PROPHET MUHAMMAD ﷺ</span>
        </p>

        <div style={{ fontSize: 18, marginBottom: 28, letterSpacing: 8 }}>
          🕌 ✝️ 🕎 🕉️ 🪷 ⚛️ ☯️ 🔯 🕊️ 🌿
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(197,165,90,0.3), transparent)", marginBottom: 24 }} />

        <div style={{ fontSize: 12, color: "#776655", letterSpacing: 1 }}>
          © 2025 Muhammad Aitzaz · Designed And Devlop by{" "}
          <span style={{ color: "#e8c97a", fontWeight: "bold", fontSize: 14, letterSpacing: 2, textShadow: "0 0 12px rgba(232,201,122,0.6)" }}>
            MUHAMMAD AITZAZ
          </span>
          {" "}· All Rights Reserved
        </div>

      </footer>

    </div>
  );
}