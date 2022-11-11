import React from 'react'
import styled from 'styled-components/macro'

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`
