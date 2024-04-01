import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GrayscaleTransitionImage } from "@/components/GrayscaleTransitionImage";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";

import { Field, PageConfig, PageProps } from "@atsnek/jaen";

import ballonsSvg from "../images/ballons-ballons.svg";
import { Blockquote, BlockquoteWithImage } from "@/components/Blockquote";
import { StatList, StatListItem } from "@/components/StatList";
import { TagList, TagListItem } from "@/components/TagList";
import { MdxField } from "@atsnek/jaen-fields-mdx";
import { formatDate } from "@/lib/utils";

const Page: React.FC<PageProps> = () => {
  let id = "1";
  let allCaseStudies = [
    {
      id: "1",
      href: "/work/ballons-and-ballons",
      client: "Ballons & Ballons",
      title: "Revolutionizing the way we think about balloons",
      description: "A new way to experience the joy of balloons.",
      summary: [
        "We worked with Phobia to create a new web app that would revolutionize the way people think about balloons. The result was a stunning success, and we couldn’t be happier with the outcome. We worked with Phobia to create a new web app that would revolutionize the way people think about balloons. The result was a stunning success, and we couldn’t be happier with the outcome. We worked with Phobia to create a new web app that would revolutionize the way people think about balloons. The result was a stunning success, and we couldn’t be happier with the outcome.",
        "The new web app has been a huge success, and we couldn't be happier with the outcome.",
      ],
      logo: ballonsSvg,
      date: "2022-01-01",
      service: "Web development",
      testimonial: {
        author: { name: "Phobia", role: "CEO" },
        content:
          "Cronit hat uns bei der Entwicklung unserer neuen Webapp hervorragend unterstützt. Die Zusammenarbeit war sehr professionell und das Ergebnis hat unsere Erwartungen übertroffen.",
      },
    },
  ];
  let caseStudy = allCaseStudies.find((caseStudy) => caseStudy.id === id);
  let moreCaseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.id !== id)
    .slice(0, 2);

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Case Study" title={caseStudy.title} centered>
            <Field.Text
              name="description"
              defaultValue="Case Study Description"
            />
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
                        <Field.Text
                          as="time"
                          name="date"
                          defaultValue={formatDate(
                            new Date().toISOString().split("T")[0]
                          )}
                        />
                        {/* <time dateTime={caseStudy.date.split("-")[0]}>
                          {caseStudy.date.split("-")[0]}
                        </time> */}
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <Field.Text
                        as="dd"
                        name="service"
                        defaultValue="Service A"
                      />
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
          title="More case studies"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Work",
};
