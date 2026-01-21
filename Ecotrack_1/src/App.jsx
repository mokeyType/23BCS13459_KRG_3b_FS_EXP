import { useState } from 'react'
import './App.css'
import Dashboard from './components/pages/dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='main_container'>
        <Dashboard></Dashboard>
     </div>
    </>
  )
}

export default App
