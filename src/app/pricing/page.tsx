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
import { Reveal } from "@/components/Reveal";
import { User, Star, Building2, Check, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for ZorianPay accounts — Personal, Plus, and Business tiers with clear FX markup, ATM limits, and card fees. No hidden costs.",
};

const tiers = [
  {
    name: "Personal",
    price: "$0",
    period: "/month",
    description:
      "Everything you need to hold, send, and spend across currencies — free, forever.",
    cta: "Open an Account",
    href: "/contact",
    highlight: false,
    icon: User,
    features: [
      "Up to 3 multi-currency sub-accounts",
      "1 virtual crypto card",
      "0.75% FX markup on conversions",
      "$500 / day ATM withdrawal limit",
      "Standard email support",
      "Basic transaction history & export",
    ],
  },
  {
    name: "Plus",
    price: "$9",
    period: "/month",
    description:
      "For frequent travelers, freelancers, and crypto-native users who need more accounts and lower fees.",
    cta: "Open an Account",
    href: "/contact",
    highlight: true,
    icon: Star,
    features: [
      "Up to 10 multi-currency sub-accounts",
      "1 physical + 3 virtual crypto cards",
      "0.35% FX markup on conversions",
      "$2,000 / day ATM withdrawal limit",
      "Priority chat & email support",
      "Advanced analytics & CSV/PDF exports",
      "Early access to new currencies",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description:
      "Multi-user access, payouts at scale, and API integrations for growing companies.",
    cta: "Talk to Sales",
    href: "/contact",
    highlight: false,
    icon: Building2,
    features: [
      "Unlimited multi-currency sub-accounts",
      "Unlimited virtual cards + physical team cards",
      "From 0.15% FX markup (volume-based)",
      "Custom ATM withdrawal limits",
      "Dedicated account manager",
      "Full REST API & webhook access",
      "Batch payouts & multi-user permissions",
    ],
  },
];

const comparisonRows = [
  {
    label: "Multi-currency accounts",
    personal: "Up to 3",
    plus: "Up to 10",
    business: "Unlimited",
  },
  {
    label: "Virtual crypto cards",
    personal: "1",
    plus: "3",
    business: "Unlimited",
  },
  {
    label: "Physical crypto cards",
    personal: "—",
    plus: "1 included",
    business: "Team cards available",
  },
  {
    label: "FX markup",
    personal: "0.75%",
    plus: "0.35%",
    business: "From 0.15%",
  },
  {
    label: "ATM withdrawal limit",
    personal: "$500 / day",
    plus: "$2,000 / day",
    business: "Custom",
  },
  {
    label: "API access",
    personal: "—",
    plus: "Read-only",
    business: "Full REST & webhooks",
  },
  {
    label: "Support",
    personal: "Email",
    plus: "Priority chat & email",
    business: "Dedicated account manager",
  },
];

const transferFees = [
  {
    title: "Currency conversion",
    description:
      "A transparent FX markup is applied on top of the live mid-market rate — 0.75% on Personal, 0.35% on Plus, and as low as 0.15% on Business with volume-based pricing.",
  },
  {
    title: "Blockchain transfers",
    description:
      "On-chain transfers incur only the network gas fee, passed through at cost with no ZorianPay markup. Internal ZorianPay-to-ZorianPay transfers are always free.",
  },
  {
    title: "Card transactions",
    description:
      "Spending in your account's base currency carries no extra fee. Cross-currency card transactions use the same FX markup as conversions, shown to you before you confirm.",
  },
  {
    title: "ATM withdrawals",
    description:
      "Withdrawals within your plan's daily limit are fee-free from ZorianPay. Some ATM operators may apply their own surcharge, which is always disclosed at the machine.",
  },
];

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes. You can switch between Personal and Plus instantly from your account settings, and changes take effect immediately. Business plans are managed by your account manager.",
  },
  {
    question: "How is the Plus subscription billed?",
    answer:
      "The Plus plan is billed monthly to your default ZorianPay balance in your account's base currency. You can cancel anytime and you'll keep Plus features until the end of the billing cycle.",
  },
  {
    question: "Are there any setup or account maintenance fees?",
    answer:
      "No. There are no setup fees, monthly maintenance fees, or inactivity fees on any plan. You only pay the FX markup and any applicable network fees on blockchain transfers.",
  },
  {
    question: "How does Business pricing work?",
    answer:
      "Business pricing is tailored to your transaction volume, number of team members, and API usage. Reach out via the contact page and our sales team will put together a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Pricing</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Simple pricing, <span className="gold-gradient-text">zero surprises</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-muted">
                Whether you&apos;re managing personal finances, traveling
                frequently, or running a global business, ZorianPay has a plan
                that fits — with transparent fees you can see before you ever
                hit confirm.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Pricing tiers */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <Card
                  className={`relative flex h-full flex-col ${
                    tier.highlight ? "border-gold/50 lg:-translate-y-4" : ""
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Pill>
                        <Sparkles className="h-3 w-3 text-gold" /> Most Popular
                      </Pill>
                    </div>
                  )}
                  <IconBadge>
                    <tier.icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{tier.name}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold gold-gradient-text">{tier.price}</span>
                    {tier.period && (
                      <span className="text-sm text-muted">{tier.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{tier.description}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href={tier.href}
                      variant={tier.highlight ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compare plans"
              title="Feature comparison"
              description="A closer look at what's included with each ZorianPay plan."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-16 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-6 py-4 font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 font-semibold text-foreground">Personal</th>
                    <th className="px-6 py-4 font-semibold text-gold">Plus</th>
                    <th className="px-6 py-4 font-semibold text-foreground">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={idx % 2 === 0 ? "bg-background" : "bg-surface"}
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                      <td className="px-6 py-4 text-muted">{row.personal}</td>
                      <td className="px-6 py-4 text-muted">{row.plus}</td>
                      <td className="px-6 py-4 text-muted">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FX / transfer fee transparency */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Fee transparency"
              title="How our fees work"
              description="We believe you should always know exactly what you're paying — and why. Here's a breakdown of every fee you might encounter."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {transferFees.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Card>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Billing FAQ */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Billing FAQ"
              title="Common billing questions"
            />
          </Reveal>
          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {faqs.map((item, i) => (
              <Reveal key={item.question} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
            Have more questions? Visit our{" "}
            <Link href="/faq" className="text-gold hover:underline">
              full FAQ page
            </Link>{" "}
            or get in touch directly.
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to choose your plan?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Open a free Personal account in minutes, or talk to our sales
                team about a tailored Business plan for your company.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Open an Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
