import { useState } from 'react'

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    // Simula login - em app real faria chamada à API
    const user = prompt('Digite seu nome de usuário:')
    if (user && user.trim()) {
      setUsername(user.trim())
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
      {isLoggedIn ? (
        <div>
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
            👋 Bem-vindo, {username}!
          </p>
          <button 
            onClick={handleLogout}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sair
          </button>
        </div>
      ) : (
        <button 
          onClick={handleLogin}
          style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          🔐 Fazer Login
        </button>
      )}
    </div>
  )
}

export default LoginButton