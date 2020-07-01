import React from 'react'
import '../stylesheets/dropdown.css'

const DropdownMenu = ({handleClick, options, selectedOption}) => {
  return (
    <div className="dropdown-menu">
      <label style={{paddingRight: "10px"}} >Status by: </label>
      <div className="dropdown">
        <button className="dropdown-title-button">{selectedOption}</button>
        <div className="dropdown-options">
          {options.map(option => 
            <button key={option} onClick={() => handleClick(option)} >{option}</button>)}
        </div>
      </div>
    </div> 
  )
}

export default DropdownMenu