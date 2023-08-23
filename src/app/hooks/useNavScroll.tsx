"use client";
import { useEffect, useRef, useState } from "react";

export default function useNavScroll() {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [display, setDisplay] = useState<"fixed" | "relative">("relative");

    // const handleScroll = () => {
    //     if (divRef.current) {
    //         const { top, bottom } = divRef.current.getBoundingClientRect();
    //         setDisplay(top <= 0 && bottom >= 0 ? "fixed" : "relative");
    //     }
    // };

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const { top, bottom } = divRef.current.getBoundingClientRect();
                setDisplay(top <= 0 && bottom > 0 ? "fixed" : "relative");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { divRef, display };
}
