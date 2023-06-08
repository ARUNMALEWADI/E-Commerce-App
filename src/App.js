import './App.css';
import ProductArr from './components/ProductArr';
import CartButton from './components/CartButton';
import ProductsProvider from './components/ProductsProvider';
function App() {
  
  return <ProductsProvider>
   <ProductArr></ProductArr>
   <CartButton></CartButton>
   </ProductsProvider>
   


 
}

export default App;
