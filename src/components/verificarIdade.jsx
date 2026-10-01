import React from 'react'

function operadorTernario({idade}, {operadorTernario}) {
    const operadorTernario = {operadorTernario} => {
        if (operadorTernario) {
            return idade >= 18 ? "Maior de idade" : "Menor de idade";
        } 
    }

    return (

    <div>
        {operadorTernario = (true)}
    </div>
  )
}

export default verificarIdade