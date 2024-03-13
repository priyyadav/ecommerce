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
import Footer from './components/Footer';
import Login from './pages/Login';
function App() {
  const theme={
    colors: {
      heading: "#dcdce7c4",
      text: "#dcdce7c4",
      white: "#000",
      whites: "#fff",
      black: "#212529",
      helper: "#d06d11",
      back: "#000",
      bg: "#191919",
      footer_bg: "#000",
      btn: "#d06d11",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#000fff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgb(214 200 200 / 16%) 0px 1px 4px",
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
      <Route path='/login' element={<Login></Login>}/>
      <Route path='*' element={<Error></Error>}/>
    </Routes>
    {/* <Footer></Footer> */}
   </Router>
   </ThemeProvider>
  );
}

export default App;
