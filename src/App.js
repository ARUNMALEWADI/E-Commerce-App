import './App.css';
import ProductArr from './components/ProductArr';
import ProductsProvider from './components/ProductsProvider';
import Header from './components/Header';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import AboutUs from './components/AboutUs';
const routers=createBrowserRouter([
  { path:'/About' ,element:<AboutUs/>}
,]);


function App() {
 
  return <ProductsProvider>
    <RouterProvider router={routers}/>
    <Header></Header>
   <ProductArr></ProductArr>
   </ProductsProvider>
 

 
   


 
}

export default App;
