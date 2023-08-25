"use client";
import React, { useContext } from 'react'
import { archiveData } from "../data/archiveData"
import { ThemeContext } from '../ContextProvider';
import { BsArrowLeft } from "react-icons/bs"
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Archive() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} text-primary bg-secondary flex justify-center`}>

    <div className={`px-8 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24 space-y-16`}>
      <div className='flex flex-col space-y-2'>
        <Link href={'/'} className='w-fit relative flex items-center text-highlighter group'>
          <BsArrowLeft className="absolute right-[5.5rem] group-hover:right-[6rem] transition-all duration-200 delay-75" />
          <span className='font-medium ml-6'>Hamza Ali</span>
        </Link>
        <span className='text-5xl font-medium'>All Projects</span>
      </div>
      <table className='w-[80vw] sm:w-[70vw]'>
        <thead>
          <tr>
            <th className='text-start'>Year</th>
            <th className='text-start pl-10 sm:pl-0'>Project</th>
            <th>
              <div className='hidden lg:block text-start'>
                Built with
              </div>
            </th>
            <th className='hidden sm:block text-start'>Link</th>
          </tr>
        </thead>
        <tbody>
          {
            archiveData.map((row, index) => {
              return (
                <tr key={index} className='border-b-[0.1px]'>
                  <td className='text-faded py-4'>{row.year}</td>
                  <td className='sm:hidden font-medium py-4 pl-10 cursor-pointer hover:text-highlighter transition-colors duration-200 delay-75'><a href={row.link} target='_blank'>{row.title}</a></td>
                  <td className='w-fit hidden sm:block font-medium py-4 pl-0'>{row.title}</td>
                  <td >
                    <div className='hidden lg:block space-x-3'>
                      {row.builtWith.map((tech, tIndex) => {
                        return <span key={tIndex} className={`${theme === "dark" && "text-highlighter"} bg-fill px-3 py-1 rounded-full text-sm`}>{tech}</span>
                      })}
                    </div>
                  </td>
                  <td>
                    <a href={row.link} target='_blank' className='hidden sm:flex sm:items-center sm:space-x-2 cursor-pointer hover:text-highlighter transition-colors duration-200 delay-75 text-faded '>
                      <span>GitHub</span> <FaGithub />
                    </a>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
          </div>
  )
}
