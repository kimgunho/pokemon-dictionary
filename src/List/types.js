import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'
// 포켓몬 리스트가 변화함으로서 타입값도 함께 변동되는문제가 생김
const Types = ({ alltypes }) => {
  const { pokemons, setPokemons } = UseUserPokemons()
  const pokemonTypes = Array.from(new Set(alltypes))

  const handleTypePokemons = (e) => {
    // ul에 해야할까?..
    const selectType = e.target.innerText
    const filterSameTypes = pokemons.filter(({ type }) => type === selectType)
    setPokemons(filterSameTypes)
  }

  return (
    <ul className="types">
      {pokemonTypes.map((type, index) => {
        return (
          <li onClick={handleTypePokemons} key={index}>
            {type}
          </li>
        )
      })}
    </ul>
  )
}

export default Types
