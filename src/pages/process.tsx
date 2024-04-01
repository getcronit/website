import { PageConfig, PageProps } from "@atsnek/jaen";
import { BlockquoteWithoutImage } from "@/components/Blockquote";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { GridPattern } from "@/components/GridPattern";
import { List, ListItem } from "@/components/List";
import { PageIntro } from "@/components/PageIntro";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { TagList, TagListItem } from "@/components/TagList";
import imageLaptop from "../images/laptop.jpg";
import imageMeeting from "../images/meeting.jpg";
import imageWhiteboard from "../images/whiteboard.jpg";

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Wir arbeiten eng mit unseren Kunden zusammen, um ihre{" "}
          <strong className="font-semibold text-neutral-950">
            Bedürfnisse
          </strong>{" "}
          und Ziele zu verstehen. Dabei integrieren wir uns in ihren täglichen
          Betrieb, um zu verstehen, was ihr Geschäft antreibt.
        </p>
        <p>
          Unser Team von erfahrenen Beratern führt eingehende Gespräche mit den
          relevanten Stakeholdern, um Probleme in den aktuellen Abläufen zu
          erkennen und Anforderungen zu analysieren. Durch interne Analysen und
          umfassende Prozessuntersuchungen identifizieren wir potenzielle
          Schwachstellen und Chancen zur Optimierung.
        </p>
        <p>
          Sobald die vollständige Überprüfung abgeschlossen ist, berichten wir
          mit einem umfassenden{" "}
          <strong className="font-semibold text-neutral-950">Plan</strong> und,
          noch wichtiger, einem Budget zurück.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        In dieser Phase enthalten
      </h3>
      <TagList className="mt-4">
        <TagListItem>Prozessanalyse, Gespräche</TagListItem>
        <TagListItem>Schwachstellen, Chancen</TagListItem>
        <TagListItem>Bericht, Budget</TagListItem>
        <TagListItem>Bedarf, Ziele</TagListItem>
        <TagListItem>Integration, Optimierung</TagListItem>
      </TagList>
    </Section>
  );
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Basierend auf den Erkenntnissen der Entdeckungsphase entwickeln wir
          eine umfassende Roadmap für jedes Produkt und beginnen mit der
          Umsetzung. Die Roadmap ist ein sorgfältig ausgearbeitetes Konzept, das
          die technischen Anforderungen klar strukturiert und eine effiziente
          Projektdurchführung gewährleistet.
        </p>
        <p>
          Jeder Kunde wird einem dedizierten Berater zugewiesen, um die
          Kommunikationswege offen zu halten und den tatsächlichen Fortschritt
          des Projekts klar zu vermitteln. Diese Berater fungieren als
          Schnittstelle zwischen den Kundenanfragen und dem Entwicklungsteam,
          das intensiv daran arbeitet, maßgeschneiderte Lösungen zu entwickeln.
        </p>
        <p>
          Unsere Berater sind darauf trainiert, proaktiv und lösungsorientiert
          zu denken. Sie sind erfahrene Experten in ihrem Fachgebiet und
          verfügen über ein tiefes Verständnis der Bedürfnisse unserer Kunden.{" "}
        </p>
      </div>

      <BlockquoteWithoutImage id="build-quote" className="mt-12" />

      {/* <Blockquote
        author={{
          name: "Simon Prast",
          role: "CEO von Kanbon GmbH",
        }}
        className="mt-12"
      >
        Die Partnerschaft mit Cronit war herausragend. Durch ihre Arbeit zur
        Integration von E-Mail-Anbietern direkt in unserer Software war unser
        Kunde überglücklich."
      </Blockquote> */}
    </Section>
  );
}

function Deliver() {
  return (
    <Section title="Delivery" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Während der Delivery-Phase implementieren wir die fertigen Lösungen
          und bereiten sie für den Live-Betrieb vor. Diese Phase umfasst die
          Bereitstellung der finalen Produktversionen gemäß den spezifizierten
          Anforderungen und Standards.
        </p>
        <p>
          Unsere Expertenteams arbeiten daran, sicherzustellen, dass die
          gelieferten Produkte fehlerfrei sind und den höchsten
          Qualitätsstandards entsprechen. Wir überprüfen und testen gründlich
          jede Funktion, um eine reibungslose Benutzererfahrung sicherzustellen.
        </p>
        <p>
          Zusätzlich zur technischen Implementierung führen wir Schulungen und
          Wissensaustausch durch, um sicherzustellen, dass alle beteiligten
          Stakeholder das Produkt vollständig verstehen und nutzen können. Dies
          ermöglicht einen nahtlosen Übergang vom Entwicklungs- zum
          Produktionsbetrieb.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Enthalten in dieser Phase
      </h3>
      <List className="mt-8">
        <ListItem title="Integration und Bereitstellung">
          Wir integrieren die entwickelten Funktionen und setzen das System in
          einer produktionsnahen Umgebung auf, um sicherzustellen, dass alles
          reibungslos funktioniert, bevor es live geschaltet wird.
        </ListItem>
        <ListItem title="Qualitätssicherung">
          Unsere Qualitätssicherungsteams führen umfangreiche Tests durch, um
          sicherzustellen, dass das Produkt den höchsten Qualitätsstandards
          entspricht und eine optimale Leistung bietet.
        </ListItem>
        <ListItem title="Benutzerschulungen">
          Wir bieten Schulungen und Support, um sicherzustellen, dass alle
          Benutzer mit dem neuen System vertraut sind und es effektiv nutzen
          können.
        </ListItem>
      </List>
    </Section>
  );
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Unsere Werte"
        title="Responsibility and Collaboration"
      >
        <p>
          Wir sind verpflichtet, ethisch zu handeln und unsere Verantwortung
          gegenüber unseren Kunden und der Gesellschaft zu erfüllen.
          Zusammenarbeit steht im Mittelpunkt unserer Arbeitsweise.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Integrität">
            Wir handeln stets ehrlich, ethisch und integer, um das Vertrauen
            unserer Kunden zu verdienen und zu bewahren.
          </GridListItem>
          <GridListItem title="Exzellenz">
            Wir streben nach höchster Qualität in allem, was wir tun, und setzen
            uns kontinuierlich für Verbesserung und Innovation ein.
          </GridListItem>
          <GridListItem title="Respekt">
            Wir schätzen die Vielfalt unserer Mitarbeiter und Kunden und
            behandeln jeden mit Respekt und Würde.
          </GridListItem>
          <GridListItem title="Verantwortlichkeit">
            Wir übernehmen die Verantwortung für unsere Handlungen und
            Entscheidungen und stehen zu unseren Verpflichtungen gegenüber
            Kunden und Stakeholdern.
          </GridListItem>
          <GridListItem title="Kundenzufriedenheit">
            Die Zufriedenheit unserer Kunden steht im Mittelpunkt unseres
            Handelns. Wir streben danach, ihre Erwartungen zu übertreffen.
          </GridListItem>
          <GridListItem title="Teamarbeit">
            Wir fördern eine Kultur der Zusammenarbeit und des Miteinanders, um
            gemeinsam Höchstleistungen zu erzielen.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <PageIntro eyebrow="Unsere Produktentwicklung" title="How we work">
        <p>
          Wir glauben an eine agile und iterative Vorgehensweise, die es uns
          ermöglicht, schnell und effizient zu arbeiten. Wir arbeiten eng mit
          unseren Kunden zusammen, um ihre Anforderungen zu verstehen und
          innovative Lösungen zu entwickeln, die ihre Geschäftsziele
          unterstützen.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Contact",
};
