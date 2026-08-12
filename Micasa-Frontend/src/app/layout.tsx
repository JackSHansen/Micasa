import type { Metadata } from "next";
import { createElement, type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Micasa",
  description: "Micasa frontend",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return createElement(
    "html",
    { lang: "da" },
    createElement("body", null, children)
  );
}
