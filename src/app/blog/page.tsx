import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on multi-currency accounts, blockchain settlement, crypto cards, and digital wallet security from the ZorianPay team.",
};

export default function BlogPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Insights on global money, reimagined"
          description="Practical guides and perspectives on multi-currency banking, blockchain settlement, crypto cards, and digital security."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="flex h-full flex-col">
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-gold">
                  Read article &rarr;
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
