
import { useState } from 'react';

const ContadorAf = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>ContadorAf</h1>
        <p>Você clicou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>Mais</button>
        <button onClick={() => setCount(count - 1)}>Menos</button>
    </div>
  )
}

export default ContadorAf