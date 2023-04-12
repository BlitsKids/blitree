import { React, Browser } from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Browser>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Browser>
)
