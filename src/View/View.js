import React from 'react'
import DetailView from './DetailView'
import Likes from './Likes'
import PropTypes from 'prop-types'

function View(props) {
  return (
    <div className="view">
      <DetailView name={props.selectorName} />
      <Likes collector={props.collect} removeCollect={props.removeCollect} />
    </div>
  )
}

View.propTypes = {
  selectorName: PropTypes.string,
  collect: PropTypes.array,
  removeCollect: PropTypes.func,
}

export default View
