import styled from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 1px var(--black);
  padding: 5px;
  margin-top: 10vh;
  width: 300px;
  background: linear-gradient(var(--primary2), var(--primary1));
  color: var(--primary4);
  transition: all 0.5s ease-in;
  header {
    display: flex;
    justify-content: space-between;
    h5 {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
  main {
    margin: 10px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 4rem;
      font-weight: 400;
    }
    h2 {
      font-size: 2rem;
      order: -1;
    }
  }
  .other-params {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin: 0 auto;
    p {
      font-size: 0.75rem;
    }
    .weather-icon {
      margin: 0 auto;
      font-size: 6rem;
      svg {
        fill: var(--primary5);
      }
    }
    .wind-speed,
    .barometer,
    .humidity,
    .rain {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 300px;
      margin-bottom: 15px;
      padding: 3px;
      p {
        grid-column: 1/3;
        grid-row: 1;
        margin-left: 0px;
      }
      span {
        grid-row: 2;
      }
      .icon {
        margin: 0 auto;
        &:hover {
          transform: scale(1.2);
        }
      }
      .value {
        /* border: 1px solid blue; */
        margin: auto 0 auto auto;
        justify-content: flex-end;
      }
      .jednostka {
        margin: 0 auto;
        padding-top: 5px;
        /* border: 1px solid red; */
        grid-row: 2;
        font-weight: 100;
        font-size: 1.5rem;
      }
    }
  }
  footer {
    margin: 15px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        transition: all 0.3s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 1px 1px 3px 1px var(--black);
        width: 32px;
        height: 32px;
        a {
          margin-top: 4px;
          color: var(--primary5);
        }
        &:hover {
          scale: 1.3;
          box-shadow: 1px 1px 3px 1px var(--primary5);
          background: var(--primary1);
        }
      }
    }
  }

  @media screen and (min-width: 576px) {
    width: 360px;
    .wind-speed,
    .barometer,
    .humidity,
    .rain {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 320px;
      margin-bottom: 15px;
      padding: 3px;
      p {
        grid-column: 1/3;
        grid-row: 1;
        margin-left: 10px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 460px;
    transition: all 0.5s ease-in;
    main {
      h1 {
        font-size: 5rem;
      }
    }
  }
`

export default Wrapper
