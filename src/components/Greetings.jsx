import React, { useState } from 'react'

function Greetings() {
    const [nome, setNome] = useState('');
    const [dadosEnviados, setDadosEnviados] = useState(null); 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setDadosEnviados({ nome });
              
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <button type="submit">Enviar</button>

            {dadosEnviados && (
            <div>
                <h3>Greetings!</h3>
                <p>Mr. {dadosEnviados.nome}</p>              
                
            </div>
        )}
        </form>
    </div>
  )
}

export default Greetings