import Image from "next/image";
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
    title: "Work without recognised proof",
    body:
      "Millions of workers complete valuable tasks but never build a durable record that can be reused across jobs, programmes, or institutions.",
  },
  {
    title: "Credibility stays trapped in the moment",
    body:
      "Informal proof often depends on memory, local relationships, or one-off confirmations that do not travel with the worker.",
  },
  {
    title: "Opportunity decisions become harder",
    body:
      "Lenders, employers, and development programmes lack a practical way to assess work history when formal documentation does not exist.",
  },
];

const solutionPillars = [
  {
    title: "Portable",
    body: "Records are designed to stay with the worker rather than remain locked inside a single organisation workflow.",
  },
  {
    title: "Validated",
    body: "A record is only created after completed work passes a structured confirmation step designed to improve trust.",
  },
  {
    title: "Useful",
    body: "The output is intended to support real decisions around employment, finance, and programme eligibility.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Work is completed",
    body:
      "A worker finishes a structured field task through a simple, low-friction workflow that can operate in constrained environments.",
  },
  {
    step: "02",
    title: "Work is validated",
    body:
      "The task is reviewed through a practical confirmation process built to reduce false records and strengthen institutional trust.",
  },
  {
    step: "03",
    title: "A digital record is created",
    body:
      "Once validated, the system converts that work into a worker-owned digital employment record linked to completed activity.",
  },
  {
    step: "04",
    title: "Institutions can verify",
    body:
      "Approved lenders, employers, and programmes can review relevant parts of the record when making credibility or eligibility decisions.",
  },
];

const realWorldCards = [
  {
    title: "Offline-first from the start",
    body:
      "VERI is designed for low-connectivity settings where reliable sync cannot be assumed and mobile workflows need to keep moving.",
  },
  {
    title: "Built for low-cost devices",
    body:
      "The concept is shaped around practical field usage rather than high-bandwidth assumptions or desktop-heavy processes.",
  },
  {
    title: "Fits gradual adoption",
    body:
      "Institutions do not need to change everything at once. Verification can begin with targeted pilot use cases and defined decision points.",
  },
  {
    title: "Grounded in existing reality",
    body:
      "The model recognises that trust is earned through workflow design, operational discipline, and relevance to real economic decisions.",
  },
];

const impactCards = [
  {
    title: "For workers",
    body:
      "A growing history of verified work can help make capability legible beyond informal networks and one-off references.",
  },
  {
    title: "For institutions",
    body:
      "Better evidence can improve how programmes, employers, and lenders assess credibility in contexts where formal records are thin.",
  },
  {
    title: "For markets",
    body:
      "When real work becomes easier to verify, labour participation becomes more visible and access pathways can become fairer.",
  },
];

const roadmapItems = [
  {
    phase: "Now",
    title: "Ideation and system definition",
    body:
      "Clarifying the product logic, validation approach, user journey, and trust model for informal and semi-formal work settings.",
  },
  {
    phase: "Next",
    title: "Focused pilot design",
    body:
      "Preparing for a narrow first pilot in Europe and Central Asia, with attention to a low-connectivity and high-informality context such as Azerbaijan or a comparable market.",
  },
  {
    phase: "Then",
    title: "Workflow and credibility testing",
    body:
      "Evaluating whether the record format, validation design, and institutional review model create genuinely useful proof in practice.",
  },
  {
    phase: "Later",
    title: "Expansion only after evidence",
    body:
      "Scaling will depend on real pilot learning, operational fit, and clear value for both workers and decision-making institutions.",
  },
];

