import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../ContextApi/StoreContext'

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext)


  return (
    <div className='food-display'>
        
    </div>
  )
}

export default FoodDisplay