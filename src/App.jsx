import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './HomePage'


import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import About from './About'
import Projects from './Projects'

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
        
        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
