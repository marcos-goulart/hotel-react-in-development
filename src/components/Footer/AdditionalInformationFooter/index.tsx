import { Container } from './styles'

export function AdditionalInformationFooter() {
  return (
    <Container>
      <h4 className='fs-4 fw-bold mb-2 mb-md-4 mb-lg-4'>Informações adicionais</h4>
      <p className='mb-0'>
        <a href='#' className='text-decoration-none text-muted'>
          Termos e condições
        </a>
      </p>
      <p className='mb-0'>
        <a href='#' className='text-decoration-none text-muted'>
          Política de privacidade
        </a>
      </p>
      <p className='mb-0'>
        <a href='#' className='text-decoration-none text-muted'>
          Central de ajuda
        </a>
      </p>
      <p className='mb-0'>
        <a href='#' className='text-decoration-none text-muted'>
          Condições de uso
        </a>
      </p>
    </Container>
  )
}
