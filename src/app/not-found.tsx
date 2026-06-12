import { Container, Section, Eyebrow, Button, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg" />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <IconBadge className="h-14 w-14 rounded-2xl">
              <Compass className="h-6 w-6" />
            </IconBadge>
          </div>
          <div className="mt-6 flex justify-center">
            <Eyebrow>404 Error</Eyebrow>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            This page <span className="gold-gradient-text">doesn&apos;t exist</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            The page you&apos;re looking for may have been moved, renamed, or
            never existed. Let&apos;s get you back to somewhere useful.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
