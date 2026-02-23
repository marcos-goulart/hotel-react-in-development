import type { HighlightHotelInterface } from '../../interfaces/HighlightHotel'
import california from '../../img/hoteis/hotel-1.jpeg'
import paris from '../../img/hoteis/hotel-2.jpeg'
import pousada from '../../img/hoteis/hotel-3.jpeg'

export const hotelList: HighlightHotelInterface[] = [
  {
    hotel: {
      id: '123214afdga1',
      image: california,
      name: 'Hotel Califórnia',
      location: 'Porto Seguro/BA',
      description:
        'Hotel próximo de varias lindas praias, com várias atrações turísticas e comida típica da região da Bahia.',
      price: 669.9,
    },
  },
  {
    hotel: {
      id: 'fdasfasfdasv1',
      image: paris,
      name: 'Hotel París Germany',
      location: 'Ilhéus/BA',
      description:
        'Se você procura um hotel totalmente luxuoso e tecnológico, esse daqui é o ideal para você e sua família.',
      price: 800.0,
    },
  },
  {
    hotel: {
      id: '121321efasdfdga1',
      image: pousada,
      name: 'Pousada Atlântica',
      location: 'Rio de Janeiro/RJ',
      description:
        'Se você procura um hotel totalmente luxuoso e tecnológico, esse daqui é o ideal para você e sua família.',
      price: 789.9,
    },
  },
]
