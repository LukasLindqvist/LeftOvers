import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NotificationModal from '../../Components/NotificationModal/NotificationModal';
import './ShopPage.css';

import { Link } from 'react-router-dom';
import returnArrow from '../../Images/Return_Arrow.svg';
import shoppingCart from '../../Images/Cart_icon.svg';
import notificationBell from '../../Images/Notification_Bell.svg';

export const cartArray = []
export const notificationArray = []

function Shop() {

  
const [updatePage, setUpdatePage] = useState()
const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/foodBoxes')
  .then(res => {
    setData(res.data)
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  },[updatePage])

  
  
  //useState for search funciton
  const [searchTerm, setSearchTerm] = useState('')

  //Sorting via checkboxes
  function checkboxSort(event){
    let boxValue = event.target.checked

    if (boxValue === true){
      setSearchTerm(event.target.value)
    }

    if (boxValue === false){
      setSearchTerm('')
    }
  }


  //Add food to cart
  function addToCart(elementId){
    axios.get(`http://localhost:3001/foodBoxes/${elementId}`)
    .then(res => {
      cartArray.push(res.data)
      
      axios.delete(`http://localhost:3001/foodBoxes/${elementId}`)
      .then(res => {
        console.log("added to cart")
        console.log(cartArray)
        setUpdatePage(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    })
    .catch(err => {
      console.log(err)
    })
    
  } 

  const [openModal, setOpenModal] = useState(false)

  const displayModal = () =>{
    if (openModal === true){
      setOpenModal(false)
    }else{
      setOpenModal(true)
    }
  }

  const [notificationCount, setNotificationCount] = useState('')
  
  useEffect(() => {
    setNotificationCount(notificationArray.length)
    console.log(notificationArray.length)
  },[notificationArray.length])

  return (
      <>
    <div className='container'>
        <div className='returnArrow'>
          <Link to='/member'>
            <img src={returnArrow} alt='return arrow'></img>
          </Link>
        </div>
      <div className='shopContent'>

        <div className='notificationIcons'>
          <div className='notificationContainer' onClick={() => displayModal()}>
          <img src={notificationBell} alt='bell' id='notificationBell'></img>
          <p id='notificationCount'>{notificationCount}</p>
          </div>
          <Link to='/checkout'>
            <img src={shoppingCart} alt='cart' id='shoppingCart'></img>
            <p id='cartCount'>{cartArray.length}</p>
          </Link>
        </div>
        <NotificationModal open = {openModal}/>

        <h2>Shop</h2>
        
        <div className='filterArea'>
          <div className='searchBar'>
            <input type='text' placeholder='Search...' id='searchBar' onChange={event => {setSearchTerm(event.target.value)}}></input>
          </div>
          <div className='checkboxSort'>
  
            <label htmlFor='vegitarianSort'>Vegitarian
              <input type='checkbox' id='vegitarianSort' value='Vegitarian' 
              onChange={event => {checkboxSort(event)}} ></input>
            </label>

            <label htmlFor='veganSort'>Vegan
              <input type='checkbox' id='veganSort' value='Vegan'
              onChange={event => {checkboxSort(event)}}></input>
            </label>

          </div>
        </div>

        <div className='foodCardsContainer'>
          <div className='foodCards'>


          {data.filter((data) => { 
            if (searchTerm === ""){
              return data
            } else if (data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.foodType.toLowerCase().includes(searchTerm.toLowerCase())){
              return data
            }
          }).map((data) => {
            return(
              <React.Fragment key={data._id}>
                <div className='foodCardWrapper'>
                  <div className='foodCardContent'>
                    <img src={data.photo} alt='food img'></img>
                    <h1>{data.title}</h1>
                    <h2>Allergenes:</h2>
                    <p>{data.allergenes}</p>
                    <h2>Ingredients:</h2>
                    <p>{data.ingredients}</p>
                    <button onClick={() => addToCart(data._id)}>Buy</button>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Shop