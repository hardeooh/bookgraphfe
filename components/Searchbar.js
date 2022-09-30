import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { useState, useEffect } from 'react'
import useDebounce from '../hooks/debounceHook'

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [handleSearch, setHandleSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const onSearchChange = (e) => {
    setHandleSearch(e.target.value)
  }

  const prepareSearchQuery = (query) => {
    const url = `http://openlibrary.org/search.json?${query}`
    return encodeURI(url)
  }

  const searchBookData = async () => {
    if(!searchQuery || searchQuery.trim()==="")
    return;

    setLoading(true)

    const URL = prepareSearchQuery(searchQuery)

    const response = fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchQuery(data)
      })

      if(response) {
        console.log(response,'getBookData')
      } 
  }

  useDebounce(searchQuery, 500, searchBookData)

  return (
  <div className="flex align-middle rounded-lg bg-gray-400 h-10 w-3/6">
    <MdOutlineSearch className="scale-160 mt-3 ml-3"/>
    <input type="text" onChange={onSearchChange} className="navbar__search ml-2"/>
  </div>
  )
}

// export async function getServerSideProps(context) {
//     const res = await fetch(`http://openlibrary.org/search.json?author=tolkien`)
//     const data = await res.json() 
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }

export default Searchbar