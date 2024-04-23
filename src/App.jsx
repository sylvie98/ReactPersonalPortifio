import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import About from './component/About'
import Service from './component/Service'
import Project from './component/Project'
import Form from './component/Form'
import Home from './component/Home'
const App = () => {
  return (

    <Router>
     <Navigation/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Form' element={<Form/>}/>
      
     </Routes>
     <Footer/>
    </Router>   
  )
}

export default App