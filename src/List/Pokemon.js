import React from 'react'
import PropTypes from 'prop-types'

function Pokemon(props) {
  return (
    <ul className="pokemons-list">
      {props.allPokemons.forEach((pokemon) => (
        <li key={pokemon.id}>
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  )
}

Pokemon.propTypes = {
  allPokemons: PropTypes.array,
  key: PropTypes.number,
  name: PropTypes.string,
}

export default Pokemon
