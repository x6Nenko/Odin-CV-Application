import "../../styles/editCV.css"
import Input from "../Input"

const General = ({ generalState, handleChange }) => {
  return (
    <section className="generalSection">
      <Input 
        type={"text"}
        labelText={"First Name: "}
        name={"firstName"}
        value={generalState.firstName}
        onChange={handleChange}
      />

      <Input 
        type={"text"}
        labelText={"Last Name: "}
        name={"lastName"}
        value={generalState.lastName}
        onChange={handleChange}
      />

      <Input 
        type={"email"}
        labelText={"Email: "}
        name={"email"}
        value={generalState.email}
        onChange={handleChange}
      />

      <Input 
        type={"tel"}
        labelText={"Phone: "}
        name={"phone"}
        value={generalState.phone}
        onChange={handleChange}
      />
    </section>
  )
}

export default General