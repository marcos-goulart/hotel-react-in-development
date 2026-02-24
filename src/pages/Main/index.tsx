import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'
import { Differentials } from '../../components/Differentials'
import { Footer } from '../../components/Footer'
import { Highlights } from '../../components/Highlights'
import { Navbar } from '../../components/NavBar'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Highlights />
      <Differentials />
      <Carousel />
      <Footer />
    </Container>
  )
}