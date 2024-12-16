import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './section/Home';
import Footer from './components/Footer';
import BrandComp from './section/BrandComp';
import Login from './section/loginpage/LoginPage';
import Register from './section/loginpage/Register';
import Defaut from './section/Defaut';
import About from './section/About';
import Contact from './section/Contact';
import Collection from './components/Collection';



function App() {
  return (
    <div className='px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]'>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/create-user' element={<Register/>} />
        <Route path='/sign-in' element={<Login/>} />
        {/* <Route path='/register' element={<Register/>} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path='/brands' element={<BrandComp/>} />
        <Route path='*' element={<Defaut/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/collection' element={<Collection/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
