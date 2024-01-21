import React, { useState } from 'react'
import './Enquiry.css'



function Enquiry() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[message,setMessage]=useState('')

    function enqbutton(){
        console.log(name,email,phone,message);
        alert('Your query has been submitted');
    }

  return (
    <div className='enquiry'>
      <div className='enquiryleft'>
        <img className='enquiryleft' src='./enquiry.png' />
      </div>
      <div className='enquiryright'>
        <h1>Submit your query</h1>
        <p>Don't leave confused. Just seek a free
            consultation.</p>
        <form>
            <input onChange={(e=>{
                setName(e.target.value)
            })} type="text" placeholder="Name" className='enquiryinput' />
            <input onChange={(e=>{
                setEmail(e.target.value)
            })} type="text" placeholder="Email" className='enquiryinput' />
            <input onChange={(e=>{
                setPhone(e.target.value)
            })} type="text" placeholder="Phone" className='enquiryinput' />
            <input onChange={(e=>{
                setMessage(e.target.value)
            })} type="text" placeholder="Message" className='enquiryinput' />
            <button className='enquiryinput' id='enquirybutton' onClick={enqbutton}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Enquiry
