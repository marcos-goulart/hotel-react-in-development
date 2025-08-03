import { useState } from 'react'
import { SearchButton } from './SearchButton'
import { Form } from './styles'
export function SearchForm() {
  const [periodo, setPeriodo] = useState('')

  return (
    <Form action='submit'>
      <div className='row'>
        <div className='w-25'>
          <label htmlFor='localizacao'>Localização</label>
          <input
            type='text'
            id='localizacao'
            name='localizacao'
            placeholder='Digite a localização'
          />
        </div>
        <div>
          <label htmlFor='entrada'>Entrada</label>
          <input type='date' id='entrada' name='entrada' />
        </div>
        <div>
          <label htmlFor='saida'>Saida</label>
          <input type='date' id='saida' name='saida' />
        </div>
        <div className='w-25'>
          <label htmlFor='periodo'>Periodo</label>
          <select
            id='periodo'
            name='periodo'
            aria-label='Selecione o periodo'
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            <option value=''>Selecione o periodo</option>
            <option value='madrugada'>Madrugada</option>
            <option value='manha'>Manhã</option>
            <option value='tarde'>Tarde</option>
            <option value='noite'>Noite</option>
          </select>
        </div>
        <SearchButton />
      </div>
    </Form>
  )
}
