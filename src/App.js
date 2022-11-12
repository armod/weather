import { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import Layout from './components/Layout'
import Loading from './Loading'
import Navbar from './Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import Footer from './components/Footer'

const url = 'https://danepubliczne.imgw.pl/api/data/synop'
const url_imgw =
  'https://forecastapi.imgw.pl/synop/get?t=96b33fe7mob8bcd03e6d318bda5493497'
const url_imgw2 =
  'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [nrStation, setNrStation] = useState('12415')
  const [isNavbarOpen, setIsNavbarOpen] = useState(true)
  const [pogoda, setPogoda] = useState([])

  const changeCity = (e) => {
    // e.preventDefault()
    const nr = e.target.value
    setNrStation(nr)
    setIsNavbarOpen(!isNavbarOpen)
  }

  const fetchWeather = async () => {
    // console.log('start fetching')
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

  const fetchIMGW = async () => {
    console.log('from imgw')
    try {
      const response = await fetch(url_imgw2)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
    console.log(isNavbarOpen)
  }

  useEffect(() => {
    // fetchIMGW()
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
