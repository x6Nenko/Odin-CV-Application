import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  const [mode, setMode] = useState("edit")

  function handleModeChange(newMode) {
    setMode(newMode)
  }

  return (
    <>
      <Navbar 
        handleClick={handleModeChange} 
      />
  
      <div className='wrapper'>
        {mode === "edit" && 
          <div>
            Edit mode
          </div>
        }

        {mode === "preview" && 
          <div>
            Preview mode
          </div>
        }
      </div>
    </>
  )
}

export default App
