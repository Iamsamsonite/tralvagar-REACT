import React from 'react'
import '../style.css'
import { Logo } from '../asset'

const Navbar = () => {
  return (
    //  <h2> this is the navbar</h2>

    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-5">
      <a className="navbar-brand"> <img src={Logo} alt="img" style={{width:"100px"}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Find a doctor</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link disabled">Apps</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">About us</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
