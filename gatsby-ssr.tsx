import "./src/styles/globals.css";
import { Toaster } from "./src/components/ui/toaster";
import { GatsbySSR } from "gatsby";
import React from "react";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return (
    <>
      {element}
      <Toaster />
    </>
  );
};
