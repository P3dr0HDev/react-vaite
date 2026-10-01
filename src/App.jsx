import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Contador from './components/contador'
import ContadorAf from './components/ContadorAf'
import UserInforForm from './components/UserInforForm' 
import RenderConditional from './components/RenderConditional'
import LoginButton from './components/LoginButton'

function App() {
  return (
    <>
    <Welcome/>
    <BomDia/>
    <Pai/>
    <Descricao nome="Pedro" idade={36} />
    <Cachorro nome="Duque" raca="SRD" />
    <Contador/>
    <ContadorAf/>
    <UserInforForm/>
    <RenderConditional user = "deathdealer666"/>   
    <LoginButton/>
    </>
  )
}

export default App