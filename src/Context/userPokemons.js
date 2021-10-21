import React, { createContext, useContext, useState } from 'react'

const UserPokemonsContext = createContext()

export const UserPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState({
    id: null,
    name: 'what a pokemon of today?',
    img: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00261-020-02608-1/MediaObjects/261_2020_2608_Fig1_HTML.jpg',
    type: null,
  })

  const [collectPokemons, setCollectedPokemons] = useState([])
  return (
    <UserPokemonsContext.Provider
      //
      value={{
        selectedPokemon,
        setSelectedPokemon,
        collectPokemons,
        setCollectedPokemons,
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </UserPokemonsContext.Provider>
  )
}

export const UseUserPokemons = () => {
  return useContext(UserPokemonsContext)
}
