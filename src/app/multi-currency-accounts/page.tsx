import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Eyebrow, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Multi-Currency Accounts",
  description:
    "Hold, send, and convert between 30+ fiat and crypto currencies in a single ZorianPay account, with local IBANs for major regions and instant conversion.",
};

const currencies = [
  { code: "USD", label: "US Dollar", type: "fiat" },
  { code: "EUR", label: "Euro", type: "fiat" },
  { code: "GBP", label: "British Pound", type: "fiat" },
  { code: "AED", label: "UAE Dirham", type: "fiat" },
  { code: "INR", label: "Indian Rupee", type: "fiat" },
  { code: "JPY", label: "Japanese Yen", type: "fiat" },
  { code: "SGD", label: "Singapore Dollar", type: "fiat" },
  { code: "CHF", label: "Swiss Franc", type: "fiat" },
  { code: "CAD", label: "Canadian Dollar", type: "fiat" },
  { code: "AUD", label: "Australian Dollar", type: "fiat" },
  { code: "HKD", label: "Hong Kong Dollar", type: "fiat" },
  { code: "CNY", label: "Chinese Yuan", type: "fiat" },
  { code: "ZAR", label: "South African Rand", type: "fiat" },
  { code: "BRL", label: "Brazilian Real", type: "fiat" },
  { code: "MXN", label: "Mexican Peso", type: "fiat" },
  { code: "TRY", label: "Turkish Lira", type: "fiat" },
  { code: "SEK", label: "Swedish Krona", type: "fiat" },
  { code: "NOK", label: "Norwegian Krone", type: "fiat" },
  { code: "PLN", label: "Polish Zloty", type: "fiat" },
  { code: "SAR", label: "Saudi Riyal", type: "fiat" },
  { code: "NGN", label: "Nigerian Naira", type: "fiat" },
  { code: "PHP", label: "Philippine Peso", type: "fiat" },
  { code: "IDR", label: "Indonesian Rupiah", type: "fiat" },
  { code: "THB", label: "Thai Baht", type: "fiat" },
  { code: "VND", label: "Vietnamese Dong", type: "fiat" },
  { code: "BTC", label: "Bitcoin", type: "crypto" },
  { code: "ETH", label: "Ethereum", type: "crypto" },
  { code: "USDT", label: "Tether", type: "crypto" },
  { code: "USDC", label: "USD Coin", type: "crypto" },
  { code: "BNB", label: "BNB", type: "crypto" },
  { code: "SOL", label: "Solana", type: "crypto" },
];

const regions = [
  {
    region: "United States",
    flag: "🇺🇸",
    details: "Receive USD via ACH and wire transfer with a dedicated US account number and routing number.",
  },
  {
    region: "European Union",
    flag: "🇪🇺",
    details: "Get a personal IBAN for SEPA transfers, letting you send and receive EUR like a local resident.",
  },
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    details: "Use a UK sort code and account number to send and receive GBP via Faster Payments.",
  },
  {
    region: "Singapore",
    flag: "🇸🇬",
    details: "Receive SGD through local payment networks with dedicated account details for the region.",
  },
  {
    region: "UAE",
    flag: "🇦🇪",
    details: "Hold and transact in AED with local routing for regional payroll and supplier payments.",
  },
  {
    region: "India",
    flag: "🇮🇳",
    details: "Receive INR through local rails, ideal for remittances and domestic payouts.",
  },
];

const useCases = [
  {
    icon: "🧑‍💻",
    title: "Freelancers & Contractors",
    description:
      "Get paid in your client's currency — USD, EUR, GBP, or more — without losing money to forced conversions, then convert on your schedule.",
  },
  {
    icon: "✈️",
    title: "Travelers",
    description:
      "Hold balances in the currencies of the countries you visit and spend with your ZorianPay card at local rates, no surprise fees.",
  },
  {
    icon: "🏢",
    title: "Businesses",
    description:
      "Invoice international clients in their local currency, pay global vendors directly, and manage treasury across markets from one dashboard.",
  },
  {
    icon: "💸",
    title: "Remittances",
    description:
      "Send money home instantly using blockchain settlement rails, with transparent FX rates and minimal fees compared to legacy transfer services.",
  },
];

export default function MultiCurrencyAccountsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Multi-Currency Accounts</Eyebrow>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One account, <span className="gold-gradient-text">30+ currencies</span>, zero borders
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Hold fiat and crypto side by side in a single ZorianPay account.
              Get local account details for major regions, convert instantly
              between currencies, and manage every balance from one
              dashboard.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Open a Multi-Currency Account</Button>
              <Button href="/features" variant="secondary">
                Explore All Features
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Currency grid */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Supported Currencies"
            title="Fiat and crypto, all in one place"
            description="From major world currencies to leading digital assets, ZorianPay accounts support the money you actually use."
          />
          <div className="mt-16 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-6">
            {currencies.map((currency) => (
              <div
                key={currency.code}
                className={`card-surface flex flex-col items-center justify-center rounded-xl py-5 text-center transition-colors hover:border-gold/40 ${
                  currency.type === "crypto" ? "ring-1 ring-gold/20" : ""
                }`}
              >
                <span className="text-sm font-bold tracking-wide text-foreground">
                  {currency.code}
                </span>
                <span className="mt-1 text-[11px] text-muted">{currency.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Currencies highlighted with a gold ring are digital assets held
            and settled via blockchain rails. New currencies are added
            regularly — see{" "}
            <Link href="/features" className="text-gold hover:underline">
              all platform features
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Instant conversion */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Instant Conversion</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Convert in seconds, at transparent rates
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Move funds between any of your balances — USD to EUR, BTC to
                USDT, GBP to AED — with live exchange rates and no hidden
                markups. Conversions settle instantly so your money is ready
                to spend, send, or save right away.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Real-time, published exchange rates
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> Convert crypto to fiat or fiat to crypto instantly
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✓</span> No minimum conversion amounts
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md">
                <p className="text-xs uppercase tracking-widest text-muted">You convert</p>
                <div className="mt-2 flex items-center justify-between rounded-xl border border-border bg-background px-4 py-4">
                  <span className="text-2xl font-bold text-foreground">1,000.00</span>
                  <span className="text-sm font-semibold text-gold">USD</span>
                </div>
                <div className="mt-4 flex justify-center text-muted">↓</div>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted">You receive</p>
                <div className="mt-2 flex items-center justify-between rounded-xl border border-border bg-background px-4 py-4">
                  <span className="text-2xl font-bold gold-gradient-text">0.0152</span>
                  <span className="text-sm font-semibold text-gold">BTC</span>
                </div>
                <p className="mt-4 text-center text-xs text-muted">
                  Live rate · settles instantly · no hidden fees
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Regional account details */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Local Account Details"
            title="Get paid like a local, wherever you operate"
            description="ZorianPay issues local account numbers and IBANs for major regions, so clients and partners can pay you through familiar domestic payment rails."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Card key={region.region}>
                <div className="text-3xl">{region.flag}</div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{region.region}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{region.details}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Use Cases"
            title="Built for the way modern money moves"
            description="Whether you're earning, traveling, running a business, or supporting family abroad, ZorianPay accounts adapt to your needs."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <Card key={useCase.title}>
                <div className="text-3xl">{useCase.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-background px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.15),transparent_60%)]" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Hold the world&apos;s money in one account
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Open a ZorianPay multi-currency account and start receiving,
              converting, and spending across 30+ currencies today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Open an Account</Button>
              <Button href="/crypto-card" variant="secondary">
                Explore the Crypto Card
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
