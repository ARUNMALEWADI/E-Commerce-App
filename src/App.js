import './App.css';
import ProductsProvider from './components/Product/ProductsProvider';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import AboutUs from './components/Header/AboutUs';
import ContactUs from './components/Header/ContactUs';
import ProductArr from './components/Product/ProductArr';
import Home from './components/Header/Home';
import  ReactDOM  from 'react-dom';
import { useState ,useEffect, Fragment, useContext} from 'react';
import AuthContext from './components/Authentication/AuthContext';



function App() {




       return   <Fragment>
            {ReactDOM.createPortal(<div className='overlay'><Header></Header></div>,document.getElementById('overlays'))}
            <Route path="/Home"><Home></Home></Route>
        <Route path="/AboutUs"><AboutUs></AboutUs></Route>
        <Route path="/ContactUs"><ContactUs></ContactUs></Route>
        <Route path="/" exact><Home></Home></Route>
      
      
              <Route path="/products"> <ProductArr></ProductArr></Route>
        {/* <Route path="/Login"><Login></Login></Route> */}
       
     
        </Fragment>

 
   


 
}

export default App;
