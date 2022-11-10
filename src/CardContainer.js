import styled from 'styled-components/macro'
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

const Wrapper = styled.section`
  display: flex;
  border: 1px solid red;
  margin: 10px auto;
  li {
    list-style: none;
  }
`
