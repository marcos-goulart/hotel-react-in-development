import type { Hotel, HotelRecord } from '../interfaces/Hotel'
import { hotelImageMap } from '../utils/hotelImageMap'

const fallbackImage = hotelImageMap['hotel-1']

export const hotelRecords: HotelRecord[] = [
  {
    id: '123214afdga1',
    imageKey: 'hotel-1',
    name: 'Hotel California',
    location: 'Porto Seguro/BA',
    description:
      'Hotel proximo de lindas praias, com varias atracoes turisticas e comida tipica da regiao da Bahia.',
    price: 669.9,
    availability: false,
    featured: true,
  },
  {
    id: 'fdasfasfdasv1',
    imageKey: 'hotel-2',
    name: 'Hotel Paris Germany',
    location: 'Ilheus/BA',
    description:
      'Se voce procura um hotel totalmente luxuoso e tecnologico, esse daqui e o ideal para voce e sua familia.',
    price: 800.0,
    availability: true,
    featured: true,
  },
  {
    id: '121321efasdfdga1',
    imageKey: 'hotel-3',
    name: 'Pousada Atlantica',
    location: 'Rio de Janeiro/RJ',
    description:
      'Se voce procura um hotel totalmente luxuoso e tecnologico, esse daqui e o ideal para voce e sua familia.',
    price: 789.9,
    availability: true,
    featured: true,
  },
  {
    id: 'hotel-serra-verde',
    imageKey: 'hotel-4',
    name: 'Hotel Serra Verde',
    location: 'Campos do Jordao/SP',
    description:
      'Hospedagem aconchegante em clima de montanha, perfeita para viagens tranquilas em casal ou familia.',
    price: 529.9,
    featured: true,
  },
  {
    id: 'promo-hotel-4',
    imageKey: 'hotel-4',
    name: 'Hotel Jardim Colorado',
    location: 'Copacabana/RJ',
    description: 'Hotel proximo da praia com cafe da manha e area de lazer completa.',
    price: 350.0,
    discountPrice: 299.0,
    availability: true,
    promoted: true,
  },
  {
    id: 'promo-hotel-5',
    imageKey: 'hotel-5',
    name: 'Hotel Resplendor',
    location: 'Vitoria/ES',
    description: 'Hospedagem confortavel com otima localizacao e atendimento 24h.',
    price: 270.0,
    discountPrice: 219.0,
    availability: true,
    promoted: true,
  },
  {
    id: 'promo-hotel-6',
    imageKey: 'hotel-6',
    name: 'Pousada Morada',
    location: 'Aracruz/ES',
    description: 'Ambiente tranquilo, ideal para descanso com quartos amplos.',
    price: 789.9,
    discountPrice: 699.9,
    availability: false,
    promoted: true,
  },
]

export function resolveHotelRecord(record: HotelRecord): Hotel {
  return {
    ...record,
    image: hotelImageMap[record.imageKey as keyof typeof hotelImageMap] ?? fallbackImage,
  }
}

export const fallbackHotels = hotelRecords.map(resolveHotelRecord)
