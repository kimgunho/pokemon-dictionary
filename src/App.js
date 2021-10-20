import React from 'react'
import View from './View/View'
import List from './List/List'
import './css/style.css'
import { UserPokemonProvider } from './context/UserPokemon'

function App() {
  return (
    <UserPokemonProvider>
      <div className="App">
        <View />
        <List />
      </div>
    </UserPokemonProvider>
  )
}

export default App
