import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './HomePage'


import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
       
        <Routes>
          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<About/>}/>
        
        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
