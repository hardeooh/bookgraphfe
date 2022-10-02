import React from 'react'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() { 
  const [searchData, setSearchData] = useState('')
  const updateSearchData = (data) => {
    setSearchData(data)
  }
  console.log('parent component level', searchData);


  return (
   <div>
     <Navbar updateSearchData={updateSearchData}/>
     <Hero/>
   </div>
 );
}

