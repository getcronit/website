import "./src/styles/globals.css";
import { Toaster } from "./src/components/ui/toaster";
import { GatsbyBrowser } from "gatsby";
import React from "react";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return (
    <>
      {element}
      <Toaster />
    </>
  );
};
