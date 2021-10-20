import React, { useEffect, useState } from 'react'
import Search from './search'
import Types from './types'
import Pokemons from './pokemons'

const list = () => {
  const [pokemons, SetPokemons] = useState([])

  const fetchPokemons = async () => {
    const res = await fetch(
      //
      `https://pokeapi.co/api/v2/pokemon?limit=9&offset=200`,
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

    SetPokemons(() => items)
  }

  useEffect(() => fetchPokemons(), [])

  return (
    <div className="items">
      <Search />
      <Types />
      <Pokemons items={pokemons} />
    </div>
  )
}

export default list
