import { useState } from 'react'
import Navbar from './components/Navbar'
import General from './components/editCV/General'
import Education from './components/editCV/Education'
import Experience from './components/editCV/Experience'
import Preview from './components/previewCV/Preview'
import './App.css'

const App = () => {
  const [mode, setMode] = useState("edit")

  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [education, setEducation] = useState([
    {
      schoolName: '',
      title: '',
      startDate: '',
      finishDate: ''
    }
  ])

  const [experience, setExperience] = useState([
    {
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      finishDate: ''
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

  function handleRemoveEducationEntryBtn(i) {
    setEducation(
      education.filter((entry, index) => i !== index)
    )
  }

  function handleRemoveExperienceEntryBtn(i) {
    setExperience(
      experience.filter((entry, index) => i !== index)
    )
  }

  function handleFillDemoCvBtn() {
    setGeneral(
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'fake.email@gmail.com',
        phone: '+12 345 67 89'
      }
    )

    setEducation([
      {
        schoolName: 'The Odin Project',
        title: 'Full-stack developer',
        startDate: 'June 2023',
        finishDate: 'Present'
      },
      {
        schoolName: 'freeCodeCamp',
        title: 'Full-stack developer',
        startDate: 'September 2022',
        finishDate: 'January 2023'
      }
    ])

    setExperience([
      {
        companyName: 'ABC Company',
        position: 'Software Engineer',
        responsibilities: 'Developed and maintained web applications',
        startDate: 'January 2020',
        finishDate: 'Present'
      },
      {
        companyName: 'XYZ Corporation',
        position: 'Product Manager',
        responsibilities: 'Managed product development lifecycle',
        startDate: 'June 2018',
        finishDate: 'December 2022'
      },
      {
        companyName: 'Tech Innovations Ltd.',
        position: 'Senior Software Developer',
        responsibilities: 'Led backend development projects',
        startDate: 'March 2016',
        finishDate: 'May 2021'
      }
    ])
  }

  return (
    <>
      <Navbar 
        handleClick={handleModeChange} 
      />
  
      <div className='wrapper'>
        {mode === "edit" && 
          <>
            <div className='pairSections'>
              <div className='generalWrapper'>
                <General 
                  generalState={general}
                  handleChange={handleGeneralChanges}
                >
                  <h2 className='sectionTitle generalTitle'>General Information</h2>
                </General>
              </div>

              <div className='placeholderWrapper'>
                <button onClick={handleFillDemoCvBtn}>Fill Demo CV</button>
              </div>
            </div>

            <div className='pairSections'>
              <div className='educationWrapper'>
                {education.map((entry, index) => (
                  <Education 
                    key={index}
                    educationState={entry}
                    handleChange={event => handleEducationChanges(event, index)}
                  >
                    <div className='entryIndex'>
                      <span>{index + 1}</span>
                    </div>
                    {index === 0 && 
                    <>
                      <div className='sectionHeader'>
                        <h2 className='sectionTitle'>Educational Experience</h2>
                      </div>
                      <div className='addMoreBtnHolder'>
                        <button onClick={handleAddMoreEducationBtn} className='addMoreBtn'>Add more</button>
                      </div>
                    </>
                    }
                    {education.length > 1 && 
                      <div className='removeBtnHolder'>
                        <button className='removeBtn' onClick={() => handleRemoveEducationEntryBtn(index)}>Remove entry</button>
                      </div>
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
                    <div className='entryIndex'>
                      <span>{index + 1}</span>
                    </div>
                    {index === 0 && 
                    <>
                      <div className='sectionHeader'>
                        <h2 className='sectionTitle'>Work Experience</h2>
                      </div>
                      <div className='addMoreBtnHolder'>
                        <button onClick={handleAddMoreExperienceBtn} className='addMoreBtn'>Add more</button>
                      </div>
                    </>
                    }
                    {experience.length > 1 && 
                      <div className='removeBtnHolder'>
                        <button className='removeBtn' onClick={() => {handleRemoveExperienceEntryBtn(index)}}>Remove entry</button>
                      </div>
                    }
                  </Experience>
                ))}
              </div>
            </div>
          </>
        }

        {mode === "preview" && 
          <Preview generalState={general} educationState={education} experienceState={experience} />
        }
      </div>
    </>
  )
}

export default App
