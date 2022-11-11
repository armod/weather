import { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import Layout from './components/Layout'
import Loading from './Loading'
import Navbar from './Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import Footer from './components/Footer'

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
      <Layout>
        <Navbar
          weather={weather}
          changeCity={changeCity}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <CardContainer weather={weather} nrStation={nrStation} />
        <Footer />
      </Layout>
    </>
  )
}

export default App
