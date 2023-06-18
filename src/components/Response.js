import React from 'react'
import classes from './Response.module.css'
import Modal from './Modal/Modal'

const Response = (props) => {
  console.log(props.response);
  return <Modal close={props.close}>
    <div className={classes.div}>
    <h3>{props.response.header}</h3>
    <p>{props.response.message}</p>
    <button onClick={props.close}>OK</button>
  </div>
  </Modal>
  
  
}
export default Response