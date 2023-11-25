import Header from "./component/header"
import "./global.css"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {/* 'justify-center' centraliza horizontalmente, 'items-center' centraliza verticalmente */}
        <div className="bg-gray-600 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg w-5/6 sm:w-4/5 md:w-4/5 lg:w-4/6 text-center relative shadow-md">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
