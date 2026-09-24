import { useState } from "react"

function UserInforForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nome, email);        
    }

  return (
    <div>UserInforForm
        <form onSubmit={handleSubmit}>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </form>
    </div>
  )
}

export default UserInforForm