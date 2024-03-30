import React from 'react'
import im from '../image/usama.jpg'
import '../global.css'
function About() {
  return (
    <div id='About'className='About'>
        <div>
          <img src={im} alt="" />
        </div>
        <div>
          <h1> About me </h1>
          <h3>web developer</h3>
          <p>Hi everyone. My name is Usaame Abdi Ibrahim. I live in Mogadishu. </p>
            <p> I was born in 2/12/2005. Iam a student in university. Iam learning Computer application.</p>
            <p> I learn from it jamuuriya university. I love football ⚽. I can play No:6. Iam the best No:6 in  My team.</p>
            <p> I want  be  professional  Player.   When  was started football. I can play No:2. </p>
            <p> As well. I love  in my education because I want be the  best  programmer in my country.  I want proud in country.</p>
        </div>
    </div>
  );
}

export default About