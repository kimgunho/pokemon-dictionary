import React, { createContext, useContext, useState } from 'react'

const UserPokemons = createContext()

export const UserPokemonProvider = ({ children }) => {
  const [selector, SetSelector] = useState({
    id: null,
    name: 'who',
    img: 'https://w7.pngwing.com/pngs/269/714/png-transparent-computer-icons-question-mark-button-question-mark-text-logo-number.png',
  })
  const [collected, SetCollect] = useState()

  return (
    <UserPokemons.Provider
      value={{ selector, SetSelector, collected, SetCollect }}
    >
      {children}
    </UserPokemons.Provider>
  )
}

export const useUserPokemons = () => {
  return useContext(UserPokemons)
}
