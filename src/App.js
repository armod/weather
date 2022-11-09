import { useEffect, useState } from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import Loading from './Loading'
import Navbar from './Navbar'

const url = 'https://danepubliczne.imgw.pl/api/data/synop'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [nrStation, setNrStation] = useState(12415)

  const changeCity = (e) => {
    e.preventDefault()
    const nr = e.target.value
    setNrStation(nr)
  }

  const fetchWeather = async () => {
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

  useEffect(() => {
    setTimeout(() => {
      fetchWeather()
      // console.log('test:', weather[3])
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
    <main>
      <Navbar weather={weather} changeCity={changeCity} />
      {/* <Card weather={weather} index={index} /> */}
      <CardContainer weather={weather} nrStation={nrStation} />
    </main>
  )
}

export default App
