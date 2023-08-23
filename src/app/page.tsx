"use client";
import { useContext, useState } from "react";
import { About } from "./components/home/About";
import { Introduction } from "./components/home/Introduction";
import { Projects } from "./components/home/Projects";
import { ThemeContext } from "./ContextProvider";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [scrollState, setScrollState] = useState({
    aboutState: true,
    projectState: false
  });

  return (
    <main className={`${theme} px-6 py-10 md:px-10 md:py-14 lg:flex space-y-32 lg:space-y-0 text-primary bg-secondary`}>
      <Introduction scrollState={scrollState}/>
      <div className="space-y-32 lg:w-3/5">
        <About setScrollState={setScrollState}/>
        <Projects setScrollState={setScrollState}/>
      </div>
    </main>
  )
}
