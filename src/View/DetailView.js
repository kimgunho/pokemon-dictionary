import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function DetailView(props) {
  const [detailInfo, setDetailInfo] = useState({
    id: null,
    name: 'who',
    img: 'https://w7.pngwing.com/pngs/269/714/png-transparent-computer-icons-question-mark-button-question-mark-text-logo-number.png',
  })

  const callDetailPokemon = async () => {
    if (props.name !== undefined) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      const json = await res.json()
      setDetailInfo({
        id: json.id,
        name: json.name,
        img: json.sprites.front_default,
      })
    }
  }

  useEffect(() => callDetailPokemon(), [props.name])

  const viewTitle = () => {
    if (detailInfo.name === 'who') {
      return `what a pokemon of today?`
    } else {
      return `${detailInfo.name}'s info`
    }
  }
  return (
    <div className="detail">
      <h2>{viewTitle()}</h2>
      <img src={detailInfo.img} alt={detailInfo.name} />
      <h2>{detailInfo.name}</h2>
    </div>
  )
}

DetailView.propTypes = {
  name: PropTypes.string,
}

export default DetailView
