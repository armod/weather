import Wrapper from './assets/wrappers/CardContainer'
import Card from './Card'

const CardContainer = ({ weather, nrStation }) => {
  return (
    <Wrapper>
      {weather
        .filter((item) => item.id_stacji === nrStation)
        .map((filteredItem) => {
          return (
            <Card
              key={filteredItem.id_stacji}
              {...filteredItem}
              nrStation={nrStation}
            />
          )
        })}
    </Wrapper>
  )
}

export default CardContainer
