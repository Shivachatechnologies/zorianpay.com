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
import { Reveal } from "@/components/Reveal";
import {
  ScanLine,
  Landmark,
  Building2,
  Wallet,
  Code2,
  ShieldCheck,
  LayoutDashboard,
  Zap,
  Search,
  Coins,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the ZorianPay platform: the Universal Merchant QR, Settlement Engine, Business Accounts, Digital Asset Wallet, Enterprise APIs, Compliance Engine, and Merchant Dashboard — one unified financial infrastructure.",
};

const coreProducts = [
  {
    icon: ScanLine,
    product: "Universal Merchant QR",
    purpose: "Digital asset payment acceptance",
    href: "/crypto-card",
  },
  {
    icon: Landmark,
    product: "Settlement Engine",
    purpose: "Local currency settlement",
    href: "/multi-currency-accounts",
  },
  {
    icon: Building2,
    product: "Business Accounts",
    purpose: "Business financial operations",
    href: "/multi-currency-accounts",
  },
  {
    icon: Wallet,
    product: "Digital Asset Wallet",
    purpose: "Secure asset management",
    href: "/crypto-card",
  },
  {
    icon: Code2,
    product: "Enterprise APIs",
    purpose: "Platform integrations",
    href: "/contact",
  },
  {
    icon: ShieldCheck,
    product: "Compliance Engine",
    purpose: "Transaction monitoring",
    href: "/security",
  },
  {
    icon: LayoutDashboard,
    product: "Merchant Dashboard",
    purpose: "Business management",
    href: "/contact",
  },
];

const transactionJourney = [
  "Customer scans the merchant QR",
  "Customer chooses a digital asset",
  "Secure authorization",
  "Smart payment routing",
  "Compliance verification",
  "Asset conversion",
  "Local currency settlement",
  "Merchant receives funds",
];

const enterpriseTools = [
  {
    title: "Developer API & Webhooks",
    description:
      "Programmatically create accounts, initiate settlements, and reconcile transactions with a clean REST API and real-time webhooks.",
  },
  {
    title: "Embedded Finance",
    description:
      "Embed digital asset acceptance, wallets, and settlement directly into your own platform or product experience.",
  },
  {
    title: "Multi-User Roles & Approvals",
    description:
      "Set spending limits, approval thresholds, and granular permissions for every member of your finance team.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "Growing merchants and enterprises get a dedicated relationship manager to help with onboarding, scaling, and integration.",
  },
];

const settlementHighlights = [
  {
    icon: Zap,
    title: "Fast settlement",
    description:
      "Payments route through smart, compliance-verified rails designed for fast, predictable settlement — regardless of destination country.",
  },
  {
    icon: Search,
    title: "Auditable by design",
    description:
      "Every transaction moves through compliance verification and routing, giving merchants a clear, verifiable record of funds movement.",
  },
  {
    icon: Coins,
    title: "Local currency, no wallet management",
    description:
      "Merchants receive settlement directly into their existing bank account in local currency — no digital asset wallet to manage.",
  },
];

