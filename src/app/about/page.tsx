import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  Card,
  IconBadge,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import {
  ShieldCheck,
  Scale,
  Code2,
  Handshake,
  Landmark,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ZorianPay is building the financial infrastructure for the digital asset economy — connecting merchants, enterprises, banks, and digital assets into one unified ecosystem. Learn about our vision, business model, and roadmap.",
};

const snapshot = [
  { label: "Company", value: "ZorianPay" },
  { label: "Industry", value: "Financial Infrastructure" },
  { label: "Headquarters", value: "Delaware, United States" },
  { label: "Business Model", value: "B2B • B2B2C • Enterprise SaaS" },
  { label: "Primary Focus", value: "Merchant Payments & Financial Infrastructure" },
  { label: "Platform", value: "API-First" },
  { label: "Target Markets", value: "GCC • Europe • Asia • Africa" },
];

const revenueStreams = [
  { vertical: "Merchant Payments", source: "Transaction Fees" },
  { vertical: "Settlement Network", source: "Settlement Fees" },
  { vertical: "Enterprise APIs", source: "API Usage Fees" },
  { vertical: "Virtual Accounts", source: "Subscription" },
  { vertical: "Business Banking", source: "Service Charges" },
  { vertical: "White-Label Platform", source: "Licensing" },
  { vertical: "Card Programs", source: "Partner Revenue" },
  { vertical: "FX Services", source: "Conversion Margin" },
];

const leadership = [
  {
    icon: Building2,
    title: "Executive Leadership",
    description:
      "Sets ZorianPay's strategy and vision — building a trusted financial infrastructure company that connects digital assets with the global banking ecosystem.",
  },
  {
    icon: Code2,
    title: "Engineering & Infrastructure",
    description:
      "Builds and operates the API-first platform behind the Universal Merchant QR, Settlement Engine, and Enterprise APIs.",
  },
  {
    icon: Scale,
    title: "Compliance & Risk",
    description:
      "Runs the Compliance Engine and works with regulated banking and payment partners to align ZorianPay with local financial regulations as we expand.",
  },
  {
    icon: Handshake,
    title: "Partnerships & Growth",
    description:
      "Builds relationships with banking, payment, and enterprise partners to grow the ZorianPay network through collaboration, not competition.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Oversees custody architecture, encryption standards, and continuous monitoring across the platform.",
  },
  {
    icon: Landmark,
    title: "Business Development",
    description:
      "Leads merchant onboarding and enterprise sales across our target markets in the GCC, Europe, Asia, and Africa.",
  },
];

const marketExpansion = [
  {
    phase: "Phase 1",
    title: "Launch Core Infrastructure",
    items: ["Merchant Network", "Strategic Banking Partners"],
  },
  {
    phase: "Phase 2",
    title: "Scale the Platform",
    items: ["Enterprise APIs", "Business Banking", "Regional Expansion"],
  },
  {
    phase: "Phase 3",
    title: "Global Infrastructure",
    items: [
      "International Merchant Network",
      "Global Banking Ecosystem",
      "Enterprise Infrastructure",
    ],
  },
];

const roadmap = [
  "Platform Launch",
  "Merchant Network",
  "Enterprise APIs",
  "Regional Expansion",
  "Global Infrastructure",
  "Vision 2030",
];

