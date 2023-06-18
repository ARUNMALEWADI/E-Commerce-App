import ReactDOM  from 'react-dom';
import classes from './Modal.module.css'
import { Fragment } from 'react';
 const Backdrop=(props)=>{
   return <div className={classes.backdrop}>
    <div >
     
     <div  className={classes.cart}>
        {props.children}
    </div>
    <div   onClick={props.close}>
   
    </div>

      

    </div>
    
   </div>
}



const Modal=(props)=>{
    return <Fragment>
   
   { ReactDOM.createPortal(<Backdrop close={props.close}>{props.children}</Backdrop>,document.getElementById('overlay'))}

</Fragment>
}
export default Modal;
