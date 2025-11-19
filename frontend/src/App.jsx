import { useState } from 'react'
import Signin from './page/Signin'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className="two-column-container">
        <Signin />
      </div>

      <Footer />
    </>
  )
}

export default App
