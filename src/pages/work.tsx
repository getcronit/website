import { Link, graphql } from "gatsby";

import { BlockquoteWithoutImage } from "@/components/Blockquote";
import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { Testimonial } from "@/components/Testimonial";

import { formatDate } from "@/lib/utils";
import {
  Field,
  PageConfig,
  PageProps,
  useContentManagement,
  useJaenPageIndex,
  usePageContext,
} from "@atsnek/jaen";

import agtLogo from "../images/clients/agt_black.svg";
import andenkenSchenkenLogo from "../images/clients/andenken-schenken.png";
import ballonsLogo from "../images/clients/ballons.svg";
import citypensionLogo from "../images/clients/citypension.png";
import kanbonLogo from "../images/clients/kanbon.svg";
import pharmaziegasseLogo from "../images/clients/pharmaziegasse_black.png";
import univieLogo from "../images/clients/univie_black.svg";
import netsnekLogo from "../images/clients/netsnek_black.svg";

// function CaseStudyForm() {
//   const schema = z.object({
//     client: z.string(),
//     service: z.string(),
//     title: z.string(),
//     description: z.string(),
//     logo: z.any(),
//     date: z.date(),
//     testimonial: z.object({
//       author: z.string(),
//       content: z.string(),
//     }),
//   });

//   const form = useForm<z.infer<typeof schema>>({
//     resolver: zodResolver(schema),
//   });

//   console.log("form", form);

//   function onSubmit(values: z.infer<typeof schema>) {
//     console.log("Values", values);
//   }

//   // <FormField
//   //         control={form.control}
//   //         name="username"
//   //         render={({ field }) => (
//   //           <FormItem>
//   //             <FormLabel>Username</FormLabel>
//   //             <FormControl>
//   //               <Input placeholder="shadcn" {...field} />
//   //             </FormControl>
//   //             <FormDescription>
//   //               This is your public display name.
//   //             </FormDescription>
//   //             <FormMessage />
//   //           </FormItem>
//   //         )}
//   //       />

//   // return (
//   //   <Popover>
//   //     <PopoverTrigger>Test</PopoverTrigger>
//   //     <PopoverContent>
//   //       <Calendar
//   //         mode="single"
//   //         // selected={field.value}
//   //         // onSelect={field.onChange}
//   //         disabled={(date) =>
//   //           date > new Date() || date < new Date("1900-01-01")
//   //         }
//   //         initialFocus
//   //       />
//   //     </PopoverContent>
//   //   </Popover>
//   // );

//   const uploadRef = useRef<HTMLInputElement>(null);

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <FormField
//           control={form.control}
//           name="logo"
//           render={({ field }) => {
//             console.log("field.value", field);

//             return (
//               <FormItem>
//                 <FormControl>
//                   <div className="flex space-x-2">
//                     {/* <img
//                       src={field.value}
//                       alt="Logo Preview"
//                       width={1000}
//                       height={1000}
//                       className="shadow-md w-24 h-24 border rounded-md object-cover"
//                     /> */}

//                     <Avatar className="w-24 h-24">
//                       <AvatarImage src={field.value} />
//                       <AvatarFallback>CS</AvatarFallback>
//                     </Avatar>

//                     <div className="flex flex-col space-y-2">
//                       <FormLabel>Logo</FormLabel>
//                       <FormDescription>
//                         The logo of the client for this case study.
//                       </FormDescription>

//                       <div className="flex space-x-2">
//                         <FormButton
//                           variant="outline"
//                           type="button"
//                           onClick={() => {
//                             uploadRef.current?.click();
//                           }}
//                         >
//                           <PlusIcon className="w-4 h-4 mr-2" />
//                           Upload
//                         </FormButton>
//                         <Input
//                           {...field}
//                           hidden
//                           ref={(e) => {
//                             uploadRef.current = e;

//                             return field.ref(e);
//                           }}
//                           onChange={(e) => {
//                             const file = e.target.files?.[0];
//                             if (!file) return;

//                             const reader = new FileReader();
//                             reader.onload = (readerEvent) => {
//                               const dataUrl = readerEvent.target.result;
//                               field.onChange(dataUrl);
//                             };
//                             reader.readAsDataURL(file);
//                           }}
//                           value=""
//                           type="file"
//                         />
//                         <FormButton
//                           type="button"
//                           variant="outline"
//                           size="icon"
//                           onClick={(e) => {
//                             // Reset the input value
//                             uploadRef.current!.value = "";

//                             field.onChange(undefined);
//                           }}
//                         >
//                           <DeleteIcon className="w-4 h-4" />
//                         </FormButton>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div className="flex flex-col">
//                     {field.value?.src && (
//                       <img
//                         src={field.value.src}
//                         alt="Logo Preview"
//                         className="mb-4 max-w-full"
//                       />
//                     )}
//                     <Input
//                       placeholder="Upload Logo"
//                       type="file"
//                       accept="image/png, image/jpeg"
//                       {...field}
//                       value={field.value?.path}
//                       onChange={(e) => {
//                         const file = e.target.files[0];
//                         if (!file) return;

//                         const reader = new FileReader();
//                         reader.onload = (readerEvent) => {
//                           const dataUrl = readerEvent.target.result;
//                           field.onChange({
//                             fileName: file.name,
//                             src: dataUrl,
//                           });
//                         };
//                         reader.readAsDataURL(file);
//                       }}
//                     />
//                   </div> */}
//                 </FormControl>
//                 <FormDescription>
//                   The logo of the client for this case study.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             );
//           }}
//         />

