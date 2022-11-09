import { useEffect, useState } from 'react'
import CardContainer from './CardContainer'
import Loading from './Loading'
import Navbar from './Navbar'

const url = 'https://danepubliczne.imgw.pl/api/data/synop'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [nrStacji, setNrStacji] = useState(12415)

  const handleBtn = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const fetchWeather = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
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
      <Navbar weather={weather} handleBtn={handleBtn} />
      <CardContainer weather={weather} />
    </main>
  )
}

export default App
