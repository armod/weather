import React from 'react'
import styled from 'styled-components/macro'
import { social, weatherIcons } from './data'

function Card({
  id_stacji,
  stacja,
  data_pomiaru,
  godzina_pomiaru,
  temperatura,
  nrStation,
}) {
  return (
    <Wrapper>
      <header>
        <h5>data: {data_pomiaru}</h5>
        <h5>godzina pomiaru: {godzina_pomiaru}:00</h5>
      </header>
      <main>
        <h1>
          {temperatura}
          &deg;C
        </h1>
        <h2>{weatherIcons[8].icon}</h2>
        <h4>{stacja}</h4>
      </main>
      <div className='other-params'>
        <div className='weather-icon'>{weatherIcons[1].icon}</div>
        <div className='wind-speed'>{weatherIcons[2].icon}</div>
        <div className='wind-direction'>{weatherIcons[14].icon}</div>
        <div className='humidity'>{weatherIcons[10].icon}</div>
        <div className='rain'>{weatherIcons[3].icon}</div>
      </div>
      <footer>
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
      </footer>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 1px var(--black);
  padding: 5px;
  margin: 5px;
  width: 360px;
  background: var(--primary2);
  color: var(--primary4);
  transition: all 0.5s ease-in linear;
  header {
    display: flex;
    justify-content: space-between;
    h5 {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
  main {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 4rem;
      font-weight: 400;
    }
    h2 {
      order: -1;
    }
  }
  .other-params {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    .weather-icon {
      margin: 0 auto;
      font-size: 6rem;
    }
  }
  footer {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 1px 1px 3px 1px var(--black);
        width: 32px;
        height: 32px;
        a {
          margin-top: 4px;
          color: var(--primary5);
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 460px;
    transition: all 0.5s ease-in linear;
    main {
      h1 {
        font-size: 5rem;
      }
    }
  }
`
