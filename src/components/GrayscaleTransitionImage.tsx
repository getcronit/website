import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Field } from "@atsnek/jaen";

const MotionImage = motion("img");

export function GrayscaleTransitionImage(props) {
  let ref = useRef<HTMLDivElement>();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 35%"],
  });
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  let filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className="group relative">
      <Field.Image
        name="GrayscaleTransitionImage"
        className="w-full aspect-[16/10] object-cover grayscale hover:filter-none transition-all duration-300"
      />
      {/* <MotionImage alt="" style={{ filter }} {...props} /> */}
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100 bg-red-600"
        aria-hidden="true"
      ></div>
    </div>
  );
}
