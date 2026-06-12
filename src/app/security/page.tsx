import type { Metadata } from "next";
import { Container, Section, SectionHeading, Eyebrow, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "Learn how ZorianPay protects your funds and data with bank-grade encryption, cold-storage custody, biometric authentication, fraud monitoring, and a regulatory-first compliance approach.",
};

const pillars = [
  {
    icon: "🔐",
    title: "End-to-End Encryption",
    description:
      "All data in transit and at rest is protected with industry-standard AES-256 and TLS 1.3 encryption, so your account information and transaction data stay private.",
  },
  {
    icon: "🧊",
    title: "Cold Storage Custody",
    description:
      "The substantial majority of crypto assets backing customer balances are held in offline, multi-signature cold storage, minimizing exposure to online threats.",
  },
  {
    icon: "🆔",
    title: "Biometric Authentication",
    description:
      "Secure your account with Face ID, fingerprint, or device biometrics — an additional layer of protection beyond passwords.",
  },
  {
    icon: "🔑",
    title: "Two-Factor Authentication",
    description:
      "Every login, transfer, and sensitive account change can be protected with 2FA via authenticator apps or SMS verification.",
  },
  {
    icon: "🕵️",
    title: "24/7 Fraud Monitoring",
    description:
      "Automated systems and a dedicated risk team monitor transactions around the clock for unusual activity, flagging and pausing suspicious behavior in real time.",
  },
  {
    icon: "🛰️",
    title: "Secure Cloud Infrastructure",
    description:
      "ZorianPay runs on hardened, access-controlled cloud infrastructure with network segmentation, intrusion detection, and continuous monitoring.",
  },
];

const complianceItems = [
  {
    title: "KYC & Identity Verification",
    description:
      "Every account is subject to identity verification (Know Your Customer) procedures, helping ensure ZorianPay is used by legitimate customers and businesses.",
  },
  {
    title: "AML Monitoring",
    description:
      "Transaction monitoring and screening processes are designed to detect and prevent money laundering, terrorist financing, and other illicit activity in line with applicable Anti-Money Laundering standards.",
  },
  {
    title: "Licensed Banking & Payment Partners",
    description:
      "Shivacha Technologies LLC works with licensed banking institutions and regulated payment processors to provide the underlying account infrastructure and fiat rails behind ZorianPay accounts.",
  },
  {
    title: "Ongoing Regulatory Engagement",
    description:
      "As ZorianPay expands into new markets, Shivacha Technologies LLC engages with relevant regulators and licensing bodies to align its services with local financial regulations.",
  },
];

const audits = [
  {
    icon: "🛡️",
    title: "Independent Security Audits",
    description:
      "ZorianPay's infrastructure and smart contract integrations undergo periodic security assessments by independent third-party firms.",
  },
  {
    icon: "🐛",
    title: "Bug Bounty Program",
    description:
      "Security researchers are invited to responsibly disclose vulnerabilities through our bug bounty program, with rewards for verified findings.",
  },
  {
    icon: "📜",
    title: "Internal Security Policies",
    description:
      "Employee access to systems and customer data follows the principle of least privilege, with mandatory security training and regular access reviews.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(240,185,11,0.12),transparent_55%)]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Security & Compliance</Eyebrow>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your money, protected by{" "}
              <span className="gold-gradient-text">design</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Security isn&apos;t a feature we bolt on — it&apos;s the foundation
              ZorianPay is built on. From encryption and cold storage to
              regulatory partnerships, every layer of the platform is designed
              to protect your funds and your data.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Talk to Our Team</Button>
              <Button href="/features" variant="secondary">
                Explore the Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Security pillars */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Core Protections"
            title="Multiple layers of defense"
            description="ZorianPay combines encryption, custody best practices, and continuous monitoring to keep your account secure at every layer."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title}>
                <div className="text-3xl">{pillar.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Custody & safeguarding */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Custody & Safeguarding</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Custody practices designed around resilience
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Digital assets held on behalf of customers are predominantly
                stored in segregated, multi-signature cold wallets that are
                not directly connected to the internet, reducing the risk of
                unauthorized access. A limited operational balance is kept in
                secure hot wallets to facilitate day-to-day transactions and
                withdrawals.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                Fiat balances are held with our licensed banking and payment
                partners in accordance with applicable safeguarding
                requirements in the jurisdictions where ZorianPay operates.
              </p>
              <p className="mt-4 text-sm text-muted">
                Please note: cryptocurrency holdings are not covered by
                government deposit insurance schemes such as FDIC or
                equivalent programs. Digital assets carry inherent market and
                technology risks, and their value can fluctuate significantly.
              </p>
            </div>
            <div>
              <Card>
                <h3 className="text-lg font-semibold text-foreground">How funds are protected</h3>
                <ul className="mt-6 space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    Majority of crypto assets held in offline, multi-signature cold storage
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    Fiat balances held via licensed banking and payment partners
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    Segregation of customer funds from corporate operating funds
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    Multi-signature authorization required for asset movements
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    Regular reconciliation between on-chain holdings and customer balances
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust & compliance */}
      <Section className="border-t border-border bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Trust & Compliance"
            title="A regulatory-first approach"
            description="Shivacha Technologies LLC, the operator of ZorianPay, is committed to building a compliant platform by working alongside licensed banking and payment partners and adapting to evolving regulatory frameworks."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {complianceItems.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Audits & bug bounty */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Audits & Disclosure"
            title="Continuously tested, continuously improved"
            description="ZorianPay's security posture is validated through external review and supported by the broader security research community."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {audits.map((item) => (
              <Card key={item.title}>
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
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
              Bank with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Have questions about our security practices, compliance program,
              or how we work with our banking partners? Our team is ready to
              help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Contact Our Team</Button>
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
