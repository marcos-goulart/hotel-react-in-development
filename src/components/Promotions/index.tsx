import { promotionList } from '../../mocks/promotions'
import { HotelCard } from '../HotelCard'
import { Main, PromotionsContainer, ViewAllButton, ViewAllWrapper } from './styles'

export function Promotions() {
  return (
    <Main>
      <div className='container'>
        <div className='title'>
          <h1>Nossos hoteis e pousadas em promocoes</h1>
        </div>
        <PromotionsContainer>
          {promotionList.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} hasDiscount />
          ))}
        </PromotionsContainer>
        <ViewAllWrapper>
          <ViewAllButton to='/'>Visualizar Todos</ViewAllButton>
        </ViewAllWrapper>
      </div>
    </Main>
  )
}
