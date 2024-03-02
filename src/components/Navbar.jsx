import "../styles/Navbar.css"
import "../index.css"
import githubIcon from "../assets/github.svg"

const Navbar = ({ handleClick }) => {

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Fast CV</h1>
          <a href="#" target="_blank">
            <img src={githubIcon} alt="github" className="icon" aria-hidden="true" />
            <span className="sr-only">Github (opens in new tab)</span>
          </a>
        </div>
        <div className="btns">
          <button onClick={() => handleClick("edit")}>Edit</button>
          <button onClick={() => handleClick("preview")}>Preview</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar