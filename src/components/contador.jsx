import React from 'react'

function contador() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Contador</h1>
        <p>VOcê clicou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
    </div>
  )
}

export default contador