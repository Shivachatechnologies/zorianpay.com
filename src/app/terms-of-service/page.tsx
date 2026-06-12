import type { Metadata } from "next";
import { Container, Section, Eyebrow, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the ZorianPay Terms of Service, including account eligibility, fees, crypto asset risks, and dispute resolution, provided by Shivacha Technologies LLC.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the ZorianPay platform, including our website, mobile applications, multi-currency accounts, crypto card products, and blockchain settlement services (collectively, the \"Services\"), provided by Shivacha Technologies LLC (\"ZorianPay\", \"we\", \"us\", or \"our\").",
      "By creating an account, accessing, or using the Services, you agree to be bound by these Terms, our Privacy Policy, and our Cookie Policy. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "To use ZorianPay, you must be at least 18 years of age, capable of forming a legally binding contract, and not located in, or a resident of, any jurisdiction where the Services are prohibited by applicable law, including jurisdictions subject to comprehensive sanctions programs.",
      "You must complete our identity verification process, which may include providing government-issued identification, proof of address, and other documentation as required by applicable Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations. We reserve the right to refuse service, decline an application, or terminate an account at our discretion, including where we are unable to verify your identity to our satisfaction.",
    ],
  },
  {
    heading: "3. Account Registration and Security",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials, including your password and any two-factor authentication methods, and for all activity that occurs under your account. You agree to notify us promptly at support@zorianpay.com if you suspect any unauthorized access to or use of your account.",
      "You agree to provide accurate, current, and complete information during registration and to update such information as necessary to keep it accurate. Providing false or misleading information may result in suspension or termination of your account.",
    ],
  },
  {
    heading: "4. Acceptable Use",
    body: [
      "You agree not to use the Services to: engage in or facilitate money laundering, terrorist financing, fraud, or any other illegal activity; violate any applicable law, regulation, or sanctions program; infringe the intellectual property, privacy, or other rights of any third party; attempt to gain unauthorized access to our systems, other users' accounts, or any non-public areas of the Services; transmit viruses, malware, or other harmful code; or use the Services in a manner that could damage, disable, overburden, or impair our infrastructure.",
      "We reserve the right to investigate suspected violations of these Terms and to take appropriate action, including restricting access, freezing funds pending investigation, reporting to relevant authorities, and terminating accounts, in each case to the extent permitted by applicable law.",
    ],
  },
  {
    heading: "5. Fees and Charges",
    body: [
      "Use of certain features of the Services may be subject to fees, including but not limited to account maintenance fees, currency conversion fees, card issuance and transaction fees, withdrawal fees, and inactivity fees. Applicable fees will be disclosed to you within the platform or in our fee schedule prior to you incurring them.",
      "We reserve the right to change our fees from time to time. Where required by law, we will provide advance notice of fee changes. Continued use of the Services after a fee change takes effect constitutes acceptance of the updated fees.",
      "Currency conversions performed through the Services are executed at rates that include a margin over the prevailing market rate at the time of conversion. These rates and any applicable spreads will be displayed to you before you confirm a transaction.",
    ],
  },
  {
    heading: "6. Crypto Asset Risk Disclosures",
    body: [
      "Digital assets, including cryptocurrencies and stablecoins, are subject to significant price volatility and may lose substantial value over short periods of time. The value of digital assets held or transacted through the Services can fluctuate significantly, and you may lose some or all of the value of your holdings.",
      "Blockchain transactions are generally irreversible once confirmed. ZorianPay cannot reverse, cancel, or refund a blockchain transaction once it has been broadcast and confirmed on the relevant network, even in cases of error, such as sending funds to an incorrect address.",
      "Digital asset markets and the regulatory frameworks governing them are evolving and may change in ways that affect the availability, value, or legality of certain digital assets or services. You acknowledge that you are using digital asset features of the Services at your own risk, and that ZorianPay does not provide investment, legal, or tax advice regarding digital assets.",
      "Network fees (sometimes called \"gas fees\") charged by underlying blockchain networks are outside of ZorianPay's control and may vary based on network congestion. Such fees, where applicable, will be passed through to you or reflected in the rates offered for a given transaction.",
    ],
  },
  {
    heading: "7. Crypto Card Terms",
    body: [
      "If you are issued a ZorianPay crypto card, the card is provided in connection with a card program operated by our licensed banking and card issuance partners. Use of the card is subject to the applicable cardholder agreement provided to you at the time of issuance, as well as these Terms.",
      "Conversion of digital assets to fiat currency for card transactions occurs at the time of the transaction at the prevailing rate, plus any applicable spread or fee disclosed to you. You are responsible for ensuring sufficient balance is available to cover transactions, including any associated fees.",
      "You may set spending limits, freeze, or unfreeze your card through the ZorianPay application. You are responsible for safeguarding your physical card and card details, and for reporting a lost, stolen, or compromised card to us immediately.",
    ],
  },
  {
    heading: "8. Suspension and Termination",
    body: [
      "We may suspend, restrict, or terminate your access to the Services, in whole or in part, at our discretion, including where we reasonably believe: you have violated these Terms; your account is being used for prohibited or fraudulent activity; we are required to do so by a regulator, court order, or other legal process; or continued provision of the Services to you would expose ZorianPay to legal or regulatory risk.",
      "Where reasonably possible, we will provide you with notice of suspension or termination and information on how to withdraw any remaining balance, subject to completion of any required compliance review. You may also close your account at any time, subject to settlement of any outstanding obligations.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, ZorianPay and its officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or related to your use of, or inability to use, the Services.",
      "To the maximum extent permitted by applicable law, our total liability to you for any claim arising out of or relating to these Terms or the Services shall not exceed the greater of (a) the total fees paid by you to ZorianPay in the twelve (12) months preceding the event giving rise to the claim, or (b) one hundred US dollars (USD 100).",
      "Nothing in these Terms is intended to exclude or limit any liability that cannot be excluded or limited under applicable law, including liability arising from gross negligence, willful misconduct, or fraud.",
    ],
  },
  {
    heading: "10. Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless ZorianPay and its officers, employees, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any applicable law or the rights of a third party.",
    ],
  },
  {
    heading: "11. Governing Law and Dispute Resolution",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws applicable to Shivacha Technologies LLC's jurisdiction of incorporation, without regard to conflict of laws principles, except where applicable consumer protection law in your jurisdiction of residence provides otherwise.",
      "In the event of a dispute arising out of or relating to these Terms or the Services, we encourage you to first contact our support team at support@zorianpay.com to seek an informal resolution. If a dispute cannot be resolved informally, the parties agree that any remaining dispute shall be resolved through binding arbitration or in the courts of competent jurisdiction, as further described in any supplemental dispute resolution terms made available to you, except where applicable law guarantees you the right to bring a claim in a particular forum.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    body: [
      "We may update these Terms from time to time to reflect changes in our Services, legal or regulatory requirements, or business practices. We will notify you of material changes through the platform, by email, or by other reasonable means, and will indicate the date the revised Terms become effective.",
      "Your continued use of the Services after the effective date of any updated Terms constitutes your acceptance of those Terms. If you do not agree to the updated Terms, you should stop using the Services and may close your account.",
    ],
  },
  {
    heading: "13. Contact Information",
    body: [
      "If you have any questions about these Terms, please contact us at legal@zorianpay.com, or write to us at Shivacha Technologies LLC, Attn: Legal Department.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <div className="mt-4">
              <Pill>Last updated: June 1, 2026</Pill>
            </div>
            <p className="mt-6 text-base leading-7 text-muted">
              Please read these Terms of Service carefully before using
              ZorianPay. They govern your relationship with Shivacha
              Technologies LLC and your use of our platform.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 30}>
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
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
