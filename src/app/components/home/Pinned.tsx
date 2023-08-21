import { PinnedCards } from "@/app/data/ProjectCards"
import Link from "next/link"

export const Pinned = () => {
  return (
    <div className="space-y-7">
      <span className='font-semibold'>Projects</span>
      {PinnedCards.map((card, cardIndex) => {
        return (
          <div className="flex flex-col space-y-3" key={cardIndex}>
            <span>{card.duration}</span>
            <Link href={card.link}><span>{card.title}</span></Link>
            <span>{card.description}</span>
            <div className="space-x-5">
              {card.techUsed.map((tech, TUIndex) => {
                return <span className="bg-fill text-fillText px-3 py-1 rounded-full text-sm" key={TUIndex}>{tech}</span>
              })}
            </div>
          </div>
        )
      })}
      <div className="text-fillText"><Link href={"/archive"}>Explore the archive</Link></div>
    </div>
  )
}
