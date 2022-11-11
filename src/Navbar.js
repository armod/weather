import React from 'react'
import styled from 'styled-components/macro'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

const Navbar = ({ weather, changeCity, isNavbarOpen, toggleNavbar }) => {
  return (
    <Wrapper>
      <div
        className={
          isNavbarOpen ? 'navbar-container show-navbar' : 'navbar-container'
        }
      >
        <h4>Wybierz stację:</h4>
        <div className='navbar-content'>
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
        </div>
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
    background: linear-gradient(var(--primary4), var(--primary3));
    box-shadow: 4px 4px 10px 4px #222;
    padding: 15px 0 10px;
    transition: all 0.3s ease-in-out;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    .navbar-content {
      text-align: center;
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
    &:hover {
      scale: 1.2;
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
