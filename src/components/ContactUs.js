import React, { useRef } from 'react'


const ContactUs = () => {
    const nameref=useRef();
    const emailref=useRef();
    const phoneref=useRef();

async function POSTdataHandler(CustomerData){
   const response=await fetch('https://ecommercedatabase-bf756-default-rtdb.firebaseio.com/Contactusdata.json',{method:'POST',
    body:JSON.stringify(CustomerData),
    headers:{'customdata':'application/Json'}
    })
    console.log(response);
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




  return <form onSubmit={ContactUsHandler}>
    <label>Name</label>
    <input type='text' ref={nameref}></input>
    <label>Email</label>
    <input type='email' ref={emailref}></input>
    <label>PhoneNumber</label>
    <input type='phonenumber' ref={phoneref}></input>
    <button type='submit'>submit</button>
  </form>
}

export default ContactUs