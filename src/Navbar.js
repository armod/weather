import React from 'react'
import styled from 'styled-components'

const Navbar = ({ weather, changeCity }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Navbar
const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  border: 1px solid black;
  margin: 10px auto;
  width: 80vw;
  padding: 15px;
  justify-content: center;
  .btn {
    background: yellow;
  }
`
