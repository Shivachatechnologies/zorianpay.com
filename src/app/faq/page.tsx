import type { Metadata } from "next";
import { Container, Section, SectionHeading, Eyebrow, Button } from "@/components/ui";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ZorianPay — getting started, multi-currency accounts, the crypto card, security & compliance, and fees & billing.",
};

const categories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is ZorianPay?",
        answer:
          "ZorianPay is a blockchain-powered neobanking platform operated by Shivacha Technologies LLC. It combines multi-currency accounts, crypto card issuance, and blockchain-based settlement so individuals and businesses can hold, send, and spend money globally from a single account.",
      },
      {
        question: "How do I open a ZorianPay account?",
        answer:
          "Sign up through our contact page to get started, or request access via the website. Once you've completed our streamlined identity verification (KYC), you can fund your account via bank transfer, card, or crypto wallet and start using your multi-currency balances immediately.",
      },
      {
        question: "Who can use ZorianPay?",
        answer:
          "ZorianPay is built for individuals, freelancers, remote teams, and businesses that operate across borders. We support both Personal accounts for everyday use and Business accounts with multi-user access and API integrations.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "ZorianPay is designed to work seamlessly across web and mobile, with the same account, card controls, and transaction history available wherever you sign in.",
      },
    ],
  },
  {
    title: "Accounts & Currencies",
    items: [
      {
        question: "How many currencies does ZorianPay support?",
        answer:
          "ZorianPay supports 30+ fiat and crypto currencies, including USD, EUR, GBP, AED, and INR, alongside major crypto assets. Personal accounts include up to 3 sub-accounts, Plus up to 10, and Business accounts are unlimited.",
      },
      {
        question: "Can I receive local bank transfers in different currencies?",
        answer:
          "Yes. Each multi-currency sub-account comes with local account details (such as an IBAN or local routing details depending on the currency) so you can receive payments like a local in that region.",
      },
      {
        question: "How do currency conversions work?",
        answer:
          "Conversions happen instantly at the live mid-market rate plus a transparent FX markup that depends on your plan — 0.75% on Personal, 0.35% on Plus, and as low as 0.15% on Business. The exact rate is always shown before you confirm.",
      },
      {
        question: "Can I hold a balance without converting it?",
        answer:
          "Yes. Each sub-account holds its currency independently, so you can keep balances in multiple currencies and convert only when you choose to, avoiding unnecessary FX exposure.",
      },
    ],
  },
  {
    title: "Crypto Card",
    items: [
      {
        question: "How does the ZorianPay crypto card work?",
        answer:
          "The ZorianPay card lets you spend directly from your crypto or fiat balances. When you make a purchase, the required amount is converted in real time at the point of sale, so merchants are paid in their local currency while you spend from your crypto holdings.",
      },
      {
        question: "Can I get both a virtual and a physical card?",
        answer:
          "Yes. Personal accounts include one virtual card, Plus accounts include a physical card plus multiple virtual cards, and Business accounts can issue unlimited virtual cards along with physical team cards.",
      },
      {
        question: "Can I freeze my card or set spending limits?",
        answer:
          "Absolutely. You can freeze and unfreeze your card instantly from your account, set per-transaction or daily spending limits, and restrict spending to specific merchant categories or countries.",
      },
      {
        question: "Where can I use my ZorianPay card?",
        answer:
          "Your ZorianPay card works anywhere that accepts major card networks, both online and in person, including ATM withdrawals up to your plan's daily limit.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      {
        question: "How does ZorianPay keep my funds and data secure?",
        answer:
          "We use multi-layer encryption for all data in transit and at rest, cold-storage custody for digital assets, biometric authentication, and continuous automated fraud monitoring across every account and transaction.",
      },
      {
        question: "Is ZorianPay regulated?",
        answer:
          "ZorianPay is operated by Shivacha Technologies LLC, which works with regulated banking and custody partners and follows applicable Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements in the regions we serve.",
      },
      {
        question: "What happens if my card or account is compromised?",
        answer:
          "You can instantly freeze your card and lock your account from the app. Our security team monitors for suspicious activity around the clock and will proactively flag unusual transactions for your review.",
      },
    ],
  },
  {
    title: "Fees & Billing",
    items: [
      {
        question: "Does ZorianPay charge monthly account fees?",
        answer:
          "The Personal plan is completely free with no monthly fees. The Plus plan is $9/month and includes lower FX markups, additional cards, and priority support. Business pricing is custom based on your usage.",
      },
      {
        question: "Are blockchain transfers free?",
        answer:
          "Internal ZorianPay-to-ZorianPay transfers are always free. On-chain blockchain transfers incur only the underlying network gas fee, passed through at cost with no additional ZorianPay markup.",
      },
      {
        question: "Will I be charged for ATM withdrawals?",
        answer:
          "Withdrawals within your plan's daily limit ($500 for Personal, $2,000 for Plus, custom for Business) carry no fee from ZorianPay. Some ATM operators may apply their own surcharge, which is disclosed at the machine before you confirm.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Frequently asked <span className="gold-gradient-text">questions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Everything you need to know about ZorianPay accounts,
              currencies, the crypto card, security, and billing. Can&apos;t find
              what you&apos;re looking for? Reach out to our team directly.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ categories */}
      {categories.map((category, idx) => (
        <Section
          key={category.title}
          className={idx % 2 === 1 ? "border-t border-border bg-surface" : ""}
        >
          <Container>
            <SectionHeading eyebrow="Help center" title={category.title} align="left" />
            <div className="mt-10 max-w-3xl">
              <FaqAccordion items={category.items} />
            </div>
          </Container>
        </Section>
      ))}

      {/* CTA */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-background px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.15),transparent_60%)]" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Our support team is available around the clock to help with
              anything from account setup to card issues and billing
              questions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Contact Support</Button>
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
