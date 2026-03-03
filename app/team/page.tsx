import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type TeamMember = {
  name: string;
  shortName: string;
  role: string;
  degree: string;
  summary: string;
  email: string;
  linkedin: string;
  photo: string;
  photoPosition?: string;
  accent: string;
  badgeClass: string;
};

const mainContact = {
  email: "seyidalitunjay@gmail.com",
  phone: "+447392890159",
  phoneLabel: "+44 7392 890159",
};

const teamMembers: TeamMember[] = [
  {
    name: "Tunjay Seyidali",
    shortName: "TS",
    role: "Team Lead & Founder",
    degree: "BSc Computer Science, King's College London",
    summary:
      "Computer Science student at King's College London with experience in software engineering, product development, and international youth policy engagement. Leads VERI's overall vision, concept design, and execution strategy, with a focus on building practical digital systems that improve trust, access, and economic inclusion.",
    email: "seyidalitunjay@gmail.com",
    linkedin: "https://www.linkedin.com/in/tunjay-seyidali-30319722a/",
    photo: "/team/tunjay-seyidali.jpg",
    accent: "var(--cyan)",
    badgeClass: "badge-c",
  },
  {
    name: "Amir Guliyev",
    shortName: "AG",
    role: "Technical Development Lead",
    degree: "BSc Computer Science, King's College London",
    summary:
      "Computer Science student at King's College London with hands-on experience in backend development and technical project work. Supports VERI's technical design and prototype planning, helping translate the concept into a practical and scalable product workflow.",
    email: "amirrza777@gmail.com",
    linkedin: "https://www.linkedin.com/in/amir-guliyev-442366255/",
    photo: "/team/amir-guliyev.png",
    photoPosition: "center 30%",
    accent: "var(--purple)",
    badgeClass: "badge-p",
  },
  {
    name: "Farhad Huseynli",
    shortName: "FH",
    role: "Strategy & Partnerships Lead",
    degree: "BSc Economics & Management, King's College London",
    summary:
      "Economics and Management student at King's College London with experience in financial analysis, commercial thinking, and strategic planning. Leads VERI's partnership approach and growth strategy, focusing on market fit, external engagement, and long-term implementation pathways.",
    email: "farhadhuseynli06@gmail.com",
    linkedin: "https://www.linkedin.com/in/farhad-huseynli-58ba81332/",
    photo: "/team/farhad-huseynli.jpg",
    accent: "var(--green)",
    badgeClass: "badge-g",
  },
];

