import React from 'react'
import Map from './components/Map/Map'
import Mapmain from './components/Map/Mapmain'
import { Routes, Route } from 'react-router-dom'
import BlogPage from "./components/Blog/BlogPage"
import HomePage from "./components/Home/HomePage"
import LoginPage from "./components/Login/LoginPage"
import AboutPage from "./components/About us/AboutPage"
import ContactPage from "./components/Contact/ContactPage"
import RegisterPage from "./components/Register/RegisterPage"
import DestinationsPage from "./components/Destinations/DestinationsPage"
import Privacypolicypage from './components/Privacy Policy/Privacypolicypage'
import Destinationdetail from './components/Destinationsdetail/Destinationdetailpage'
import Termsconditionspage from "./components/Terms and conditions/Termsconditionspage"
import Destinationdetailmain from './components/Destinationdetailmain/desitnationdetailmain'


const App = () => {
  return (
   <>
   <Routes>
    <Route path='/map' element={<Map/>}></Route>
    <Route path='/home' element={<HomePage/>}></Route>
    <Route path='/blog' element={<BlogPage/>}></Route>
    <Route path='/mapmain' element={<Mapmain/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/policy' element={<Privacypolicypage/>}></Route>
    <Route path='/terms' element={<Termsconditionspage/>}></Route>
    <Route path='/destination' element={<DestinationsPage/>}></Route>
    <Route path='/destinationdetailmain' element={<Destinationdetailmain/>}></Route>
    <Route path='/destinations/:destinationname' element={<Destinationdetail/>}></Route>
   </Routes>


   </>
  )
}

export default App