const comparisonRows = [
  { capability: "Payment Gateway", zorian: true },
  { capability: "Digital Asset Acceptance", zorian: true },
  { capability: "Merchant Infrastructure", zorian: true },
  { capability: "Local Currency Settlement", zorian: true },
  { capability: "Enterprise APIs", zorian: true },
  { capability: "Banking Connectivity", zorian: true },
  { capability: "Unified Infrastructure", zorian: true },
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
                One platform for the complete{" "}
                <span className="gold-gradient-text">digital asset payment journey</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-balance text-lg leading-8 text-muted">
                ZorianPay is not another payment application or digital
                wallet. We are building the infrastructure that enables
                digital assets and traditional financial systems to work
                together — securely, efficiently, and at global scale.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Talk to Sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/crypto-card" variant="secondary">
                  Explore Card Programs
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core products */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Products"
              title="Everything connected through one platform"
              description="Every product in the ZorianPay ecosystem runs on the same unified infrastructure — no separate vendors, no fragmented integrations."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((item, i) => (
              <Reveal key={item.product} delay={i * 60}>
                <Link href={item.href}>
                  <Card className="relative h-full overflow-hidden">
                    <span aria-hidden="true" className="numeral-watermark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <IconBadge>
                      <item.icon className="h-5 w-5" />
                    </IconBadge>
                    <h3 className="relative mt-4 text-lg font-semibold text-foreground">
                      {item.product}
                    </h3>
                    <p className="relative mt-2 text-sm leading-6 text-muted">
                      {item.purpose}
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

      {/* Transaction journey */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Transaction Journey"
              title="From scan to settlement, in one flow"
              description="Instead of managing multiple financial relationships, merchants connect once and access a unified infrastructure designed for modern commerce."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-16 max-w-md">
              {transactionJourney.map((step, i) => (
                <div key={step}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {step}
                    </span>
                  </div>
                  {i < transactionJourney.length - 1 && (
                    <div className="flex justify-center py-2 text-muted-2">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Settlement engine */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Settlement Engine"
              title="Settlement that merchants can trust"
              description="Every transaction routes through compliance verification and smart routing before it settles into a merchant's existing bank account."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {settlementHighlights.map((item, i) => (
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

      {/* Enterprise tools */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="For Enterprises"
              title="Built to scale with your business"
              description="Enterprise access includes everything merchants rely on, plus the controls and integrations growing teams need."
              align="left"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {enterpriseTools.map((tool, i) => (
                <Reveal key={tool.title} delay={i * 60}>
                  <Card className="h-full">
                    <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border-strong bg-[#0a0b10] shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-border-strong bg-surface-2 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs font-medium text-white/40">
                    create-payment.sh
                  </span>
                </div>
                <pre className="overflow-x-auto px-5 py-6 text-[13px] leading-6">
                  <code className="font-mono">
                    <span className="text-white/40"># Accept a digital asset payment and settle locally</span>{"\n"}
                    <span className="text-gold">curl</span>{" "}
                    <span className="text-white/80">https://api.zorianpay.com/v1/payments</span>{" "}
                    <span className="text-white/40">\</span>{"\n"}
                    {"  "}
                    <span className="text-gold">-H</span>{" "}
                    <span className="text-emerald-300/80">&quot;Authorization: Bearer sk_live_***&quot;</span>{" "}
                    <span className="text-white/40">\</span>{"\n"}
                    {"  "}
                    <span className="text-gold">-H</span>{" "}
                    <span className="text-emerald-300/80">&quot;Content-Type: application/json&quot;</span>{" "}
                    <span className="text-white/40">\</span>{"\n"}
                    {"  "}
                    <span className="text-gold">-d</span> <span className="text-white/60">{"'{"}</span>{"\n"}
                    {"    "}
                    <span className="text-sky-300/80">&quot;amount&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;250.00&quot;</span>
                    <span className="text-white/60">,</span>{"\n"}
                    {"    "}
                    <span className="text-sky-300/80">&quot;currency&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;USD&quot;</span>
                    <span className="text-white/60">,</span>{"\n"}
                    {"    "}
                    <span className="text-sky-300/80">&quot;asset&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;USDT&quot;</span>
                    <span className="text-white/60">,</span>{"\n"}
                    {"    "}
                    <span className="text-sky-300/80">&quot;settlement&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;local_currency&quot;</span>{"\n"}
                    <span className="text-white/60">{"  }'"}</span>
                    {"\n\n"}
                    <span className="text-white/40"># Response</span>{"\n"}
                    <span className="text-white/60">{"{"}</span>{"\n"}
                    {"  "}
                    <span className="text-sky-300/80">&quot;status&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;settled&quot;</span>
                    <span className="text-white/60">,</span>{"\n"}
                    {"  "}
                    <span className="text-sky-300/80">&quot;settlement_currency&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;USD&quot;</span>
                    <span className="text-white/60">,</span>{"\n"}
                    {"  "}
                    <span className="text-sky-300/80">&quot;amount_settled&quot;</span>
                    <span className="text-white/60">:</span>{" "}
                    <span className="text-emerald-300/80">&quot;249.10&quot;</span>{"\n"}
                    <span className="text-white/60">{"}"}</span>
                  </code>
                </pre>
              </div>
              <p className="mt-4 text-center text-xs text-muted">
                Illustrative example — accept a digital asset payment and settle in local currency via the Enterprise API.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Beyond Traditional FinTech"
              title="See how ZorianPay compares"
              description="Traditional providers deliver these capabilities as isolated services. ZorianPay combines them within a single platform."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-16 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="px-6 py-4 font-semibold text-foreground">Capability</th>
                    <th className="px-6 py-4 text-center font-semibold text-muted">Traditional Provider</th>
                    <th className="px-6 py-4 text-center font-semibold text-gold">ZorianPay</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.capability}
                      className={idx % 2 === 0 ? "bg-background" : "bg-surface"}
                    >
                      <td className="border-t border-border px-6 py-4 text-foreground">
                        {row.capability}
                      </td>
                      <td className="border-t border-border px-6 py-4 text-center">
                        <span className="inline-flex justify-center">
                          <CrossIcon />
                        </span>
                      </td>
                      <td className="border-t border-border px-6 py-4 text-center">
                        <span className="inline-flex justify-center">
                          <CheckIcon />
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
                Talk to our team about accepting digital asset payments,
                integrating our enterprise APIs, or partnering with ZorianPay
                as a bank or payment provider.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Talk to Sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/crypto-card" variant="secondary">
                  Explore Card Programs
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
