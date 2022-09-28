import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { MdOutlineSearch } from 'react-icons/md'

const Navbar = () => {
  const {data:session} = useSession()
  if (session){
    return (
      <nav className="dark:bg-black dark:border-gray-700 container flex flex-wrap justify-around items-center mx-auto">
        <div className="flex p-10 space-x-5 align-middle w-2/5">
          <a className="flex">
            <Image src="/BG_white.png" alt="Logo" width="40" height="40" className="object-contain h-10"/>
          </a>
          <div className="flex align-middle rounded-lg bg-gray-400 h-10 w-3/6">
            <MdOutlineSearch className="scale-160 mt-3 ml-3"/>
            <input type="text" className="navbar__search ml-2"/>
          </div>
        </div>
        <div className="flex space-x-5">
          <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Books</a>
          <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Lists</a>
          <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Members</a>      
          <button onClick={() => signOut()} className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-3 rounded absolute left-72">
          Logout
          </button>
        </div>
      </nav>
    )
  }


  return (
    <nav className="dark:bg-black dark:border-gray-700 container flex flex-wrap justify-around items-center mx-auto">
      <div className="flex p-10 space-x-5 align-middle w-2/5">
        <a className="flex">
          <Image src="/BG_white.png" alt="Logo" width="40" height="40" className="object-contain h-10"/>
        </a>
        <div className="flex align-middle rounded-lg bg-gray-400 h-10 w-3/6">
          <MdOutlineSearch className="scale-160 mt-3 ml-3"/>
          <input type="text" className="navbar__search ml-2"/>
        </div>
      </div>
      <div className="flex space-x-5">
        <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Books</a>
        <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Lists</a>
        <a className="text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Members</a>      
        <button onClick={(e) => { 
          e.preventDefault()
          signIn()}}
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-3 rounded">
          Sign In
        </button>
        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2  px-3 rounded">
          Create Account
        </button>
      </div>
    </nav>
  )
}

export default Navbar