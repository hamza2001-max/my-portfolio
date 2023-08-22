"use client";
import { FaGithub } from 'react-icons/fa';
import { FiMail, FiSun } from 'react-icons/fi';
import { BiSolidMoon } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { ThemeContext } from '@/app/ContextProvider';

export const Introduction = () => {
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
          // border: "1rem",
          // borderColor: "black"
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
    <div className='flex flex-col space-y-3'>
      <span className='text-4xl font-semibold'>Hamza Ali</span>
      <span className='text-xl text-fill-text'>Web Developer | Student</span>
      <span>Crafting online solutions with a blend of elegance and functionality.</span>
      <div className='text-2xl flex space-x-6 items-center'>
        <a href={"https://github.com/hamza2001-max"} target="_blank" className='cursor-pointer hover:text-fill-text transition-colors duration-200 delay-75'><FaGithub /></a>
        <FiMail onClick={handleMailClick} className='cursor-pointer hover:text-fill-text transition-colors duration-200 delay-75' />
        <span>|</span>
        <span onClick={handleThemeChanger} className='cursor-pointer hover:text-fill-text transition-colors duration-200 delay-75'>{theme === "dark" ? <FiSun /> : <BiSolidMoon />}</span>
        <Toaster />
      </div>
    </div>
  )
}
