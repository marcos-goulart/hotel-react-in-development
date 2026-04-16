import type { Hotel, HotelRecord } from '../interfaces/Hotel'
import { fallbackHotels, resolveHotelRecord } from '../mocks/hotelRecords'
import api from './api'

function isHotelRecord(record: unknown): record is HotelRecord {
  if (typeof record !== 'object' || record === null) {
    return false
  }

  const hotel = record as Partial<HotelRecord>

  return (
    typeof hotel.id === 'string' &&
    typeof hotel.imageKey === 'string' &&
    typeof hotel.name === 'string' &&
    typeof hotel.location === 'string' &&
    typeof hotel.price === 'number'
  )
}

export async function getHotels(): Promise<Hotel[]> {
  try {
    const { data } = await api.get<HotelRecord[]>('/hotels')

    if (!Array.isArray(data)) {
      return fallbackHotels
    }

    return data.filter(isHotelRecord).map(resolveHotelRecord)
  } catch {
    return fallbackHotels
  }
}

export async function getHotelById(hotelId: string): Promise<Hotel | null> {
  const hotels = await getHotels()

  return hotels.find((hotel) => hotel.id === hotelId) ?? null
}
