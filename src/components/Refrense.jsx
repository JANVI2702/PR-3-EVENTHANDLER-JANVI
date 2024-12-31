import React, { useRef, useState } from 'react'

function Refrense( { isDarkMode, onToggle }) {
    const name = useRef()
    const [users, setUsers] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.current.value)
        setUsers(name.current.value)
        name.current.value = ""
    }

    return (
        <>
            <h6 className={`${isDarkMode ? 'text-white' : 'text-dark'}`} >Refrense use for listing</h6>
            <form onSubmit={handleSubmit} method='post'>
                <div className="input-group mb-3 d-flex align-items-center">
                  <input
                    type="text"
                    name="username"
                    ref={name}
                    className="form-control"
                    placeholder='use Ref'
                  />
                  <button
                    className={`${isDarkMode ? 'btn btn-info' : 'btn btn-primary'}`}
                  >
                    Submit
                  </button>
                </div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-dark'}`}>{users}</p>
            </form>
            
        </>
    )
}

export default Refrense
