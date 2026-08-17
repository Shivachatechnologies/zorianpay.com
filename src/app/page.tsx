import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  Card,
  IconBadge,
  Pill,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { NetworkOrbit } from "@/components/NetworkOrbit";
import Link from "next/link";
import {
  ScanLine,
  Landmark,
  Code2,
  ShieldCheck,
  Wallet,
  LayoutDashboard,
  ArrowRight,
  ArrowDown,
  Store,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  Handshake,
  Globe,
  TrendingUp,
  Target,
} from "lucide-react";

const stats = [
  { value: "4", label: "Target regions: GCC, Europe, Asia & Africa", icon: Target },
  { value: "8+", label: "Revenue verticals across the platform", icon: TrendingUp },
  { value: "API-First", label: "Infrastructure built for integration", icon: Code2 },
  { value: "2030", label: "Vision for global financial infrastructure", icon: Sparkles },
];

const regionNodes = [
  { icon: Globe, label: "GCC" },
  { icon: Globe, label: "Europe" },
  { icon: Globe, label: "Asia" },
  { icon: Globe, label: "Africa" },
];

const ecosystemNodes = [
  { icon: Store, label: "Merchants" },
  { icon: Building2, label: "Enterprises" },
  { icon: Landmark, label: "Banks" },
  { icon: Wallet, label: "Digital Assets" },
];

const products = [
  {
    title: "Universal Merchant QR",
    description:
      "One QR code for digital asset payment acceptance — customers scan, choose their asset, and pay in seconds.",
    href: "/platform",
    icon: ScanLine,
  },
  {
    title: "Settlement Engine",
    description:
      "Merchants receive settlement directly into their existing bank accounts, in local currency, without managing a wallet.",
    href: "/accounts",
    icon: Landmark,
  },
  {
    title: "Enterprise APIs",
    description:
      "A clean, API-first architecture lets enterprises embed digital asset acceptance and settlement into their own platforms.",
    href: "/platform",
    icon: Code2,
  },
  {
    title: "Compliance Engine",
    description:
      "Transaction monitoring, routing, and compliance verification are built into every payment, by design.",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Digital Asset Wallet & Card Programs",
    description:
      "Secure asset management and card issuance give customers and businesses a familiar way to hold and spend value.",
    href: "/card-programs",
    icon: Wallet,
  },
  {
    title: "Merchant Dashboard",
    description:
      "Real-time reporting and business management tools give merchants and enterprises full visibility into every transaction.",
    href: "/platform",
    icon: LayoutDashboard,
  },
];

const journeySteps = [
  "Customer scans the Universal Merchant QR",
  "Customer chooses a supported digital asset",
  "Smart payment routing & compliance verification",
  "Asset conversion at transparent rates",
  "Local currency settlement to the merchant's bank account",
];

const audiences = [
  {
    icon: Users,
    title: "For Customers",
    items: [
      "Fast QR payments",
      "Multiple supported digital assets",
      "Secure transactions",
      "A familiar payment experience",
    ],
  },
  {
    icon: Store,
    title: "For Merchants",
    items: [
      "Accept digital asset payments",
      "Receive local currency",
      "Use your existing bank account",
      "No wallet management, faster settlement",
    ],
  },
  {
    icon: Building2,
    title: "For Enterprises",
    items: [
      "Enterprise APIs & embedded finance",
      "Real-time reporting",
      "Scalable infrastructure",
      "Partnership-driven integrations",
    ],
  },
];

