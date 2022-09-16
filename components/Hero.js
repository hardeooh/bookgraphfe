import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className="container mx-auto h-96 relative">
      <div className="flex flex-col justify-start w-auto p-16">
        <h1 className="text-white px-3 py-6 rounded-md text-5xl font-medium">Track Books You Read</h1>
        <h1 className="text-white px-3 py-6 rounded-md text-5xl font-medium">Review Books You Like</h1>
        <h1 className="text-white px-3 py-6 rounded-md text-5xl font-medium">Share Books You Love</h1>
      </div>
      <img src="./BG_white.png" className="absolute top-0 left-80 -z-10"></img>
    </main>
  )
}

export default Hero