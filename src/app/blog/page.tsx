import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Card, Pill } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on multi-currency accounts, blockchain settlement, crypto cards, and digital wallet security from the ZorianPay team.",
};

export default function BlogPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Insights on global money, reimagined"
            description="Practical guides and perspectives on multi-currency banking, blockchain settlement, crypto cards, and digital security."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="flex h-full flex-col">
                  <Pill>{post.category}</Pill>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
