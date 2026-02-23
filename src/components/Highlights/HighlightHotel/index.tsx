import type { HighlightHotelInterface } from '../../../interfaces/HighlightHotel'
import { Div } from './styles'
export function HighlightHotel({ hotel }: HighlightHotelInterface) {
  return (
    <Div className='beforeCard'>
      <div className='card'>
        <div className='imgDiv'>
          <img src={hotel.image} alt={hotel.name} className='card-img-top' />
          <span>{hotel.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className='cardBody'>
          <h5>{hotel.name}</h5>
          <p className='location'>{hotel.location}</p>
          <p className='description'>{hotel.description}</p>
          <button type='button'>Verificar disponibilidade</button>
        </div>
      </div>
    </Div>
  )
}
