import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { SearchGamesContainer } from '../../AppGlobalStyles'
import { IoSearchCircleOutline } from "react-icons/io5";


const Search = ({ setSearch, isLoggedIn }) => {

  const [searchInput, setSearchInput] = useState('')

  const updateSearchInput = (e) => {
    const value = e.target.value
    setSearchInput(value)
    console.log(searchInput)
  }

  const enterSearcher = (e) => {
    const valueSearch = searchInput;
    if(e.key ==='Enter'){
      setSearch(valueSearch)
    }
  }

  const iconSearcher = () => {
    const valueSearch = searchInput;
    setSearch(valueSearch)
  }

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1300px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1300px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <SearchGamesContainer>
      <span>
        <label className='color-gray' htmlFor="search-id">Search Games</label>
        <input
          onChange={(e) => updateSearchInput(e)}
          onKeyDown={(e) => enterSearcher(e)}
          type="search"
          id="search-id"
          name="search"
          placeholder="Search"
          style={
            (matches)
            ? (
              (isLoggedIn)
              ? { width: '38%' }
              : { width: '48.5%' }
            )
            : { width: '100%' }
          }
        />
        <IoSearchCircleOutline
          onClick={iconSearcher}
          style={
            (matches)
            ? (
              (isLoggedIn)
              ? { left: '53%', top: '50%' }
              : { left: '63.5%', top: '50%'  }
            )
            : { 
                right: '10px',
                bottom: '14px'
              }
          }
        />
      </span>
    </SearchGamesContainer>
    
  )
}
export default Search