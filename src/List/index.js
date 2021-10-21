import React, { useEffect, useState } from 'react'
import Search from './search'
import Types from './types'
import Pokemons from './pokemons'
import { UseUserPokemons } from '../Context//userPokemons'

const List = () => {
  const { pokemons, setPokemons } = UseUserPokemons()
  const [types, setTypes] = useState([])
  const fetchPokemons = async () => {
    const res = await fetch(
      //
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=200`,
    )
    const json = await res.json()
    const { results } = json

    const items = await Promise.all(
      results.map(async ({ url }) => {
        const res = await fetch(url)
        const json = await res.json()

        // 해결방안 강구.
        setTypes((acc) => [...acc, json.types[0].type.name])

        return {
          id: json.id,
          name: json.name,
          img: json.sprites.other.dream_world.front_default,
          type: json.types[0].type.name,
        }
      }),
    )

    setPokemons(items)
  }

  useEffect(() => fetchPokemons(), [])

  return (
    <div className="items">
      <Search />
      <Types alltypes={types} />
      <Pokemons
        //
        items={pokemons}
        handlePokemons={setPokemons}
        handlePokemonsReset={fetchPokemons}
      />
    </div>
  )
}

export default List
