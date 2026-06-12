import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/crypto-card", label: "Crypto Card" },
    { href: "/multi-currency-accounts", label: "Multi-Currency Accounts" },
    { href: "/security", label: "Security" },
    { href: "/pricing", label: "Pricing" },
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
              ZorianPay is a next-generation neobanking platform offering
              multi-currency accounts, blockchain-powered payments, and
              crypto card issuance for individuals and businesses worldwide.
            </p>
            <p className="mt-6 text-sm text-muted">
              Operated by{" "}
              <span className="font-semibold text-foreground">
                Shivacha Technologies LLC
              </span>
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
            Digital asset and crypto-linked card products carry risk, and
            values may fluctuate. Multi-currency account and crypto services
            may not be available in all regions and are subject to local
            regulations and ongoing licensing arrangements with regulated
            banking and payment partners. Cryptocurrency products are not
            covered by deposit insurance schemes.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} ZorianPay &mdash; Shivacha
              Technologies LLC. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Twitter / X", "LinkedIn", "Telegram"].map((social) => (
                <span
                  key={social}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
