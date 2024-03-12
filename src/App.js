import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Error from './pages/Error';
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About></About>}/>
      <Route path='/products' element={<Products></Products>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct></SingleProduct>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='*' element={<Error></Error>}/>
    </Routes>
   </Router>
  );
}

export default App;
