import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { SearchButton } from './SearchButton'
import { Form } from './styles'

export function SearchForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [localizacao, setLocalizacao] = useState(searchParams.get('localizacao') ?? '')
  const [entrada, setEntrada] = useState(searchParams.get('entrada') ?? '')
  const [saida, setSaida] = useState(searchParams.get('saida') ?? '')
  const [periodo, setPeriodo] = useState(searchParams.get('periodo') ?? '')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const params = new URLSearchParams()

    if (localizacao.trim()) {
      params.set('localizacao', localizacao.trim())
    }

    if (entrada) {
      params.set('entrada', entrada)
    }

    if (saida) {
      params.set('saida', saida)
    }

    if (periodo) {
      params.set('periodo', periodo)
    }

    navigate(`/resultado?${params.toString()}`)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='w-25'>
          <label htmlFor='localizacao'>Localizacao</label>
          <input
            type='text'
            id='localizacao'
            name='localizacao'
            placeholder='Digite a localizacao'
            value={localizacao}
            onChange={(event) => setLocalizacao(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='entrada'>Entrada</label>
          <input
            type='date'
            id='entrada'
            name='entrada'
            value={entrada}
            onChange={(event) => setEntrada(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='saida'>Saida</label>
          <input
            type='date'
            id='saida'
            name='saida'
            value={saida}
            onChange={(event) => setSaida(event.target.value)}
          />
        </div>
        <div className='w-25'>
          <label htmlFor='periodo'>Periodo</label>
          <select
            id='periodo'
            name='periodo'
            aria-label='Selecione o periodo'
            value={periodo}
            onChange={(event) => setPeriodo(event.target.value)}
          >
            <option value=''>Selecione o periodo</option>
            <option value='madrugada'>Madrugada</option>
            <option value='manha'>Manha</option>
            <option value='tarde'>Tarde</option>
            <option value='noite'>Noite</option>
          </select>
        </div>
        <SearchButton />
      </div>
    </Form>
  )
}
