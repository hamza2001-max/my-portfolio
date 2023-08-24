import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { projectData } from "@/app/data/projectData"
import { ThemeContext } from "@/app/ContextProvider";
import { BiLink } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import useNavScroll from "@/app/hooks/useNavScroll"
import Navigation from "../include/Navigation"
import Link from "next/link"

export const Projects = ({ setScrollState }: {
  setScrollState: Dispatch<SetStateAction<{
    aboutState: boolean;
    projectState: boolean;
  }>>
}) => {
  const { isFixed, divRef } = useNavScroll();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (isFixed === true) {
      setScrollState({
        aboutState: false,
        projectState: true
      })
    }
  }, [isFixed, setScrollState]);

  return (
    <div ref={divRef} className="space-y-12 lg:space-y-0 lg:pt-32">
      <Navigation title="PROJECTS" isFixed={isFixed} />
      {projectData.map((card, cardIndex) => {
        return (
          <div className="flex flex-col sm:flex-row py-5 sm:py-3" key={cardIndex}>
            <span className="text-faded sm:whitespace-nowrap sm:w-1/3">{card.duration}</span>
            <div className="space-y-3 sm:w-2/3">
              <a href={card.link} target={"_blank"} className="flex items-center mb-2 space-x-2 hover:text-highlighter transition-colors duration-200 delay-75">
                <span>{card.title}</span>
                <BiLink />
              </a>
              <span>{card.description}</span>
              <div className="space-x-5">
                {card.techUsed.map((tech, TUIndex) => {
                  return <span className={`${theme === "dark" && "text-highlighter"} bg-fill px-3 py-1 rounded-full text-sm`} key={TUIndex} >{tech}</span>
                })}
              </div>
            </div>
          </div>
        )
      })}
      <div className="font-medium lg:pt-16 flex items-center space-x-2 group w-fit cursor-pointer">
        <Link href={"/archive"}>Explore The Archive</Link>
        <BsArrowRight className="text-primary group-hover:ml-5 transition-all duration-200 delay-75" />
      </div>
    </div>
  )
}
