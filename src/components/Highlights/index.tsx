import { hotelList } from '../../mocks/hotels'
import { HighlightHotel } from './HighlightHotel'
import { Main, HotelsContainer, ViewAllButton, ViewAllWrapper } from './styles'

export function Highlights() {
  return (
    <Main>
      <div className='container'>
        <h1>Hoteis e pousadas em destaque</h1>
        <HotelsContainer>
          {hotelList.map((hotel) => (
            <HighlightHotel key={hotel.id} hotel={hotel} />
          ))}
        </HotelsContainer>
        <ViewAllWrapper>
          <ViewAllButton to='/'>Visualizar Todos</ViewAllButton>
        </ViewAllWrapper>
      </div>
    </Main>
  )
}
