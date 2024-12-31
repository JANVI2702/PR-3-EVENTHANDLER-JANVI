import React from 'react'

function List( { isDarkMode, onToggle }) {
  const users = ["Ram", "Sita"]
  return (
    <>
      <h6 className={`${isDarkMode ? 'text-white' : 'text-dark'}`}>Key use for listing</h6>
      <ul>
        {users.map((user, index) => {
          return (

            <li key={index} className={`${isDarkMode ? 'text-white' : 'text-dark'}`}> {user}</li>
          )
        })}
      </ul>
      
     
    </>
  )
}

export default List
