import { Container, Section, SectionHeading, Eyebrow, Button, Card } from "@/components/ui";
import { CardVisual } from "@/components/CardVisual";
import Link from "next/link";

const stats = [
  { value: "30+", label: "Supported fiat & crypto currencies" },
  { value: "150+", label: "Countries reached" },
  { value: "<60s", label: "Average transfer settlement" },
  { value: "24/7", label: "Real-time support & monitoring" },
];

const features = [
  {
    title: "Multi-Currency Accounts",
    description:
      "Hold, send, and receive USD, EUR, GBP, AED, INR and 25+ other currencies in one IBAN-enabled account.",
    href: "/multi-currency-accounts",
    icon: "🌐",
  },
  {
    title: "Crypto Card Issuance",
    description:
      "Spend crypto anywhere with a virtual or physical ZorianPay card, with real-time conversion at point of sale.",
    href: "/crypto-card",
    icon: "💳",
  },
  {
    title: "Blockchain Settlements",
    description:
      "On-chain rails for near-instant, low-cost cross-border transfers, fully auditable and transparent.",
    href: "/features",
    icon: "⛓️",
  },
  {
    title: "Bank-Grade Security",
    description:
      "Multi-layer encryption, cold-storage custody, biometric authentication, and continuous fraud monitoring.",
    href: "/security",
    icon: "🛡️",
  },
  {
    title: "Instant Global Transfers",
    description:
      "Move money across borders in seconds with transparent FX rates and no hidden fees.",
    href: "/features",
    icon: "⚡",
  },
  {
    title: "Business Accounts",
    description:
      "Multi-user access, batch payouts, API access, and dedicated account managers for growing teams.",
    href: "/features",
    icon: "🏢",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up in minutes with a streamlined KYC process built for individuals and businesses.",
  },
  {
    step: "02",
    title: "Fund & convert",
    description:
      "Top up via bank transfer, card, or crypto wallet and convert across 30+ currencies instantly.",
  },
  {
    step: "03",
    title: "Spend & send globally",
    description:
      "Use your ZorianPay crypto card or initiate blockchain transfers to anyone, anywhere.",
  },
];

const testimonials = [
  {
    quote:
      "ZorianPay lets us pay international contractors in their local currency without the usual bank delays. The crypto card has been a game changer for our team's travel expenses.",
    name: "Maria Lopez",
    role: "Operations Lead, Remote-first startup",
  },
  {
    quote:
      "The multi-currency wallet and on-chain settlement make ZorianPay feel like the banking experience I've been waiting for as a freelancer working with clients across continents.",
    name: "Daniel K.",
    role: "Independent Consultant",
  },
  {
    quote:
      "Security and transparency were our top priorities when choosing a banking partner for our crypto-native business. ZorianPay checked every box.",
    name: "Priya Nair",
    role: "Founder, Web3 Commerce Platform",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Blockchain-Powered Neobank</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Global money, <span className="gold-gradient-text">reimagined</span> for the
                digital economy
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                ZorianPay combines multi-currency accounts, blockchain-based
                settlement, and crypto card issuance into a single platform —
                built for individuals, freelancers, and businesses moving
                money across borders.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact">Open a ZorianPay Account</Button>
                <Button href="/features" variant="secondary">
                  Explore Features
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted">
                A product of <span className="text-foreground">Shivacha Technologies LLC</span>
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <CardVisual className="glow-gold" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="border-t border-border bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold gold-gradient-text sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="Everything you need to move money globally"
            description="From everyday spending to enterprise treasury management, ZorianPay gives you the tools to operate without borders."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-gold">
                    Learn more &rarr;
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Up and running in three steps"
            description="ZorianPay is designed for speed — from onboarding to your first global transaction."
          />
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-border">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Crypto card highlight */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <CardVisual />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Crypto Card</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Spend your crypto, anywhere it&apos;s accepted
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Issue a virtual card in minutes or order a physical ZorianPay
                card. Top up from your crypto or fiat balances and spend at
                millions of merchants worldwide with real-time conversion and
                transparent rates.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Instant virtual card issuance
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Physical card delivery worldwide
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Real-time crypto-to-fiat conversion
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Spending controls & freeze/unfreeze in-app
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/crypto-card">Discover the Crypto Card</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Trusted worldwide"
            title="What our customers say"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <p className="text-sm leading-6 text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.15),transparent_60%)]" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to bank without borders?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Join thousands of individuals and businesses using ZorianPay to
              hold, send, and spend money globally — powered by blockchain.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Open an Account</Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
