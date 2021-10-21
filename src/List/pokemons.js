import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const Pokemons = ({ items, handlePokemons, defaultPokemons }) => {
  const { SetselectedPokemon, collectPokemons } = UseUserPokemons()

  return (
    <>
      <ul className="like-options">
        <li onClick={() => defaultPokemons()}>되돌리기</li>
        <li onClick={() => handlePokemons(collectPokemons)}>나의 포켓몬들</li>
      </ul>

      <ul className="pokemons">
        {items.map(({ id, name, img, type }) => (
          <li
            //
            key={id}
            className={type}
            onClick={() => SetselectedPokemon({ id, name, img, type })}
          >
            <img src={img} alt={name} />
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pokemons
