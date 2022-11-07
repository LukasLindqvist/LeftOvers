import React, {useState, useEffect} from 'react'
import './CheckOutPage.css'
import { Link } from 'react-router-dom';
import { cartArray, notificationArray } from '../ShopPage/ShopPage';


import returnArrow from '../../Images/Return_Arrow.svg'
import deleteIcon from '../../Images/Delete_Icon.svg'
import klarnaLogo from '../../Images/Klarna.png'
import swishLogo from '../../Images/Swish.png'
import debitCardLogo from '../../Images/American_Express.png'
import axios from 'axios';


function CheckOut() {

  const [cart,setCart] = useState([])
  const[updatePage, setUpdatePage] = useState()
  useEffect(() => {
    setCart(cartArray)
    setUpdatePage(cartArray)
  },[updatePage])


  function removeFromCart(arrayPosition){

    

    //re add the foodbox to the backend again
    axios.post('http://localhost:3001/foodBoxes',{
      title: cart[arrayPosition].title,
      allergenes: cart[arrayPosition].allergenes,
      ingredients: cart[arrayPosition].ingredients,
      location: cart[arrayPosition].location,
      foodType: cart[arrayPosition].foodType,
      photo: cart[arrayPosition].photo
    })
    .then(res => {
      console.log(res.status);
      //remove element from cart and update page
      cart.splice(arrayPosition,1)
      setUpdatePage(res.status)
    })
    .catch(err => {
      console.log(err)
    })  
  }


  const [cartItems, setCartItems] = useState('')

  useEffect(() => {
    setCartItems(
      cart.map((data) => {
        return (
          <React.Fragment key={data._id}>
          <li>
            <img src={data.photo} alt='foodImg' className='foodImg'></img>
            <p id='foodTitle'>{data.title}</p> <p id='foodPrice'>60kr</p>
            <img src={deleteIcon} alt='deleteIcon' id='deleteIcon' onClick={() => removeFromCart(cart.indexOf(data))}></img>
          </li>
        </React.Fragment>
        )
      })
      )
    },[updatePage])
  

    function buyFood(){
      //empty the whole cart of items
      cart.length = 0

      let random = (Math.random() + 1).toString(36).substring(4)
      notificationArray.push('You have one order ready for pickup, Code: ' + random + ' Locker:#gmp286')
      
      //todo send response message to array for alert modal
    }

  return (
    <div className='container'>
      <div className='returnArrow'>
        <Link to='/shop'>
          <img src={returnArrow} alt='arrow'></img>
        </Link>
      </div>
      
      <div className='checkoutContent'>
        <h1>Checkout</h1>
        <div className='cartItems'>
          <ul>
            {cartItems}
          </ul>
          <h2>Total: {cartArray.length * 60} kr</h2>
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
            <Link to='/shop' onClick={() => buyFood()}>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOut