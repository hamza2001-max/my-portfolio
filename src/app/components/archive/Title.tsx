import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from "react-icons/bs"

export default function Title() {
    return (
        <div className='flex flex-col space-y-2'>
            <Link href={'/'} className='w-fit relative flex items-center text-highlighter group'>
                <BsArrowLeft className="absolute right-[5.5rem] group-hover:right-[6rem] transition-all duration-200 delay-75" />
                <span className='font-medium ml-6'>Hamza Ali</span>
            </Link>
            <span className='text-5xl font-medium'>All Projects</span>
        </div>
    )
}
