import clsx from "clsx";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GridPattern } from "@/components/GridPattern";
import { Field } from "@atsnek/jaen";

export function Testimonial({
  id,
  className,
}: {
  className?: string;
  id: string;
}) {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <Field.Text
                name={`${id}-text`}
                className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </blockquote>
            <figcaption className="mt-10">
              <Field.Image
                name={`${id}-image`}
                objectFit="contain"
                style={{ width: "100%" }}
                className="mx-auto !h-32"
                autoScale={true}
              />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
}
