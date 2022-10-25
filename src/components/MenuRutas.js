import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        
          <nav class="navbar navbar-expand-lg  bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" style={{color:"white"}} href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-1 mb-lg-1">
                  <li class="nav-item">
                    <NavLink style={{color:"white"}} className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink style={{color:"white"}} className="nav-link" to="/collatz/6">Collatz 6</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink style={{color:"white"}} className="nav-link" to="/collatz/9">Collatz 9</NavLink>
                  </li>     
                  <li class="nav-item">
                    <NavLink style={{color:"white"}}className="nav-link" to="/noexisto">Sin ruta mapeada</NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
       
      </div>
    )
  }
}
