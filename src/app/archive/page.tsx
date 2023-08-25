"use client";
import { useContext } from 'react'
import { ThemeContext } from '../ContextProvider';
import Record from '../components/archive/Record';
import Title from '../components/archive/Title';

export default function Archive() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} text-primary bg-secondary flex justify-center`}>
      <div className={`px-8 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24 space-y-16`}>
        <Title />
        <Record theme={theme} />
      </div>
    </div>
  )
}
