import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const pokemons = ({ items, handlePokemons, defaultPokemons }) => {
  const { SetSelect, collected } = UseUserPokemons()

  return (
    <>
      <ul className="like-options">
        <li onClick={() => defaultPokemons()}>되돌리기</li>
        <li onClick={() => handlePokemons(collected)}>나의 포켓몬들</li>
      </ul>

      <ul className="pokemons">
        {items.map(({ id, name, img, type }) => (
          <li
            //
            key={id}
            className={type}
            onClick={() => SetSelect({ id, name, img, type })}
          >
            <img src={img} alt={name} />
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default pokemons
