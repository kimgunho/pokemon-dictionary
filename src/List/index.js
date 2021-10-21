import React from 'react'
import Search from './search'
import Types from './types'
import Pokemons from './pokemons'

const list = () => {
  return (
    <div className="items">
      <Search />
      <Types />
      <Pokemons />
    </div>
  )
}

export default list
