import { useState } from 'react'
import './App.css'
import TaskManager from './component/TaskManager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='App'>
        <TaskManager />
       </div>
    </>
  )
}

export default App
