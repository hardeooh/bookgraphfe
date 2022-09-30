import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { useState, useEffect } from 'react'
import useDebounce from '../hooks/debounceHook'

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState([])
  const [handleSearch, setHandleSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const onSearchChange = (e) => {
    setHandleSearch(e.target.value)
  }

  const prepareSearchQuery = (query) => {
    query = query.split(' ').join('+')
    const url = `http://openlibrary.org/search.json?q=${query}`
    return url
  }

  const searchBookData = async () => {
    if(!handleSearch || handleSearch.trim()==="")
    return;

    setLoading(true)

    const URL = prepareSearchQuery(handleSearch)

    const response = fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchResults(data)
      })

      if(response) {
        console.log(searchResults, 'getBookData')
      } 
  }

  useDebounce(handleSearch, 500, searchBookData)

  return (
  <div className="flex align-middle rounded-lg bg-gray-400 w-3/6">
    <MdOutlineSearch className="scale-160 mt-3 ml-3 z-1"/>
    <input type="text" onChange={onSearchChange} className="navbar__search ml-2"/>
  </div>
  )
}

export default Searchbar