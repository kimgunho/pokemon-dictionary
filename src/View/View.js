import React from 'react'
import { useUserPokemons } from '../context/UserPokemon'
function View() {
  const { selector } = useUserPokemons()
  return (
    <div className="view">
      <img src={selector.img} alt={selector.name} />
      <h2>{selector.name}</h2>
      <button>❤️</button>
    </div>
  )
}

export default View
