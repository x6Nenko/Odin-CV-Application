import { useState } from 'react'
import Navbar from './components/Navbar'
import General from './components/editCV/General'
import Education from './components/editCV/Education'
import Experience from './components/editCV/Experience'
import './App.css'

const App = () => {
  const [mode, setMode] = useState("edit")

  const [general, setGeneral] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'fakeEmail@gmail.com',
    phone: '+77 777 777'
  })

  const [education, setEducation] = useState([
    {
      schoolName: 'The Odin Project',
      title: 'Full-stack developer',
      startDate: '06/2023',
      finishDate: '??/2024'
    }
  ])

  const [experience, setExperience] = useState([
    {
      companyName: 'Random Name',
      position: 'Full-stack developer',
      responsibilities: '- Creating nice websites;\n- Creating accesible websites;\n- Creating functional websites;',
      startDate: '2024',
      finishDate: 'Still working'
    }
  ])

  function handleModeChange(newMode) {
    setMode(newMode)
  }

  function handleGeneralChanges(e) {
    setGeneral({
      ...general,
      [e.target.name]: e.target.value
    })
  }

  function handleEducationChanges(e, index) {
    setEducation(education.map((entry, j) => {
      if (j === index) {
        // Create a *new* object with changes
        return {...entry, [e.target.name]: e.target.value}
      } else {
        // No changes
        return entry
      }
    }))
  }

  function handleExperienceChanges(e, index) {
    setExperience(experience.map((entry, j) => {
      if (j === index) {
        return {...entry, [e.target.name]: e.target.value}
      } else {
        return entry
      }
    }))
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
            {education.map((entry, index) => (
              <Education 
                key={index}
                educationState={entry}
                handleChange={event => handleEducationChanges(event, index)}
              >
                <button>Add more</button>
              </Education>
            ))}
            {experience.map((entry, index) => (
              <Experience 
                key={index}
                experienceState={entry}
                handleChange={event => handleExperienceChanges(event, index)}
              />
            ))}
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
