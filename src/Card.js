import React from 'react'
import styled from 'styled-components/macro'
import { social } from './data'

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
        <h4>{stacja}</h4>
      </main>
      <div className='img'>
        {/* start image */}
        image
        {/* end image */}
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
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h1 {
      font-size: 5rem;
      font-weight: 400;
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
  }
`
