import React from 'react'
import styled from 'styled-components'

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
    position: absolute;
    border: 1px solid black;
    width: 70vw;
    padding: 15px;
    margin-top: -350px;
    transition: all 0.3s ease-in-out;
  }
  .show-navbar {
    margin-top: 0;
  }
  .btn {
    background: var(--primary1);
    color: var(--primary3);
    margin: 2px;
    padding: 3px;
    transition: all 0.3s ease-out;
    &:hover {
      background: var(--primary3);
      color: var(--primary1);
    }
  }
`
