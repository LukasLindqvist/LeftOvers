import React from 'react'
import './SellFoodPage.css'
import returnArrow from '../../Images/Return_Arrow.svg'
import { Link } from 'react-router-dom';

import questionMark from '../../Images/Questionmark_Icon.svg'
import addIcon from '../../Images/addIcon.svg'
function SellFood() {

  //formulär som skickas till backend vilket pushas in i array I guess
  
  return (
    <div className='container'>
      <div className='returnArrow'>
        <Link to="/member">
          <img src={returnArrow} alt='Return arrow'></img>
        </Link>
      </div>
      <div className='sellFoodContent'>
        <h1>Sell your food!</h1>
        <div className='sellFoodForm'>
          <div className='txtFields'>
          <label htmlFor='foodTitle'>Title</label>
            <input type="text" id='foodTitle'></input>

          <label htmlFor='foodAllergenes'>Allergenes</label>
            <input type="text" id='foodAllergenes'></input>
            <img src={questionMark} alt='questionmark'></img>

          <label htmlFor='foodIngredients'>Ingredients</label>
            <input type="text" id='foodIngredients'></input>
            <img src={questionMark} alt='questionmark'></img>
          </div>

          <select id='locations'>
            <option>Location</option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className='checkboxes'>
            <label htmlFor='meatBox'>Meat/Fish</label>
              <input type='checkbox' id='meatBox'></input>
              <span></span>

            <label htmlFor='vegitarianBox'>Vegitarian</label>  
              <input type='checkbox' id='vegitarianBox'></input>
              <span></span>

            <label htmlFor='veganBox'>Vegan</label>
              <input type='checkbox' id='veganBox'></input>
              <span></span>
          </div>
          <div className='addPhoto'>
            <p>Add photo</p>
            <img src={addIcon} alt='+'></img>
          </div>
            <div className='photoPreview'></div>

          <Link to='/shop'>
            Sell
          </Link>  
        </div>
      </div>
    </div>
  )
}

export default SellFood