import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
           <h1>Health hub</h1>
        </div>
        <Register />
    </>
  )
}

export default App
