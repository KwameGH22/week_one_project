import React from 'react'
import "../styles/columns.css";





function Cars({image, name, info}) {
  return (
    <div className= "column">
       <div className='container'>
            <img src = {image}
            alt= "car"
            className='images'
            />
            <h2 className='heading'>{name}</h2>
            <p className='text'>{info}</p>
            <button className='btn'>Learn More</button>
      </div> 
    </div>
  )
}

export default Cars
