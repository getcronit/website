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
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <Field.Text
              as="h1"
              name="title"
              defaultValue="Article Title"
              className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
            />

            <Field.Text
              as="time"
              name="date"
              defaultValue={formatDate(new Date().toISOString().split("T")[0])}
              className="mt-6 text-sm text-neutral-950"
            />

            <Field.Text
              name="author.name"
              defaultValue="Author, CEO von Cronit"
              className="mt-6 text-sm font-semibold text-neutral-950"
            />
          </header>
        </FadeIn>

        <FadeIn>
          <div className="mt-24 sm:mt-32 lg:mt-40">
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

      {[].length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={[]}
        />
      )}

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Artikel",
};
