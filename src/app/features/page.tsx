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
} from "@/components/ui";
import { CardVisual } from "@/components/CardVisual";
import { Reveal } from "@/components/Reveal";
import {
  Globe,
  CreditCard,
  Link2,
  Zap,
  Building2,
  TrendingUp,
  Smartphone,
  Bell,
  Users,
  CheckCircle2,
  Search,
  Coins,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full ZorianPay platform: multi-currency wallets, crypto card issuance, blockchain settlements, instant FX, local account details via banking partners, business tools, and more.",
};

const platformFeatures = [
  {
    icon: Globe,
    title: "Multi-Currency Accounts",
    description:
      "Hold and manage 30+ fiat and crypto currencies in a single account, each with its own balance and transaction history.",
    href: "/multi-currency-accounts",
  },
  {
    icon: CreditCard,
    title: "Crypto Card Issuance",
    description:
      "Order a virtual card instantly or request a physical Visa card that spends directly from your crypto or fiat balances.",
    href: "/crypto-card",
  },
  {
    icon: Link2,
    title: "Blockchain Settlements",
    description:
      "Send and receive funds over on-chain rails for transparent, near-instant, and auditable cross-border settlement.",
    href: "/security",
  },
  {
    icon: Zap,
    title: "Instant FX Conversion",
    description:
      "Convert between currencies at live, transparent rates — no spread surprises, no waiting for settlement windows.",
    href: "/multi-currency-accounts",
  },
  {
    icon: Building2,
    title: "Local Account Details, via Banking Partners",
    description:
      "Receive local account numbers and IBANs for major regions, provided through our banking partners, so you can get paid like a local, anywhere you operate.",
    href: "/multi-currency-accounts",
  },
  {
    icon: TrendingUp,
    title: "Savings & Yield Accounts",
    description:
      "Put idle balances to work with flexible savings accounts offering competitive yield on select currencies.",
    href: "/contact",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Manage accounts, cards, and transfers from a fast, secure mobile app designed for life on the move.",
    href: "/contact",
  },
  {
    icon: Bell,
    title: "Smart Notifications & Budgeting",
    description:
      "Real-time alerts for every transaction, plus spending insights and budgeting tools to track your money.",
    href: "/security",
  },
  {
    icon: Users,
    title: "Team & Multi-User Access",
    description:
      "Invite teammates with role-based permissions, approval flows, and shared visibility across business accounts.",
    href: "/contact",
  },
];

const comparisonRows = [
  {
    feature: "Multi-currency balances in one account",
    zorian: true,
    legacy: false,
  },
  {
    feature: "Crypto + fiat held side by side",
    zorian: true,
    legacy: false,
  },
  {
    feature: "On-chain settlement transparency",
    zorian: true,
    legacy: false,
  },
  {
    feature: "Instant virtual card issuance",
    zorian: true,
    legacy: false,
  },
  {
    feature: "Local IBANs across multiple regions",
    zorian: true,
    legacy: "Sometimes",
  },
  {
    feature: "24/7 account access & support",
    zorian: true,
    legacy: "Limited hours",
  },
  {
    feature: "Transparent, published FX rates",
    zorian: true,
    legacy: "Often hidden markups",
  },
];

const businessTools = [
  {
    title: "Developer API & Webhooks",
    description:
      "Programmatically create accounts, initiate payouts, and reconcile transactions with a clean REST API and real-time webhooks.",
  },
  {
    title: "Batch Payouts",
    description:
      "Pay contractors, vendors, or employees across multiple currencies in a single upload — settled on-chain or via local rails.",
  },
  {
    title: "Multi-User Roles & Approvals",
    description:
      "Set spending limits, approval thresholds, and granular permissions for every member of your finance team.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "Growing businesses get a dedicated relationship manager to help with onboarding, scaling, and treasury strategy.",
  },
];

