import "../../styles/previewCV.css"

const EducationExperienceItem = ({ entry }) => {
  return (
    <article className="experienceItem">
      <div className="companyInfo">
        <p>{entry.schoolName}</p>
        <p>{entry.startDate} - {entry.finishDate}</p>
      </div>
      <div className="educationTitleHolder">
        <h3 className="title">{entry.title}</h3>
      </div>
    </article>
  )
}

export default EducationExperienceItem