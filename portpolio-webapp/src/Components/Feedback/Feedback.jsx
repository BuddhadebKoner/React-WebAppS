import React from 'react'
import './Feedback.css'

export default function Feedback() {
  return (
    <>
      <div className="feedback-container">
        <h3>Drop FeedBack here</h3>
        <input type="text" className='feedback-input-section' placeholder='Your Name And Nickname' />
        <textarea type="" className='feedback-textare-section' placeholder='Your Message' />
        <div className="checkbox-container">
          <input type="checkbox" id="privateMessageCheckbox" />
          <label for="privateMessageCheckbox">Private message</label>
        </div>
        <div className="feedbac-btn-container">
        <button type='submit' className='feedback-btn'>Submit</button>
        </div>
      </div>
    </>
  )
}
