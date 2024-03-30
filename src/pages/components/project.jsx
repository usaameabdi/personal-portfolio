import React from 'react'
import image1 from '../image/image-1.png'
import image2 from '../image/image-2.jpeg'
import image3 from '../image/image-3.png'
import image4 from '../image/image-4.jpeg'
import image5 from '../image/image-5.jpeg'
import image6 from '../image/image-6.png'
function Project() {
  return (
    <div id='projects' class="containeres">

    <h1 class="heading">my Projects </h1>
    
    <div class="box-containers">
    
        <div class="box-1">
            <img src={image1} alt="" />
            <h3> ecommerce website</h3>       
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
       <img src={image2} alt="" />
            <h3>School management system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
          <img src={image3} alt="" />
            <h3>Elearing website</h3>    
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
           <img src={image4} alt="" />
            <h3>car rental system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
       <img src={image5} alt="" />
            <h3>Library management system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div>
        <div class="box-1">
          <img src={image6} alt="" />
            <h3>Inventory management system</h3>
            <a href="#" class="btn">Live Demo</a>
        </div> 
    </div> 
    </div>
  )
}

export default Project