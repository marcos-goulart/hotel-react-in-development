import type { Hotel } from '../interfaces/Hotel'
import california from '../img/hoteis/hotel-1.jpeg'
import paris from '../img/hoteis/hotel-2.jpeg'
import pousada from '../img/hoteis/hotel-3.jpeg'

export const hotelList: Hotel[] = [
  {
    id: '123214afdga1',
    image: california,
    name: 'Hotel California',
    location: 'Porto Seguro/BA',
    description:
      'Hotel proximo de lindas praias, com varias atracoes turisticas e comida tipica da regiao da Bahia.',
    price: 669.9,
  },
  {
    id: 'fdasfasfdasv1',
    image: paris,
    name: 'Hotel Paris Germany',
    location: 'Ilheus/BA',
    description:
      'Se voce procura um hotel totalmente luxuoso e tecnologico, esse daqui e o ideal para voce e sua familia.',
    price: 800.0,
  },
  {
    id: '121321efasdfdga1',
    image: pousada,
    name: 'Pousada Atlantica',
    location: 'Rio de Janeiro/RJ',
    description:
      'Se voce procura um hotel totalmente luxuoso e tecnologico, esse daqui e o ideal para voce e sua familia.',
    price: 789.9,
  },
]