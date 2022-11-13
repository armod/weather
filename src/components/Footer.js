import Wrapper from '../assets/wrappers/Footer'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Maciej Miąso</span>
      </h5>
      <h5> All rigth reserved</h5>

      <h6>
        dane pochodzą z:{' '}
        <a
          href='https://danepubliczne.imgw.pl/'
          target='_blank'
          rel='noopener noreferrer'
        >
          imgw.pl
        </a>
      </h6>
    </Wrapper>
  )
}

export default Footer
