import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="mt-6">
              <Eyebrow>{post.category}</Eyebrow>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </Reveal>

          <div className="mt-12 space-y-8">
            {post.content.map((section, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                {section.heading && (
                  <h2 className="mb-3 text-2xl font-semibold text-foreground">
                    {section.heading}
                  </h2>
                )}
                <p className="text-base leading-7 text-muted">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative mt-16 overflow-hidden rounded-3xl border border-gold/20 bg-surface px-8 py-16 text-center">
              <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Ready to get started with ZorianPay?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
                Open a multi-currency account, get a crypto card, and move money
                globally with blockchain-powered settlement.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
