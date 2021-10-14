import React from 'react'
import PropTypes from 'prop-types'

function Likes(props) {
  return (
    <div className="likes">
      <h2>즐겨찾기 모음 포켓몬</h2>
      <ul>
        {props.collector.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <button onClick={() => props.removeCollect(item.name)}>💔</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

Likes.propTypes = {
  collector: PropTypes.array,
  removeCollect: PropTypes.func,
}

export default Likes
