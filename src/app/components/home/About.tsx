import { useEffect, Dispatch, SetStateAction } from "react";
import Navigation from "../include/Navigation";
import useNavScroll from "@/app/hooks/useNavScroll";

export const About = ({ setScrollState }: {
    setScrollState: Dispatch<SetStateAction<{
        aboutState: boolean;
        projectState: boolean;
    }>>
}) => {
    const { isFixed, divRef } = useNavScroll();
    
    useEffect(() => {
        if (isFixed === true) {
            setScrollState({
                aboutState: true,
                projectState: false
            })
        }
    }, [isFixed, setScrollState]);

    return (
        <div ref={divRef} className="space-y-12 lg:space-y-0">
            <Navigation title="ABOUT" isFixed={isFixed} />
            <div className='space-y-4'>
                <p>A student and a developer with a keen focus on Web Development. My experience has equipped me with abilities to craft dynamic and user-centric web solutions. From seamless frontend interactions to robust backend functionality, I strive to create digital experiences that marry aesthetics with efficiency. My commitment to continuous learning drives me to adopt best practices. I am eager to contribute my skills and enthusiasm to all sorts of challenging projects.</p>
                <p>Currently, my primary area of emphasis revolves around proficiently leveraging the MERN stack along with Next.js to undertake ambitious projects within these domains.</p>
            </div>
        </div>
    )
}
