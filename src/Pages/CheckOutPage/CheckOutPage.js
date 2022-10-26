import React from 'react'
import './CheckOutPage.css'
import { Link } from 'react-router-dom';

import returnArrow from '../../Images/Return_Arrow.svg'
import deleteIcon from '../../Images/Delete_Icon.svg'
import foodImg from '../../Images/food_prep_filler.jpg'
import klarnaLogo from '../../Images/Klarna.png'
import swishLogo from '../../Images/Swish.png'
import debitCardLogo from '../../Images/American_Express.png'

function CheckOut() {

  // Ta bort varor ur varukorg
  //Tillbaka till shopview vid checkout
  return (
    <div className='container'>
      <div className='returnArrow'>
        <img src={returnArrow} alt='arrow'></img>
      </div>
      
      <div className='checkoutContent'>
        <h1>Checkout</h1>
        <div className='cartItems'>
          <ul>
            <li> 
              <img src={foodImg} alt='foodImg' className='foodImg'/>
              Sesame Breaded cod <p>60kr</p> 
              <img src={deleteIcon} alt='delete Icon' className='deleteIcon'/>
            </li>

            <li>
              <img src={foodImg} alt='foodImg' className='foodImg'/>
              Sesame Breaded cod <p>60kr</p> 
              <img src={deleteIcon} alt='delete Icon' className='deleteIcon'/>
            </li>

            <li><img src={foodImg} alt='foodImg' className='foodImg'/>
              Sesame Breaded cod <p>60kr</p>
              <img src={deleteIcon} alt='delete Icon' className='deleteIcon'/>
            </li>

            <li><img src={foodImg} alt='foodImg' className='foodImg'/>
              Sesame Breaded cod <p>60kr</p> 
              <img src={deleteIcon} alt='delete Icon' className='deleteIcon'/>
            </li>
          </ul>
          <h2>Total: 240kr</h2>
        </div>

      <div className='payment'>
          <h1>Payment alternatives</h1>
          
        <div className='paymentOptions'>
          <ul>            
            <li>
              <img src={klarnaLogo} alt='klarnaLogo'></img>
              <label htmlFor='klarna'>Klarna
                <input type='radio' id='klarna' value='klarna' name='payment'></input>
              </label>
            </li>

            <li>
              <img src={swishLogo} alt='swishLogo'></img>
              <label htmlFor='swish'> Swish
                <input type='radio' id='swish' value='swish' name='payment'></input>
              </label>
            </li>

            <li>
              <img src={debitCardLogo} alt='debitCardLogo'></img>
              <label htmlFor='debitCard'>Debit Card
                <input type='radio' id='debitCard' value='debitCard' name='payment'></input>
              </label>
            </li>
          </ul>
          </div>
            <Link to='/shop'>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOut