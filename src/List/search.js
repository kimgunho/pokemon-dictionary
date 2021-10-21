import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const Search = () => {
  const { pokemons, setPokemons } = UseUserPokemons()
  const handleSearch = (e) => {
    e.preventDefault()
    const searchEl = document.getElementById('search-ipt')
    const searchFilterPokemon = pokemons.filter(
      //
      ({ name }) => name === searchEl.value,
    )
    if (searchFilterPokemon.length === 0) {
      alert(`${searchEl.value}의 대한 검색결과가 없습니다.`)
      searchEl.value = ''
      return
    }
    setPokemons(searchFilterPokemon)
    searchEl.value = ''
  }

  return (
    <form className="search-form">
      <input id="search-ipt" type="text" />
      <button onClick={handleSearch}>검색</button>
    </form>
  )
}

export default Search
