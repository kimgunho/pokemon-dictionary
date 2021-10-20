import React from 'react'
import PropTypes from 'prop-types'
import { useUserPokemons } from '../context/UserPokemon'

function Pokemon({ item }) {
  const { SetSelector } = useUserPokemons()
  return (
    <>
      <ul className="options">
        <li>처음상태로</li>
        <li>즐겨찾기 모음</li>
      </ul>
      <ul className="pokemons-list">
        {item &&
          item.map(({ id, name, img }) => (
            <li key={id} onClick={() => SetSelector({ id, name, img })}>
              <img src={img} alt={name} />
              <h2>{name}</h2>
            </li>
          ))}
      </ul>
    </>
  )
}

Pokemon.propTypes = {
  item: PropTypes.array,
}

export default Pokemon
