import { useState } from 'react'
import Navbar from './components/Navbar'
import General from './components/editCV/General'
import Education from './components/editCV/Education'
import './App.css'

const App = () => {
  const [mode, setMode] = useState("edit")
  const [general, setGeneral] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'fakeEmail@gmail.com',
    phone: '+77 777 777'
  })
  const [education, setEducation] = useState({
    schoolName: 'The Odin Project',
    title: 'Full-stack developer',
    startDate: '06/2023',
    finishDate: '??/2024'
  })

  function handleModeChange(newMode) {
    setMode(newMode)
  }

  function handleGeneralChanges(e) {
    setGeneral({
      ...general,
      [e.target.name]: e.target.value
    })
  }

  function handleEducationChanges(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navbar 
        handleClick={handleModeChange} 
      />
  
      <div className='wrapper'>
        {mode === "edit" && 
          <>
            <div>
              Edit mode
            </div>
            <General 
              generalState={general}
              handleChange={handleGeneralChanges}
            />
            <Education 
              educationState={education}
              handleChange={handleEducationChanges}
            />
          </>
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
