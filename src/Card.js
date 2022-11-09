import React from 'react'
import { social } from './data'

function Card({ stacja, data_pomiaru, godzina_pomiaru, temperatura }) {
  // const { id_stacji, stacja, data_pomiaru, temperautra } = weather
  return (
    <article>
      <div className='header'>
        <h1>
          {temperatura}
          &deg;C
        </h1>
        <h4>{stacja}</h4>
        <h5>
          {data_pomiaru}
          <span>|</span>
          {godzina_pomiaru}:00
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
