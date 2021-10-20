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
    }
  }

  return (
    <div className="detail">
      {selected.id ? (
        <button className="like" onClick={overlapCheck}>
          ❤️
        </button>
      ) : (
        ''
      )}

      <img src={selected.img} alt={selected.name} />
      <h2>
        {selected.name} {selected.type ? <span>{selected.type}</span> : ''}
      </h2>
    </div>
  )
}

export default detail
