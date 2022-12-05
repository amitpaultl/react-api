import React from 'react';
import SingleFood from '../Single food/SingleFood';
import './single.css'

const Single = (props) => {
    const data=props.food
    const addName =props.addnames
    return (
        <div className='grid-text'>
            {
                data.map(food => <SingleFood clicks={addName} foods={food} key={food.idMeal}></SingleFood>)
            }
            
        </div>
    );
};

export default Single;