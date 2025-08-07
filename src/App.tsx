import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  )
}
