import React, { createContext } from 'react'

export const selectorPokemonContexts = createContext()

export const pokemonDetail = ({ children }) => {
  const pokemon = {
    name: 'monster',
    id: 0,
  }

  return (
    <selectorPokemonContexts.Provider value={pokemon}>
      {children}
    </selectorPokemonContexts.Provider>
  )
}

export default pokemonDetail
