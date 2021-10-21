import React from 'react'
import { UseUserPokemons } from '../Context/userPokemons'

const detail = () => {
  const { selected, collected, SetCollect } = UseUserPokemons()

  function overlapCheck() {
    const overlapName = collected.find(({ name }) => name === selected.name)
    if (!overlapName) {
      SetCollect((acc) => [
        ...acc,
        {
          id: selected.id,
          name: selected.name,
          img: selected.img,
          type: selected.type,
        },
      ])
      alert(`${selected.name}이 추가되었습니다.`)
    } else {
      const filterCollect = collected.filter(
        //
        ({ name }) => name !== selected.name,
      )
      SetCollect(filterCollect)
      alert(`${selected.name}이 삭제되었습니다.`)
    }
  }

  function LikeBtn() {
    const isLikePokemon = collected.find(({ name }) => {
      return name === selected.name
    })

    return (
      <button
        //
        className={`like ${!isLikePokemon ? 'on' : 'off'}`}
        onClick={overlapCheck}
      >
        {!isLikePokemon ? '❤️' : '💔'}
      </button>
    )
  }

  return (
    <div className="detail">
      {selected.id ? <LikeBtn /> : ''}
      <img src={selected.img} alt={selected.name} />
      <h2>
        {selected.name} {selected.type ? <span>{selected.type}</span> : ''}
      </h2>
    </div>
  )
}

export default detail
