import React from 'react'
import { Link } from 'react-router-dom';
import './LogInModal.css'
function LogInModal({open, onClose}) {

  if(!open) return null

  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation()
      }} className='logInModalContent'>
          <h1>Welcome back!</h1>
              <div className='signInForm'>
                  <div className='inputFields'>
                      <label htmlFor="emailField">Email</label>
                      <input type="text" id='emailField'></input>
                      <label htmlFor="passwordField">Password</label>
                      <input type="password" id='passwordField'></input>
                  </div>
                  {/* Need confirmation that login = true before going to member landing page */}
                  <Link to="/Member">
                    <button>Sign In</button>
                  </Link>
                  <p>Forgot password? </p>
              </div>
      </div>
    </div>
  )
}

export default LogInModal