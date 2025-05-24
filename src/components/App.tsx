
import React from "react";
import Providers from "./Providers";

export default function App({ children }: React.PropsWithChildren) {
  return <Providers>{children}</Providers>;
}