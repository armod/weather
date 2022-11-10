import React from 'react'
import styled from 'styled-components/macro'

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.section`
  display: grid;
  margin: 0 auto;
  /* border: 1px solid black; */
  width: 90vw;
  .btn-toggle {
    width: 40px;
  }
`
