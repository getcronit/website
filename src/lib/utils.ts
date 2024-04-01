import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  console.log(dateString);
  let parts = dateString.split("-");
  let hasDay = parts.length > 2;

  return new Date(`${dateString}Z`).toLocaleDateString("de-AT", {
    day: hasDay ? "numeric" : undefined,
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
