export interface Hotel {
  id: string
  image: string
  name: string
  location: string
  description: string
  price: number
}

export interface HighlightHotelProps {
  hotel: Hotel
}