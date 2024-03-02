import "../../styles/editCV.css"
import Input from "../Input"

const Education = ({ educationState, handleChange, children }) => {
  return (
    <section className="educationSection">
      {children}
      <Input 
        type={"text"}
        labelText={"School  Name: "}
        name={"schoolName"}
        value={educationState.schoolName}
        onChange={handleChange}
        placeHolder={"The Odin Project"}
      />

      <Input 
        type={"text"}
        labelText={"Title of Study: "}
        name={"title"}
        value={educationState.title}
        onChange={handleChange}
        placeHolder={"Full-stack developer"}
      />

      <div className="pairInputs">
        <Input 
          type={"text"}
          labelText={"When Started: "}
          name={"startDate"}
          value={educationState.startDate}
          onChange={handleChange}
          placeHolder={"MM/YYYY"}
        />

        <Input 
          type={"text"}
          labelText={"When Finished: "}
          name={"finishDate"}
          value={educationState.finishDate}
          onChange={handleChange}
          placeHolder={"MM/YYYY"}
        />
      </div>
    </section>
  )
}

export default Education