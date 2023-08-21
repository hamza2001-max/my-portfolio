"use client";
import { useContext } from "react";
import { About } from "./components/home/About";
import { Introduction } from "./components/home/Introduction";
import { Pinned } from "./components/home/Pinned";
import { ThemeContext } from "./ContextProvider";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme} px-6 py-10 space-y-16 text-primary bg-secondary`}>
      <Introduction />
      <About />
      <Pinned />
    </main>
  )
}
