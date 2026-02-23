import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { AppThemeProvider } from './styles/ThemeProvider'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppThemeProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </AppThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
