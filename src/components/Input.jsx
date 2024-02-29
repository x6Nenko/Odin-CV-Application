const Input = ({ labelText, name, value, onChange, type, placeHolder }) => {
  return (
    <label>
      {labelText}
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </label>
  )
}

export default Input