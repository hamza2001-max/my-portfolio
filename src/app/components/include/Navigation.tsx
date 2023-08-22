"use client";
import React, { useEffect, useRef, useState } from 'react'

export default function Navigation({ title }: { title: string }) {
    const [value, setValue] = useState("relative");
    const divRef = useRef<HTMLDivElement>(null);

    const changeBackground = () => {
        if (!divRef.current) return;

        const aboutPosition = divRef.current.getBoundingClientRect().top;
        setValue(aboutPosition <= 0 ? "fixed top-0" : "relative");
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <div className={`${value} font-semibold`} ref={divRef}>{title}</div>
    )
}
