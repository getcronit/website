import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Offices } from "@/components/Offices";
import { PageIntro } from "@/components/PageIntro";
import { SocialMedia } from "@/components/SocialMedia";
import {
  Field,
  PageConfig,
  PageProps,
  useNotificationsContext,
} from "@atsnek/jaen";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, graphql } from "gatsby";
import { forwardRef, useEffect, useId } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

{
  /* <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem> */
}

const TextInput = forwardRef(({ label, ...props }, ref) => {
  let id = useId();

  return (
    <FormItem
      className="group relative z-0 transition-all focus-within:z-10"
      spacing={false}
    >
      <FormControl>
        <input
          ref={ref}
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
      </FormControl>

      <FormLabel
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}

        <FormMessage />
      </FormLabel>
    </FormItem>
  );
});

function RadioInput({ label, ...props }) {
  return (
    <div className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </div>
  );
}

import { z } from "zod";
import { Input } from "@/components/ui/input";
import validator from "validator";
import { sq } from "gatsby-jaen-mailpress";

const contactSchema = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  company: z.string().max(100),
  phone: z.string().refine(validator.isMobilePhone),
  message: z.string().max(100),
  budget: z.string().refine((value) => ["1", "2", "3", "4"].includes(value)),
});

function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  });

  const notify = useNotificationsContext();

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);

    const [data, errors] = await sq.mutate((m) =>
      m.sendTemplateMail({
        id: "e695e025-50a7-4648-94b3-0c77e70e2d3f",
        envelope: {
          replyTo: values.email,
        },
        values: {
          name: values.name,
          email: values.email,
          company: values.company,
          phone: values.phone,
          message: values.message,
          budget: values.budget,
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
    } else {
      notify.toast({
        title: "Nachricht gesendet",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
        status: "success",
      });
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({});

      document.forms.item(0).reset();
    }
  }, [form.formState.isSubmitSuccessful]);

  return (
    <FadeIn className="lg:order-last">
      <Form {...form}>
        <form name="contact" onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Anfragen
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <TextInput label="Name" {...field} autoComplete="name" />
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <TextInput
                    label="E-Mail"
                    type="email"
                    {...field}
                    autoComplete="email"
                  />
                );
              }}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => {
                return (
                  <TextInput
                    label="Unternehmen"
                    {...field}
                    autoComplete="organization"
                  />
                );
              }}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <TextInput
                    label="Telefonnummer"
                    type="tel"
                    {...field}
                    autoComplete="tel"
                  />
                );
              }}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => {
                return <TextInput label="Nachricht" {...field} />;
              }}
            />

            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <>
                        <FormControl>
                          <>
                            <RadioInput
                              label="Weniger als €20.000"
                              {...field}
                              value={"1"}
                            />
                            <RadioInput
                              label="€20.000 – €40.000"
                              {...field}
                              value={"2"}
                            />
                            <RadioInput
                              label="€40.000 – €80.000"
                              {...field}
                              value={"3"}
                            />
                            <RadioInput
                              label="Mehr als €80.000"
                              {...field}
                              value={"4"}
                            />
                          </>
                        </FormControl>

                        <FormMessage />
                      </>
                    )}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <Button type="submit" className="mt-10">
            Let’s work together
          </Button>

          <Button
            type="reset"
            className="mt-4"
            onClick={() => {
              alert("reset");
              form.reset();
            }}
          >
            Reset
          </Button>
        </form>
      </Form>
    </FadeIn>
  );
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Unsere Büros
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Bevorzugen Sie es, Dinge persönlich zu erledigen? Wir auch. Machen Sie
        einen Termin und besuchen Sie uns in unserem Büro.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Schreiben Sie uns
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Careers", "jobs@cronit.io"],
            ["Press", "press@cronit.io"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Folgen Sie uns
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <PageIntro eyebrow="Kontaktiere uns" title="Let’s work together">
        <p>
          Wir freuen uns darauf, von Ihnen zu hören. Von kleinen Projekten bis
          hin zu großen Herausforderungen –
          <strong className="font-semibold text-neutral-950">
            {" "}
            wir sind bereit
          </strong>
          .
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Contact",
};

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`;

export { Head } from "@atsnek/jaen";
