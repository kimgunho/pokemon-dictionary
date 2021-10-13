import React from 'react'
import Search from './Search'
import Types from './Types'
import Pokemon from './Pokemon'

function List() {
  return (
    <div className="list">
      리스트페이지
      <Search />
      <Types />
      <Pokemon />
    </div>
  )
}

export default List
