import React from 'react'
import Search from './Search'
import Types from './Types'
import Pokemon from './Pokemon'
import PropTypes from 'prop-types'

function List(props) {
  return (
    <div className="list">
      <Search />
      <Types />
      <Pokemon pokemons={props.items} selectPokemon={props.selectPokemon} />
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array,
  selectPokemon: PropTypes.func,
}

export default List
