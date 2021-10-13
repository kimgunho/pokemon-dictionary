import React from 'react'
import DetailView from './DetailView'
import Likes from './Likes'

function View() {
  return (
    <div className="view">
      뷰페이지
      <DetailView />
      <Likes />
    </div>
  )
}

export default View
