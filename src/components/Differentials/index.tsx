import { Main } from './styles'
import piscina from '../../img/utilidades/piscina.jpeg'
import campo from '../../img/utilidades/campo.jpeg'
import camera from '../../img/utilidades/camera.jpeg'

export function Differentials() {
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
                  <img src={camera} alt='Camera' />
                  <div className='cardBody'>
                    <div>Camera de Seguranca</div>
                    <p>Uma das coisas que nos preocupamos quando viajamos e a seguranca.</p>
                    <p>
                      Por isso sempre estamos investindo pesado em seguranca, justamente para voce
                      ficar tranquilo enquanto estiver conosco.
                    </p>
                  </div>
                </div>
              </div>

              <div className='beforeCard'>
                <div className='card'>
                  <img src={campo} alt='Campo de futebol' />
                  <div className='cardBody'>
                    <div>Campo de futebol</div>
                    <p>Quem nao gosta de um bom futebol, nao e verdade?</p>
                    <p>
                      Oferecemos campos de futebol com um dos melhores gramados, para voce jogar
                      aquele futebol com a sua familia e amigos.
                    </p>
                  </div>
                </div>
              </div>

              <div className='beforeCard'>
                <div className='card'>
                  <img src={piscina} alt='Piscina de natacao' />
                  <div className='cardBody'>
                    <div>Piscina de natacao</div>
                    <p>No calor que tem feito nesses dias, voce nao pode ficar sem se refrescar.</p>
                    <p>
                      Mesmo tendo praias e cachoeiras proximas dos nossos hoteis e pousadas,
                      pensando no seu bem-estar, oferecemos lindas piscinas.
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