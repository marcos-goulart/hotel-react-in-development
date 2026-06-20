export interface Hotel {
  id: string
  image: string
  name: string
  location: string
  description?: string
  price: number
  discountPrice?: number
  availability?: boolean
  featured?: boolean
  promoted?: boolean
  accommodationType?: 'hotel' | 'pousada'
  availablePeriods?: string[]
  services?: string[]
  searchTags?: string[]
  safetyMeasures?: boolean
  freeCancellation?: boolean
  immediateBooking?: boolean
  specialOffer?: boolean
}

export interface HotelRecord extends Omit<Hotel, 'image'> {
  imageKey: string
}
