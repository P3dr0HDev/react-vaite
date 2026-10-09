import React from 'react'

function BotaoEstilizado() {

    const estiloBotao = {
        backgroundColor: "red",
        color: "white",
        padding: "15px 32px",
        cursors: "pointer",
    }

  return (
    <button style={estiloBotao}>Clique Aqui CSS</button>
  )
}

export default BotaoEstilizado