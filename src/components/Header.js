import React, { Fragment } from 'react'
import CartButton from './CartButton'

import {Link} from 'react-router-dom'

const Header = () => {
  


  return <Fragment>
       <Link to="/AboutUs">AboutUs</Link>
     <Link to="/ContactUs">ContactUs</Link>
       <CartButton></CartButton>
  
     

  </Fragment>
    
  
}

export default Header