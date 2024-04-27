import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GrayscaleTransitionImage } from "@/components/GrayscaleTransitionImage";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";

import {
  Field,
  PageConfig,
  PageProps,
  useJaenPageIndex,
  usePage,
  withRedux,
} from "@atsnek/jaen";

import ballonsSvg from "../images/ballons-ballons.svg";
import { Blockquote, BlockquoteWithImage } from "@/components/Blockquote";
import { StatList, StatListItem } from "@/components/StatList";
import { TagList, TagListItem } from "@/components/TagList";
import { MdxField } from "@atsnek/jaen-fields-mdx";
import { formatDate } from "@/lib/utils";
import { useEffect, useMemo } from "react";

const Page: React.FC<PageProps> = withRedux(() => {
  const page = usePage({});

  console.log("apge", page);

  const index = useJaenPageIndex({ jaenPageId: "JaenPage /work/" });

  const moreCaseStudies = useMemo(() => {
    return index.childPages
      .filter((childPage) => childPage.id !== page.id)
      .slice(0, 2)
      .map((childPage) => {
        return {
          title: childPage.jaenPageMetadata?.title,
          date: childPage.jaenPageMetadata?.blogPost?.date || "",
          description: childPage.jaenPageMetadata?.description,
          href: `/work/${childPage.slug}`,
        };
      });
  }, [index]);

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow="Case Study"
            title={page.jaenPageMetadata?.title}
            centered
          >
            <p>{page.jaenPageMetadata?.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Kunde</dt>
                      <Field.Text
                        as="dd"
                        name="client"
                        defaultValue="Client A"
                      />
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Jahr</dt>
                      <dd>
                        <time
                          dateTime={page.jaenPageMetadata?.blogPost?.date || ""}
                        >
                          {page.jaenPageMetadata?.blogPost?.date?.split("-")[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{page.jaenPageMetadata?.blogPost?.category}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 typography">
              <MdxField
                components={{
                  TagList,
                  TagListItem,
                  Blockquote: BlockquoteWithImage,
                  StatList,
                  StatListItem,
                }}
              />
            </div>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Weitere Case Studies"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  );
});

export default Page;

export const pageConfig: PageConfig = {
  label: "Work",
};
