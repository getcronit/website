import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageLinks } from "@/components/PageLinks";

import { PageConfig, PageProps, useJaenPageIndex, usePage } from "@atsnek/jaen";

import { BlockquoteWithImage } from "@/components/Blockquote";
import { StatList, StatListItem } from "@/components/StatList";
import { TagList, TagListItem } from "@/components/TagList";
import { formatDate } from "@/lib/utils";
import { MdxField } from "@atsnek/jaen-fields-mdx";
import { useEffect, useMemo } from "react";
import { graphql } from "gatsby";

const Page: React.FC<PageProps> = () => {
  const page = usePage({});
  const index = useJaenPageIndex({ jaenPageId: "JaenPage /blog/" });

  const moreBlogs = useMemo(() => {
    return index.childPages
      .filter((childPage) => childPage.id !== page.id)
      .slice(0, 2)
      .map((childPage) => {
        return {
          title: childPage.jaenPageMetadata?.title,
          date: childPage.jaenPageMetadata?.blogPost?.date || "",
          description: childPage.jaenPageMetadata?.description,
          href: `/blog/${childPage.slug}`,
        };
      });
  }, [index]);

  const date = page.jaenPageMetadata?.blogPost?.date || "";

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {page.jaenPageMetadata?.title}
            </h1>

            <time
              className="mt-6 text-sm text-neutral-950"
              defaultValue={formatDate(date.split("T")[0])}
            >
              {formatDate(date.split("T")[0])}
            </time>

            <p className="mt-6 max-w-3xl mx-auto text-xl text-neutral-600">
              {page.jaenPageMetadata?.blogPost?.author}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <div className="mt-24 sm:mt-32 lg:mt-40">
            <MdxField
              components={{
                TagList,
                TagListItem,
                Blockquote: ({ children }) => {
                  return (
                    <BlockquoteWithImage id={page.id}>
                      {children}
                    </BlockquoteWithImage>
                  );
                },
                StatList,
                StatListItem,
              }}
            />
          </div>
        </FadeIn>
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Mehr Artikel"
        pages={moreBlogs}
      />

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Artikel",
};

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage(filter: { id: { eq: "JaenPage /blog/" } }) {
      nodes {
        ...JaenPageData
        childPages {
          ...JaenPageData
        }
      }
    }
  }
`;

export { Head } from "@atsnek/jaen";
