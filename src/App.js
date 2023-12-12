import React from 'react'
import {BrowserRouter as Router,Routes,Route, NavLink} from 'react-router-dom'
import Home from './Home'
import PaymentSuccess from './PaymentSuccess'
import Navbar from './Navbar'
import './App.css';
import Register from './Register'
import Events from './Events/Events'
import Comp from './comp/Comp'
import Wpd from './wpd/WPD'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/events' element={<Comp/>}/>
        <Route path='/competitions' element={<Events/>}/>
        <Route path='/workshops' element={<Wpd/>}/>
        
      </Routes>
    </Router>
  )
}

export default App