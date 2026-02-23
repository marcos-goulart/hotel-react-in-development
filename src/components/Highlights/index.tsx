import { HighlightHotel } from './HighlightHotel'
import { Main, HotelsContainer } from './styles'
import { hotelList } from './tempHotels'

export function Highlights() {
  return (
    <Main>
      <div className='container'>
        <h1>Hotéis e Pousadas em destaques</h1>
        <HotelsContainer>
          {hotelList.map((h, index) => (
            <HighlightHotel key={index} hotel={h.hotel} />
          ))}
        </HotelsContainer>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <a href='./all.html' className='btn btn-orange-outline ps-4 pe-4'>
              Visualizar Todos
            </a>
          </div>
        </div>
      </div>
    </Main>
  )
}
