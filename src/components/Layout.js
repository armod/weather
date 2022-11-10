import React from 'react'
import styled from 'styled-components/macro'

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.section`
  display: grid;
  margin: 0 10px;
  border: 1px solid black;
  .btn-toggle {
    width: 40px;
  }
`