const strengths = [
  "Infrastructure First",
  "API First",
  "Enterprise Ready",
  "Multi-Revenue Model",
  "Merchant Focused",
  "Banking Connectivity",
  "Partnership Driven",
  "Globally Scalable",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>About ZorianPay</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Building the <span className="gold-gradient-text">financial infrastructure</span> for a borderless world
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-muted">
                The global financial ecosystem is evolving at an
                unprecedented pace. Digital assets are becoming mainstream,
                businesses are expanding across borders, and customers
                expect instant, seamless payment experiences — yet the
                infrastructure connecting traditional banking with digital
                assets remains fragmented. ZorianPay, operated by Shivacha
                Technologies LLC, is building the infrastructure to bridge
                this gap.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Company snapshot */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>Company Snapshot</Eyebrow>
                <dl className="mt-6 divide-y divide-border">
                  {snapshot.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-2 gap-4 py-3 text-sm"
                    >
                      <dt className="font-medium text-muted">{row.label}</dt>
                      <dd className="font-semibold text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full">
                <Eyebrow>Our Vision</Eyebrow>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  A trusted financial infrastructure company
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  To become one of the world&apos;s most trusted financial
                  infrastructure companies, connecting digital assets with
                  the global banking ecosystem through secure, compliant, and
                  scalable technology.
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Our platform enables merchants to accept supported digital
                  asset payments while receiving settlement directly into
                  their existing bank accounts in local currency — connecting
                  merchants, enterprises, banks, and digital assets into one
                  unified financial ecosystem.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why ZorianPay */}
      <Section className="section-divider border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Why ZorianPay</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The industry digitized products. We connect them.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Banks digitized accounts. Payment providers digitized
                transactions. Digital asset platforms digitized value. Yet
                businesses still rely on multiple disconnected providers to
                complete a single payment journey.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                ZorianPay solves this by creating a unified infrastructure
                that enables digital asset payments, intelligent routing,
                compliance, foreign exchange, and local currency settlement
                through one integrated platform.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Card className="p-10">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">
                      <Counter value="4" />
                    </p>
                    <p className="mt-2 text-sm text-muted">Target regions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">
                      <Counter value="8+" />
                    </p>
                    <p className="mt-2 text-sm text-muted">Revenue verticals</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">API</p>
                    <p className="mt-2 text-sm text-muted">First architecture</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">
                      <Counter value="2030" />
                    </p>
                    <p className="mt-2 text-sm text-muted">Long-term vision</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Business model / revenue */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Business Model"
              title="One platform. Multiple revenue streams."
              description="ZorianPay is designed as a financial infrastructure business rather than a single-product fintech company. Every transaction strengthens the ecosystem while creating recurring commercial opportunities."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-16 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="px-6 py-4 font-semibold text-foreground">Business Vertical</th>
                    <th className="px-6 py-4 font-semibold text-foreground">Revenue Source</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueStreams.map((row, idx) => (
                    <tr
                      key={row.vertical}
                      className={idx % 2 === 0 ? "bg-background" : "bg-surface"}
                    >
                      <td className="border-t border-border px-6 py-4 font-medium text-foreground">
                        {row.vertical}
                      </td>
                      <td className="border-t border-border px-6 py-4 text-muted">
                        {row.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Go-to-market / market expansion */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Go-To-Market Strategy"
              title="Building adoption through strategic partnerships"
              description="Rather than competing with existing financial institutions, ZorianPay expands through collaboration — merchant networks, banking partnerships, enterprise sales, payment providers, API integrations, and white-label solutions."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {marketExpansion.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 80}>
                <Card className="relative h-full overflow-hidden">
                  <span aria-hidden="true" className="numeral-watermark">
                    0{i + 1}
                  </span>
                  <span className="relative inline-flex items-center rounded-full border border-gold/30 bg-background px-4 py-1.5 text-sm font-bold gold-gradient-text">
                    {phase.phase}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{phase.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <CheckCircle2 className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Growth roadmap */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Growth Roadmap"
              title="2026 and beyond"
              description="Our ambition extends beyond launching innovative financial products — we're building toward Vision 2030."
            />
          </Reveal>
          {/* Desktop: connected horizontal timeline */}
          <div className="relative mt-20 hidden lg:block">
            <div className="absolute inset-x-8 top-6 h-px timeline-line" />
            <div className="relative grid grid-cols-6 gap-2">
              {roadmap.map((item, i) => {
                const isLast = i === roadmap.length - 1;
                return (
                  <Reveal key={item} delay={i * 80}>
                    <div className="flex flex-col items-center text-center">
                      <span
                        className={`relative flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${
                          isLast
                            ? "gold-gradient-bg text-black shadow-[0_0_30px_-6px_rgba(240,185,11,0.6)]"
                            : "border border-gold/40 bg-background text-gold"
                        }`}
                      >
                        {isLast && <span className="pulse-ring" aria-hidden="true" />}
                        <span className="relative">{i + 1}</span>
                      </span>
                      <span className="mt-4 text-sm font-semibold leading-5 text-foreground">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical stacked flow */}
          <div className="mx-auto mt-16 flex max-w-xl flex-col lg:hidden">
            {roadmap.map((item, i) => {
              const isLast = i === roadmap.length - 1;
              return (
                <div key={item}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        isLast ? "gold-gradient-bg text-black" : "bg-gold/15 text-gold"
                      }`}
                    >
                      {isLast && <span className="pulse-ring" aria-hidden="true" />}
                      <span className="relative">{i + 1}</span>
                    </span>
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                  {i < roadmap.length - 1 && (
                    <div className="flex justify-center py-2 text-muted-2">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Key strengths */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Investment Highlights"
              title="Why ZorianPay"
              description="A large market opportunity, built for the future of digital commerce — with a diversified, scalable, partnership-led business model."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {strengths.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="card-surface flex h-full flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-5 text-foreground">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership & team */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership & Governance"
              title="The team behind ZorianPay"
              description="A team of fintech, blockchain, security, and compliance specialists building borderless financial infrastructure across engineering, compliance, partnerships, and business development."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((area, i) => (
              <Reveal key={area.title} delay={i * 60}>
                <Card className="relative h-full overflow-hidden">
                  <span aria-hidden="true" className="numeral-watermark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconBadge>
                    <area.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="relative mt-4 text-lg font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-muted">{area.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing statement */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Why ZorianPay Matters</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Every generation is defined by the infrastructure it builds
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                Roads connected cities. Telecommunications connected people.
                The Internet connected information. Cloud computing
                connected businesses. The next generation of global commerce
                requires infrastructure that connects money across
                traditional finance and digital assets.
              </p>
              <p className="mt-4 text-lg font-semibold text-foreground">
                That is the future ZorianPay is building.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <Eyebrow>Join us</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Want to help build the future of borderless finance?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                We&apos;re always looking for talented people in engineering,
                compliance, design, and operations who share our mission. If
                that sounds like you, get in touch — we&apos;d love to hear from
                you at{" "}
                <a
                  href="mailto:careers@zorianpay.com"
                  className="text-gold hover:underline"
                >
                  careers@zorianpay.com
                </a>{" "}
                or via our contact page.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/platform" variant="secondary">
                  Explore the Platform
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
