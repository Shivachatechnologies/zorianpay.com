import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how ZorianPay, operated by Shivacha Technologies LLC, uses cookies and similar technologies and how you can manage your preferences.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Introduction",
    body: [
      "This Cookie Policy explains how Shivacha Technologies LLC, operating as ZorianPay (\"we\", \"us\", or \"our\"), uses cookies and similar tracking technologies when you visit our website or use our platform. It should be read alongside our Privacy Policy, which provides more general information about how we handle your personal information.",
    ],
  },
  {
    heading: "2. What Are Cookies?",
    body: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites function properly, to improve user experience, and to provide information to website owners about how their site is used. Similar technologies include local storage, pixels, and SDKs used within mobile applications, which we collectively refer to as \"cookies\" in this policy for simplicity.",
    ],
  },
  {
    heading: "3. Essential Cookies",
    body: [
      "Essential cookies are necessary for the core functionality of our website and platform to work. They enable functions such as securely logging into your account, maintaining your session as you navigate between pages, remembering items in a multi-step application process, and protecting against fraudulent activity.",
      "Because these cookies are strictly necessary to deliver the Services you have requested, they cannot be disabled through our cookie preference tools. However, you can block all cookies through your browser settings, which may prevent you from using certain features of the platform, such as logging in.",
    ],
  },
  {
    heading: "4. Analytics Cookies",
    body: [
      "Analytics cookies help us understand how visitors interact with our website and platform — for example, which pages are visited most often, how long users spend on a page, and whether users encounter errors. This information is generally aggregated and used to improve the design, content, and performance of our Services.",
      "We may use third-party analytics providers to collect and process this information on our behalf. Where required by applicable law, we will request your consent before placing analytics cookies, and you can withdraw that consent at any time through our cookie preference tools.",
    ],
  },
  {
    heading: "5. Preference Cookies",
    body: [
      "Preference cookies allow our website and platform to remember choices you have made, such as your preferred language, display currency, region, or accessibility settings, so that you do not need to re-select these options each time you visit. These cookies make your experience more convenient but are not strictly necessary for the Services to function.",
    ],
  },
  {
    heading: "6. Marketing and Advertising Cookies",
    body: [
      "On certain pages, we may use cookies to measure the effectiveness of our marketing campaigns or to deliver relevant content about ZorianPay's products on third-party platforms. These cookies may track your browsing activity across different websites and will only be set with your consent where required by applicable law.",
    ],
  },
  {
    heading: "7. Third-Party Cookies",
    body: [
      "Some cookies on our website are placed by third parties, such as analytics providers, customer support chat tools, and, where applicable, marketing platforms. These third parties may use the information collected through cookies for their own purposes, in accordance with their own privacy policies. We encourage you to review the privacy policies of these third parties for more information about their practices.",
    ],
  },
  {
    heading: "8. How Long Do Cookies Last?",
    body: [
      "Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period of time, or until you delete them manually, and are used to remember your preferences or settings across visits. The specific duration of each cookie depends on its purpose, ranging from a single browsing session to up to twenty-four months for certain preference and analytics cookies.",
    ],
  },
  {
    heading: "9. Managing Your Cookie Preferences",
    body: [
      "Where available, you can manage your cookie preferences using the cookie settings tool provided on our website, which allows you to enable or disable categories of non-essential cookies such as analytics, preference, and marketing cookies.",
      "You can also control cookies through your browser settings, including blocking all cookies, deleting existing cookies, or being notified when a new cookie is set. Please note that blocking or deleting cookies may affect the functionality of our website and platform, and some features may not work as intended if essential cookies are disabled.",
    ],
  },
  {
    heading: "10. Updates to This Cookie Policy",
    body: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies and similar technologies we use, or for legal or regulatory reasons. Any updates will be posted on this page with a revised \"Last updated\" date.",
    ],
  },
  {
    heading: "11. Contact Us",
    body: [
      "If you have any questions about this Cookie Policy or how we use cookies, please contact us at privacy@zorianpay.com.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: June 1, 2026</p>
          <p className="mt-6 text-base leading-7 text-muted">
            This Cookie Policy explains how ZorianPay uses cookies and
            similar technologies, and how you can manage your preferences.
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
