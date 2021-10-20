import React from 'react'

const pokemons = ({ items }) => {
  return (
    <>
      <ul className="pokemons">
        {items.map(({ id, name, img, type }) => (
          <li key={id} className={type}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default pokemons
