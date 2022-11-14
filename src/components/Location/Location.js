import React, { useEffect} from 'react';
import './Location.css'
import moment  from 'moment';

const Location = (props)=>  {
    useEffect(()=> {
        //console.log(props)
       // console.log(new Date())
    })
 
    return (
        <div className="locationText" >
            <span>{moment().format('dddd D, MMMM')}</span>
            <br/>
            {props.location[0]},{props.location[1]} 
        </div>
    )
}

export default Location;