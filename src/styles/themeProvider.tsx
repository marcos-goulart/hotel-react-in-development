import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

interface ThemeProps {
  children: ReactNode
}

export function AppThemeProvider({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
