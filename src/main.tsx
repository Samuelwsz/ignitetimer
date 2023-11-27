import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes.tsx"
import { CyclesContextProvider } from "./context/CyclesContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CyclesContextProvider>
      <RouterProvider router={router} />
    </CyclesContextProvider>
  </React.StrictMode>
)
