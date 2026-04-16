import { useEffect, useState } from 'react'

import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'
import { Differentials } from '../../components/Differentials'
import { Footer } from '../../components/Footer'
import { Highlights } from '../../components/Highlights'
import { Promotions } from '../../components/Promotions'
import { Reviews } from '../../components/Reviews'
import { Navbar } from '../../components/NavBar'
import type { Hotel } from '../../interfaces/Hotel'
import { fallbackHotels } from '../../mocks/hotelRecords'
import { getHotels } from '../../services/hotels'

import { Container } from './styles'

export default function Main() {
  const [hotels, setHotels] = useState<Hotel[]>(fallbackHotels)

  useEffect(() => {
    let isMounted = true

    async function loadHotels() {
      const hotelData = await getHotels()

      if (isMounted) {
        setHotels(hotelData)
      }
    }

    void loadHotels()

    return () => {
      isMounted = false
    }
  }, [])

  const featuredHotels = hotels.filter((hotel) => hotel.featured).slice(0, 3)
  const promotedHotels = hotels.filter((hotel) => hotel.promoted).slice(0, 3)

  return (
    <Container>
      <Navbar />
      <Banner />
      <Highlights hotels={featuredHotels} />
      <Promotions hotels={promotedHotels} />
      <Differentials />
      <Carousel />
      <Reviews />
      <Footer />
    </Container>
  )
}
