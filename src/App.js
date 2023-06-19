import './App.css';
import ProductsProvider from './components/Product/ProductsProvider';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import AboutUs from './components/Header/AboutUs';
import ContactUs from './components/Header/ContactUs';
import ProductArr from './components/Product/ProductArr';
import { AuthContextProvider } from './components/Authentication/AuthContext';
import Home from './components/Header/Home';
import  ReactDOM  from 'react-dom';


function App() {
 
  return<AuthContextProvider>
   <ProductsProvider>
      {ReactDOM.createPortal(<div className='overlay'><Header></Header></div>,document.getElementById('overlays'))}
        <Route path="/Home"><Home></Home></Route>
        <Route path="/AboutUs"><AboutUs></AboutUs></Route>
        <Route path="/ContactUs"><ContactUs></ContactUs></Route>
        <Route path="/products"> <ProductArr></ProductArr></Route>
        {/* <Route path="/Login"><Login></Login></Route> */}
        <Route path="/" exact><Home></Home></Route>
        </ProductsProvider>
        </AuthContextProvider>
 

 
   


 
}

export default App;
