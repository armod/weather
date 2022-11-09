import React from 'react'
import { social } from './data'

function Card({
  id_stacji,
  stacja,
  data_pomiaru,
  godzina_pomiaru,
  temperatura,
  nrStation,
}) {
  // const { id_stacji, stacja, data_pomiaru, godzina_pomiaru, temperatura } = item
  // console.log(item)
  return (
    <article>
      <div className='header'>
        id:{id_stacji}
        {nrStation}
        <h1>
          {temperatura}
          &deg;C
        </h1>
        <h4>{stacja}</h4>
        <h5>
          data: {data_pomiaru}
          <span>|</span>
          godzina: {godzina_pomiaru}:00
        </h5>
      </div>
      <div className='img'>
        {/* start image */}
        image
        {/* end image */}
      </div>
      <div className='footer'>
        <ul>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url} target='blank'>
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default Card
