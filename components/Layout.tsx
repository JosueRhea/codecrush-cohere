import Head from "next/head";
import { ReactNode } from "react";
import { EditorWrapper } from "./Editor";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Head>
        <title>co:here codecrush</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <main className="w-full max-w-5xl flex flex-col gap-y-4 mt-4 px-4 pb-14">
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
        <div className="w-full text-center flex justify-center items-center gap-x-2">
          <img src="/me.jpg" className="w-7 h-7 rounded-full" alt="" />
          <p>Hecho con amor by <strong>JosueRhea</strong></p>
          <AiFillHeart className="w-6 h-6" />
        </div>
      </main>
    </div>
  );
};
