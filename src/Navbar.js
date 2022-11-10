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
  display: block;

  border: 1px solid black;
  margin: 10px auto;
  width: 80vw;
  padding: 15px;
  justify-content: center;
  .navbar-container {
    margin-top: -150px;
  }
  .show-navbar {
    margin-top: 0;
  }
  .btn {
    background: yellow;
  }
`
