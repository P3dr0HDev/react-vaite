import { useState } from "react"

function UserInforForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dadosEnviados, setDadosEnviados] = useState(null); 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setDadosEnviados({ nome, email, telefone });
              
    }

  return (
    <div>UserInforForm
        <form onSubmit={handleSubmit}>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <button type="submit">Enviar</button>

            {dadosEnviados && (
            <div>
                <h3>Dados enviados:</h3>
                <p>Nome: {dadosEnviados.nome}</p>
                <p>Email: {dadosEnviados.email}</p>
                <p>Telefone: {dadosEnviados.telefone}</p>
            </div>
        )}
        </form>
    </div>
  )
}

export default UserInforForm