import React from 'react'
import styled from 'styled-components'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

const Navbar = ({ weather, changeCity, isNavbarOpen }) => {
  return (
    <>
      <Wrapper>
        <div
          className={
            isNavbarOpen ? 'navbar-container show-navbar' : 'navbar-container'
          }
        >
          {weather.map((item) => {
            const { id_stacji, stacja } = item
            // console.log(item.stacja)
            return (
              <button
                key={id_stacji}
                onClick={changeCity}
                value={id_stacji}
                className='btn'
              >
                {stacja}
              </button>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Navbar
const Wrapper = styled.nav`
  display: flex;
  justify-content: center;

  .navbar-container {
    background: linear-gradient(var(--primary4), var(--primary5));
    box-shadow: 4px 4px 10px 4px #222;
    position: absolute;
    width: 100vw;
    height: 300px;
    padding: 10px;
    margin-top: -0px;
    transition: all 0.3s ease-in-out;
  }
  .show-navbar {
    margin-top: 10px;
  }
  .btn {
    background: transparent;
    border: transparent;
    color: var(--primary1);
    margin: 2px;
    padding: 3px;
    transition: all 0.3s ease-out;
    &:hover {
      color: var(--primary1);
      border-bottom: var(--primary1);
    }
  }
`
