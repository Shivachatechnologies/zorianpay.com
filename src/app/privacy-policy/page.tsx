import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ZorianPay Privacy Policy to learn how Shivacha Technologies LLC collects, uses, and protects your personal information.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Introduction",
    body: [
      "Shivacha Technologies LLC (\"ZorianPay\", \"we\", \"us\", or \"our\") provides a blockchain-based neobanking platform that includes multi-currency accounts, crypto card issuance, and blockchain settlement services (the \"Services\"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, create an account, or otherwise use the Services.",
      "By accessing or using ZorianPay, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described here, please do not use the Services.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We collect information you provide directly to us, such as your name, date of birth, email address, phone number, residential address, government-issued identification documents, and financial information when you register for an account or apply for a crypto card.",
      "We also collect information automatically when you use our Services, including device identifiers, IP addresses, browser type, operating system, pages visited, and timestamps of activity. This information helps us operate, secure, and improve the platform.",
      "Where permitted, we may also receive information from third parties, including identity verification providers, credit bureaus, sanctions and watchlist databases, and blockchain analytics providers, in order to support compliance and fraud prevention.",
    ],
  },
  {
    heading: "3. KYC and AML Information",
    body: [
      "As a regulated financial services provider, ZorianPay is required to verify the identity of its users in accordance with Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations applicable in the jurisdictions where we operate. This may include collecting copies of government-issued identification, proof of address, selfie or biometric verification for liveness checks, source-of-funds declarations, and, for business accounts, beneficial ownership information.",
      "We retain KYC and AML records for as long as required by applicable law, which may extend beyond the closure of your account. This information may be shared with regulators, law enforcement, and financial intelligence units where legally required.",
      "We use automated and manual transaction monitoring tools to detect activity that may indicate fraud, money laundering, terrorist financing, or other illicit conduct. This monitoring may involve analysis of both fiat and blockchain transaction data associated with your account.",
    ],
  },
  {
    heading: "4. How We Use Your Information",
    body: [
      "We use the information we collect to: provide, maintain, and improve the Services; verify your identity and eligibility to open and maintain an account; process transactions, including currency conversions, transfers, and card payments; detect, investigate, and prevent fraud, security incidents, and other harmful activity; comply with legal and regulatory obligations, including tax reporting and sanctions screening; communicate with you about your account, including service updates, security alerts, and support requests; and, where you have consented, send marketing communications about new features, products, or promotions.",
      "We do not use your KYC documentation or financial information for advertising purposes, and we do not sell your personal information to data brokers.",
    ],
  },
  {
    heading: "5. Cookies and Similar Technologies",
    body: [
      "Our website and platform use cookies and similar tracking technologies to operate core functionality, remember your preferences, and understand how visitors interact with our site. These include essential cookies required for login and security, analytics cookies that help us understand usage patterns, and preference cookies that remember settings such as language or currency display.",
      "You can manage your cookie preferences through your browser settings or, where available, through the cookie preference tools provided on our website. For more detail, please see our Cookie Policy.",
    ],
  },
  {
    heading: "6. How We Share Your Information",
    body: [
      "We may share your information with: service providers and vendors who perform functions on our behalf, such as identity verification, card issuance and processing, cloud hosting, and customer support tools, all of whom are bound by confidentiality and data protection obligations; banking and financial partners that support fiat currency holding, transfers, and card programs; blockchain infrastructure providers that facilitate settlement of on-chain transactions (note that transactions recorded on public blockchains may be inherently visible to third parties, independent of our own disclosures); regulators, law enforcement, and government authorities where required by law, court order, or to protect the rights, property, or safety of ZorianPay, our users, or the public; and any successor entity in connection with a merger, acquisition, reorganization, or sale of assets, subject to continued protection of your information under this Policy or an equivalent standard.",
      "We do not share your personal information with third parties for their own independent marketing purposes without your consent.",
    ],
  },
  {
    heading: "7. International Data Transfers",
    body: [
      "Because ZorianPay operates across multiple jurisdictions, your information may be transferred to, stored, and processed in countries other than the one in which you reside. Where we transfer personal information internationally, we take steps designed to ensure that such transfers comply with applicable data protection laws, including the use of contractual safeguards with our service providers where required.",
    ],
  },
  {
    heading: "8. Data Retention",
    body: [
      "We retain personal information for as long as necessary to provide the Services, comply with our legal and regulatory obligations (including KYC/AML recordkeeping requirements, which commonly require retention for a period of years following account closure), resolve disputes, and enforce our agreements.",
      "When information is no longer required for these purposes, we take reasonable steps to securely delete, anonymize, or aggregate it in accordance with our internal data retention schedules.",
    ],
  },
  {
    heading: "9. Data Security",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption of data in transit and at rest, role-based access controls, multi-factor authentication for account access, and continuous monitoring for suspicious activity.",
      "While we work to protect your information, no method of transmission or storage is completely secure. We encourage you to follow good security practices, including using a strong unique password and enabling two-factor authentication on your account.",
    ],
  },
  {
    heading: "10. Your Rights and Choices",
    body: [
      "Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access the personal information we hold about you; request correction of inaccurate or incomplete information; request deletion of your personal information, subject to our legal and regulatory retention obligations; object to or restrict certain processing of your information; and withdraw consent for marketing communications at any time.",
      "Please note that certain rights, such as deletion, may be limited where retention is required for compliance with KYC/AML obligations, tax law, or ongoing legal proceedings. To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    heading: "11. Children's Privacy",
    body: [
      "The Services are not directed to, and we do not knowingly collect personal information from, individuals under the age of 18. If we become aware that we have collected personal information from a minor without appropriate consent, we will take steps to delete that information.",
    ],
  },
  {
    heading: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will post the updated policy with a revised \"Last updated\" date, and where changes are material, we will provide additional notice, such as an in-app notification or email.",
    ],
  },
  {
    heading: "13. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact our privacy team at privacy@zorianpay.com, or write to us at Shivacha Technologies LLC, Attn: Privacy Office. We aim to respond to all legitimate privacy inquiries within a reasonable timeframe.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: June 1, 2026</p>
          <p className="mt-6 text-base leading-7 text-muted">
            This Privacy Policy describes how Shivacha Technologies LLC,
            operating as ZorianPay, collects, uses, and protects your
            information across our website, applications, and services.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.body.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
