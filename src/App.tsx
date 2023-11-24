import Header from "./component/header"
import "./global.css"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="flex justify-center items-start min-h-screen pt-16">
        {/* 'pt-16' adiciona um preenchimento superior de tamanho 16 (pode ser ajustado) */}
        <div className="bg-gray-600 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg sm:w-4/5 md:w-4/5 lg:w-4/6 text-center relative shadow-md">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
