"use client";
import React, { useContext } from 'react'
import { archiveData } from "../data/archiveData"
import { ThemeContext } from '../ContextProvider';
import { BsArrowLeft } from "react-icons/bs"
import Link from 'next/link';

export default function Archive() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} text-primary bg-secondary px-8 py-14 space-y-16`}>
      <div className='flex flex-col space-y-2'>
        <Link href={'/'} className='w-fit relative flex items-center text-highlighter group'>
          <BsArrowLeft className="absolute right-[5.5rem] group-hover:right-[6rem] transition-all duration-200 delay-75" />
          <span className='font-medium ml-6'>Hamza Ali</span>
        </Link>
        <span className='text-5xl font-medium'>All Projects</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th className='text-start'>Project</th>
          </tr>
        </thead>
        <tbody>
          {
            archiveData.map((row, index) => {
              return (
                <tr key={index} className='border-b-[0.1px]'>
                  <td className='text-faded py-4'>{row.year}</td>
                  <td><a href={row.link} target='_blank' className='font-medium py-4 px-10 text-sta]'>{row.title}</a></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}
