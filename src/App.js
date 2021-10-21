import React from 'react'
import Detail from './View/Detail'
import List from './List'
import './css/style.css'
import { UserPokemonsProvider } from './Context/userPokemons'

function App() {
  return (
    <UserPokemonsProvider>
      <div className="App">
        <Detail />
        <List />
      </div>
    </UserPokemonsProvider>
  )
}

export default App
