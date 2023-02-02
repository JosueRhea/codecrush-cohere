import "@/styles/globals.css";
import "@/styles/markdown.css";
import "codecrush-core/dist/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
