import React from 'react'
import styled from 'styled-components/macro'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import mapa from './assets/images/Polska_wojewodztwa.svg'
import Polska from './components/Polska'

const Navbar = ({ weather, changeCity, isNavbarOpen, toggleNavbar }) => {
  return (
    <Wrapper>
      <div
        className={
          isNavbarOpen ? 'navbar-container show-navbar' : 'navbar-container'
        }
      >
        <h4>Wybierz stację:</h4>
        {/* MAPA */}
        <div className='mapa'>
          {/* <img src={mapa} alt='mapa Polski' /> */}
          <Polska />
        </div>

        {/* <div className='navbar-content'>
          {weather.map((item) => {
            const { id_stacji, stacja } = item
            // console.log(item.stacja)
            return (
              <button
                key={id_stacji}
                onClick={changeCity}
                value={id_stacji}
                className='btn-station'
              >
                {stacja}
              </button>
            )
          })}
        </div> */}
        <button className='btn-navbar' onClick={toggleNavbar}>
          {isNavbarOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
        </button>
      </div>
    </Wrapper>
  )
}

export default Navbar
const Wrapper = styled.nav`
  position: absolute;
  margin: 0 auto;
  width: 90vw;
  top: -85%;
  left: 50%;
  transform: translate(-50%);
  .navbar-container {
    display: flex;
    height: 90vh;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    /* background: linear-gradient(var(--primary4), var(--primary3)); */
    background: var(--primary1);
    box-shadow: 4px 4px 10px 4px #222;
    padding: 15px 0 10px;
    transition: all 0.3s ease-in-out;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    .navbar-content {
      text-align: center;
    }
    .mapa {
      svg {
        * {
          transition: all 0.3s ease-out;
          /* animation: bounce 3s infinite; */
          fill: var(--primary5);
          fill-opacity: 1;
          &:hover {
            fill: green;
          }
        }
      }
    }
  }

  .btn-station {
    background: transparent;
    color: var(--primary1);
    margin: 2px;
    padding: 3px;
    font-size: 1.25rem;
    &:hover {
      background: var(--primary5);
      color: var(--black);
    }
  }

  .btn-navbar {
    background: transparent;
    border: transparent;
    font-size: 2rem;
    transition: all 0.3s ease-in-out;
    animation: btn-navbar-bounce 3s infinite;
    &:hover {
      scale: 1.2;
    }
  }
  @keyframes btn-navbar-bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 1;
    }
    40% {
      transform: translateY(2px);
      opacity: 0.4;
    }
    60% {
      transform: translateY(1px);
      opacity: 0.6;
    }
  }

  @media screen and (min-width: 576px) {
    .navbar-container {
      /* height: 62vh;
      margin-top: -56vh; */
    }
  }

  @media screen and (min-width: 992px) {
    .navbar-container {
      /* height: 39vh;
      margin-top: -33vh; */
    }
  }
  @media screen and (min-width: 1400px) {
    max-width: 1300px;
    .navbar-container {
      /* height: 39vh;
      margin-top: -33vh; */
    }
  }
  .show-navbar {
    margin-top: 0vh;
    transform: translate(0%, 93%);
  }
`
