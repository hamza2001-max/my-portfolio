import { FaGithub } from 'react-icons/fa';
import { FiMail, FiSun } from 'react-icons/fi';
import { BiSolidMoon } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/app/ContextProvider';
import toast, { Toaster } from 'react-hot-toast';

export const Introduction = ({ scrollState }: {
  scrollState: {
    aboutState: boolean;
    projectState: boolean;
  }
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMailClick = () => {
    try {
      toast.success("The Email has been copied to the clipboard.", {
        style: {
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "1rem",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        },
        iconTheme: {
          primary: "black",
          secondary: "white"
        }
      });
      navigator.clipboard.writeText("ellawliet1007@gmail.com");
    } catch (error) {
      console.log(error);
      toast.error("An error occured.");
    }
  }

  const handleThemeChanger = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className='lg:w-2/5 '>
      <div className='flex flex-col space-y-3 lg:fixed lg:w-1/3 '>
        <span className='text-4xl font-semibold'>Hamza Ali | This page is underdevelopment</span>
        <span className={`text-xl ${theme === "dark" && "text-highlighter"}`}>Web Developer | Student</span>
        <span>Crafting online solutions with a blend of elegance and functionality.</span>
        <div className='hidden lg:flex lg:flex-col lg:space-y-3 lg:py-6'>
          <div className="flex items-center space-x-2">
            <div className={`${scrollState.aboutState ? "bg-highlighter w-16" : "bg-primary w-7"} h-[0.12rem] rounded-md transition-all duration-200 delay-75`}></div>
            <span className={`${scrollState.aboutState && "text-highlighter"}`}>PROJECTS</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`${scrollState.projectState ? "bg-highlighter w-16" : "bg-primary w-7"} h-[0.12rem] rounded-md transition-all duration-200 delay-75`}></div>
            <span className={`${scrollState.projectState && "text-highlighter"}`}>PROJECTS</span>
          </div>
        </div>
        <div className='text-2xl flex space-x-6 items-center'>
          <a href={"https://github.com/hamza2001-max"} target="_blank" className='cursor-pointer hover:text-highlighter transition-colors duration-200 delay-75'><FaGithub /></a>
          <FiMail onClick={handleMailClick} className='cursor-pointer hover:text-highlighter transition-colors duration-200 delay-75' />
          <span>|</span>
          <span onClick={handleThemeChanger} className='cursor-pointer hover:text-highlighter transition-colors duration-200 delay-75'>{theme === "dark" ? <FiSun /> : <BiSolidMoon />}</span>
          <Toaster />
        </div>
      </div>
    </div>
  )
}