export default function Home() {
  return (
    <div id="top" className="relative overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03101f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${mainContact.email}`}
            className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/10"
          >
            Start a conversation
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-24 pt-6 lg:px-8">
        <section
          id="hero"
          className="section-shell hero-grid overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(110,168,255,0.18),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1),_transparent_26%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_420px] lg:items-end">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#9ec5ff]" />
                Ideation-stage infrastructure concept
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                Portable proof for work that already exists.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                VERI helps informal workers turn verified work into portable
                proof that can unlock access to opportunity. It is designed for
                contexts where people work consistently, but lack trusted,
                reusable records of what they have done.
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#c5d8ff]">
                Verified Employment Records Infrastructure.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solution"
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/10"
                >
                  Explore the concept
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {solutionPillars.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 fade-in-up delay-${index + 1}`}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[#9ec5ff]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <aside className="fade-in-up delay-2 rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_28px_80px_rgba(1,9,20,0.45)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#9ec5ff]">
                  Positioning
                </p>
                <p className="mt-4 text-2xl font-medium leading-9 text-white">
                  A practical trust layer between workers and the institutions
                  that need better evidence.
                </p>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-white/55">Focus</p>
                    <p className="max-w-[14rem] text-right text-sm text-white/78">
                      Informal and underserved workers
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-white/55">Design principle</p>
                    <p className="max-w-[14rem] text-right text-sm text-white/78">
                      Validation before record creation
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-white/55">Initial region</p>
                    <p className="max-w-[14rem] text-right text-sm text-white/78">
                      Europe and Central Asia
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-white/55">Current stage</p>
                    <p className="max-w-[14rem] text-right text-sm text-white/78">
                      Concept definition and pilot preparation
                    </p>
                  </div>
                </div>
              </aside>

              <div className="grid gap-4 fade-in-up delay-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(1,9,20,0.24)]">
                  <Image
                    src="/graphics/verification-flow.svg"
                    alt="Abstract illustration of a validation workflow"
                    width={800}
                    height={560}
                    className="h-auto w-full rounded-[1.2rem]"
                    priority
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <Image
                      src="/graphics/record-stack.svg"
                      alt="Abstract illustration of portable digital records"
                      width={800}
                      height={560}
                      className="h-auto w-full rounded-[1rem]"
                    />
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <Image
                      src="/graphics/trust-network.svg"
                      alt="Abstract illustration of institutions connected by trusted records"
                      width={800}
                      height={560}
                      className="h-auto w-full rounded-[1rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="problem"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="fade-in-up">
              <p className="section-label">Problem</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Millions work. Too few can prove it in a way institutions can
                trust.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                In informal and semi-formal labour markets, work history often
                disappears as soon as the task is complete. Without portable and
                trusted proof, productive workers remain economically invisible.
              </p>
            </div>

            <div className="grid gap-4">
              {problemCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 fade-in-up delay-${index + 1}`}
                >
                  <h3 className="text-xl font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solution"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="fade-in-up">
              <p className="section-label">Solution</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                VERI converts validated work into worker-owned digital
                employment records.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                The point is not to collect more data for its own sake. The
                point is to create usable proof. VERI focuses on real work
                completed, practical validation, and records that can support
                better decisions over time.
              </p>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.75rem] border border-[#89b4ff]/25 bg-[linear-gradient(180deg,rgba(118,174,255,0.15),rgba(255,255,255,0.04))] p-6 fade-in-up delay-1">
                <p className="text-xs uppercase tracking-[0.24em] text-[#b9d5ff]">
                  One-line positioning
                </p>
                <p className="mt-4 text-2xl leading-9 text-white">
                  VERI helps informal workers turn verified work into portable
                  proof that can unlock access to opportunity.
                </p>
              </article>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 fade-in-up delay-2">
                  <Image
                    src="/graphics/record-stack.svg"
                    alt="Abstract illustration of verified record layers"
                    width={800}
                    height={560}
                    className="h-auto w-full rounded-[1rem]"
                  />
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    A record structure that feels durable, legible, and portable
                    across decision contexts.
                  </p>
                </article>
                <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 fade-in-up delay-3">
                  <Image
                    src="/graphics/trust-network.svg"
                    alt="Abstract illustration of a trusted institutional network"
                    width={800}
                    height={560}
                    className="h-auto w-full rounded-[1rem]"
                  />
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    A visual language for trust passing cleanly between field
                    work, records, and institutional review.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="fade-in-up">
              <p className="section-label">Concept Visual</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                A system shape designed to feel structured, calm, and credible.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                These original visuals are abstract by design. They reinforce
                the ideas of verification, record-building, and institutional
                trust without implying live data, deployment, or numeric claims.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 fade-in-up delay-1">
                <Image
                  src="/graphics/verification-flow.svg"
                  alt="Abstract workflow visual"
                  width={800}
                  height={560}
                  className="h-auto w-full rounded-[1rem]"
                />
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 fade-in-up delay-2">
                <Image
                  src="/graphics/record-stack.svg"
                  alt="Abstract record visual"
                  width={800}
                  height={560}
                  className="h-auto w-full rounded-[1rem]"
                />
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 fade-in-up delay-3">
                <Image
                  src="/graphics/trust-network.svg"
                  alt="Abstract network visual"
                  width={800}
                  height={560}
                  className="h-auto w-full rounded-[1rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="fade-in-up max-w-3xl">
            <p className="section-label">How It Works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              A simple system designed to create credible, reusable proof.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowSteps.map((item, index) => (
              <article
                key={item.step}
                className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 fade-in-up delay-${index + 1}`}
              >
                <p className="text-sm font-semibold tracking-[0.18em] text-[#9ec5ff]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/68">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="real-world"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="fade-in-up">
              <p className="section-label">Why It Works in the Real World</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Designed around field reality, not ideal conditions.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                VERI is intended for settings where device quality, bandwidth,
                and formal labour documentation cannot be taken for granted.
                That means practical workflows matter more than theoretical
                elegance.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {realWorldCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 fade-in-up delay-${(index % 3) + 1}`}
                >
                  <h3 className="text-xl font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="fade-in-up">
            <p className="section-label">Impact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              The intended outcome is simple: make real work more visible, more
              trusted, and more economically useful.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <article className="rounded-[1.75rem] border border-[#89b4ff]/22 bg-[linear-gradient(180deg,rgba(115,170,255,0.16),rgba(255,255,255,0.04))] p-7 fade-in-up delay-1">
              <p className="text-sm uppercase tracking-[0.22em] text-[#b9d5ff]">
                From invisible labour to legible history
              </p>
              <p className="mt-5 max-w-2xl text-2xl leading-10 text-white">
                VERI aims to help workers build economic credibility over time,
                while giving institutions a more grounded basis for making
                opportunity decisions.
              </p>
            </article>

            <div className="grid gap-4">
              {impactCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 fade-in-up delay-${index + 1}`}
                >
                  <h3 className="text-lg font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="fade-in-up max-w-3xl">
            <p className="section-label">Roadmap</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Build carefully, test narrowly, scale only after proof.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              VERI is at the ideation stage. The near-term focus is disciplined
              pilot preparation, not premature expansion.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {roadmapItems.map((item, index) => (
              <article
                key={item.phase}
                className={`rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 fade-in-up delay-${index + 1}`}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#9ec5ff]">
                  {item.phase}
                </p>
                <h3 className="mt-4 text-2xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/68">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-12">
          <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_right,_rgba(158,197,255,0.14),_transparent_38%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="fade-in-up">
              <p className="section-label">Team</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Meet the people shaping VERI&apos;s architecture, product logic,
                and institutional path.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                The full team page introduces the founders behind the concept,
                their backgrounds, and the disciplines informing VERI&apos;s
                direction.
              </p>
            </div>

            <div className="fade-in-up delay-2 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#b9d5ff]">
                Team page
              </p>
              <p className="mt-4 text-lg leading-8 text-white/82">
                View leadership, engineering, and partnerships profiles in a
                dedicated space.
              </p>
              <Link
                href="/team"
                className="mt-8 inline-flex rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/10"
              >
                View the team
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell rounded-[2rem] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="fade-in-up">
              <p className="section-label">Contact</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Looking for pilot dialogue, institutional feedback, or mission
                aligned collaboration.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                VERI is inviting early conversations with NGOs, employers,
                development programmes, lenders, and ecosystem partners who care
                about better trust infrastructure for underserved workers.
              </p>
            </div>

            <div className="fade-in-up delay-2 rounded-[1.75rem] border border-[#89b4ff]/24 bg-[linear-gradient(180deg,rgba(118,174,255,0.16),rgba(255,255,255,0.04))] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#b9d5ff]">
                Main contact
              </p>
              <p className="mt-4 text-lg leading-8 text-white/82">
                If your organisation is exploring field verification, inclusive
                finance, labour formalisation, or opportunity access, VERI is
                seeking informed conversations as pilot plans take shape.
              </p>
              <div className="mt-8 grid gap-3">
                <a
                  href={`mailto:${mainContact.email}`}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.08] px-5 py-4 transition hover:bg-white/[0.12]"
                >
                  <p className="text-sm text-white/55">Email</p>
                  <p className="mt-1 text-base text-white">{mainContact.email}</p>
                </a>
                <a
                  href={`tel:${mainContact.phone}`}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.08] px-5 py-4 transition hover:bg-white/[0.12]"
                >
                  <p className="text-sm text-white/55">Phone</p>
                  <p className="mt-1 text-base text-white">
                    {mainContact.phoneLabel}
                  </p>
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${mainContact.email}`}
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/10"
                >
                  Email now
                </a>
                <Link
                  href="/team"
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-sm text-white/45 lg:px-8">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p>VERI · Verified Employment Records Infrastructure</p>
          <p>Early-stage concept for portable proof of completed work.</p>
        </div>
      </footer>
    </div>
  );
}
