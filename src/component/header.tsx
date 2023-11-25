import logo from "../assets/Logo.svg"
import timer from "../assets/Timer.svg"
import document from "../assets/Document.svg"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="flex justify-between px-3 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-7 h-7" />
        </Link>

        <div className="flex gap-3 items-center">
          <img src={timer} alt="timer" />
          <Link to="/history">
            <img src={document} alt="document" />
          </Link>
        </div>
      </header>
    </>
  )
}
