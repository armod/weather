import styled from 'styled-components/macro'

const Loading = () => {
  return (
    <Wrapper>
      <div className='spinner'></div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.section`
  left: calc(50% - 10vw);
  margin: 0px auto;
  position: absolute;
  top: calc(50% - 10vw);
  .spinner {
    border-radius: 50%;
    background: repeating-conic-gradient(
      from 45deg at 50% 50%,
      var(--primary5) 0deg 10deg,
      transparent 10deg 20deg,
      var(--primary1) 20deg 30deg
    );
    width: 20vw;
    aspect-ratio: 1/1;
    animation: rotate 1.5s infinite ease-in-out;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`
