import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  /* border: 1px solid red; */
  margin: 0px auto;
  li {
    list-style: none;
  }
  @media screen and (min-width: 572) {
    margin: 15px auto;
  }
`

export default Wrapper
