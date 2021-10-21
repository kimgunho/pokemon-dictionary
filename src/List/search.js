import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const Search = () => {
  const { pokemons, SetPokemons } = UseUserPokemons()
  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = document.getElementById('search-ipt')
    const searchFilterPokemon = pokemons.filter(
      //
      ({ name }) => name === searchValue.value,
    )
    SetPokemons(searchFilterPokemon)
    searchValue.value = ''
  }

  return (
    <form className="search-form">
      <input id="search-ipt" type="text" />
      <button onClick={handleSearch}>검색</button>
    </form>
  )
}

export default Search
