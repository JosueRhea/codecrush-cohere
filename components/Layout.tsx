import Head from "next/head";
import { ReactNode } from "react";
import { EditorWrapper } from "./Editor";
import { AiFillGithub } from "react-icons/ai";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Head>
        <title>co:here codecrush</title>
      </Head>
      <main className="w-full max-w-5xl flex flex-col gap-y-4 mt-4 px-4">
        <header className="flex w-full justify-between items-center">
          <h1 className="text-3xl">
            <span className="underline decoration-orange-500">co:here</span>{" "}
            codecrush
          </h1>
          <a
            href="https://github.com/JosueRhea/codecrush-cohere"
            target="_blank"
            className="fill-zinc-600 hover:fill-zinc-900"
          >
            <AiFillGithub className="w-6 h-6 fill-inherit" />
          </a>
        </header>
        <EditorWrapper />
        <div className="markdown-body">{children}</div>
      </main>
    </div>
  );
};
