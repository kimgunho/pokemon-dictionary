import React, { useState, useEffect } from 'react'
import View from './View/View'
import List from './List/List'
import './css/style.css'

// 1. callPokemonApi 는 비동기 함수이다. 고로 앞에 await 을 붙여줘야한다. 그리고 console.log('end') 를 찍어야한다.
// 2. await json 의 json 은 비동기 값이 아니다 await 이 필요없다.
// 3. const pokemons = await results.map(() => { return pokemonJson} 과 같이 map 의 용도에 맞게 사용이 필요하다.

function App() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=8&offset=100'

  const callPokemonApi = async () => {
    const res = await fetch(URL)
    const json = await res.json()
    const { results } = json

    results.map(async ({ url }) => {
      const pokemonRes = await fetch(url)
      const pokemonJson = await pokemonRes.json()
      setPokemons((curList) => [
        ...curList,
        {
          id: pokemonJson.id,
          name: pokemonJson.name,
          img: pokemonJson.sprites.front_default,
          types: pokemonJson.types.map(({ type: { name } }) => name),
        },
      ])
    })

    setIsLoading(true)
  }

  useEffect(async () => {
    await callPokemonApi()
  }, [])
  return (
    <div className="App">
      {isLoading ? (
        <>
          <View />
          <List items={pokemons} />
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default App
