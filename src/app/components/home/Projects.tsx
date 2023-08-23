import { Dispatch, SetStateAction, useEffect } from "react";
import { PinnedCards } from "@/app/data/ProjectCards"
import { BiLink } from "react-icons/bi"
import Link from "next/link"
import Navigation from "../include/Navigation"
import useNavScroll from "@/app/hooks/useNavScroll"

export const Projects = ({ setScrollState }: {
  setScrollState: Dispatch<SetStateAction<{
    aboutState: boolean;
    projectState: boolean;
  }>>
}) => {
  const { isFixed, divRef } = useNavScroll();
  useEffect(() => {
    if (isFixed === true) {
        setScrollState({
            aboutState: false,
            projectState: true
        })
    }
}, [isFixed, setScrollState]);

  return (
    <div ref={divRef} className="space-y-12 lg:space-y-0">
      <Navigation title="PROJECTS" isFixed={isFixed} />
      {PinnedCards.map((card, cardIndex) => {
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
                  return <span className="bg-fill text-highlighter px-3 py-1 rounded-full text-sm" key={TUIndex}>{tech}</span>
                })}
              </div>
            </div>
          </div>
        )
      })}
      <div className="text-highlighter lg:pt-44"><Link href={"/archive"}>Explore the archive</Link></div>
    </div>
  )
}
