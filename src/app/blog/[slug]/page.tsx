import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section, Card, Button, Eyebrow } from "@/components/ui";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";

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
          <Link
            href="/blog"
            className="text-sm font-semibold text-gold hover:text-gold-light"
          >
            &larr; Back to blog
          </Link>

          <div className="mt-6">
            <Eyebrow>{post.category}</Eyebrow>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-4 text-sm text-muted">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-12 space-y-8">
            {post.content.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="mb-3 text-2xl font-semibold text-foreground">
                    {section.heading}
                  </h2>
                )}
                <p className="text-base leading-7 text-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <Card className="mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Ready to get started with ZorianPay?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
              Open a multi-currency account, get a crypto card, and move money
              globally with blockchain-powered settlement.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact">Contact Us</Button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
