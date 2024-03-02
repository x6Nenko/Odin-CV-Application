import "../../styles/editCV.css"
import Input from "../Input"

const General = ({ generalState, handleChange, children }) => {
  return (
    <section className="generalSection">
      {children}
      <div className="pairInputs">
        <Input 
          type={"text"}
          labelText={"First Name: "}
          name={"firstName"}
          value={generalState.firstName}
          onChange={handleChange}
          placeHolder={"John"}
        />

        <Input 
          type={"text"}
          labelText={"Last Name: "}
          name={"lastName"}
          value={generalState.lastName}
          onChange={handleChange}
          placeHolder={"Doe"}
        />
      </div>

      <Input 
        type={"email"}
        labelText={"Email: "}
        name={"email"}
        value={generalState.email}
        onChange={handleChange}
        placeHolder={"fake.email@gmail.com"}
      />

      <Input 
        type={"tel"}
        labelText={"Phone: "}
        name={"phone"}
        value={generalState.phone}
        onChange={handleChange}
        placeHolder={"+12 345 67 89"}
      />
    </section>
  )
}

export default General