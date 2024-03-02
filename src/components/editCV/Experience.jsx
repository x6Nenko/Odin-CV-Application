import "../../styles/editCV.css"
import Input from "../Input"

const Experience = ({ experienceState, handleChange, children }) => {
  return (
    <section className="experienceSection">
      {children}
      <Input 
        type={"text"}
        labelText={"Company  Name: "}
        name={"companyName"}
        value={experienceState.companyName}
        onChange={handleChange}
        placeHolder={"ABC Company"}
      />

      <Input 
        type={"text"}
        labelText={"Position  Title: "}
        name={"position"}
        value={experienceState.position}
        onChange={handleChange}
        placeHolder={"Software Engineer"}
      />

      <Input 
        type={"textarea"}
        labelText={"Main Responsibilities: "}
        name={"responsibilities"}
        value={experienceState.responsibilities}
        onChange={handleChange}
        placeHolder={"Developed and maintained web applications"}
      />

      <div className="pairInputs">
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
      </div>
    </section>
  )
}

export default Experience