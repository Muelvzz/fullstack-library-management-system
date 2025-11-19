import { useState } from 'react'
import Signin from './page/Signin'
import './App.css'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Signin 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </>
  )
}

export default App
