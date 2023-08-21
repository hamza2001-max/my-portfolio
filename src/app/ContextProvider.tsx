"use client";
import React, { createContext, useState } from 'react';

type TThemeContext = "light" | "dark";

interface IThemeContext {
    theme: "light" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<TThemeContext>>
}

const initialValues: IThemeContext = {
    theme: "dark",
    setTheme: () => { }
}

export const ThemeContext = createContext<IThemeContext>(initialValues);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<TThemeContext>("dark");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
