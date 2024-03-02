import "../../styles/previewCV.css"
import phoneIcon from "../../assets/phone-solid.svg"
import emailIcon from "../../assets/envelope-solid.svg"
import WorkExperienceItem from "./WorkExperienceItem"
import EducationExperienceItem from "./EducationExperienceItem"

const Preview = () => {
  return (
    <section>
        <article>
            <h1 className="name">FirstName LastName</h1>
        </article>

        <article className="contacts">
            <div className="contact-holder">
                <img src={emailIcon} alt="" className="contactIcon" aria-hidden="true" />
                Email
            </div>

            <div className="contact-holder">
                <img src={phoneIcon} alt="" className="contactIcon" aria-hidden="true" />
                Phone
            </div>
        </article>

        <article className="workExperience">
            <h2 className="experienceHeader">Work Experience</h2>
            
            <WorkExperienceItem />
        </article>

        <article className="educationExperience">
            <h2 className="experienceHeader">Education</h2>
            
            <EducationExperienceItem />
        </article>
    
    </section>
  )
}

export default Preview