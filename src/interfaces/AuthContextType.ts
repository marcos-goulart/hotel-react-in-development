export interface AuthContextType {
  isLogged: boolean
  login: () => void
  logout: () => void
}
