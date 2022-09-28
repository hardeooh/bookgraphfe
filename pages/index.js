import React from 'react'
import Link from 'next/link'
import { signin, signout, useSession } from 'next-auth/react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { SessionProvider } from "next-auth/react"

export default function Home () { 
  // const {data: session} = useSession();
  
  return (
   <div>
    {/* <SessionProvider session={session}> */}
     <Navbar/>
     <Hero/>
    {/* </SessionProvider> */}
   </div>
 );
}

