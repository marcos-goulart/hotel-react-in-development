import { HighlightHotel } from './HighlightHotel'
import { Main } from './styles'

export function Highlights() {
  const hotelExemple = {
    name: 'Hotel Califórnia',
    location: 'Porto Seguro/BA',
    description:
      'Hotel próximo de varias lindas praias, com várias atrações turísticas e comida típica da região da Bahia.',
    price: 669.9,
  }
  return (
    <Main>
      <div className='container'>
        <h1>Hotéis e Pousadas em destaques</h1>
        <HighlightHotel hotel={hotelExemple} />
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
