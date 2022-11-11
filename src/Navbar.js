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
  /* position: sticky; */
  width: 80vw;
  .navbar-container {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(var(--primary4), var(--primary5));
    box-shadow: 4px 4px 10px 4px #222;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    /* transform-origin: bottom center;
    transform: translate(0, -80%); */
    margin-top: -300px;
  }

  .show-navbar {
    /* transform: translate(0, 0); */
    margin-top: 0px;
  }

  .btn-station {
    background: transparent;
    border: transparent;
    color: var(--primary1);
    margin: 2px;
    padding: 3px;
    &:hover {
      color: var(--black);
      border-bottom: 2px solid var(--primary1);
      margin-bottom: 0;
      padding-bottom: 0;
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
    /* height: 600px; */
    .navbar-container {
      height: 300px;
    }
  }

  @media screen and (min-width: 992px) {
    /* height: 600px; */
    .navbar-container {
      height: 200px;
    }
  }
`