export const metadata: Metadata = {
  title: "Team | VERI",
  description:
    "Meet the founding team behind VERI: architecture, engineering, and partnerships for verified employment records infrastructure.",
};

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7.5 12 13l8-5.5" />
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.25" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15 }} fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.91 5.4a1.56 1.56 0 0 1 .03 3.1ZM5.58 9.74h2.7V18h-2.7V9.74Zm4.39 0h2.59v1.13h.04c.36-.68 1.24-1.39 2.56-1.39 2.74 0 3.24 1.8 3.24 4.14V18h-2.7v-3.93c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08V18h-2.7V9.74Z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <div style={{ position: "relative", zIndex: 1, overflowX: "hidden" }}>

      {/* ── NAV ──────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,13,26,0.82)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      }}>
        <div className="outer" style={{ height: 54, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "-0.03em", color: "white" }}>
              Veri<span style={{ color: "#4B5CF6" }}>.</span>
            </span>
          </Link>
          <Link href="/" className="btn-ghost" style={{ padding: "0.45rem 1.1rem", fontSize: "0.68rem" }}>← Home</Link>
        </div>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "5rem" }}>

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{ paddingTop: "4rem" }}>
          <div className="outer">
            <div className="g2-asym" style={{ alignItems: "end" }}>
              <div className="fade-in-up">
                <p className="label">Founding Team</p>
                <h1 style={{
                  fontSize: "clamp(2.4rem, 7vw, 5rem)", fontWeight: 900,
                  letterSpacing: "-0.04em", lineHeight: 1.06, marginTop: "1rem",
                  color: "var(--text)",
                }}>
                  The people<br />
                  building{" "}
                  <span style={{
                    background: "linear-gradient(130deg, var(--cyan), var(--purple))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>VERI.</span>
                </h1>
                <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: 480 }}>
                  A student-led founding team with serious technical, commercial, and institutional ambition — built across architecture, engineering, and partnerships.
                </p>
                <p style={{ marginTop: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(0,232,245,0.28)", letterSpacing: "0.08em" }}>
                  TEAM_SIZE: 3 · LONDON · STAGE: IDEATION
                </p>
              </div>

              {/* Contact aside */}
              <div className="card fade-in-up delay-2" style={{ padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: "1.25rem" }}>
                  Main contact
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a href={`mailto:${mainContact.email}`} className="card" style={{ padding: "1rem 1.25rem", display: "block", overflow: "hidden" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "0.25rem" }}>EMAIL</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mainContact.email}</p>
                  </a>
                  <a href={`tel:${mainContact.phone}`} className="card" style={{ padding: "1rem 1.25rem", display: "block" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.12em", marginBottom: "0.25rem" }}>PHONE</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text)" }}>{mainContact.phoneLabel}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ─────────────────────────────── */}
        <div className="outer"><hr className="divider" /></div>

        {/* ── TEAM DIRECTORY ──────────────────────── */}
        <section className="outer">
          <div className="fade-in-up" style={{ marginBottom: "2.5rem" }}>
            <p className="label">Team Directory</p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900,
              letterSpacing: "-0.04em", color: "var(--text)",
              marginTop: "1rem", lineHeight: 1.12,
            }}>
              Meet our{" "}
              <span style={{
                background: "linear-gradient(130deg, var(--cyan), var(--purple))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>founding team.</span>
            </h2>
          </div>

          <div className="g3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`card fade-in-up delay-${(index % 3) + 1}`}
                style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "0" }}
              >
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "4.8rem", height: "4.8rem", borderRadius: 14,
                    border: `1px solid ${member.accent}45`,
                    boxShadow: `0 0 20px ${member.accent}22`,
                    overflow: "hidden", flexShrink: 0, position: "relative",
                  }}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: member.photoPosition ?? "center top" }}
                      sizes="77px"
                    />
                  </div>
                  <span className={`badge ${member.badgeClass}`} style={{ fontSize: "0.58rem", textAlign: "center", lineHeight: 1.3 }}>
                    {member.role}
                  </span>
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 800,
                  letterSpacing: "-0.04em", color: "var(--text)",
                  marginBottom: "0.4rem", lineHeight: 1.15,
                }}>
                  {member.name}
                </h3>

                {/* Degree */}
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(219,234,254,0.35)", marginBottom: "1.25rem",
                }}>
                  {member.degree}
                </p>

                <hr className="divider" style={{ marginBottom: "1.25rem" }} />

                {/* Summary */}
                <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "var(--muted)", flex: 1, marginBottom: "1.5rem" }}>
                  {member.summary}
                </p>

                {/* Actions */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  <a href={`mailto:${member.email}`} className="t-action" style={{ minWidth: 0 }}>
                    <span className="t-icon"><EmailIcon /></span>
                    <span style={{ minWidth: 0, overflow: "hidden" }}>
                      <span style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>Email</span>
                      <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", fontFamily: "var(--font-mono)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.email}</span>
                    </span>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="t-action">
                    <span className="t-icon"><LinkedInIcon /></span>
                    <span>
                      <span style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>LinkedIn</span>
                      <span style={{ display: "block", fontSize: "0.7rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>View profile</span>
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────── */}
        <section className="outer" style={{ paddingTop: "1rem" }}>
          <div style={{
            padding: "3rem 2.5rem",
            borderRadius: 20, border: "1px solid rgba(0,232,245,0.14)",
            background: "rgba(8,22,48,0.6)",
            position: "relative", overflow: "hidden",
            display: "flex", flexWrap: "wrap", gap: "2rem",
            alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg, transparent, rgba(0,232,245,0.4), transparent)" }} />
            <div className="fade-in-up">
              <p className="label">Get Involved</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginTop: "0.75rem", lineHeight: 1.2 }}>
                Interested in VERI's direction?
              </h2>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--muted)", marginTop: "0.6rem", maxWidth: 420 }}>
                We're in early dialogue with partners, researchers, and institutions. Reach out to start a conversation.
              </p>
            </div>
            <div className="fade-in-up delay-2" style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <a href={`mailto:${mainContact.email}`} className="btn"><span>Email the Team</span></a>
              <Link href="/" className="btn-ghost">Back to Home</Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────── */}
        <footer className="outer" style={{ paddingTop: "1rem" }}>
          <hr className="divider" style={{ marginBottom: "1.5rem" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.55)" }}>
                Veri<span style={{ color: "#4B5CF6" }}>.</span>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(219,234,254,0.25)" }}>
                Verified Employment Records Infrastructure
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
