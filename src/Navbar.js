import Wrapper from './assets/wrappers/Navbar'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

const Navbar = ({ weather, changeCity, isNavbarOpen, toggleNavbar }) => {
  return (
    <Wrapper>
      <div
        className={
          isNavbarOpen ? 'navbar-container show-navbar' : 'navbar-container'
        }
      >
        <h4>Wybierz stację:</h4>
        <div className='navbar-content'>
          {weather.map((item) => {
            const { id_stacji, stacja } = item
            return (
              <button
                key={id_stacji}
                onClick={changeCity}
                value={id_stacji}
                className='btn-station'
              >
                {stacja}
              </button>
            )
          })}
        </div>
        <button className='btn-navbar' onClick={toggleNavbar}>
          {isNavbarOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
        </button>
      </div>
    </Wrapper>
  )
}

export default Navbar
