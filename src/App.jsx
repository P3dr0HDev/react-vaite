import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Welcome/>
    <BomDia/>
    <Pai/>
    <Descricao nome="Pedro" idade={36} />
    <Cachorro nome="Duque" raca="SRD" />
    </>
  )
}

export default App
