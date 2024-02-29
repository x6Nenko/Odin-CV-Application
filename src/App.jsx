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

  function handleAddMoreEducationBtn() {
    setEducation([...education, {
      schoolName: '',
      title: '',
      startDate: '',
      finishDate: ''
    }])
  }

  function handleAddMoreExperienceBtn() {
    setExperience([...experience, {
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      finishDate: ''
    }])
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

            <div className='pairSections'>
              <div className='educationWrapper'>
                {education.map((entry, index) => (
                  <Education 
                    key={index}
                    educationState={entry}
                    handleChange={event => handleEducationChanges(event, index)}
                  >
                    {index === 0 && 
                      <>
                        <div>
                          <h2>Educational Experience</h2>
                        </div>
                        <button onClick={handleAddMoreEducationBtn} className='addMoreBtn'>Add more</button>
                      </>
                    }
                  </Education>
                ))}
              </div>

              <div className='experienceWrapper'>
                {experience.map((entry, index) => (
                  <Experience 
                    key={index}
                    experienceState={entry}
                    handleChange={event => handleExperienceChanges(event, index)}
                  >
                    {index === 0 && <button onClick={handleAddMoreExperienceBtn} className='addMoreBtn'>Add more</button>}
                  </Experience>
                ))}
              </div>
            </div>
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
