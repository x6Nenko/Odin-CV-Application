import "../styles/inputs.css"

const Input = ({ labelText, name, value, onChange, type, placeHolder }) => {
  return (
    <>
      {type !== "textarea" && <label>
        {labelText}
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </label>}

      {type === "textarea" && <label className="textarea">
        {labelText}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          rows={5}
          cols={33}
        >

        </textarea>
      </label>}
    </>
  )
}

export default Input