//         <FormField
//           control={form.control}
//           name="client"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Client</FormLabel>
//               <FormControl>
//                 <Input placeholder="Phobia" {...field} />
//               </FormControl>
//               <FormDescription>
//                 The name of the client for this case study.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="service"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Service</FormLabel>
//               <FormControl>
//                 <Input placeholder="Web development" {...field} />
//               </FormControl>
//               <FormDescription>
//                 The service provided to the client.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Title</FormLabel>
//               <FormControl>
//                 <Input placeholder="New case study" {...field} />
//               </FormControl>
//               <FormDescription>
//                 A short, descriptive title for the case study.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="A new way to experience the joy of balloons."
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription>
//                 A brief description of the case study.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="date"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Date</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <FormButton
//                       onClick={() => console.log("clicked")}
//                       variant={"outline"}
//                       className={cn(
//                         "w-[240px] pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </FormButton>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//               <FormDescription>
//                 The date the case study was completed.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="testimonial.author"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Testimonial Author</FormLabel>
//               <FormControl>
//                 <Input placeholder="Phobia" {...field} />
//               </FormControl>
//               <FormDescription>The author of the testimonial.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="testimonial.content"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Testimonial Content</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Cronit has been a great partner in our journey."
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription>The content of the testimonial.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Submit</Button>

//         <Button type="reset" onClick={(e) => form.reset()}>
//           Reset
//         </Button>
//       </form>
//     </Form>
//   );
// }

function CaseStudies() {
  const page = usePageContext();

  console.log("page", page);

  const caseStudies = useJaenPageIndex({
    jaenPageId: "JaenPage /work/",
  });

  const status = useContentManagement();

  console.log("caseStudies", caseStudies);

  return (
    <Container className="py-40">
      <FadeIn>
        <div className="flex justify-between">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Case studies
          </h2>
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">New</Button>
            </DialogTrigger>
            <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
              <DialogHeader>
                <DialogTitle>Create a new case study</DialogTitle>
                <DialogDescription>
                  Fill out the form below to create a new case study.
                </DialogDescription>
              </DialogHeader>

              <CaseStudyForm />

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog> */}
        </div>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.childPages.map((caseStudy) =>
          caseStudies.withJaenPage(
            caseStudy.id,
            <Field.Image name="logo" />
            // <FadeIn key={caseStudy.client}>
            //   <article>
            //     <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
            //       <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
            //         <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
            //           <Field.Image
            //             name="logo"
            //             objectFit="contain"
            //             objectPosition="left"
            //             className="h-16 w-auto flex-none rounded-full"
            //             autoScale={false}
            //           />

            //           <Field.Text
            //             as="h3"
            //             name="client"
            //             className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8"
            //             defaultValue="Phobia"
            //           />
            //         </div>
            //         <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
            //           <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
            //             {caseStudy.jaenPageMetadata?.blogPost?.category}
            //           </p>

            //           <p className="text-sm text-neutral-950 lg:mt-2">
            //             <time
            //               dateTime={caseStudy.jaenPageMetadata?.blogPost?.date}
            //             >
            //               {formatDate(
            //                 (
            //                   caseStudy.jaenPageMetadata?.blogPost?.date || ""
            //                 ).split("T")[0]
            //               )}
            //             </time>
            //           </p>
            //         </div>
            //       </div>
            //       <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
            //         {/* <p className="font-display text-4xl font-medium text-neutral-950">
            //           <Link to={caseStudy.href}>{caseStudy.title}</Link>

            //         </p> */}

            //         <Link
            //           to={`/work/${caseStudy.slug}`}
            //           className="font-display text-4xl font-medium text-neutral-950"
            //         >
            //           {caseStudy.jaenPageMetadata?.title}
            //         </Link>

            //         <p className="mt-6 space-y-6 text-base text-neutral-600">
            //           {caseStudy.jaenPageMetadata?.description}
            //         </p>

            //         <div className="mt-8 flex">
            //           <Button
            //             href={`/work/${caseStudy.slug}`}
            //             aria-label={`Lesen: ${caseStudy.jaenFields?.["IMA:TextField"]?.["client"]?.value}`}
            //           >
            //             Lesen
            //           </Button>
            //         </div>
            //         <BlockquoteWithoutImage className="mt-12" />
            //       </div>
            //     </Border>
            //   </article>
            // </FadeIn>
          )
        )}
      </div>
    </Container>
  );
}

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
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Sie sind in guter Gesellschaft.
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group flex justify-center">
              <FadeIn className="overflow-hidden flex">
                <Border className="flex pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <img
                    src={logo}
                    alt={client}
                    className="object-contain w-full"
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <PageIntro
        eyebrow="Referenzen"
        title="Proven solutions for real-world problems."
      >
        <p>
          Wir sind Problemlöser. Wir glauben daran, dass jedes Problem eine
          Lösung hat, und wir sind leidenschaftlich daran interessiert, diese
          Lösungen für unsere Kunden zu finden.
        </p>
      </PageIntro>

      <CaseStudies />

      <Testimonial id="work" />

      <Clients />

      <ContactSection />
    </>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Work",
  icon: "FaBriefcase",
  menu: {
    type: "app",
    label: "Case Studies",
  },
  childTemplates: ["WorkTemplate"],
};

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: { eq: $jaenPageId }) {
      ...JaenPageData
      childPages {
        ...JaenPageData
      }
    }
  }
`;

export { Head } from "@atsnek/jaen";
