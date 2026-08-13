import type { Metadata } from "next";
import { Container, Section, Eyebrow, Card, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Headset, Building2, Newspaper, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZorianPay and Shivacha Technologies LLC for merchant onboarding, enterprise API access, banking partnerships, or general support questions.",
};

const contactCards = [
  {
    title: "General Support",
    description:
      "Questions about your account, card, or a transaction? Our support team is here to help.",
    detail: "support@zorianpay.com",
    href: "mailto:support@zorianpay.com",
    icon: Headset,
  },
  {
    title: "Merchants & Enterprises",
    description:
      "Interested in accepting digital asset payments, a Business Account, enterprise API access, or a banking partnership? Reach out to our team.",
    detail: "business@zorianpay.com",
    href: "mailto:business@zorianpay.com",
    icon: Building2,
  },
  {
    title: "Executive & Press",
    description:
      "For press inquiries, media kits, or executive-level partnership discussions regarding ZorianPay or Shivacha Technologies LLC.",
    detail: "ceo@zorianpay.com",
    href: "mailto:ceo@zorianpay.com",
    icon: Newspaper,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Contact Us</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s <span className="gold-gradient-text">talk</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-muted">
                Whether you&apos;re a merchant looking to accept digital asset
                payments, an enterprise exploring API integration, a bank or
                payment provider interested in a partnership, or you need
                help with your account or card, our team is ready to help.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Form + info grid */}
      <Section className="section-divider border-t border-border bg-surface/40">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
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
            </Reveal>

            <div className="space-y-6">
              {contactCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 80}>
                  <Card>
                    <IconBadge>
                      <card.icon className="h-5 w-5" />
                    </IconBadge>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{card.description}</p>
                    <a
                      href={card.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-gold hover:underline"
                    >
                      {card.detail}
                    </a>
                  </Card>
                </Reveal>
              ))}

              <Reveal delay={contactCards.length * 80}>
                <Card>
                  <IconBadge>
                    <Clock className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Response Times</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    We aim to respond to all support and business inquiries
                    within 24 hours. Plus and Business plan customers receive
                    priority responses, typically within a few hours.
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company info */}
      <Section className="section-divider border-t border-border">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-12 text-center sm:px-16">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <div className="flex justify-center">
                <IconBadge>
                  <Building2 className="h-5 w-5" />
                </IconBadge>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Shivacha Technologies LLC
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
                ZorianPay is a product of Shivacha Technologies LLC, a
                registered fintech company building the financial
                infrastructure for the digital asset economy. All ZorianPay
                accounts, cards, and settlement services are provided in
                partnership with regulated banking and custody partners.
              </p>
              <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-gold" />
                8 The Green, Suite B, Dover, DE 19901, USA
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
