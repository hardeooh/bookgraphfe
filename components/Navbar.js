import React from 'react'
import Image from 'next/image'
import { MdOutlineSearch } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="dark:bg-black dark:border-gray-700 container flex flex-wrap justify-around items-center mx-auto">
      <div className="flex p-10 space-x-5 align-middle w-2/5">
        <a className="flex">
          <Image src="/BG_white.png" alt="Logo" width="40" height="40" className="object-contain h-10"/>
        </a>
        <div className="flex align-middle bg-gray-400 h-10 w-3/6">
          <MdOutlineSearch className="scale-160 mt-3 ml-3"/>
          <input type="text" className="navbar__search ml-2"/>
        </div>
      </div>
      <div className="flex space-x-5 align-middle">
        <a className="block text-center text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Books</a>
        <a className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lists</a>
        <a className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Members</a>      
        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2  px-4 rounded">
          Create Account
        </button>
      </div>
    </nav>
  )
}

export default Navbar