import React from 'react'
// import { Form, Link } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Service from './Service'
import Project from './Project'
import Form from './Form'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    {/* <Navigation/> */}
    <About/>
    <Service/>
    <Project/>
    <Form/>
    {/* <Footer/> */}
    </>
  )
}

export default Home