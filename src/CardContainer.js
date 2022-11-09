import React from 'react'
import Card from './Card'

const CardContainer = ({ weather, nrStation }) => {
  return (
    <div>
      {weather
        .filter((item) => item.id_stacji === nrStation)
        .map((filteredItem) => {
          return <Card key={filteredItem.id_stacji} {...filteredItem} />
        })}
    </div>
  )
}

export default CardContainer
