"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const mainContact = {
  email: "seyidalitunjay@gmail.com",
  phone: "+447392890159",
  phoneLabel: "+44 7392 890159",
};

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "#contact" },
];

const problemCards = [
  {
    num: "01",
    title: "Work without recognised proof",
    body: "Millions of workers complete valuable tasks but never build a durable record that can be reused across jobs, programmes, or institutions.",
    accent: "var(--cyan)",
  },
  {
    num: "02",
    title: "Credibility stays trapped in the moment",
    body: "Informal proof often depends on memory, local relationships, or one-off confirmations that do not travel with the worker.",
    accent: "var(--purple)",
  },
  {
    num: "03",
    title: "Opportunity decisions become harder",
    body: "Lenders, employers, and development programmes lack a practical way to assess work history when formal documentation does not exist.",
    accent: "var(--green)",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Work is completed",
    body: "A worker finishes a structured field task through a simple, low-friction workflow that can operate in constrained environments.",
  },
  {
    step: "02",
    title: "Work is validated",
    body: "The task is reviewed through a practical confirmation process built to reduce false records and strengthen institutional trust.",
  },
  {
    step: "03",
    title: "A digital record is created",
    body: "Once validated, the system converts that work into a worker-owned digital employment record linked to completed activity.",
  },
  {
    step: "04",
    title: "Institutions can verify",
    body: "Approved lenders, employers, and programmes can review relevant parts of the record when making credibility or eligibility decisions.",
  },
];

const realWorldCards = [
  {
    title: "Offline-first from the start",
    body: "Designed for low-connectivity settings. Core flows keep moving even when the network doesn't.",
    accent: "var(--cyan)",
  },
  {
    title: "Built for low-cost devices",
    body: "Shaped around entry-level smartphones — no high-bandwidth assumptions or desktop-heavy processes.",
    accent: "var(--purple)",
  },
  {
    title: "Fits gradual adoption",
    body: "Institutions can begin with targeted pilot use cases and expand only as trust is established.",
    accent: "var(--green)",
  },
  {
    title: "Grounded in existing reality",
    body: "Trust comes from workflow design and operational discipline — not from idealized conditions.",
    accent: "var(--orange)",
  },
];

const roadmapItems = [
  {
    phase: "Now",
    label: "Phase 01",
    title: "Ideation and system definition",
    body: "Clarifying product logic, validation approach, user journey, and trust model.",
    accent: "var(--cyan)",
    badgeClass: "badge-c",
    active: true,
  },
  {
    phase: "Next",
    label: "Phase 02",
    title: "Focused pilot design",
    body: "Preparing a narrow first pilot in Europe and Central Asia with high-informality context.",
    accent: "var(--purple)",
    badgeClass: "badge-p",
    active: false,
  },
  {
    phase: "Then",
    label: "Phase 03",
    title: "Workflow and credibility testing",
    body: "Evaluating whether the record format and validation design create genuinely useful proof.",
    accent: "var(--green)",
    badgeClass: "badge-g",
    active: false,
  },
  {
    phase: "Later",
    label: "Phase 04",
    title: "Expansion only after evidence",
    body: "Scaling depends on real pilot learning and clear value for workers and institutions.",
    accent: "var(--orange)",
    badgeClass: "badge-o",
    active: false,
  },
];

