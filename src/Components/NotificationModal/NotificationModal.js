import React, { useState, useEffect } from 'react'
import './NotificationModal.css'
import deleteIcon from '../../Images/Delete_Icon.svg'
import { notificationArray } from '../../Pages/ShopPage/ShopPage'

export const notificationNumber = []

function NotificationModal({open, onClose}) {
    
    const [notificationAmount, setNotificationAmount] = useState()

    useEffect(() => {
    },[notificationArray.length])
    //return null if modal isnt open

    if (!open) return null
    function removeNotification(arrayPosition){
        notificationArray.splice(arrayPosition, 1 )
        setNotificationAmount(notificationArray.length)
    }

  return (
    <div onClick={onClose} className='notificationCard'>
        <div className='pointer'></div>
        <div className='notificationContent' onClick={(e) => {
            e.stopPropagation()
        }}>

            {notificationArray.map((data, index) => {
                return (
                    <div className='notification' key={index}>
                        <p>{data}</p>
                        <img src={deleteIcon} alt='remove button' onClick={() => removeNotification(notificationArray.indexOf(data))}></img>
                    </div>
                )
            })}
        </div>
    </div>
        
  )
}

export default NotificationModal