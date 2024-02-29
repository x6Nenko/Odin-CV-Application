import "../../styles/editCV.css"
import Input from "../Input"

const Experience = ({ experienceState, handleChange }) => {
  return (
    <section className="experienceSection">
      <Input 
        type={"text"}
        labelText={"Company  Name: "}
        name={"companyName"}
        value={experienceState.companyName}
        onChange={handleChange}
      />

      <Input 
        type={"text"}
        labelText={"Position  Title: "}
        name={"position"}
        value={experienceState.position}
        onChange={handleChange}
      />

      <Input 
        type={"textarea"}
        labelText={"Main Responsibilities: "}
        name={"responsibilities"}
        value={experienceState.responsibilities}
        onChange={handleChange}
      />

      <Input 
        type={"text"}
        labelText={"When Started: "}
        name={"startDate"}
        value={experienceState.startDate}
        onChange={handleChange}
        placeHolder={"MM/YYYY"}
      />

      <Input 
        type={"text"}
        labelText={"When Finished: "}
        name={"finishDate"}
        value={experienceState.finishDate}
        onChange={handleChange}
        placeHolder={"MM/YYYY"}
      />
    </section>
  )
}

export default Experience