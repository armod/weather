import React from 'react'

const Navbar = ({ weather, changeCity }) => {
  return (
    <div>
      {weather.map((item) => {
        const { id_stacji, stacja } = item
        // console.log(item.stacja)
        return (
          <button key={id_stacji} onClick={changeCity} value={id_stacji}>
            {stacja}
          </button>
        )
      })}
    </div>
  )
}

export default Navbar
