import React from 'react'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Home() { 
  
  const [searchData, setSearchData] = useState('')
  const updateSearchData = (data) => {
    setSearchData(data)
  }
  console.log('parent component level', searchData);


  return (
   <div>
     <Profile />
   </div>
 );
}

