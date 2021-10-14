import React from 'react'
import PropTypes from 'prop-types'

function Pokemon(props) {
  return (
    <ul className="pokemons-list">
      {props.pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <img src={pokemon.img} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <p>
            {pokemon.types.map((type, i) => (
              <span key={i}>{type}</span>
            ))}
          </p>
        </li>
      ))}
    </ul>
  )
}

Pokemon.propTypes = {
  pokemons: PropTypes.array,
}

export default Pokemon
