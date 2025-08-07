import { HighlightHotelInterface } from '../../../interfaces/HighlightHotel'
import { Container } from './styles'
export function HighlightHotel({ hotel }: HighlightHotelInterface) {
  return (
    <Container>
      <div className='row'>
        <div>
          <div className='card'>
            <div>
              <img
                src='./assets/img/hoteis/hotel-1.jpeg'
                alt={hotel.name}
                className='card-img-top'
              />
              <span>
                {hotel.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div>
              <h5 className='card-title mb-1'>{hotel.name}</h5>
              <p className='text-muted'>{hotel.location}</p>
              <p className='card-text'>{hotel.description}</p>
              <a href='./unavailable.html' className='btn btn-orange rounded-0 w-100'>
                Verificar disponibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
