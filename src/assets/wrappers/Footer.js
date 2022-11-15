import styled from 'styled-components/macro'

const Wrapper = styled.footer`
  height: 3rem;
  display: none;
  margin: 0 auto;
  flex-direction: row; //column
  justify-content: center;
  align-items: center;
  background: var(--primary1);
  text-align: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 2px -2px 5px 1px #100;
  width: 90vw;
  span {
    color: var(--primary5);
  }
  h5,
  h6,
  a {
    color: var(--white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1300px;
  }
`
export default Wrapper
