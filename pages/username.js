import React from 'react'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import Username from "../components/Username";

export default function Home() { 
  
  const [searchData, setSearchData] = useState('')
  const updateSearchData = (data) => {
    setSearchData(data)
  }
  console.log('parent component level', searchData);


  return (
   <div>
     <Username />
   </div>
 );
}

