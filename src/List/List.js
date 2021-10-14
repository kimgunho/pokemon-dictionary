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
      <Pokemon
        pokemons={props.items}
        selectPokemon={props.selectPokemon}
        handleCollect={props.handleCollect}
      />
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array,
  selectPokemon: PropTypes.func,
  handleCollect: PropTypes.func,
}

export default List
