import type { Metadata } from "next";
import Link from "next/link";
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
import { CardVisual } from "@/components/CardVisual";
import { Reveal } from "@/components/Reveal";
import {
  Snowflake,
  BarChart3,
  Landmark,
  Bell,
  Globe2,
  RefreshCw,
  Smartphone,
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Check,
  X,
  Zap,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Card",
  description:
    "The ZorianPay Crypto Card: virtual and physical Visa cards that spend directly from your crypto and fiat balances, with real-time conversion, cashback, and full spending controls.",
};

const supportedAssets = [
  { code: "BTC", name: "Bitcoin" },
  { code: "ETH", name: "Ethereum" },
  { code: "USDT", name: "Tether" },
  { code: "USDC", name: "USD Coin" },
  { code: "BNB", name: "BNB" },
  { code: "SOL", name: "Solana" },
  { code: "MATIC", name: "Polygon" },
  { code: "TRX", name: "Tron" },
];

const tiers = [
  {
    name: "Standard",
    tagline: "Get started for free",
    highlight: false,
    features: [
      "Instant virtual card issuance",
      "Real-time crypto-to-fiat conversion",
      "Up to 0.5% cashback on purchases",
      "Standard ATM withdrawal limits",
      "In-app freeze/unfreeze controls",
    ],
  },
  {
    name: "Plus",
    tagline: "For everyday spenders",
    highlight: true,
    features: [
      "Everything in Standard",
      "Physical Visa card included",
      "Up to 1.5% cashback on purchases",
      "Higher ATM withdrawal limits",
      "Priority customer support",
      "Reduced FX conversion spreads",
    ],
  },
  {
    name: "Black",
    tagline: "Metal card, premium perks",
    highlight: false,
    features: [
      "Everything in Plus",
      "Premium metal card design",
      "Up to 3% cashback on purchases",
      "Highest ATM withdrawal limits",
      "Airport lounge access program",
      "Dedicated account manager",
    ],
  },
];

const controls = [
  {
    icon: Snowflake,
    title: "Freeze & unfreeze instantly",
    description:
      "Lock your card from the app the moment it's lost or misplaced, and unlock it just as quickly when it turns up.",
  },
  {
    icon: BarChart3,
    title: "Custom spending limits",
    description:
      "Set daily, weekly, or per-transaction limits across categories like online purchases, ATM withdrawals, and in-store payments.",
  },
  {
    icon: Landmark,
    title: "Global ATM access",
    description:
      "Withdraw local currency from ATMs worldwide, with transparent conversion from your crypto or fiat balances.",
  },
  {
    icon: Bell,
    title: "Real-time alerts",
    description:
      "Get instant push notifications for every authorization, decline, and refund so you always know where your money is.",
  },
  {
    icon: Globe2,
    title: "Geo & merchant controls",
    description:
      "Restrict your card to specific countries or merchant categories to reduce exposure to unauthorized use.",
  },
  {
    icon: RefreshCw,
    title: "Auto top-up rules",
    description:
      "Configure automatic conversions from your crypto holdings so your spending balance never runs dry.",
  },
];

const orderSteps = [
  {
    step: "01",
    title: "Verify your account",
    description:
      "Complete identity verification in the ZorianPay app — most users are approved within minutes.",
  },
  {
    step: "02",
    title: "Choose your card",
    description:
      "Pick Standard, Plus, or Black, and issue a virtual card instantly while your physical card ships.",
  },
  {
    step: "03",
    title: "Fund your balance",
    description:
      "Top up from any supported crypto or fiat balance, or set up auto top-up from your wallet.",
  },
  {
    step: "04",
    title: "Start spending",
    description:
      "Use your virtual card immediately for online purchases, and tap to pay once your physical card arrives.",
  },
];

