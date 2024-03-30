import React from 'react'
import image from '../image/saam.jpg'
import '../global.css'
function Banner() {
  return (
    <div className='Banner'>
<div>
  <h1> Hi i'm Usama</h1>
  <h2>Web developer</h2>
  <p> welcome to my website. </p>
   
</div>
<div>
<img src={image} alt="saam.jpg"/>
</div>
    </div>
  )
}

export default Banner