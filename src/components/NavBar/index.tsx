import { useState } from 'react'
import { Button, NavContainer } from './styles'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavContainer isMenuOpen={menuOpen}>
      <div className='container'>
        <a href='/'>Hotel Samurai</a>
        <button type='button' onClick={handleToggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            fill='currentColor'
            className='bi bi-list'
            viewBox='0 0 16 16'
          >
            {/* Horizontal lines for the list icon */}
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </button>
        <div className='navbar-collapse'>
          <ul>
            <li className='mobile-button' style={{ display: menuOpen ? 'block' : 'none'}}>
              <Button to={"/login"} className='btn-orange'>Login</Button>
            </li>
            <li className='desktop-button'>
              <Button to={"/login"} className='btn-orange'>Login</Button>
            </li>
          </ul>
        </div>
      </div>
    </NavContainer>
  )
}
