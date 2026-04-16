import { fallbackHotels } from './hotelRecords'

export const promotionList = fallbackHotels.filter((hotel) => hotel.promoted)
