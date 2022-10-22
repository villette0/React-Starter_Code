import React from 'react'

const Navigation = (props) => {
  return (
    <nav>
    <ul>
      <li>
        <a href = "#Home" className="nav-button" onClick={()=>props.setCurrentPage("Home")}>Home</a>
      </li>
      <li>
        <a href="#About" className="nav-button" onClick={()=>props.setCurrentPage("About")}>About</a>
      </li>
      <li>
      <a href="#Contact" className="nav-button" onClick={()=>props.setCurrentPage("Contact")}>Contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation