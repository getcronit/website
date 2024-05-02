import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { Field } from "@atsnek/jaen";
import { cn } from "@/lib/utils";

const MI = motion.img;

export function GrayscaleTransitionImage(props) {
  let ref = useRef<HTMLDivElement>(null);
  let { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start 65%", "end 35%"],
  });

  const value = useMotionValue(scrollYProgress);

  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  let filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className="group relative">
      <motion.div style={{ filter: filter }} {...props}>
        <Field.Image name="GrayscaleTransitionImage" objectFit="contain" />
      </motion.div>
      <div
        className={cn(
          props.className,
          "pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        )}
        aria-hidden="true"
      >
        <Field.Image name="GrayscaleTransitionImage" objectFit="contain" />
      </div>
    </div>
  );
}
