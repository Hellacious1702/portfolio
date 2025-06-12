import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './HomePage'


import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
       
        <Routes>
          
          <Route path='/portfolio/' element={<HomePage/>}/>
          <Route path='/portfolio/About' element={<About/>}/>
          <Route path='/portfolio/Projects' element={<Projects/>}/>
          <Route path='/portfolio/Contact' element={<Contact/>}/>
        
        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
