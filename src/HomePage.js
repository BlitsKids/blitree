import React from "react"
import "materialize-css/dist/css/materialize.min.css"

const HomePage = () => {
  return (
    <div className="gradient-bg">
      <div className="row">
        <div className="col s12">
          <h1>Blits Kids</h1>
          <ul>
            <li>
              <a
                className="waves-effect waves-light btn"
                href="https://site1.com"
              >
                Vitrine Virtual da Loja
              </a>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn"
                href="https://site2.com"
              >
                Compre aqui
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
