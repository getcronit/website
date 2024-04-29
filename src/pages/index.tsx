import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Field, PageProps, useJaenPageIndex } from "@atsnek/jaen";
import { Link, graphql } from "gatsby";
import React from "react";

import servicesSvg from "../images/services.svg";
import ballonsSvg from "../images/ballons-ballons.svg";
import agtLogo from "../images/clients/agt.svg";
import univieLogo from "../images/clients/univie.svg";
import ballonsLogo from "../images/clients/ballons.svg";
import kanbonLogo from "../images/clients/kanbon.svg";
import pharmaziegasseLogo from "../images/clients/pharmaziegasse.png";
import andenkenSchenkenLogo from "../images/clients/andenken-schenken.png";
import citypensionLogo from "../images/clients/citypension.png";
import netsnekLogo from "../images/clients/netsnek.svg";
import { Testimonial } from "@/components/Testimonial";

const clients = [
  ["AGT Gun Trade", agtLogo],
  ["Universität Wien", univieLogo],
  ["Ballons & Ballons", ballonsLogo],
  ["Kanbon", kanbonLogo],
  ["Pharmaziegasse", pharmaziegasseLogo],
  ["Andenken Schenken", andenkenSchenkenLogo],
  ["City Pension", citypensionLogo],
  ["Netsnek", netsnekLogo],
];

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Unsere Zusammenarbeit erstreckt sich über einige bemerkenswerte
            Unternehmen.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex justify-center">
                <FadeIn className="flex">
                  <img
                    src={logo}
                    alt={client}
                    className="object-contain w-full"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies() {
  const caseStudies = useJaenPageIndex({ jaenPageId: "JaenPage /work/" });

  console.log("caseStudies", caseStudies);

  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Wir glauben, dass Technologie die Antwort auf die größten
          Herausforderungen der Welt ist, aber sie kann auch neue
          Herausforderungen schaffen. Bei Cronit entwirren wir diese
          Komplexitäten, damit Sie sich auf das konzentrieren können, was
          wirklich zählt:
          <span className="font-semibold"> Ihre Ziele zu erreichen</span>.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.childPages.map((caseStudy) =>
            caseStudies.withJaenPage(
              caseStudy.id,
              <FadeIn key={caseStudy.id} className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                    <Link to={`/work/${caseStudy.slug}`}>
                      <span className="absolute inset-0 rounded-3xl" />
                      <Field.Image
                        objectFit="contain"
                        name="logo"
                        objectPosition="left"
                        className="!h-16 w-auto"
                        autoScale={true}
                      />
                    </Link>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <Field.Text
                      as={"time"}
                      name="date"
                      className="font-semibold"
                    />
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Case study</span>
                  </p>

                  <Field.Text
                    name="title"
                    className="mt-6 font-display text-2xl font-semibold text-neutral-950"
                  />
                  <Field.Text
                    name="description"
                    className="mt-4 text-base text-neutral-600"
                  />
                </article>
              </FadeIn>
            )
          )}

          {/* {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link to={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))} */}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Tailored solutions for your business needs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Bei Cronit bieten wir eine breite Palette von Dienstleistungen an, die
          auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={servicesSvg}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI Assistants & Business Integration">
              Wir entwickeln intelligente Assistenzsysteme und integrieren sie
              in Ihre Geschäftsprozesse.
            </ListItem>
            <ListItem title="Web development">
              Wir kreieren moderne Websites und Webanwendungen, die exakt auf
              Ihre individuellen Bedürfnisse zugeschnitten sind.
            </ListItem>
            <ListItem title="Backend development">
              Unsere maßgeschneiderten Backend-Lösungen werden speziell auf Ihre
              Anforderungen abgestimmt und basieren auf dem Framework{" "}
              <Link to="/jaen" className="underline">
                Pylon
              </Link>
              .
            </ListItem>
            <ListItem title="Content management">
              Mit{" "}
              <Link to="/jaen" className="underline">
                Jaen
              </Link>{" "}
              als Content-Management-System ermöglichen wir es Ihnen, Ihre
              Website eigenständig zu verwalten.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Outstanding Digital Products for the Modern World
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Cronit ist mit seinen Produkten und Dienstleistungen ein führender
            Anbieter von digitalen Lösungen für Unternehmen. Wir helfen Ihnen
            dabei, Ihre digitale Präsenz zu stärken und Ihre Geschäftsprozesse
            zu optimieren.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: ballonsSvg }}
      >
        Cronit hat uns bei der Entwicklung unserer neuen Webapp hervorragend
        unterstützt. Die Zusammenarbeit war sehr professionell und das Ergebnis
        hat unsere Erwartungen übertroffen.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage(filter: { id: { eq: "JaenPage /work/" } }) {
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
