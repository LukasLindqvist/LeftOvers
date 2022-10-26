import React from 'react'
import { Link } from 'react-router-dom';
function LogInModal() {
  return (
    <div className='logInModalContent'>
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
  )
}

export default LogInModal