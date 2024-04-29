import clsx from "clsx";

import { Border } from "@/components/Border";
import { Field } from "@atsnek/jaen";

export function BlockquoteWithImage({
  id = "undefined",
  className,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <figure
      className={clsx(
        "grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16",
        className
      )}
    >
      <Field.Text
        as="blockquote"
        name={`${id}-text`}
        className="col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
        <Field.Image
          name={`${id}-image`}
          autoScale={true}
          sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
          className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
        />
      </div>

      <Field.Text
        as="figcaption"
        name={`${id}-author`}
        className="text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base"
        defaultValue="Nico Schett, CEO von Cronit"
      />
    </figure>
  );
}

export function BlockquoteWithoutImage({
  id,
  className,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <Border position="left" className={clsx("pl-8", className)}>
      <figure className="text-sm">
        <Field.Text
          as="blockquote"
          name={`${id}-text`}
          className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <Field.Text
          as="figcaption"
          name={`${id}-author`}
          defaultValue="Nico Schett, CEO von Cronit"
          className="mt-6 font-semibold text-neutral-950"
        />
      </figure>
    </Border>
  );
}
