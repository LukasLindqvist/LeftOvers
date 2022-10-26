import React from 'react'
import './SignUpForm.css'
import foodBag from '../../Images/Takeaway_Bag.png'
import { Link } from 'react-router-dom';

function SignUpForm() {
  return (
    <div className='signUpForm'>
        <div className='left' style={{backgroundImage:`url(${foodBag})`}}>
        </div>
        <div className='right'>
            <label htmlFor="emailField">Email</label>
            <input type="text" id="emailField"></input>
            <label htmlFor="usernameField">Username</label>
            <input type="text" id="usernameField"></input>
            <label htmlFor="passwordField">Password</label>
            <input type="password" id="passwordField"></input>
            <Link to="/">Sign Up</Link>
        </div>
      </div>
  )
}

export default SignUpForm