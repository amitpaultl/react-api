import React, { useEffect, useState } from 'react';
import Single from '../../Single/Single';

import Food from '../Food';
import './Main.css'

const Main = () => {
    const [text, setText] = useState('a');
    const [foods, setFood] = useState([]);
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`)
        .then(res => res.json())
        .then(data => setFood(data?.meals)
       )
    }, [text])

    let [totalName , setTotalNme] = useState([])

    const addName = (id) =>{
        const {strMeal, idMeal} = id;
        const info = {
            strMeal, 
            idMeal
        }
        if(totalName){
            const exe = totalName.find(name => info.idMeal === name.idMeal)
            if(exe){
                setTotalNme( totalName);
                alert('this cadrd Ex')
                
            }else{
                if(totalName.length === 2){
                    setTotalNme( totalName);
                    alert('Stop')
                    console.log(totalName.length);
                }else{
                    const nameFood = [...totalName, info]
                    setTotalNme( nameFood);
                }
            }

            
   



        }else{
            setTotalNme(info)
        }

        
    }

    
    return (

        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <div className="seach-area">
                        <input onChange={(e)=>setText(e.target.value)} type="text" />
                        <button>Search</button>
                        
                        <Single food={foods} addnames={addName}></Single>

                    
                    </div>
                </div>
                <div className="col-md-4">
                    {
                        totalName.map(name => <li>{name.strMeal}</li>)
                    }
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default Main;