import { Banner } from '../../components/Banner'
import { Navbar } from '../../components/NavBar'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  )
}
