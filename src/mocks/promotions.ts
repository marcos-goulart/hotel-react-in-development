import type { Hotel } from '../interfaces/Hotel'
import hotel4 from '../img/hoteis/hotel-4.jpeg'
import hotel5 from '../img/hoteis/hotel-5.jpeg'
import hotel6 from '../img/hoteis/hotel-6.jpg'

export const promotionList: Hotel[] = [
  {
    id: 'promo-hotel-4',
    image: hotel4,
    name: 'Hotel Jardim Colorado',
    location: 'Copacabana/RJ',
    description: 'Hotel proximo da praia com cafe da manha e area de lazer completa.',
    price: 350.0,
    discountPrice: 299.0,
  },
  {
    id: 'promo-hotel-5',
    image: hotel5,
    name: 'Hotel Resplendor',
    location: 'Vitoria/ES',
    description: 'Hospedagem confortavel com otima localizacao e atendimento 24h.',
    price: 270.0,
    discountPrice: 219.0,
  },
  {
    id: 'promo-hotel-6',
    image: hotel6,
    name: 'Pousada Morada',
    location: 'Aracruz/ES',
    description: 'Ambiente tranquilo, ideal para descanso com quartos amplos.',
    price: 789.9,
    discountPrice: 699.9,
  },
]
