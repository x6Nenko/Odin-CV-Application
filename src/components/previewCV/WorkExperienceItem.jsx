import "../../styles/previewCV.css"

const WorkExperienceItem = () => {
  return (
    <div className="experienceItem">
        <div className="companyInfo">
            <p>Company Name</p>
            <p>From - To</p>
        </div>
        <div>
            <h3 className="title">Position title</h3>
            <p className="responsibilities">Main responsibilities</p>
        </div>
    </div>
  )
}

export default WorkExperienceItem