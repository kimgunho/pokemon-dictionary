import React, { useState, useEffect } from 'react'
import View from './View/View'
import List from './List/List'
import './css/style.css'

// 3. const pokemons = await results.map(() => { return pokemonJson} 과 같이 map 의 용도에 맞게 사용이 필요하다.

function App() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectorName, setSelectorName] = useState()
  const [collectPokemons, setCollectPokemons] = useState([])

  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=8&offset=100'

  const callPokemonApi = async () => {
    const res = await fetch(URL)
    const json = await res.json()
    const { results } = json

    results.map(async ({ url }) => {
      const pokemonRes = await fetch(url)
      const pokemonJson = await pokemonRes.json()
      // 빈 변수에 최종적으로 담겨 완성된 포켓몬 배열을 마지막에 setPokemons에 넣는부분에 대한 질문
      setPokemons((curList) => [
        ...curList,
        {
          id: pokemonJson.id,
          name: pokemonJson.name,
          img: pokemonJson.sprites.other.dream_world.front_default,
          types: pokemonJson.types.map(({ type: { name } }) => name),
        },
      ])
    })
    setIsLoading(true)
  }

  const getCollect = (name, id, img) => {
    const overlapName = collectPokemons.find((item) => item.name === name)
    if (!overlapName) {
      setCollectPokemons((curPokemon) => [
        ...curPokemon,
        {
          id,
          name,
          img,
        },
      ])
    }
  }

  const removeCollect = (name) => {
    const filter = collectPokemons.filter((item) => {
      return item.name !== name
    })
    setCollectPokemons(filter)
  }

  useEffect(() => {
    callPokemonApi()
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <>
          <View
            selectorName={selectorName}
            collect={collectPokemons}
            removeCollect={removeCollect}
          />
          <List //
            items={pokemons}
            selectPokemon={setSelectorName}
            handleCollect={getCollect}
          />
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default App
