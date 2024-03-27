
import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

export default function App() {
  const [yoo, setyoo] = useState()
  return (
    
    <>
      <Navbar />
      <Outlet context={[yoo,setyoo]}/>
    </>
  )
}