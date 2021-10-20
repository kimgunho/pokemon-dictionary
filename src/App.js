import React from 'react'
import Detail from './View/Detail'
import List from './List'
import './css/style.css'
import { UserPokemonsProvider } from './Context/userPokemons'

function App() {
  return (
    <div className="App">
      <UserPokemonsProvider>
        <Detail />
        <List />
      </UserPokemonsProvider>
    </div>
  )
}

export default App
