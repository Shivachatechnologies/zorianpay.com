import type { Metadata } from "next";
import { Container, Section, SectionHeading, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ZorianPay — the financial infrastructure platform, merchant payments, multi-currency accounts, card programs, security & compliance, and fees & billing.",
};

const categories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is ZorianPay?",
        answer:
          "ZorianPay is a financial infrastructure platform operated by Shivacha Technologies LLC. Through a secure, API-first infrastructure, ZorianPay connects merchants, enterprises, banks, payment providers, and digital assets into one unified financial ecosystem — enabling merchants to accept supported digital asset payments while receiving settlement directly into their existing bank accounts in local currency.",
      },
      {
        question: "How do I get started with ZorianPay?",
        answer:
          "Reach out through our contact page to talk to our team. Once we understand whether you're a merchant, an enterprise, or an individual customer, we'll walk you through onboarding, identity verification (KYC), and integration.",
      },
      {
        question: "Who can use ZorianPay?",
        answer:
          "ZorianPay serves merchants accepting digital asset payments, enterprises integrating financial services through our APIs, banks and payment providers expanding through partnership, and individual customers using our Business Accounts and Card Programs.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "ZorianPay is designed to work seamlessly across web and mobile, with the same account, card controls, and transaction history available wherever you sign in.",
      },
    ],
  },
  {
    title: "For Merchants & Enterprises",
    items: [
      {
        question: "How does the Universal Merchant QR work?",
        answer:
          "Customers scan a single merchant QR code, choose their preferred digital asset, and complete a secure, compliance-verified payment. ZorianPay handles smart routing, asset conversion, and settlement — merchants don't need to manage a digital asset wallet.",
      },
      {
        question: "How does local currency settlement work?",
        answer:
          "Once a payment is verified and converted, funds settle directly into the merchant's existing bank account in local currency through our Settlement Engine — no separate crypto wallet or manual conversion required.",
      },
      {
        question: "Can I integrate ZorianPay into my own platform?",
        answer:
          "Yes. Our Enterprise APIs let you embed digital asset payment acceptance, business accounts, and settlement directly into your own product, with webhooks for real-time reconciliation and a merchant dashboard for reporting.",
      },
      {
        question: "Does ZorianPay offer white-label solutions?",
        answer:
          "Yes. Banks, payment providers, and enterprises can license the ZorianPay platform as a white-label solution, extending merchant infrastructure and settlement capabilities under their own brand.",
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
          "Yes. Each multi-currency sub-account can come with local account details (such as an IBAN or local routing details depending on the currency), provided via our banking partners, so you can receive payments like a local in that region.",
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
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Frequently asked <span className="gold-gradient-text">questions</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-muted">
                Everything you need to know about the ZorianPay platform —
                merchant payments, settlement, accounts, card programs,
                security, and billing. Can&apos;t find what you&apos;re looking for?
                Reach out to our team directly.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ categories */}
      {categories.map((category, idx) => (
        <Section
          key={category.title}
          className={
            idx % 2 === 1
              ? "section-divider border-t border-border bg-surface/40"
              : "section-divider border-t border-border"
          }
        >
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Help center" title={category.title} align="left" />
            </Reveal>
            <div className="mt-10 max-w-3xl">
              <Reveal delay={80}>
                <FaqAccordion items={category.items} />
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      {/* CTA */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Still have questions?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                Our support team is available around the clock to help with
                anything from account setup to card issues and billing
                questions.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/platform" variant="secondary">
                  Explore the Platform
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
