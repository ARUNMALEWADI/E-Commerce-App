import './App.css';
import ProductsProvider from './components/ProductsProvider';
import Header from './components/Header';
import {Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductArr from './components/ProductArr';

function App() {
 
  return <ProductsProvider>
            <Header></Header>
          <Route path="/AboutUs"><AboutUs></AboutUs></Route>
        <Route path="/ContactUs"><ContactUs></ContactUs></Route>
        <ProductArr></ProductArr>
        
   </ProductsProvider>
 

 
   


 
}

export default App;
