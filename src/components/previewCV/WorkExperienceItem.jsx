import "../../styles/previewCV.css"

const WorkExperienceItem = ({ entry }) => {
  return (
    <article className="experienceItem">
      <div className="companyInfo">
        <p>{entry.companyName}</p>
        <p>{entry.startDate} - {entry.finishDate}</p>
      </div>
      <div>
        <h3 className="title">{entry.position}</h3>
        <p className="responsibilities">{entry.responsibilities}</p>
      </div>
    </article>
  )
}

export default WorkExperienceItem