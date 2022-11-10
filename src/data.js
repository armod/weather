import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import {
  WiDaySunny,
  WiDayCloudy,
  WiStrongWind,
  WiRain,
  WiSnow,
  WiLightning,
  WiMoonWaningCrescent2,
  WiNa,
  WiThermometer,
  WiRaindrops,
  WiHumidity,
  WiCelsius,
  WiFahrenheit,
  WiBarometer,
  WiSmallCraftAdvisory,
} from 'react-icons/wi'

export const social = [
  {
    id: 1,
    name: 'Facebook',
    icon: <GrFacebook />,
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    name: 'Twitter',
    icon: <GrTwitter />,
    url: 'https://twitter.com/',
  },
  {
    id: 3,
    name: 'Facebook',
    icon: <GrInstagram />,
    url: 'https://www.instagram.com/',
  },
]

export const weatherIcons = [
  { id: 1, name: 'day suny', icon: <WiDaySunny /> },
  { id: 2, name: 'day cloudy', icon: <WiDayCloudy /> },
  { id: 3, name: 'wind', icon: <WiStrongWind /> },
  { id: 4, name: 'rain', icon: <WiRain /> },
  { id: 5, name: 'snow', icon: <WiSnow /> },
  { id: 6, name: 'lighting', icon: <WiLightning /> },
  { id: 7, name: 'moon', icon: <WiMoonWaningCrescent2 /> },
  { id: 8, name: 'n/a', icon: <WiNa /> },
  { id: 9, name: 'thermometer', icon: <WiThermometer /> },
  { id: 10, name: 'raindrops', icon: <WiRaindrops /> },
  { id: 11, name: 'humidity', icon: <WiHumidity /> },
  { id: 12, name: 'celsius', icon: <WiCelsius /> },
  { id: 13, name: 'fahrenheit', icon: <WiFahrenheit /> },
  { id: 14, name: 'barometer', icon: <WiBarometer /> },
  { id: 15, name: 'wind direction', icon: <WiSmallCraftAdvisory /> },
]