const highlights = [
  "Infrastructure-First Platform",
  "Merchant-Focused Network",
  "API-Driven Architecture",
  "Local Currency Settlement",
  "Enterprise Integrations",
  "Compliance by Design",
  "Partnership-Led Growth",
  "Global Expansion Strategy",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <div className="pointer-events-none absolute inset-0 -z-10 dot-grid" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow>Financial Infrastructure Platform</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Building the{" "}
                  <span className="gold-gradient-text">financial infrastructure</span>{" "}
                  for the digital asset economy
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  ZorianPay connects merchants, enterprises, banks, payment
                  providers, and digital assets into one unified financial
                  ecosystem — enabling businesses to accept supported digital
                  asset payments while receiving settlement directly into
                  their existing bank accounts, in local currency.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href="/contact">
                    Talk to Sales
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button href="/platform" variant="secondary">
                    Explore the Platform
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-8 -z-10 rounded-full bg-gold/10 blur-3xl" />
                <Card className="glow-gold animate-float">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
                      The ZorianPay Solution
                    </p>
                    <Pill>One Network</Pill>
                  </div>
                  <ol className="mt-6 space-y-3">
                    {journeySteps.map((step, i) => (
                      <li key={step}>
                        <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                            {i + 1}
                          </span>
                          <span className="text-sm leading-5 text-foreground">
                            {step}
                          </span>
                        </div>
                        {i < journeySteps.length - 1 && (
                          <div className="flex justify-center py-1.5 text-muted-2">
                            <ArrowDown className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Highlights ticker */}
      <div className="section-divider border-y border-border bg-surface/60 py-6">
        <Container>
          <div className="flex items-center gap-6 overflow-hidden">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted-2">
              Key highlights
            </p>
            <div className="flex w-full gap-10 overflow-hidden">
              <div className="flex shrink-0 animate-ticker gap-10">
                {[...highlights, ...highlights].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="shrink-0 text-sm font-semibold tracking-wide text-muted-2"
                  >
                    {item}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <Card className="relative h-full overflow-hidden">
                  <span aria-hidden="true" className="numeral-watermark">
                    0{i + 1}
                  </span>
                  <IconBadge>
                    <stat.icon className="h-5 w-5" />
                  </IconBadge>
                  <p className="relative mt-4 text-3xl font-bold gold-gradient-text sm:text-4xl">
                    <Counter value={stat.value} />
                  </p>
                  <p className="relative mt-2 text-sm leading-6 text-muted">
                    {stat.label}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product ecosystem */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Ecosystem"
              title="Everything connected through one platform"
              description="From merchant payment acceptance to enterprise integrations, every ZorianPay product is built on the same unified infrastructure."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.title} delay={i * 60}>
                <Link href={product.href}>
                  <Card className="relative h-full overflow-hidden">
                    <span aria-hidden="true" className="numeral-watermark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <IconBadge>
                      <product.icon className="h-5 w-5" />
                    </IconBadge>
                    <h3 className="relative mt-4 text-lg font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-6 text-muted">
                      {product.description}
                    </p>
                    <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why ZorianPay */}
      <Section className="section-divider relative overflow-hidden border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Why ZorianPay</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One QR. One network. One infrastructure.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                The financial industry has successfully digitized products —
                banks digitized accounts, payment providers digitized
                transactions, and digital asset platforms digitized value.
                Yet businesses still rely on multiple disconnected providers
                to complete a single payment journey.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                ZorianPay solves this by creating a unified infrastructure
                that enables digital asset payments, intelligent routing,
                compliance, foreign exchange, and local currency settlement
                through one integrated platform.
              </p>
              <div className="mt-8">
                <Button href="/company">
                  Read Our Company Profile
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-10 -z-10 rounded-full bg-gold/10 blur-3xl" />
                <NetworkOrbit nodes={ecosystemNodes} centerLabel="ZorianPay" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Key benefits by audience */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Built for everyone in the payment journey"
              title="Key benefits, by audience"
              description="ZorianPay is designed as a financial infrastructure business — every audience gets the parts of the platform built for them."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {audiences.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 80}>
                <Card className="h-full">
                  <IconBadge>
                    <audience.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    {audience.items.map((item) => (
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

      {/* Global reach */}
      <Section className="section-divider relative overflow-hidden border-t border-border">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <Eyebrow>Global Expansion</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Built for borderless commerce
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Consumers increasingly hold digital assets, businesses
                  operate across multiple countries, and enterprises require
                  programmable financial infrastructure. ZorianPay is
                  designed for international deployment through regulated
                  financial ecosystems — starting in the GCC, Europe, Asia,
                  and Africa.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Discuss Regional Expansion
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-10 -z-10 rounded-full bg-gold/10 blur-3xl" />
                <NetworkOrbit nodes={regionNodes} centerLabel="ZorianPay Network" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <div className="flex justify-center">
                <Pill>
                  <Sparkles className="h-3 w-3 text-gold" /> Now onboarding merchants & partners
                </Pill>
              </div>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to power the future of global commerce?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Whether you&apos;re a merchant accepting digital assets, an
                enterprise integrating financial services, or a bank looking
                to expand through technology, ZorianPay gives you the
                infrastructure to move faster.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Talk to Sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/platform" variant="secondary">
                  Explore the Platform
                </Button>
              </div>
              <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-sm text-muted">
                <Handshake className="h-4 w-4 text-gold" /> Rather than
                competing with financial institutions, ZorianPay expands
                through partnership.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
