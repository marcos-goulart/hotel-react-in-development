import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import LoginPage from './pages/Login'
import ReservationPage from './pages/Reservation'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/pre-reserva/:hotelId' element={<ReservationPage />} />
    </Routes>
  )
}
