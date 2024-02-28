const Input = ({ labelText, name, value, onChange, type }) => {
  return (
    <label>
      {labelText}
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input