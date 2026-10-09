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
import NumberList from './components/NumberList'
import BotaoEstilizado from './components/BotaoEstilizado'
import BotaoAzul from './components/BotaoAzul'
import Greetings from './components/Greetings'
import MassacreCounter from './components/MassacreCounter'
import Exercises from './components/TaskList'

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
    <NumberList numbers={["teste", 'e', 1,2,3,4,5]}/>
    <BotaoEstilizado/>
    <BotaoAzul/>
    <Greetings/>
    <MassacreCounter/>
    <Exercises/>
    </>
  )
}

export default App