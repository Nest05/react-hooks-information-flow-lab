import React from 'react'

const Header = ({mode, onDarkModeClick}) => {
  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}

export default Header
