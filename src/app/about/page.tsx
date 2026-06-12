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
import {
  ShieldCheck,
  Search,
  Globe2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZorianPay and Shivacha Technologies LLC — our mission to build borderless financial infrastructure for the digital economy, our values, team, and milestones.",
};

const values = [
  {
    title: "Security",
    description:
      "Every account, card, and transfer is protected by multi-layer encryption, cold-storage custody, and continuous fraud monitoring. We treat security as a foundation, not a feature.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no fine-print surprises. Our FX rates, transfer costs, and on-chain settlements are visible and verifiable at every step.",
    icon: Search,
  },
  {
    title: "Accessibility",
    description:
      "Borderless finance shouldn't be reserved for the few. We're building tools that work for freelancers, families, and businesses anywhere in the world.",
    icon: Globe2,
  },
  {
    title: "Innovation",
    description:
      "We combine traditional banking rails with blockchain settlement and crypto card issuance — constantly iterating to stay ahead of how money moves.",
    icon: Lightbulb,
  },
];

const timeline = [
  {
    year: "2021",
    title: "Shivacha Technologies LLC founded",
    description:
      "A small team of fintech and blockchain engineers set out to build a digital finance platform that treats crypto and fiat as equals, not afterthoughts.",
  },
  {
    year: "2022",
    title: "ZorianPay platform launches in beta",
    description:
      "Early access accounts go live with USD and EUR wallets, laying the groundwork for a multi-currency architecture from day one.",
  },
  {
    year: "2023",
    title: "Multi-currency expansion",
    description:
      "ZorianPay wallets expand to support 30+ fiat and crypto currencies, with local account and IBAN details for major regions made available via banking partners.",
  },
  {
    year: "2024",
    title: "Crypto card issuance goes live",
    description:
      "Virtual and physical ZorianPay cards launch, letting customers spend crypto balances anywhere card payments are accepted.",
  },
  {
    year: "2025",
    title: "Blockchain settlement network upgrade",
    description:
      "On-chain settlement rails are upgraded for sub-minute cross-border transfers, with full transaction auditability.",
  },
  {
    year: "2026",
    title: "Global business accounts",
    description:
      "ZorianPay for Business launches with multi-user access, batch payouts, and API access for growing companies worldwide.",
  },
];

const team = [
  {
    initials: "AK",
    name: "Aiyana Khatri",
    role: "Chief Executive Officer",
    bio: "Former payments lead at a global remittance firm, focused on bringing blockchain settlement to everyday banking.",
  },
  {
    initials: "RM",
    name: "Rafael Moreno",
    role: "Chief Technology Officer",
    bio: "Distributed-systems engineer with a decade of experience building secure, high-throughput financial infrastructure.",
  },
  {
    initials: "SC",
    name: "Sofia Chen",
    role: "Chief Compliance Officer",
    bio: "Specializes in cross-border regulatory frameworks, ensuring ZorianPay meets the highest standards for licensing and AML.",
  },
  {
    initials: "TO",
    name: "Tariq Osei",
    role: "Head of Product",
    bio: "Designs the ZorianPay account and card experience, with a focus on simplicity for both individuals and businesses.",
  },
  {
    initials: "ML",
    name: "Maya Lindqvist",
    role: "Head of Security",
    bio: "Leads the security and fraud-monitoring teams, overseeing custody architecture and incident response.",
  },
  {
    initials: "DV",
    name: "Diego Vargas",
    role: "Head of Partnerships",
    bio: "Builds relationships with banking and liquidity partners to keep ZorianPay's currency network growing.",
  },
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
                ZorianPay is operated by Shivacha Technologies LLC, a fintech
                company on a mission to make multi-currency accounts,
                blockchain settlement, and crypto card issuance accessible to
                everyone — wherever they live, work, or do business.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>Our Mission</Eyebrow>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Money without borders, by default
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  We believe that holding, sending, and spending money across
                  currencies and borders should be as simple as sending a
                  message. ZorianPay combines regulated fiat accounts with
                  blockchain-based settlement so that value moves at the speed
                  of the internet — not the speed of legacy banking
                  infrastructure.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full">
                <Eyebrow>Our Vision</Eyebrow>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  A single account for the digital economy
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  We&apos;re building toward a future where a single ZorianPay
                  account can hold dozens of currencies — fiat and crypto
                  alike — settle payments on-chain, and power a card that works
                  anywhere. One account, one app, no borders.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="section-divider border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Founded by people who felt the friction firsthand
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Shivacha Technologies LLC was founded by a small group of
                fintech and blockchain engineers who had spent years working
                on cross-border payments — and were frustrated by how slow,
                expensive, and opaque the experience still was for everyday
                people and businesses.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                We started with a simple question: what would banking look
                like if it were designed today, with blockchain settlement
                as a core primitive instead of an afterthought? ZorianPay is
                our answer — a platform where multi-currency accounts,
                instant transfers, and crypto card issuance work together as
                one coherent experience.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Card className="p-10">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">30+</p>
                    <p className="mt-2 text-sm text-muted">Currencies supported</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">150+</p>
                    <p className="mt-2 text-sm text-muted">Countries reached</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">2021</p>
                    <p className="mt-2 text-sm text-muted">Founded</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">24/7</p>
                    <p className="mt-2 text-sm text-muted">Support & monitoring</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core values */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Our core values"
              description="These principles guide every product decision we make, from how we design accounts to how we custody assets."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <Card className="h-full">
                  <IconBadge>
                    <value.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="Our journey so far"
              description="From a founding idea to a global multi-currency platform with crypto card issuance."
            />
          </Reveal>
          <div className="mt-16 space-y-6">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 60}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="shrink-0">
                    <span className="inline-flex items-center rounded-full border border-gold/30 bg-background px-4 py-1.5 text-sm font-bold gold-gradient-text">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership team */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The team behind ZorianPay"
              description="A global team of fintech, blockchain, security, and compliance specialists building borderless financial infrastructure."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <Card className="h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full gold-gradient-bg text-base font-bold text-black">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gold">{member.role}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{member.bio}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="section-divider border-t border-border">
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
                <Button href="/features" variant="secondary">
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
