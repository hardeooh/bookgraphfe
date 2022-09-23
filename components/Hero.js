import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="container mx-auto h-96 relative">
      <div className="flex flex-col justify-start w-auto p-16">
        <h1 className="text-white px-3 py-5 rounded-md text-6xl font-medium">Track Books You Read</h1>
        <h1 className="text-white px-3 py-5 rounded-md text-6xl font-medium">Review Books You Like</h1>
        <h1 className="text-white px-3 py-5 rounded-md text-6xl font-medium">Share Books You Love</h1>
      </div>
      <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-3 rounded absolute left-72">
          Create Account
      </button>
      <img src="./bglogo_small2.jpg" className="absolute top-0 left-96 -z-10 mt-14 ml-20 w-9/12 h-9/12"></img>
    </main>
  )
}

export default Hero