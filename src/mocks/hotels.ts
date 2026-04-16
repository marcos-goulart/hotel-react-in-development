import { fallbackHotels } from './hotelRecords'

export const hotelList = fallbackHotels.filter((hotel) => hotel.featured)
