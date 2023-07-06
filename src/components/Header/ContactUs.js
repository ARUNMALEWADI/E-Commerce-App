import React, { Fragment, useRef, useState } from 'react'
import classes from './ContactUs.module.css'
import Response from '../Response'


const ContactUs = () => {
    const [SubmitResponse,SetResponse]=useState(null)
    const nameref=useRef();
    const emailref=useRef();
    const phoneref=useRef();

async function POSTdataHandler(CustomerData){
   await fetch('https://ecommerce-abc49-default-rtdb.firebaseio.com/Contactusdata.json',{method:'POST',
    body:JSON.stringify(CustomerData),
    headers:{'customdata':'application/Json'}
    })
  SetResponse({header:"Message sent sucessfully",message:"We will reach out you soon...."});
  }

   const ContactUsHandler=(e)=>{
    e.preventDefault();
    const CustomerData={
        name:nameref.current.value,
        email:emailref.current.value,
        phone:phoneref.current.value,
    }
    POSTdataHandler(CustomerData)
  

   }
const ResponseHandler=()=>{
  SetResponse(null);
}



  return<Fragment>
   <form onSubmit={ContactUsHandler} className={classes.control}>
    <label>Name:</label>
    <input type='text' ref={nameref} required></input>
    <label>Email:</label>
    <input type='email' ref={emailref} required></input>
    <label>PhoneNumber:</label>
    <input type='phonenumber' ref={phoneref} required></input>
    <label>Message:</label>
    <textarea type='text' rows={5}   cols={53} required></textarea>
    <button type='submit' >submit</button>
  </form>
  { SubmitResponse &&<Response response={SubmitResponse} close={ResponseHandler}></Response>

  }
  </Fragment>
  
}

export default ContactUs