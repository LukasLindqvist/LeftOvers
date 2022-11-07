import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SellFoodPage.css'
import returnArrow from '../../Images/Return_Arrow.svg'
import shop from '../../Images/shop.svg'
import shopDirection from '../../Images/shopThisWay.svg'
import questionMark from '../../Images/Questionmark_Icon.svg'
import addIcon from '../../Images/addIcon.svg'

import { notificationArray } from '../ShopPage/ShopPage';

function SellFood() {

  const [imgData, setImgData] = useState("")
  const [message, setMessage] = useState("")
  //post data to api
  const postData = (e) => {
    let foodValue = document.getElementById('foodTitle').value
    let allergenesValue = document.getElementById('foodAllergenes').value
    let ingredientsValue = document.getElementById('foodIngredients').value
    let locationValue = document.getElementById('locations').value
    let foodTypeValue = document.querySelector('input[name="foodType"]:checked').value
    
    console.log(imgData)
    const form = document.getElementById('sellFoodForm')
    
    e.preventDefault()
    axios.post('http://localhost:3001/foodBoxes',{
      title: foodValue,
      allergenes: allergenesValue,
      ingredients: ingredientsValue,
      location: locationValue,
      foodType: foodTypeValue,
      photo: imgData
    })
    .then(res => {
      console.log(res.status);
      
      if (res.status === 201){
        setMessage("Food has been published")
        //remove previous submited img file from usestate
        setImgData("")
        
        //remove old image preview on submit
        let preview = document.getElementById('imgPreview')
        preview.src = ''
        
        //Add notification that food is put up on buy food page
        let random = (Math.random() + 1).toString(36).substring(4)
        notificationArray.push(`Your code to sell "${foodValue}" is: ${random}, locker:gmp#286 `)


        //reset form
        form.reset()
      }
    })
    .catch(error => {
      console.log(error)
        setMessage("Please fill all fields")
    })
  }

 
  /* preview photo */
  function showPreview(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("imgPreview")
      preview.src = src
      preview.style.display = "block"
    }

    /* convert file to data */
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onloadend = function() {
      const dataImg = reader.result
      setImgData(dataImg)
    }
    reader.readAsDataURL(file)
  }



  return (
    <div className='container'>
      <div className='returnArrow'>
        <Link to="/member">
          <img src={returnArrow} alt='Return arrow'></img>
          
        </Link>
      </div>

      <div className='shopPath'>
      <Link to="/shop">
          <img src={shop} alt='shopPage' id='shopIcon'></img>
      </Link>
        <img src={shopDirection} alt='arrow' id='shopDirection'></img>
      </div>

      <div className='sellFoodContent'>
        <h1>Sell your food!</h1>
        <form onSubmit={postData} id='sellFoodForm'>
        <div className='sellFoodForm'>
          <div className='txtFields'>
          <label htmlFor='foodTitle'>Title</label>
            <input type="text" id='foodTitle' ></input>

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
              <input type='radio' id='meatBox' value='Meat/Fish' name='foodType' defaultChecked></input>
              

            <label htmlFor='vegitarianBox'>Vegitarian</label>  
              <input type='radio' id='vegitarianBox' value='Vegitarian' name='foodType'></input>
              

            <label htmlFor='veganBox'>Vegan</label>
              <input type='radio' id='veganBox' value='Vegan' name='foodType'></input>
              
          </div>
          <div className='addPhoto'>
            <label htmlFor='addFile'>Add photo

              <img src={addIcon} alt='+'></img>
              <input type='file' id='addFile' accept='image/*' onChange={(event) => showPreview(event)}></input>  
            </label>
          </div>
            <div className='photoPreview'>
              <img src='' alt='' id='imgPreview'></img>
            </div>

          <span>{message}</span>  
          <button type='submit'>Sell</button>
        </div>
        
        </form>
      </div>
    </div>
  )
}

export default SellFood