import React from 'react'
import './MemberLandingPage.css'
import { Link } from 'react-router-dom';


/* import images */
import sellFoodBG from '../../Images/Meal_Prep.jpg'
import buyFoodBG from '../../Images/Locker.jpg'

function MemberLandingPage() {
    
  return (
    <>
    <div className='container'>
      <div className='memberLandingPageContent'>

      <h1>Hello and welcome back Benny!</h1>
        <div className='sellFood' style={{backgroundImage:`url(${sellFoodBG})`}}>
          <h2>Do you have leftover Food that was going to waste? Why not sell it instead!</h2>
          <Link to="/SellFood">Sell Food</Link>
        </div>

        <div className='buyFood' style={{backgroundImage:`url(${buyFoodBG})`}}>
          <h2>Find us at a food store near you! Get a luch or a dinner for just 60kr, Meanwhile contribution to reduced food waste</h2>
          <Link to="/Shop">Buy Food</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default MemberLandingPage