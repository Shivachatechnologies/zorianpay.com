import type { Metadata } from "next";
import { Container, Section, Eyebrow, Card } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZorianPay and Shivacha Technologies LLC for support, business inquiries, or general questions about our multi-currency accounts and crypto card.",
};

const contactCards = [
  {
    title: "General Support",
    description:
      "Questions about your account, card, or a transaction? Our support team is here to help.",
    detail: "support@zorianpay.com",
    href: "mailto:support@zorianpay.com",
  },
  {
    title: "Business Inquiries",
    description:
      "Interested in a Business account, partnerships, or API access? Reach out to our business team.",
    detail: "business@zorianpay.com",
    href: "mailto:business@zorianpay.com",
  },
  {
    title: "Press & Media",
    description:
      "For press inquiries, interviews, or media kits regarding ZorianPay or Shivacha Technologies LLC.",
    detail: "press@zorianpay.com",
    href: "mailto:press@zorianpay.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s <span className="gold-gradient-text">talk</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Whether you have a question about opening an account, need help
              with your crypto card, or want to explore a Business
              partnership, our team is ready to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* Form + info grid */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Fill out the form below and a member of our team will get
                  back to you as soon as possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              {contactCards.map((card) => (
                <Card key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.description}</p>
                  <a
                    href={card.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-gold hover:underline"
                  >
                    {card.detail}
                  </a>
                </Card>
              ))}

              <Card>
                <h3 className="text-lg font-semibold text-foreground">Response Times</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  We aim to respond to all support and business inquiries
                  within 24 hours. Plus and Business plan customers receive
                  priority responses, typically within a few hours.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company info */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface px-8 py-12 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.15),transparent_60%)]" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Shivacha Technologies LLC
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              ZorianPay is a product of Shivacha Technologies LLC, a
              registered fintech company building borderless financial
              infrastructure for the digital economy. All ZorianPay accounts,
              cards, and services are provided in partnership with regulated
              banking and custody partners.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
