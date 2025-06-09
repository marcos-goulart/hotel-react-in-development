import { Form } from "./styles"
export function SearchForm() {
  return (
    <Form action='submit'>
      <div className='row'>
        <div>
          <label htmlFor='Localizacao'>Localização</label>
          <input type='text' name='Localizacao' />
        </div>
        <div>
          <label htmlFor='Localizacao'>Localização</label>
          <input type='text' name='Localizacao' />
        </div>
        <div>
          <label htmlFor='Localizacao'>Localização</label>
          <input type='text' name='Localizacao' />
        </div>
        <div>
          <label htmlFor='Localizacao'>Localização</label>
          <input type='text' name='Localizacao' />
        </div>
        <div>
          <a href=''>Pesquisar</a>
        </div>
      </div>
    </Form>
  )
}
