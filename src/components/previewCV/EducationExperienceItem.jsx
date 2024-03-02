import "../../styles/previewCV.css"

const EducationExperienceItem = () => {
  return (
    <div className="experienceItem">
        <div className="companyInfo">
            <p>Company Name</p>
            <p>From - To</p>
        </div>
        <div className="educationTitleHolder">
            <h3 className="title">Position title</h3>
        </div>
    </div>
  )
}

export default EducationExperienceItem