export default function CryptoCardPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow>ZorianPay Crypto Card</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Spend crypto <span className="gold-gradient-text">anywhere Visa is accepted</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  The ZorianPay Crypto Card converts BTC, ETH, USDT, USDC and
                  more into local currency in real time — at checkout, online,
                  or at the ATM. Issue a virtual card instantly, or order a
                  physical card delivered worldwide.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href="https://app.zorianpay.com/register">
                    Order Your Card
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/features" variant="secondary">
                    Explore Features
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="flex justify-center lg:justify-end">
              <CardVisual className="glow-gold animate-float" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Virtual + physical cards — detailed comparison */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Choose Your Card"
              title="Virtual in minutes. Physical wherever you are."
              description="Two ways to spend the same balance — issue a virtual card instantly for online and mobile payments, or add a physical Visa card for in-store purchases and ATM withdrawals."
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Virtual card panel */}
            <Reveal>
              <div className="card-surface flex h-full flex-col rounded-3xl p-8">
                <div className="flex items-start justify-between">
                  <IconBadge className="h-14 w-14 rounded-2xl">
                    <Smartphone className="h-6 w-6" />
                  </IconBadge>
                  <Pill>
                    <Zap className="h-3 w-3 text-gold" /> Issued instantly
                  </Pill>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  Virtual Card
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">
                  Free with every account
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Created in seconds inside the ZorianPay app — no shipping, no
                  waiting. Perfect for online checkout, subscriptions, and
                  tap-to-pay through your phone.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                  {[
                    "Live in under 60 seconds after verification",
                    "Add to Apple Pay & Google Pay for contactless payments",
                    "Use for online purchases, subscriptions & in-app payments",
                    "Generate replacement card details anytime, free",
                    "Separate card number keeps your main details private",
                    "Freeze, unfreeze, or delete instantly from the app",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="https://app.zorianpay.com/register" className="w-full">
                    Get Your Virtual Card
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Physical card panel */}
            <Reveal delay={80}>
              <div className="relative flex h-full flex-col rounded-3xl border border-gold/30 bg-surface p-8">
                <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg rounded-3xl" />
                <div className="flex items-start justify-between">
                  <IconBadge className="h-14 w-14 rounded-2xl">
                    <Mail className="h-6 w-6" />
                  </IconBadge>
                  <Pill>
                    <Truck className="h-3 w-3 text-gold" /> Ships worldwide
                  </Pill>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  Physical Card
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">
                  Included with Plus &amp; Black plans
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  A premium Visa card delivered to your door, anywhere in the
                  world. Everything the virtual card does — plus in-store
                  payments and cash access at ATMs.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                  {[
                    "Tap, chip & PIN payments at millions of stores worldwide",
                    "Withdraw local cash from ATMs in 150+ countries",
                    "Contactless payments without your phone",
                    "Numberless card design — details stay safe in the app",
                    "Black tier: premium metal card with lounge access",
                    "Express worldwide shipping with tracking",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="https://app.zorianpay.com/register" className="w-full">
                    Order Your Physical Card
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Side-by-side spec table */}
          <Reveal delay={120}>
            <div className="card-surface mt-12 overflow-hidden rounded-3xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 font-semibold text-foreground">
                        Compare at a glance
                      </th>
                      <th className="px-6 py-4 font-semibold text-foreground">
                        Virtual Card
                      </th>
                      <th className="px-6 py-4 font-semibold text-foreground">
                        Physical Card
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted">
                    {[
                      { label: "Issuance time", virtual: "Under 60 seconds", physical: "5–10 business days" },
                      { label: "Cost", virtual: "Free", physical: "Included with Plus & Black" },
                      { label: "Online payments & subscriptions", virtual: true, physical: true },
                      { label: "Apple Pay / Google Pay", virtual: true, physical: true },
                      { label: "In-store tap, chip & PIN", virtual: false, physical: true },
                      { label: "ATM cash withdrawals", virtual: false, physical: true },
                      { label: "Works without your phone", virtual: false, physical: true },
                      { label: "Instant replacement details", virtual: true, physical: false },
                    ].map((row) => (
                      <tr key={row.label}>
                        <td className="px-6 py-4 font-medium text-foreground">
                          {row.label}
                        </td>
                        {([row.virtual, row.physical] as const).map((value, i) => (
                          <td key={i} className="px-6 py-4">
                            {typeof value === "boolean" ? (
                              value ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                                  <Check className="h-3.5 w-3.5" />
                                </span>
                              ) : (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-surface-2 text-muted-2">
                                  <X className="h-3.5 w-3.5" />
                                </span>
                              )
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Real-time conversion + supported assets */}
      <Section className="section-divider border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Real-Time Conversion</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Pay in crypto, settle in local currency
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                When you tap your ZorianPay card, your selected crypto balance
                is converted to the merchant&apos;s local currency at the
                prevailing market rate — instantly and transparently, with no
                hidden markups.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                Choose which balance funds your card by default, or let
                ZorianPay automatically draw from your fiat balance first and
                fall back to crypto when needed.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="text-lg font-semibold text-foreground">Supported cryptocurrencies</h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {supportedAssets.map((asset) => (
                  <div
                    key={asset.code}
                    className="card-surface flex flex-col items-center justify-center rounded-xl py-5 text-center transition-colors hover:border-gold/40"
                  >
                    <span className="text-sm font-bold tracking-wide text-gold">{asset.code}</span>
                    <span className="mt-1 text-xs text-muted">{asset.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Tiers */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Card Tiers"
              title="A card for every kind of spender"
              description="Start free with Standard, or unlock higher cashback, premium materials, and elevated limits with Plus and Black."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <Card
                  className={`h-full ${tier.highlight ? "border-gold/50 ring-1 ring-gold/30" : ""}`}
                >
                  {tier.highlight && <Pill><Sparkles className="h-3 w-3 text-gold" /> Most Popular</Pill>}
                  <h3 className="mt-4 text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
                  <ul className="mt-6 space-y-3 text-sm text-muted">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <CheckCircle2 className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={tier.highlight ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Have questions about card fees, FX spreads, or ATM costs?{" "}
            <Link href="/contact" className="inline-flex items-center gap-1 text-gold hover:underline">
              Talk to our team <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Spending controls */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Spending Controls"
              title="You're always in control"
              description="Manage your card entirely from the ZorianPay app — set limits, lock your card, and get alerted in real time."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control, i) => (
              <Reveal key={control.title} delay={i * 60}>
                <Card className="h-full">
                  <IconBadge>
                    <control.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{control.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{control.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to order */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Getting Started"
              title="Order your card in four steps"
              description="From sign-up to your first tap-to-pay transaction, ZorianPay keeps onboarding fast and simple."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4">
            {orderSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 80} className="relative">
                <span className="text-5xl font-bold text-border-strong">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Security */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <div className="flex justify-center">
                <IconBadge className="h-14 w-14 rounded-2xl">
                  <ShieldCheck className="h-6 w-6" />
                </IconBadge>
              </div>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Backed by bank-grade security
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Every ZorianPay card is protected by encrypted transaction data,
                biometric app authentication, two-factor authorization, and
                continuous fraud monitoring. Crypto backing your card balance is
                held in audited cold-storage custody.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/security">
                  Learn About Our Security
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="https://app.zorianpay.com/register" variant="secondary">
                  Order Your Card
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
