"use client";

import React, { createContext, ReactNode } from "react";
import Craeft from "@craeft/engine/dist/craeft";

const craeftContext = {
  craeft: new Craeft(),
  setCraeft: (craeft: Craeft) => (craeftContext.craeft = craeft),
};

export const CraeftContext = createContext(craeftContext);

export default function CraeftProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  return <CraeftContext value={craeftContext}>{children}</CraeftContext>;
}
