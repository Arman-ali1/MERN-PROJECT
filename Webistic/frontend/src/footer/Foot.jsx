import React from 'react'
import './foot.css'

function Foot() {
  return (
    <div>
      <div className='foot'>
        <div className='footleft'> 
          <div> 
            {/* <img id='footimg' src='./1.png'></img> */}
          </div>
          <div className='arman'>
          {/* <img className='locologo' src='./Picture6.png'></img> */}
            <h3 className='logotext'>Lorem ih3sum dolor sit amet, consectetur adih3iscing elit.</h3>
            <h3 className='logotext'> webistic.in@gmail.com</h3>
            <h3 className='logotext'> Sales Enquiry: +91 8580550866</h3>
            <h3 className='logotext'>Talent Acquisition: +91 8580550866</h3>
            <h3 className='logotext'>© 2023 Webistic  </h3>
          </div>
          
        </div>
        <div className='footmiddle'>
        <div className='asdf'>
          <h1>Consulting</h1>
          <h1 className='logotext'>Product Design</h1>
          <h1 className='logotext'>Data Science</h1>
          <h1 className='logotext'>Cyber Security</h1>
          <h1 className='logotext'>Staff Augmentation</h1>
          </div>
        </div>

        <div className='footright'>
        <div className='asdf'>
          <h2>Contact Us</h2>
          <h2 className='logotext'>Portfolio</h2>
          <h2 className='logotext'>Services</h2>
          <h2 className='logotext'>Career</h2>
          <h2 className='logotext'>Terms & Condition</h2>
          <h2 className='logotext'>Privacy Policy</h2>
          <h2 className='logotext'>Pricing</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foot
