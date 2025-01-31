import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./components/Home/HomePage"
import LoginPage from "./components/Login/LoginPage"
import RegisterPage from "./components/Register/RegisterPage"
import ServicesPage from "./components/Services/ServicesPage"
import AboutPage from "./components/About us/AboutPage"
import BlogPage from "./components/Blog/BlogPage"
import ContactPage from "./components/Contact/ContactPage"

const App = () => {
  return (
   <>
   <Routes>

    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/services' element={<ServicesPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/blog' element={<BlogPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}></Route>
   </Routes>


   </>
  )
}

export default App