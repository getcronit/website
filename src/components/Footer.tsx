import { Link } from "gatsby";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Logo } from "@/components/Logo";
import { socialMediaProfiles } from "@/components/SocialMedia";
import { useJaenPageIndex, useNotificationsContext } from "@atsnek/jaen";
import { useMemo } from "react";
import { sq } from "gatsby-jaen-mailpress";
import { NoSSR } from "./NoSSR";

const navigation = [
  {
    title: "Referenzen",
    links: [
      { title: "FamilyFund", href: "/work/family-fund" },
      { title: "Unseal", href: "/work/unseal" },
      { title: "Phobia", href: "/work/phobia" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { title: "Über uns", href: "/about" },
      { title: "Produktentwicklung", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Kontaktiere uns", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: socialMediaProfiles,
  },
];

function Navigation() {
  const workIndex = useJaenPageIndex({ jaenPageId: "JaenPage /work/" });

  console.log("workIndex", workIndex);

  const nav = useMemo(() => {
    const referenceNav = workIndex.childPages.slice(0, 3).map((childPage) => {
      return {
        title: childPage.jaenPageMetadata?.title,
        href: `/work/${childPage.slug}`,
      };
    });

    console.log("referenceNav", referenceNav);

    // prepand referenceNav to the first navigation item

    return [
      {
        title: "Referenzen",
        links: [
          ...referenceNav,
          {
            title: (
              <>
                Mehr <span aria-hidden="true">&rarr;</span>
              </>
            ),
            href: "/work",
          },
        ],
      },
      ...navigation.slice(1),
    ];
  }, [workIndex]);

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {nav.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    to={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

function NewsletterForm() {
  const notify = useNotificationsContext();

  return (
    <form
      className="max-w-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        const email = e.target[0].value;

        const [_, errors] = await sq.mutate((m) =>
          m.sendTemplateMail({
            id: "68c4e3ec-92f6-4c16-b997-efd81c95d8ec",
            values: {
              email,
            },
          })
        );

        if (errors) {
          notify.toast({
            title: "Nachricht konnte nicht gesendet werden",
            description: JSON.stringify(errors),
            status: "error",
          });

          console.error(errors);

          return;
        }

        notify.toast({
          title: "Nachricht gesendet",
          description: "Wir werden uns in Kürze bei Ihnen melden.",
          status: "success",
        });
      }}
    >
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Melden Sie sich für unseren Newsletter an
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Abonnieren Sie, um die neuesten Designnachrichten, Artikel, Ressourcen
        und Inspirationen zu erhalten.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="E-Mail Adresse"
          autoComplete="email"
          aria-label="E-Mail Adresse"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link to="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © cronit KG <NoSSR>{new Date().getFullYear()}</NoSSR>
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
