import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Maciej Miąso</span>
      </h5>
      <h5> All rigth reserved</h5>

      <h5>
        dane pochodzą z:{' '}
        <a
          href='https://danepubliczne.imgw.pl/'
          target='_blank'
          rel='noopener noreferrer'
        >
          imgw.pl
        </a>
      </h5>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  /* position: absolute; */
  height: 4rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary1);
  text-align: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  width: 90vw;
  span {
    color: var(--primary5);
  }
  h5,
  a {
    color: var(--white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`
