import "../../styles/previewCV.css"
import phoneIcon from "../../assets/phone-solid.svg"
import emailIcon from "../../assets/envelope-solid.svg"
import WorkExperienceItem from "./WorkExperienceItem"
import EducationExperienceItem from "./EducationExperienceItem"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Preview = ({ generalState, educationState, experienceState }) => {
  const downloadPdfDocument = (rootElementId) => {
    const input = document.getElementById(rootElementId);
    html2canvas(input)
      .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData,'JPEG',2,2,canvas.width*0.2,canvas.height*0.2,"a","FAST");
          pdf.save("fastcv.pdf");
      })
  }

  return (
    <>
      <button className="downloadBtn" onClick={() => downloadPdfDocument("previewSection")}>Download PDF</button>

      <section className="previewSection" id="previewSection">
        <article>
          <h1 className="name">{generalState.firstName} {generalState.lastName}</h1>
        </article>

        <article className="contacts">
          <div className="contact-holder">
              <img src={emailIcon} alt="" className="contactIcon" aria-hidden="true" />
              {generalState.email}
          </div>

          <div className="contact-holder">
              <img src={phoneIcon} alt="" className="contactIcon" aria-hidden="true" />
              {generalState.phone}
          </div>
        </article>

        <article className="workExperience">
            <h2 className="experienceHeader">Work Experience</h2>
            {experienceState.map((entry, index) => (
              <WorkExperienceItem 
                key={index}
                entry={entry}
              />
            ))}
        </article>

        <article className="educationExperience">
          <h2 className="experienceHeader">Education</h2>
          {educationState.map((entry, index) => (
            <EducationExperienceItem 
              key={index}
              entry={entry}
            />
          ))}
        </article>
      
      </section>
    </>
  )
}

export default Preview