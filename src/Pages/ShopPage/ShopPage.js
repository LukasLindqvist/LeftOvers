import React from 'react';
import './ShopPage.css';

import { Link } from 'react-router-dom';
import returnArrow from '../../Images/Return_Arrow.svg';
import shoppingCart from '../../Images/Cart_icon.svg';
import notificationBell from '../../Images/Notification_Bell.svg';
import foodImg from '../../Images/food_prep_filler.jpg';
function Shop() {

  //Sök funktion
  //FIltrera mellan vanligt/vegetariskt/veganskt
  //Data från backend
  
  return (
    <div className='container'>
        <div className='returnArrow'>
          <Link to='/member'>
            <img src={returnArrow} alt='return arrow'></img>
          </Link>
        </div>
      <div className='shopContent'>

        <div className='notificationIcons'>
          <img src={notificationBell} alt='bell' id='notificationBell'></img>
          <Link to='/checkout'>
            <img src={shoppingCart} alt='cart' id='shoppingCart'></img>
          </Link>
        </div>

        <h2>Shop</h2>
        
        <div className='filterArea'>
          <div className='searchBar'>
            <input type='text' placeholder='Search...'></input>
          </div>
          <div className='checkboxSort'>

            <label htmlFor='vegitarianSort'>Vegitarian
              <input type='checkbox' id='vegitarianSort'></input>
            </label>

            <label htmlFor='veganSort'>Vegan
              <input type='checkbox' id='veganSort'></input>
            </label>

          </div>
        </div>

        <div className='foodCardsContainer'>
          <div className='foodCards'>

          <div className='foodCard'>
              <img src={foodImg} alt='food img'></img>
              <h1>Sesame breaded cod with quinoa, pea puree and feta cheese</h1>
              <h2>Allergenes:</h2>
              <p>Fish, Sesame Seeds, Lactose</p>
              <h2>Ingredients:</h2>
              <p>Cod, Quinoa, Broccoli, Carrots, Cabbage, Paprika, Green peas, Olive Oil, Créme Fraiche, Feta Cheese, Honey, Garlic, Lime, Tomato, Paprika Poweder, Cayenne Pepper</p>
              <button>Buy</button>
            </div>

            <div className='foodCard'>
              <img src={foodImg} alt='food img'></img>
              <h1>Sesame breaded cod with quinoa, pea puree and feta cheese</h1>
              <h2>Allergenes:</h2>
              <p>Fish, Sesame Seeds, Lactose</p>
              <h2>Ingredients:</h2>
              <p>Cod, Quinoa, Broccoli, Carrots, Cabbage, Paprika, Green peas, Olive Oil, Créme Fraiche, Feta Cheese, Honey, Garlic, Lime, Tomato, Paprika Poweder, Cayenne Pepper</p>
              <button>Buy</button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shop