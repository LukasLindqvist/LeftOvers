import React from 'react'
import './SignUpPage.css'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import returnArrow from '../../Images/Return_Arrow.svg'
import { Link } from 'react-router-dom';

function SignUp() {
  //Lösen och username skickas till backend?

  return (
    <div className='container'>
      <div className='returnArrow'>
        <Link to="/">
          <img src={returnArrow} alt="return"></img>
        </Link>
      </div>
      <div className='welcomeTxt'>
        <h2>Welcome to LeftOver</h2>
        <h3>Join our other members and contribute to reduced </h3>
      </div>
      <SignUpForm/>
    </div>

  )
}

export default SignUp