const blockchainHighlights = [
  {
    icon: Zap,
    title: "Fast finality",
    description:
      "Most on-chain transfers settle in under a minute, regardless of the destination country or banking hours.",
  },
  {
    icon: Search,
    title: "Auditable by design",
    description:
      "Every settlement has an on-chain reference, giving you a clear, independently verifiable record of funds movement.",
  },
  {
    icon: Coins,
    title: "Lower transfer costs",
    description:
      "By bypassing layers of correspondent banks, blockchain settlement reduces fees on cross-border payments.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 text-gold" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.5 7.75a.75.75 0 0 1-1.085.02l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.95 2.95 6.99-7.22a.75.75 0 0 1 1.079.001z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 text-muted" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>Platform Overview</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                One platform for{" "}
                <span className="gold-gradient-text">global money</span>, built
                on blockchain
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-balance text-lg leading-8 text-muted">
                ZorianPay brings multi-currency accounts, crypto card issuance,
                blockchain settlement, and business-grade tools together in a
                single, secure experience — so you can hold, move, and spend
                money however the world works today.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Open a ZorianPay Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/crypto-card" variant="secondary">
                  Discover the Crypto Card
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Everything included"
              title="A complete toolkit for borderless finance"
              description="Every ZorianPay account comes with the same powerful foundation — no matter if you're an individual, a freelancer, or a global business."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, i) => (
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

      {/* Multi-currency + crypto card spotlight */}
      <Section className="section-divider border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Multi-Currency Wallets</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Hold 30+ currencies — fiat and crypto — in one wallet
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Open balances in USD, EUR, GBP, AED, INR, JPY, and dozens more,
                alongside BTC, ETH, USDT, and USDC. Receive local payments via
                dedicated account numbers and IBANs provided through our
                banking partners, then convert instantly whenever exchange
                rates work in your favor.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {[
                  "Local IBANs for US, EU, UK, and more via banking partners",
                  "Instant conversion between any supported pair",
                  "Crypto and fiat balances side by side",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <CheckCircle2 className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/multi-currency-accounts">
                  Explore Multi-Currency Accounts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex justify-center lg:justify-end">
              <div className="grid w-full max-w-md grid-cols-3 gap-3">
                {["USD", "EUR", "GBP", "AED", "INR", "JPY", "SGD", "BTC", "ETH"].map((code) => (
                  <div
                    key={code}
                    className="card-surface flex items-center justify-center rounded-xl py-6 text-sm font-bold tracking-wide text-foreground"
                  >
                    {code}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Crypto card spotlight */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <CardVisual />
            </Reveal>
            <Reveal delay={80} className="order-1 lg:order-2">
              <Eyebrow>Crypto Card</Eyebrow>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A card that spends crypto like cash
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                The ZorianPay Visa card converts your crypto balances to local
                currency at the point of sale, with full spending controls,
                ATM access, and rewards tiers for every type of spender.
              </p>
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

      {/* Blockchain settlements */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Blockchain Settlements"
              title="Transfers that settle on-chain, not on faith"
              description="Every cross-border transfer can route through blockchain rails, giving you near-instant settlement with a transparent, verifiable trail."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {blockchainHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Card className="h-full">
                  <IconBadge>
                    <item.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business tools */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="For Businesses"
              title="Built to scale with your team"
              description="Business accounts include everything individuals love, plus the controls and integrations growing teams need."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {businessTools.map((tool, i) => (
              <Reveal key={tool.title} delay={i * 60}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why ZorianPay"
              title="See how ZorianPay compares"
              description="Traditional banking infrastructure wasn't built for a world that moves money across currencies and chains every day. ZorianPay was."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-16 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="px-6 py-4 font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-gold">ZorianPay</th>
                    <th className="px-6 py-4 text-center font-semibold text-muted">Traditional Bank</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={idx % 2 === 0 ? "bg-background" : "bg-surface"}
                    >
                      <td className="border-t border-border px-6 py-4 text-foreground">
                        {row.feature}
                      </td>
                      <td className="border-t border-border px-6 py-4 text-center">
                        <span className="inline-flex justify-center">
                          {row.zorian === true ? <CheckIcon /> : row.zorian}
                        </span>
                      </td>
                      <td className="border-t border-border px-6 py-4 text-center text-muted">
                        <span className="inline-flex justify-center">
                          {row.legacy === false ? <CrossIcon /> : row.legacy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to put it all together?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Open a ZorianPay account and get access to multi-currency
                balances, crypto card issuance, and blockchain settlement from
                day one.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Open an Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/crypto-card" variant="secondary">
                  Discover the Crypto Card
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
