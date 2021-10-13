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
      <Pokemon allPokemons={props.allPokemons} />
    </div>
  )
}

List.propTypes = {
  allPokemons: PropTypes.array,
}

export default List
