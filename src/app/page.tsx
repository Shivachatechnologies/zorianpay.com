import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  Card,
  Stat,
  IconBadge,
  Pill,
} from "@/components/ui";
import { CardVisual } from "@/components/CardVisual";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import {
  Globe,
  CreditCard,
  Link2,
  ShieldCheck,
  Zap,
  Building2,
  ArrowRight,
  Wallet,
  Repeat,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "30+", label: "Supported fiat & crypto currencies" },
  { value: "150+", label: "Countries reached" },
  { value: "<60s", label: "Average transfer settlement" },
  { value: "24/7", label: "Real-time support & monitoring" },
];

const features = [
  {
    title: "Multi-Currency Wallets",
    description:
      "Hold, send, and receive USD, EUR, GBP, AED, INR and 25+ other currencies in one wallet, with local account details available via banking partners.",
    href: "/multi-currency-accounts",
    icon: Globe,
  },
  {
    title: "Crypto Card Issuance",
    description:
      "Spend crypto anywhere with a virtual or physical ZorianPay card, with real-time conversion at point of sale.",
    href: "/crypto-card",
    icon: CreditCard,
  },
  {
    title: "Blockchain Settlements",
    description:
      "On-chain rails for near-instant, low-cost cross-border transfers, fully auditable and transparent.",
    href: "/features",
    icon: Link2,
  },
  {
    title: "Layered Security",
    description:
      "Multi-layer encryption, cold-storage custody, biometric authentication, and continuous fraud monitoring.",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Instant Global Transfers",
    description:
      "Move money across borders in seconds with transparent FX rates and no hidden fees.",
    href: "/features",
    icon: Zap,
  },
  {
    title: "Business Accounts",
    description:
      "Multi-user access, batch payouts, API access, and dedicated account managers for growing teams.",
    href: "/features",
    icon: Building2,
  },
];

const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up in minutes with a streamlined verification process built for individuals and businesses.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Fund & convert",
    description:
      "Top up via bank transfer, card, or crypto wallet and convert across 30+ currencies instantly.",
    icon: Repeat,
  },
  {
    step: "03",
    title: "Spend & send globally",
    description:
      "Use your ZorianPay crypto card or initiate blockchain transfers to anyone, anywhere.",
    icon: Sparkles,
  },
];

const testimonials = [
  {
    quote:
      "ZorianPay lets us pay international contractors in their local currency without the usual delays. The crypto card has been a game changer for our team's travel expenses.",
    name: "Maria Lopez",
    role: "Operations Lead, Remote-first startup",
  },
  {
    quote:
      "The multi-currency wallet and on-chain settlement make ZorianPay feel like the financial toolkit I've been waiting for as a freelancer working with clients across continents.",
    name: "Daniel K.",
    role: "Independent Consultant",
  },
  {
    quote:
      "Security and transparency were our top priorities when choosing a platform for our crypto-native business. ZorianPay checked every box.",
    name: "Priya Nair",
    role: "Founder, Web3 Commerce Platform",
  },
];

const networks = ["Bitcoin", "Ethereum", "Solana", "Polygon", "Tron", "Visa Network"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow>Crypto Card &amp; Multi-Currency Platform</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Global money,{" "}
                  <span className="gold-gradient-text">reimagined</span> for
                  the digital economy
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  ZorianPay combines multi-currency wallets, blockchain-based
                  settlement, and crypto card issuance into a single
                  platform — built for individuals, freelancers, and
                  businesses moving money across borders.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href="https://app.zorianpay.com/register">
                    Open a ZorianPay Account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button href="/features" variant="secondary">
                    Explore Features
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 -z-10 rounded-full bg-gold/10 blur-3xl" />
                <CardVisual className="glow-gold animate-float" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Network ticker */}
      <div className="section-divider border-y border-border bg-surface/60 py-6">
        <Container>
          <div className="flex items-center gap-6 overflow-hidden">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
              Built on
            </p>
            <div className="flex w-full gap-10 overflow-hidden">
              <div className="flex shrink-0 animate-ticker gap-10">
                {[...networks, ...networks].map((network, i) => (
                  <span
                    key={`${network}-${i}`}
                    className="shrink-0 text-sm font-semibold tracking-wide text-muted-2"
                  >
                    {network}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats */}
      <Section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Features */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Platform"
              title="Everything you need to move money globally"
              description="From everyday spending to enterprise treasury management, ZorianPay gives you the tools to operate without borders."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <Link href={feature.href}>
                  <Card className="h-full">
                    <IconBadge>
                      <feature.icon className="h-5 w-5" />
                    </IconBadge>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {feature.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Up and running in three steps"
              description="ZorianPay is designed for speed — from onboarding to your first global transaction."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 100} className="relative">
                <div className="flex items-center gap-4">
                  <IconBadge className="h-14 w-14 rounded-2xl">
                    <item.icon className="h-6 w-6" />
                  </IconBadge>
                  <span className="text-5xl font-bold text-border-strong">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Crypto card highlight */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <CardVisual />
            </Reveal>
            <Reveal delay={80} className="order-1 lg:order-2">
              <Eyebrow>Crypto Card</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Spend your crypto, anywhere it&apos;s accepted
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Issue a virtual card in minutes or order a physical ZorianPay
                card. Top up from your crypto or fiat balances and spend at
                millions of merchants worldwide with real-time conversion and
                transparent rates.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {[
                  "Instant virtual card issuance",
                  "Physical card delivery worldwide",
                  "Real-time crypto-to-fiat conversion",
                  "Spending controls & freeze/unfreeze in-app",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/crypto-card">
                  Discover the Crypto Card
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Trusted worldwide" title="What our customers say" />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <Card className="h-full">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Sparkles key={idx} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient-bg text-sm font-bold text-black">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <div className="flex justify-center">
                <Pill>
                  <Sparkles className="h-3 w-3 text-gold" /> Now onboarding new customers
                </Pill>
              </div>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to bank without borders?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Join thousands of individuals and businesses using ZorianPay
                to hold, send, and spend money globally — powered by
                blockchain.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="https://app.zorianpay.com/register">
                  Open an Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/features" variant="secondary">
                  Explore Features
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
