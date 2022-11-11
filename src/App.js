import { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import Layout from './components/Layout'
import Loading from './Loading'
import Navbar from './Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'

const url = 'https://danepubliczne.imgw.pl/api/data/synop'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [nrStation, setNrStation] = useState('12415')
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const changeCity = (e) => {
    // e.preventDefault()
    const nr = e.target.value
    setNrStation(nr)
    setIsNavbarOpen(!isNavbarOpen)
  }

  const fetchWeather = async () => {
    console.log('start fetching')
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setIsLoading(false)
      setWeather(data)
    } catch (error) {
      setIsLoading(false)
      console.log('Error:', error)
    }
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
    console.log(isNavbarOpen)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchWeather()
    }, 100)
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <main>
        <Layout>
          <Navbar
            weather={weather}
            changeCity={changeCity}
            isNavbarOpen={isNavbarOpen}
            toggleNavbar={toggleNavbar}
          />
          <CardContainer weather={weather} nrStation={nrStation} />
        </Layout>
      </main>

      {/* FOOTER */}
      <footer>
        <h5>
          &copy; {new Date().getFullYear()}
          <span>Maciej Miąso</span>
        </h5>
        <h5> All rigth reserved</h5>
        <p>
          dane pochodzą z:{' '}
          <a
            href='https://danepubliczne.imgw.pl/'
            target='_blank'
            rel='noopener noreferrer'
          >
            danepubliczne.imgw.pl
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
