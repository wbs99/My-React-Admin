import { BrowserRouter } from "react-router-dom"
import { Router } from "./routers/router"
import { AuthRouter } from "./routers/AuthRouter"

export const App = () => {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}