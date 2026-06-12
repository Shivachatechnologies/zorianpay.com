import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Eyebrow, Button, Card } from "@/components/ui";
import { CardVisual } from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full ZorianPay platform: multi-currency accounts, crypto card issuance, blockchain settlements, instant FX, virtual IBANs, business tools, and more.",
};

const platformFeatures = [
  {
    icon: "🌐",
    title: "Multi-Currency Accounts",
    description:
      "Hold and manage 30+ fiat and crypto currencies in a single account, each with its own balance and transaction history.",
    href: "/multi-currency-accounts",
  },
  {
    icon: "💳",
    title: "Crypto Card Issuance",
    description:
      "Order a virtual card instantly or request a physical Visa card that spends directly from your crypto or fiat balances.",
    href: "/crypto-card",
  },
  {
    icon: "⛓️",
    title: "Blockchain Settlements",
    description:
      "Send and receive funds over on-chain rails for transparent, near-instant, and auditable cross-border settlement.",
    href: "/security",
  },
  {
    icon: "⚡",
    title: "Instant FX Conversion",
    description:
      "Convert between currencies at live, transparent rates — no spread surprises, no waiting for settlement windows.",
    href: "/pricing",
  },
  {
    icon: "🏦",
    title: "Virtual IBANs & Local Details",
    description:
      "Receive local account numbers and IBANs for major regions so you can get paid like a local, anywhere you operate.",
    href: "/multi-currency-accounts",
  },
  {
    icon: "📈",
    title: "Savings & Yield Accounts",
    description:
      "Put idle balances to work with flexible savings accounts offering competitive yield on select currencies.",
    href: "/pricing",
  },
  {
    icon: "📱",
    title: "Mobile-First Experience",
    description:
      "Manage accounts, cards, and transfers from a fast, secure mobile app designed for life on the move.",
    href: "/contact",
  },
  {
    icon: "🔔",
    title: "Smart Notifications & Budgeting",
    description:
      "Real-time alerts for every transaction, plus spending insights and budgeting tools to track your money.",
    href: "/security",
  },
  {
    icon: "👥",
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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Platform Overview</Eyebrow>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One platform for{" "}
              <span className="gold-gradient-text">global money</span>, built
              on blockchain
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              ZorianPay brings multi-currency accounts, crypto card issuance,
              blockchain settlement, and business-grade tools together in a
              single, secure experience — so you can hold, move, and spend
              money however the world works today.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Open a ZorianPay Account</Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature grid */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Everything included"
            title="A complete toolkit for borderless finance"
            description="Every ZorianPay account comes with the same powerful foundation — no matter if you're an individual, a freelancer, or a global business."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
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

      {/* Multi-currency + crypto card spotlight */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Multi-Currency Accounts</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Hold 30+ currencies — fiat and crypto — in one wallet
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Open balances in USD, EUR, GBP, AED, INR, JPY, and dozens more,
                alongside BTC, ETH, USDT, and USDC. Receive local payments via
                dedicated account numbers and IBANs, then convert instantly
                whenever exchange rates work in your favor.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Local IBANs for US, EU, UK, and more
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Instant conversion between any supported pair
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Crypto and fiat balances side by side
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/multi-currency-accounts">Explore Multi-Currency Accounts</Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
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
            </div>
          </div>
        </Container>
      </Section>

      {/* Crypto card spotlight */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <CardVisual />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Crypto Card</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A card that spends crypto like cash
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                The ZorianPay Visa card converts your crypto balances to local
                currency at the point of sale, with full spending controls,
                ATM access, and rewards tiers for every type of spender.
              </p>
              <div className="mt-8">
                <Button href="/crypto-card">Discover the Crypto Card</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Blockchain settlements */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Blockchain Settlements"
            title="Transfers that settle on-chain, not on faith"
            description="Every cross-border transfer can route through blockchain rails, giving you near-instant settlement with a transparent, verifiable trail."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <div className="text-3xl">⚡</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Fast finality</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Most on-chain transfers settle in under a minute, regardless of
                the destination country or banking hours.
              </p>
            </Card>
            <Card>
              <div className="text-3xl">🔍</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Auditable by design</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Every settlement has an on-chain reference, giving you a clear,
                independently verifiable record of funds movement.
              </p>
            </Card>
            <Card>
              <div className="text-3xl">💰</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Lower transfer costs</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                By bypassing layers of correspondent banks, blockchain
                settlement reduces fees on cross-border payments.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Business tools */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="For Businesses"
            title="Built to scale with your team"
            description="Business accounts include everything individuals love, plus the controls and integrations growing teams need."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {businessTools.map((tool) => (
              <Card key={tool.title}>
                <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why ZorianPay"
            title="See how ZorianPay compares"
            description="Traditional banking wasn't built for a world that moves money across currencies and chains every day. ZorianPay was."
          />
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
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-background px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.15),transparent_60%)]" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to put it all together?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Open a ZorianPay account and get access to multi-currency
              balances, crypto card issuance, and blockchain settlement from
              day one.
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