function useTypewriter(text: string, speed = 44) {
  const [index, setIndex] = useState(0);
  useEffect(() => { setIndex(0); }, [text]);
  useEffect(() => {
    if (index >= text.length) return;
    const t = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(t);
  }, [index, text, speed]);
  return { display: text.slice(0, index), done: index >= text.length };
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const tw = useTypewriter("A portable layer of trust for informal work.", 44);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div id="top" style={{ position: "relative", zIndex: 1, overflowX: "hidden" }}>

      {/* ── NAV ─────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(0,232,245,0.09)",
        background: "rgba(6,13,26,0.9)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
      }}>
        <div className="outer" style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              border: "1px solid rgba(0,232,245,0.4)",
              background: "linear-gradient(135deg, rgba(0,232,245,0.16), rgba(184,79,255,0.13))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.82rem", fontWeight: 900, color: "var(--cyan)",
              fontFamily: "var(--font-mono)", boxShadow: "0 0 12px rgba(0,232,245,0.2)",
            }}>V</div>
            <div>
              <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.22em", color: "var(--cyan)", fontFamily: "var(--font-mono)" }}>VERI</p>
              <p style={{ margin: 0, fontSize: "0.58rem", color: "rgba(219,234,254,0.4)" }}>Verified Employment Records</p>
            </div>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{
                fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(219,234,254,0.5)", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(219,234,254,0.5)")}
              >{item.label}</Link>
            ))}
          </nav>

          <a href={`mailto:${mainContact.email}`} className="btn" style={{ padding: "0.45rem 1.1rem", fontSize: "0.65rem" }}>
            <span>Contact</span>
          </a>
        </div>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "5rem" }}>

        {/* ── HERO ────────────────────────────────── */}
        <section style={{
          minHeight: "94vh",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "7rem 1.5rem 5rem", position: "relative",
        }}>
          {/* Static rings */}
          {[220, 380, 560].map((s, i) => (
            <div key={s} style={{
              position: "absolute", top: "50%", left: "50%",
              width: s, height: s, borderRadius: "50%",
              border: `1px solid rgba(0,232,245,${0.12 - i * 0.03})`,
              transform: "translate(-50%,-50%)", pointerEvents: "none",
            }} />
          ))}
          {/* Pulsing rings */}
          {[0, 1.5].map((d) => (
            <div key={d} style={{
              position: "absolute", top: "50%", left: "50%",
              width: 160, height: 160, borderRadius: "50%",
              border: "1px solid rgba(0,232,245,0.4)",
              animation: `ring-expand 3.2s ease-out ${d}s infinite`,
              pointerEvents: "none",
            }} />
          ))}

          {/* Badge */}
          <div className="fade-in-up" style={{ marginBottom: "1.75rem" }}>
            <span className="badge badge-c">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cyan)", display: "inline-block", animation: "blink 1.8s infinite", boxShadow: "0 0 5px var(--cyan)" }} />
              Ideation Stage · 2025
            </span>
          </div>

          {/* Heading */}
          <h1 className="fade-in-up delay-1" style={{
            fontSize: "clamp(2.6rem, 9vw, 6rem)",
            fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05,
            marginBottom: "1.5rem", maxWidth: 860,
            background: "linear-gradient(130deg, var(--cyan) 0%, var(--purple) 65%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Portable Proof for Work That Already Exists.
          </h1>

          {/* Typewriter */}
          <p className="fade-in-up delay-2" style={{
            fontSize: "clamp(0.95rem, 2.2vw, 1.18rem)",
            color: "rgba(219,234,254,0.65)", maxWidth: 520, marginBottom: "2.75rem",
            minHeight: "1.8em", fontFamily: "var(--font-mono)", lineHeight: 1.6,
          }}>
            {mounted ? tw.display : ""}
            {mounted && !tw.done && <span className="cursor" />}
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-3" style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
            <a href="#solution" className="btn"><span>Explore the Concept</span></a>
            <a href="#how-it-works" className="btn-ghost">How It Works</a>
          </div>

          {/* Scroll hint */}
          <div style={{
            position: "absolute", bottom: "2rem", left: "50%",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
            animation: "scroll-hint 2s ease-in-out infinite",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--cyan)", opacity: 0.4 }}>SCROLL</span>
            <div style={{ width: 1, height: 30, background: "linear-gradient(to bottom, var(--cyan), transparent)", opacity: 0.4 }} />
          </div>
        </section>

        {/* ── STATS STRIP ─────────────────────────── */}
        <div className="outer">
          <div style={{
            padding: "0 0 1rem",
            borderBottom: "1px solid rgba(0,232,245,0.1)",
            display: "flex", gap: "0", flexWrap: "wrap",
          }}>
            {[
              { num: "2B+", label: "Informal workers globally" },
              { num: "60%", label: "Of global employment is informal" },
              { num: "ECA", label: "Primary focus region" },
            ].map((s, i) => (
              <div key={i} className="fade-in-up" style={{
                flex: "1 1 140px",
                padding: "1.25rem 1.5rem",
                borderRight: i < 2 ? "1px solid rgba(0,232,245,0.1)" : "none",
              }}>
                <p style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 900, color: "var(--cyan)", fontFamily: "var(--font-mono)", lineHeight: 1 }}>{s.num}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.3rem", lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROBLEM ─────────────────────────────── */}
        <section id="problem" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="g2-asym">
            <div className="fade-in-up">
              <p className="label">Problem</p>
              <h2 style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900,
                letterSpacing: "-0.04em", color: "var(--text)",
                marginTop: "1rem", lineHeight: 1.1,
              }}>
                Millions work.<br />
                <span style={{ color: "rgba(219,234,254,0.4)" }}>Too few can prove it.</span>
              </h2>
              <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: 400 }}>
                In informal and semi-formal labour markets, work history often disappears as soon as the task is complete. Without portable and trusted proof, productive workers remain economically invisible.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,232,245,0.1)" }}>
              {problemCards.map((card, i) => (
                <article key={card.title} className={`fade-in-up delay-${i + 1}`} style={{
                  padding: "1.5rem 1.75rem",
                  background: "rgba(8,22,48,0.7)",
                  borderBottom: i < 2 ? "1px solid rgba(0,232,245,0.08)" : "none",
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  transition: "background 0.25s",
                }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,232,245,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(8,22,48,0.7)")}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: card.accent, opacity: 0.7, marginTop: "0.25rem", flexShrink: 0 }}>{card.num}</span>
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>{card.title}</h3>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--muted)" }}>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION ────────────────────────────── */}
        <section id="solution" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="shell sp">
            <div className="g2-asym">
              <div className="fade-in-up">
                <p className="label">Solution</p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900,
                  letterSpacing: "-0.04em", color: "var(--text)",
                  marginTop: "1rem", lineHeight: 1.12,
                }}>
                  VERI converts validated work into{" "}
                  <span style={{ color: "var(--cyan)" }}>worker-owned digital records.</span>
                </h2>
                <p style={{ marginTop: "1.25rem", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--muted)" }}>
                  Not a credential platform. Not a blockchain token. Not an app for techies. A practical trust layer between workers and the institutions that need better evidence.
                </p>

                {/* Positioning block */}
                <div style={{
                  marginTop: "2rem", padding: "1.25rem 1.5rem",
                  borderLeft: "2px solid var(--cyan)",
                  background: "rgba(0,232,245,0.04)",
                  borderRadius: "0 10px 10px 0",
                }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "var(--cyan)", marginBottom: "0.5rem", textTransform: "uppercase" }}>positioning</p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(219,234,254,0.85)", fontStyle: "italic" }}>
                    "A practical trust layer between workers and the institutions that need better evidence."
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Focus", value: "Informal and underserved workers" },
                  { label: "Design principle", value: "Validation before record creation" },
                  { label: "Initial region", value: "Europe and Central Asia" },
                  { label: "Current stage", value: "Concept definition and pilot preparation" },
                ].map((row, i) => (
                  <div key={i} className={`fade-in-up delay-${i + 1}`} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    gap: "1rem", padding: "1rem 0",
                    borderBottom: i < 3 ? "1px solid rgba(0,232,245,0.08)" : "none",
                  }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--muted)", flexShrink: 0 }}>{row.label}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text)", textAlign: "right" }}>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────── */}
        <section id="how-it-works" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="fade-in-up" style={{ marginBottom: "2.5rem" }}>
            <p className="label">Process</p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900,
              letterSpacing: "-0.04em", color: "var(--text)",
              marginTop: "1rem", lineHeight: 1.1, maxWidth: 640,
            }}>
              Four steps from task to{" "}
              <span style={{ color: "var(--cyan)" }}>verifiable proof.</span>
            </h2>
          </div>

          <div className="g4">
            {workflowSteps.map((item, i) => (
              <article key={item.step} className={`step-card fade-in-up delay-${i + 1}`}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 900, color: "var(--cyan)", marginBottom: "1rem", letterSpacing: "0.06em" }}>{item.step}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--muted)" }}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── REAL WORLD ──────────────────────────── */}
        <section id="real-world" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="shell sp">
            <div className="g2-asym">
              <div className="fade-in-up">
                <p className="label">Why It Works</p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900,
                  letterSpacing: "-0.04em", color: "var(--text)",
                  marginTop: "1rem", lineHeight: 1.12,
                }}>
                  Designed around<br />
                  <span style={{ color: "rgba(219,234,254,0.4)" }}>field reality.</span>
                </h2>
                <p style={{ marginTop: "1.25rem", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)" }}>
                  VERI is intended for settings where device quality, bandwidth, and formal labour documentation cannot be taken for granted.
                </p>
              </div>

              <div className="g2-small">
                {realWorldCards.map((card, i) => (
                  <article key={card.title} className={`card fade-in-up delay-${(i % 2) + 1}`} style={{ padding: "1.4rem" }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: card.accent, boxShadow: `0 0 8px ${card.accent}`,
                      marginBottom: "0.9rem",
                    }} />
                    <h3 style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.55rem", lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--muted)" }}>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPACT ──────────────────────────────── */}
        <section id="impact" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="fade-in-up" style={{ marginBottom: "2.5rem" }}>
            <p className="label">Impact</p>
          </div>

          {/* Large pull quote */}
          <div className="fade-in-up delay-1" style={{
            padding: "2.5rem 0", marginBottom: "3rem",
            borderTop: "1px solid rgba(0,232,245,0.12)",
            borderBottom: "1px solid rgba(0,232,245,0.12)",
          }}>
            <p style={{
              fontSize: "clamp(1.5rem, 4vw, 2.6rem)", fontWeight: 800,
              letterSpacing: "-0.03em", lineHeight: 1.2,
              color: "rgba(219,234,254,0.9)", maxWidth: 800,
            }}>
              Make real work{" "}
              <span style={{ color: "var(--cyan)" }}>more visible</span>,{" "}
              <span style={{ color: "var(--purple)" }}>more trusted</span>, and{" "}
              <span style={{ color: "var(--green)" }}>more economically useful</span>.
            </p>
          </div>

          <div className="g3">
            {[
              {
                title: "For workers",
                body: "A growing history of verified work can help make capability legible beyond informal networks and one-off references.",
                accent: "var(--cyan)", badge: "badge-c",
              },
              {
                title: "For institutions",
                body: "Better evidence can improve how programmes, employers, and lenders assess credibility in contexts where formal records are thin.",
                accent: "var(--purple)", badge: "badge-p",
              },
              {
                title: "For markets",
                body: "When real work becomes easier to verify, labour participation becomes more visible and access pathways can become fairer.",
                accent: "var(--green)", badge: "badge-g",
              },
            ].map((card, i) => (
              <article key={card.title} className={`card fade-in-up delay-${i + 1}`} style={{ padding: "2rem" }}>
                <span className={`badge ${card.badge}`} style={{ marginBottom: "1.25rem", display: "inline-flex" }}>{card.title}</span>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "var(--muted)" }}>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── ROADMAP ─────────────────────────────── */}
        <section id="roadmap" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="shell sp">
            <div className="fade-in-up" style={{ marginBottom: "2.5rem" }}>
              <p className="label">Roadmap</p>
              <h2 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900,
                letterSpacing: "-0.04em", color: "var(--text)",
                marginTop: "1rem", lineHeight: 1.1, maxWidth: 560,
              }}>
                Build carefully. Test narrowly.{" "}
                <span style={{ color: "rgba(219,234,254,0.4)" }}>Scale only after proof.</span>
              </h2>
            </div>

            <div className="g4">
              {roadmapItems.map((item, i) => (
                <article key={item.phase} className={`fade-in-up delay-${i + 1}`} style={{
                  padding: "1.6rem",
                  borderRadius: 14,
                  border: `1px solid ${item.active ? item.accent + "45" : "rgba(0,232,245,0.1)"}`,
                  background: item.active ? `${item.accent}06` : "rgba(8,22,48,0.5)",
                  transition: "all 0.3s",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span className={`badge ${item.badgeClass}`} style={{ fontSize: "0.58rem" }}>{item.label}</span>
                    {item.active && <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.accent, boxShadow: `0 0 8px ${item.accent}`, animation: "blink 2s infinite" }} />}
                  </div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: item.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{item.phase}</p>
                  <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem", lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--muted)" }}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ────────────────────────────────── */}
        <section id="team" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div className="fade-in-up">
              <p className="label">Team</p>
              <h2 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900,
                letterSpacing: "-0.04em", color: "var(--text)",
                marginTop: "1rem", lineHeight: 1.1, maxWidth: 500,
              }}>
                Three builders.<br />
                <span style={{ color: "rgba(219,234,254,0.4)" }}>One focused mission.</span>
              </h2>
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: 420 }}>
                A student-led founding team combining technical depth with strategic and commercial thinking.
              </p>
            </div>
            <div className="fade-in-up delay-2" style={{ flexShrink: 0 }}>
              <Link href="/team" className="btn"><span>Meet the Team →</span></Link>
            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────── */}
        <section id="contact" className="outer" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <div className="shell sp">
            <div className="g2-wide">
              <div className="fade-in-up">
                <p className="label">Contact</p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900,
                  letterSpacing: "-0.04em", color: "var(--text)",
                  marginTop: "1rem", lineHeight: 1.1,
                }}>
                  Looking for pilot dialogue, feedback, or{" "}
                  <span style={{ color: "var(--cyan)" }}>mission-aligned collaboration.</span>
                </h2>
                <p style={{ marginTop: "1.25rem", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: 480 }}>
                  VERI is inviting early conversations with NGOs, employers, development programmes, lenders, and ecosystem partners.
                </p>
              </div>

              <div className="fade-in-up delay-2" style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <a href={`mailto:${mainContact.email}`} className="card" style={{ padding: "1.25rem 1.5rem", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "0.3rem" }}>EMAIL</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text)" }}>{mainContact.email}</p>
                </a>
                <a href={`tel:${mainContact.phone}`} className="card" style={{ padding: "1.25rem 1.5rem", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "0.3rem" }}>PHONE</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text)" }}>{mainContact.phoneLabel}</p>
                </a>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={`mailto:${mainContact.email}`} className="btn" style={{ flex: "1 1 120px" }}><span>Email Now</span></a>
                  <Link href="/team" className="btn-ghost" style={{ flex: "1 1 120px", justifyContent: "center" }}>Meet the Team</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────── */}
        <footer className="outer" style={{ paddingTop: "1rem" }}>
          <hr className="divider" style={{ marginBottom: "1.5rem" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{
                background: "linear-gradient(130deg, var(--cyan), var(--purple))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                fontWeight: 800, letterSpacing: "0.2em", fontFamily: "var(--font-mono)", fontSize: "0.8rem",
              }}>VERI</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(219,234,254,0.25)" }}>
                · Verified Employment Records Infrastructure
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(219,234,254,0.25)" }}>
              Early-stage concept · London · 2025
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
