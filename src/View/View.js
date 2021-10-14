import React from 'react'
import DetailView from './DetailView'
import Likes from './Likes'
import PropTypes from 'prop-types'

function View(props) {
  return (
    <div className="view">
      <DetailView name={props.selectorName} />
      <Likes />
    </div>
  )
}

View.propTypes = {
  selectorName: PropTypes.string,
}

export default View
