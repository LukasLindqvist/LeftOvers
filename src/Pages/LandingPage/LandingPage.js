import React from 'react';
import './LandingPage.css';
import HomeMade from '../../Images/HomeMadeIcon.svg';
import { Link } from 'react-router-dom';
import LogInModal from '../../Components/LogInModal';

function LandingPage() {
  return (
    <>
    <div className='container'>
      <div className='logInModal'>
        <LogInModal/>
      </div>
        <div className='landingPageContent'>
          <h1 id='firstSentence'>Become a </h1>
          <h2 id='secondSentence'>Contribute to</h2>
          <h2 id='thirdSentence'>Reduced </h2>
          <h2 id='fourthSentence'>Increased </h2>
          <img src={HomeMade} alt='Home made logo'></img>
          <h3 id='signUp'><Link to="/SignUp">Sign Up</Link> today</h3>
          <h4>Already registred? <a href='filler'>Log in</a></h4>
        </div>
    </div>
    
    </>

  )
}

export default LandingPage