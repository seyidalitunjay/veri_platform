import Link from "next/link";
import type { Metadata } from "next";

type TeamMember = {
  name: string;
  shortName: string;
  role: string;
  degree: string;
  summary: string;
  email: string;
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
    role: "Team Lead & Chief Architect",
    degree: "BSc Computer Science, King's College London",
    summary:
      "Computer Science student at King's College London with experience in software engineering, product development, and international youth policy engagement. Leads VERI's overall vision, concept design, and execution strategy, with a focus on building practical digital systems that improve trust, access, and economic inclusion.",
    email: "seyidalitunjay@gmail.com",
  },
  {
    name: "Amir Guliyev",
    shortName: "AG",
    role: "Technical Development Lead",
    degree: "BSc Computer Science, King's College London",
    summary:
      "Computer Science student at King's College London with hands-on experience in backend development and technical project work. Supports VERI's technical design and prototype planning, helping translate the concept into a practical and scalable product workflow.",
    email: "amirrza777@gmail.com",
  },
  {
    name: "Farhad Huseynli",
    shortName: "FH",
    role: "Strategy & Partnerships Lead",
    degree: "BSc Economics & Management, King's College London",
    summary:
      "Economics and Management student at King's College London with experience in financial analysis, commercial thinking, and strategic planning. Leads VERI's partnership approach and growth strategy, focusing on market fit, external engagement, and long-term implementation pathways.",
    email: "farhadhuseynli06@gmail.com",
  },
];

export const metadata: Metadata = {
  title: "Team | VERI",
  description:
    "Meet the founding team behind VERI: architecture, engineering, and partnerships for verified employment records infrastructure.",
};

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <path d="M4 7.5 12 13l8-5.5" />
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.25" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.91 5.4a1.56 1.56 0 0 1 .03 3.1ZM5.58 9.74h2.7V18h-2.7V9.74Zm4.39 0h2.59v1.13h.04c.36-.68 1.24-1.39 2.56-1.39 2.74 0 3.24 1.8 3.24 4.14V18h-2.7v-3.93c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08V18h-2.7V9.74Z" />
    </svg>
  );
}

function ContactAction({
  href,
  icon,
  label,
  detail,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  detail: string;
}) {
  return (
    <a
      href={href}
      className="team-action transition hover:border-white/22 hover:bg-white/[0.08]"
    >
      <span className="team-action-icon">{icon}</span>
      <span>
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block text-xs text-white/55">{detail}</span>
      </span>
    </a>
  );
}

function PendingAction() {
  return (
    <div className="team-action opacity-85">
      <span className="team-action-icon">
        <LinkedInIcon />
      </span>
      <span>
        <span className="block text-sm font-medium text-white">LinkedIn</span>
        <span className="block text-xs text-white/55">Link to be added</span>
      </span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="relative overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03101f]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-semibold tracking-[0.24em] text-white">
              V
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-white">
                VERI
              </p>
              <p className="text-xs text-white/55">
                Verified Employment Records Infrastructure
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.1]"
          >
            <span aria-hidden="true">←</span>
            Return to home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-24 pt-6 lg:px-8">
        <section className="section-shell hero-grid overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(110,168,255,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_22%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="fade-in-up">
              <p className="section-label">Founding Team</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                The people building VERI across architecture, engineering, and
                partnerships.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                VERI is being shaped by a student-led founding team with serious
                technical, commercial, and institutional ambition.
              </p>
            </div>

            <aside className="fade-in-up delay-2 rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_28px_80px_rgba(1,9,20,0.45)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#9ec5ff]">
                Main contact
              </p>
              <div className="mt-5 space-y-4">
                <a
                  href={`mailto:${mainContact.email}`}
                  className="block rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-4 transition hover:bg-white/[0.1]"
                >
                  <p className="text-sm text-white/55">Email</p>
                  <p className="mt-1 text-base text-white">{mainContact.email}</p>
                </a>
                <a
                  href={`tel:${mainContact.phone}`}
                  className="block rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-4 transition hover:bg-white/[0.1]"
                >
                  <p className="text-sm text-white/55">Phone</p>
                  <p className="mt-1 text-base text-white">
                    {mainContact.phoneLabel}
                  </p>
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
          <div className="fade-in-up">
            <p className="section-label">Team Directory</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Meet Our Founding Team
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`team-profile-card fade-in-up delay-${(index % 3) + 1}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="team-avatar">
                    <span>{member.shortName}</span>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#b9d5ff]">
                    {member.role}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">
                    {member.degree}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/70">
                    {member.summary}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <ContactAction
                      href={`mailto:${member.email}`}
                      icon={<EmailIcon />}
                      label="Email"
                      detail={member.email}
                    />
                    <PendingAction />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
