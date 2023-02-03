import "@/styles/globals.css";
import "@/styles/markdown.css";
import "codecrush-core/dist/index.css";
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
