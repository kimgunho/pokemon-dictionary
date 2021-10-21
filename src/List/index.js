import React, { useEffect } from 'react'
import Search from './search'
import Types from './types'
import Pokemons from './pokemons'
import { UseUserPokemons } from '../Context//userPokemons'

const List = () => {
  const { pokemons, SetPokemons } = UseUserPokemons()

  const fetchPokemons = async () => {
    const res = await fetch(
      //
      `https://pokeapi.co/api/v2/pokemon?limit=90&offset=200`,
    )
    const json = await res.json()
    const { results } = json

    const items = await Promise.all(
      results.map(async ({ url }) => {
        const res = await fetch(url)
        const json = await res.json()

        return {
          id: json.id,
          name: json.name,
          img: json.sprites.other.dream_world.front_default,
          type: json.types[0].type.name,
        }
      }),
    )

    SetPokemons(items)
  }

  useEffect(() => fetchPokemons(), [])

  return (
    <div className="items">
      <Search />
      <Types />
      <Pokemons
        //
        items={pokemons}
        handlePokemons={SetPokemons}
        defaultPokemons={fetchPokemons}
      />
    </div>
  )
}

export default List
