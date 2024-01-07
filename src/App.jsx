import { useState } from 'react'
import './App.css'
import LaptopStore  from './Store/LaptopStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LaptopStore/>
    </>
  )
}

export default App
