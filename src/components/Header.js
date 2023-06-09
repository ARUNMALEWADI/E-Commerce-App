import React, { Fragment, useState } from 'react'
import CartButton from './CartButton'
import AboutUs from './AboutUs'

const Header = () => {
    const [showabout,setabout]=useState(false)
const AboutusHandler=()=>{
    setabout(true);

}
  return <Fragment>
    <button onClick={AboutusHandler}>About</button>
       <CartButton></CartButton>
       {
      showabout && <AboutUs></AboutUs>
       }
  </Fragment>
    
  
}

export default Header