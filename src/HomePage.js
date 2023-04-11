import React from "react"
import "materialize-css/dist/css/materialize.min.css"

const HomePage = () => {
  return (
    <div className="gradient-bg">
      <div className="row">
        <div className="col s12">
          <h1>Meus links</h1>
          <ul>
            <li>
              <a
                className="waves-effect waves-light btn"
                href="https://site1.com"
              >
                Site 1
              </a>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn"
                href="https://site2.com"
              >
                Site 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
