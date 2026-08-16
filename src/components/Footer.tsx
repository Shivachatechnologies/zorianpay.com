import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui";
import {
  XIcon,
  LinkedInIcon,
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
} from "./SocialIcons";

const socials = [
  { label: "X (Twitter)", href: "https://x.com/zorianpay", icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zorianpay", icon: LinkedInIcon },
  { label: "Telegram", href: "https://t.me/zorianpay", icon: TelegramIcon },
  { label: "Instagram", href: "https://www.instagram.com/zorianpay", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@zorianpay", icon: YouTubeIcon },
];

const footerLinks = {
  Platform: [
    { href: "/platform", label: "Platform Overview" },
    { href: "/multi-currency-accounts", label: "Settlement & Accounts" },
    { href: "/crypto-card", label: "Card Programs" },
    { href: "/security", label: "Security & Compliance" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              ZorianPay is building the financial infrastructure for the
              digital asset economy — connecting merchants, enterprises,
              banks, and digital assets through a secure, API-first platform
              with local currency settlement, enterprise APIs, and
              compliance by design.
            </p>
            <p className="mt-6 text-sm text-muted">
              Operated by{" "}
              <span className="font-semibold text-foreground">
                Shivacha Technologies LLC
              </span>
            </p>
            <p className="mt-2 text-sm text-muted">
              8 The Green, Suite B, Dover, DE 19901, USA
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-6 text-muted">
            ZorianPay is a brand operated by Shivacha Technologies LLC.
            ZorianPay is not a bank, and accounts are not bank deposit
            accounts. ZorianPay provides digital asset payment
            infrastructure, merchant settlement, crypto-linked card
            issuance, and multi-currency account services. Digital asset and
            crypto-linked card products carry risk, and values may
            fluctuate. Merchant settlement, multi-currency account, and
            digital asset services may not be available in all regions and
            are subject to local regulations and ongoing arrangements with
            regulated banking, payment, and compliance partners.
            Cryptocurrency products are not covered by deposit insurance
            schemes.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} ZorianPay &mdash; Shivacha
              Technologies LLC. All rights reserved.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold hover:shadow-[0_0_20px_-6px_rgba(240,185,11,0.5)]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
