import Wrapper from './assets/wrappers/Card'
import { social, weatherIcons } from './data'

function Card({
  id_stacji,
  stacja,
  data_pomiaru,
  godzina_pomiaru,
  temperatura,
  predkosc_wiatru,
  cisnienie,
  wilgotnosc_wzgledna,
  suma_opadu,
}) {
  return (
    <Wrapper>
      <header>
        <h5>data: {data_pomiaru}</h5>
        <h5>godzina pomiaru: {godzina_pomiaru}:00</h5>
      </header>
      <main>
        <h1>
          {temperatura}
          &deg;C
        </h1>
        <h2>{weatherIcons[8].icon}</h2>
        <h4>{stacja}</h4>
      </main>
      <div className='other-params'>
        <div className='weather-icon'>{weatherIcons[1].icon}</div>
        <div className='wind-speed'>
          <p>prędkość wiatru</p>
          <span className='icon'>{weatherIcons[2].icon}</span>
          <span className='value'>{predkosc_wiatru}</span>
          <span className='jednostka'>m/s</span>
        </div>
        <div className='barometer'>
          <p>ciśnienie</p>
          <span className='icon'>{weatherIcons[13].icon}</span>
          <span className='value'>
            {cisnienie !== null ? (
              cisnienie
            ) : (
              <p style={{ color: 'pink' }}>brak danych</p>
            )}
          </span>
          <span className='jednostka'> hPa</span>
        </div>
        <div className='humidity'>
          <p>wilgotnosc względna</p>
          <span className='icon'>{weatherIcons[10].icon}</span>
          <span className='value'>{wilgotnosc_wzgledna}</span>
          <span className='jednostka'> %</span>
        </div>
        <div className='rain'>
          <p>suma opadu</p>
          <span className='icon'>{weatherIcons[3].icon}</span>
          <span className='value'>{suma_opadu}</span>
          <span className='jednostka'> mm</span>
        </div>
      </div>
      <footer>
        <ul>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url} target='blank'>
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </footer>
    </Wrapper>
  )
}

export default Card
