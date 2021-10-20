import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const detail = () => {
  const { selected } = UseUserPokemons()
  return (
    <div className="detail">
      <img src={selected.img} alt={selected.name} />
      <h2>
        {selected.name} <span>{selected.type}</span>
      </h2>
    </div>
  )
}

export default detail
