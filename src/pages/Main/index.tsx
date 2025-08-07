import { Banner } from '../../components/Banner'
import { Diferentials } from '../../components/Diferentials'
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
      <Diferentials />
      <Footer />
    </Container>
  )
}
