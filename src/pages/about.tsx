import { Border } from "@/components/Border";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import { PageConfig, PageProps } from "@atsnek/jaen";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Unsere Kultur"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          Wir bei Cronit glauben, dass eine positive Unternehmenskultur der
          Schlüssel zum Erfolg ist.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalität" invert>
            Loyalität ist unser Fundament - gegenüber Kunden, Partnern und
            Teammitgliedern. Gemeinsam schaffen wir Erfolge.
          </GridListItem>
          <GridListItem title="Vertrauen" invert>
            Offenheit und Ehrlichkeit bilden das Rückgrat unserer Beziehungen.
            Vertrauen fördert Innovation und Zusammenarbeit.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            Innovation ist unser Antrieb. Kreative Ideen und kontinuierliche
            Verbesserungen stehen im Mittelpunkt, um unseren Kunden stets das
            Beste zu bieten.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: "Geschäftsführung",
    people: [
      {
        name: "Nico Schett",
        role: "Founder / CEO",
        image: { src: "imageLeslieAlexander" },
      },
    ],
  },
  {
    title: "Team",
    people: [
      {
        name: "Norbert Tesch",
        role: "Lead-Entwickler",
        image: { src: "imageLeslieAlexander" },
      },
      {
        name: "Corina Wiedenhofer",
        role: "Executive-Assistent",
        image: { src: "imageChelseaHagon" },
      },
      {
        name: "Florian Kleber",
        role: "Backend-Entwickler",
        image: { src: "imageChelseaHagon" },
      },
      {
        name: "Sabine Sulzer",
        role: "Recruiting & Personalmarketing",
        image: { src: "imageKathrynMurphy" },
      },
      {
        name: "Jan Emig",
        role: "Frontend-Entwickler",
        image: { src: "imageEmmaDorsey" },
      },
      {
        name: "Simon Prast",
        role: "Vertrieb",
        image: { src: "imageLeonardKrasner" },
      },
      {
        name: "Christian Aichner",
        role: "Frontend-Entwickler",
        image: { src: "imageBlakeReid" },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <img
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <PageIntro eyebrow="Über uns" title="Our strength is collaboration">
        <p>
          Bei Cronit glauben wir fest daran, dass wahre Stärke in der
          Zusammenarbeit liegt, und daher entwickeln wir gemeinsam mit unseren
          Kunden innovative Lösungen.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Unsere Expertise erstreckt sich über eine Vielzahl von Branchen, von
            der Technologie bis hin zur Fertigung. Mit einem engagierten Team
            von Fachleuten arbeiten wir daran, die Herausforderungen unserer
            Kunden zu verstehen und maßgeschneiderte Lösungen anzubieten. Dabei
            setzen wir auf offene Kommunikation, Flexibilität und eine
            ausgeprägte Kundenorientierung.
          </p>
          <p>
            Durch unsere enge Zusammenarbeit streben wir danach, langfristige
            Partnerschaften aufzubauen, die auf Vertrauen, Respekt und
            gemeinsamen Erfolgen basieren. Willkommen bei Cronit – wo Innovation
            und Zusammenarbeit Hand in Hand gehen.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem label="A" value="1M" />
          <StatListItem label="Kunden" value="100" />
          <StatListItem label="Projekte" value="50" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Aus unserem Blog"
        intro="Unser Team erfahrener Designer und Entwickler hat nur eines im Sinn: an Ihren Ideen zu arbeiten, um ein Lächeln auf das Gesicht Ihrer Benutzer weltweit zu zaubern. Lesen Sie mehr über unsere Projekte und erfahren Sie, wie wir die digitale Welt verändern."
        pages={[]}
      />

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Über uns",
};
