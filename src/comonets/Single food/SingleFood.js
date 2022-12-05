import React from 'react';
import './SingleFood.css'
const SingleFood = (props) => {
    const {strMeal, strMealThumb,strArea } = props.foods
    const clicks =props.clicks
    return (
        <div className='single-food' onClick={()=>clicks(props.foods)}>
            
            <img src={strMealThumb}alt="" />
            <h2>Name : {strMeal}</h2>
           
            
        </div>
    );
};

export default SingleFood;