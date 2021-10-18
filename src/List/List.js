import React, { useEffect, useState } from 'react'
import Search from './Search'
import Types from './Types'
import Pokemon from './Pokemon'

function List() {
  const [pokemons, setPokemons] = useState()

  const fetchPokemons = async () => {
    const res = await fetch(
      //
      `https://pokeapi.co/api/v2/pokemon?limit=4&offset=100`,
    )
    const json = await res.json()
    const { results } = json

    const resultsData = await Promise.all(
      results.map(async ({ url }) => {
        const response = await fetch(url)
        const pokomon = await response.json()

        return {
          id: pokomon.id,
          name: pokomon.name,
          img: pokomon.sprites.other.dream_world.front_default,
        }
      }),
    )

    setPokemons(() => resultsData)
  }

  useEffect(() => fetchPokemons(), [])

  return (
    <div className="list">
      <Search />
      <Types />
      <Pokemon item={pokemons} />
    </div>
  )
}

export default List
