import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const Detail = () => {
  const {
    selectedPokemon,
    collectPokemons,
    setCollectedPokemons,
    //
  } = UseUserPokemons()

  function handleCollectPokemon() {
    const overlapName = collectPokemons.find(
      //
      ({ name }) => name === selectedPokemon.name,
    )
    if (!overlapName) {
      setCollectedPokemons((acc) => [...acc, selectedPokemon])
      alert(`${selectedPokemon.name}이 추가되었습니다.`)
    } else {
      const filterCollect = collectPokemons.filter(
        //
        ({ name }) => name !== selectedPokemon.name,
      )
      setCollectedPokemons(filterCollect)
      alert(`${selectedPokemon.name}이 삭제되었습니다.`)
    }
  }

  function LikeBtn() {
    const isLikePokemon = collectPokemons.find(({ name }) => {
      return name === selectedPokemon.name
    })

    return (
      <button
        //
        className={`like ${!isLikePokemon ? 'on' : 'off'}`}
        onClick={handleCollectPokemon}
      >
        {!isLikePokemon ? '❤️' : '💔'}
      </button>
    )
  }

  return (
    <div className="detail">
      {selectedPokemon.id ? <LikeBtn /> : ''}
      <img src={selectedPokemon.img} alt={selectedPokemon.name} />
      <h2>
        {selectedPokemon.name}
        {selectedPokemon.type ? <span>{selectedPokemon.type}</span> : ''}
      </h2>
    </div>
  )
}

export default Detail
