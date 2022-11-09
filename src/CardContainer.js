import React from 'react'
import Card from './Card'

const CardContainer = ({ weather }) => {
  return (
    <div>
      {weather.map((item) => {
        return <Card key={item.id_stacji} {...item} />
      })}
    </div>
  )
}

export default CardContainer
