import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Error from './pages/Error';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
function App() {
  const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#000",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  }
  return (
    <ThemeProvider theme={theme}>
   <Router>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About></About>}/>
      <Route path='/products' element={<Products></Products>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/product/:id' element={<SingleProduct></SingleProduct>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='*' element={<Error></Error>}/>
    </Routes>
   </Router>
   </ThemeProvider>
  );
}

export default App;
