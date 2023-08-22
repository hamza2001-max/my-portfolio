import { PinnedCards } from "@/app/data/ProjectCards"
import Link from "next/link"
import { BiLink } from "react-icons/bi"

export const Projects = () => {
  return (
    <div>
      {/* <Navigation title="PROJECTS"/> */}
      <div className="space-y-7">
        <span className='font-semibold'>PROJECTS</span>
        {PinnedCards.map((card, cardIndex) => {
          return (
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row" key={cardIndex}>
              <span className="sm:whitespace-nowrap">{card.duration}</span>
              <div className="space-y-3">
                <a href={card.link} target={"_blank"} className="flex items-center mb-2 space-x-2 hover:text-fill-text transition-colors duration-200 delay-75">
                  <span>{card.title}</span>
                  <BiLink />
                </a>
                <span>{card.description}</span>
                <div className="space-x-5">
                  {card.techUsed.map((tech, TUIndex) => {
                    return <span className="bg-fill text-fill-text px-3 py-1 rounded-full text-sm" key={TUIndex}>{tech}</span>
                  })}
                </div>
              </div>
            </div>
          )
        })}
        <div className="text-fill-text"><Link href={"/archive"}>Explore the archive</Link></div>
      </div>
    </div>
  )
}
