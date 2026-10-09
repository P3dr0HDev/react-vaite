import React, {useState} from 'react'

const MassacreCounter = () => {
        const [count, setCount] = useState(0)

        return (
            <div>
                <p>Massacre = {count}</p>
                <button onClick={() => setCount(count+1)}>KILL!</button>
                <button onClick={() => setCount(count + 100)}>MASSACRE!!!!</button>
            </div>    
  )
}


export default MassacreCounter