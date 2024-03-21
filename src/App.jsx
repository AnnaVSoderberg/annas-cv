import React from "react"
import {Route, Routes, Link} from "react-router-dom"
import Header from "./Header"
import About from "./About"
import Home from "./Home"
import Arbete from "./Arbete"
import Utbildning from "./Utbildning"
import Portfolio from "./Portfolio"
import Footer from "./Footer"
import Modal from "./Modal"



function App() {
  return(
  <>
  <Header/>
  <Modal/>
  <div>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/arbete" element = {<Arbete />}/>
        <Route path="/utbildning" element = {<Utbildning />}/>
        <Route path="/portfolio" element = {<Portfolio />}/>
      </Routes>
    </div>
  <Footer/>
  </>
  )}

export default App
