import { graphql } from "gatsby";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";

import { Field, PageConfig, PageProps, useJaenPageIndex } from "@atsnek/jaen";
import { FadeIn } from "@/components/FadeIn";
import { Border } from "@/components/Border";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/Button";

const Page: React.FC<PageProps> = () => {
  const blog = useJaenPageIndex({ jaenPageId: "JaenPage /blog/" });

  return (
    <>
      <PageIntro eyebrow="Blog" title="Die neuesten Artikel und News">
        <p>
          Bleibe auf dem Laufenden und erfahre mehr über unsere Projekte und
          Produkte.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {blog.childPages.map((page) =>
            blog.withJaenPage(
              page.id,
              <FadeIn key={page.id}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                          {page.jaenPageMetadata?.title}
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>

                          <dd
                            className="absolute left-0 top-0 text-sm text-neutral-950 lg:static"
                            defaultValue={formatDate(
                              (
                                page.jaenPageMetadata?.blogPost?.date || ""
                              ).split("T")[0]
                            )}
                          />
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                              <Field.Image
                                name="author.image"
                                className="h-12 w-12 object-cover grayscale"
                                autoScale={false}
                              />
                            </div>
                            <p className="text-sm text-neutral-950 font-semibold content-center">
                              {page.jaenPageMetadata?.blogPost?.author ||
                                "Author Name"}
                            </p>
                          </dd>
                        </dl>

                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {page.jaenPageMetadata?.description}
                        </p>

                        <Button
                          href={`/blog/${page.slug}`}
                          aria-label={`Read more: ${page.jaenPageMetadata?.title}`}
                          className="mt-8"
                        >
                          Lesen
                        </Button>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            )
          )}

          {/* {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))} */}
        </div>
      </Container>

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Blog",
  icon: "FaBlog",
  menu: {
    type: "app",
    label: "Blog",
  },
  childTemplates: ["BlogTemplate"],
};

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`;

export { Head } from "@atsnek/jaen";
