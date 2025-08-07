import { Main } from './styles'
import piscina from '../../img/utilidades/piscina.jpeg'
import campo from '../../img/utilidades/campo.jpeg'
import camera from '../../img/utilidades/camera.jpeg'

export function Diferentials() {
  return (
    <Main>
      <div className='container'>
        <div className='title'>
          <h1>Vejam alguns dos nossos diferenciais</h1>
        </div>
        <div className='row'>
          <div className='inRow'>
            <div className='row'>
              <div className='beforeCard'>
                <div className='card'>
                  <img src={camera} alt='Câmera' />
                  <div className='cardBody'>
                    <div>Câmera de Segurança</div>
                    <p>Uma das coisas que nos preocupamos quando viajamos é a segurança.</p>
                    <p>
                      Por isso sempre estamos investindo pesado em segurança, justamente para você
                      ficar tranquilo enquanto estiver conosco
                    </p>
                  </div>
                </div>
              </div>

              <div className='beforeCard'>
                <div className='card'>
                  <img src={campo} alt='Campo de futebol' />
                  <div className='cardBody'>
                    <div>Campo de futebol</div>
                    <p>Quem não gosta de um bom futebol, não é verdade?</p>
                    <p>
                      Oferecemos campos de futebol com um dos melhores gramados, para você jogar
                      aquele futebol com a sua familia e amigos.
                    </p>
                  </div>
                </div>
              </div>

              <div className='beforeCard'>
                <div className='card'>
                  <img src={piscina} alt='Piscina de natação' />
                  <div className='cardBody'>
                    <div>Piscina de natação</div>
                    <p>
                      No calorão que tem feito nesses dias, você não pode ficar sem se refrescar.
                    </p>
                    <p>
                      Mesmo tendo praias e cachoeiras próximos dos nossos hotéis e pousadas,
                      pensando no seu bem estar sempre, oferecemos lindas e belas piscinas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}
