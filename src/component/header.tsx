import logo from "../assets/Logo.svg"
import timer from "../assets/Timer.svg"
import document from "../assets/Document.svg"

export default function Header() {
  return (
    <>
      <header className="flex justify-between px-3">
        <img src={logo} alt="logo" className="w-7 h-7" />
        <div className="flex gap-3">
          <img src={timer} alt="timer" />
          <img src={document} alt="document" />
        </div>
      </header>
    </>
  )
}
