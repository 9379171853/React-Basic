import React from 'react';
import './Person.css'

const person = (props)=>{
    return(
    <div className="Person">
     <p onClick={props.click}>I am a {props.name} and my age is { props.age } old!.</p>
   {/* <p>I am a Person! and my age is { Math.floor(Math.random() * 30) } old!.</p> */}
   <p>{props.children}</p>  
   <input type="text" onChange={props.changed} value={props.name} /> 
    </div>
     )    
}

export default person;