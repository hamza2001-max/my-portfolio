"use client";
import { useEffect, useRef, useState } from "react";

export default function useNavScroll() {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const { top, bottom } = divRef.current.getBoundingClientRect();
                setIsFixed(top <= 0 && bottom > 0 ? true : false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { divRef, isFixed };
}
