import React from 'react'
import contact from '../image/contact.png'
import '../global.css'

function Contact() {
  return (
    <div id='Contact'>
    <div className="container">
      <div className="content">
        <div className="image-box">
          <img src={contact} alt="" />
        </div>
        <form action="#">
          <div className="topic">Send us a message</div>
          <div class="input-box">
            <input type="text" required />
            <label>Enter your name</label>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="message-box">
            <textarea></textarea>
            <label>Enter your message</label>
          </div>
          <div className="input-box">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Contact