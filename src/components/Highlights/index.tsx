import { hotelList } from '../../mocks/hotels'
import { HotelCard } from '../HotelCard'
import { Main, HotelsContainer, ViewAllButton, ViewAllWrapper } from './styles'

export function Highlights() {
  return (
    <Main>
      <div className='container'>
        <h1>Hoteis e pousadas em destaque</h1>
        <HotelsContainer>
          {hotelList.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </HotelsContainer>
        <ViewAllWrapper>
          <ViewAllButton to='/'>Visualizar Todos</ViewAllButton>
        </ViewAllWrapper>
      </div>
    </Main>
  )
}
