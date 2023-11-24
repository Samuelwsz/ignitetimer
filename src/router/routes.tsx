import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home"
import History from "../pages/history"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
])
