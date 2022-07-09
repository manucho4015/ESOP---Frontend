import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

// import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

//import components
import NavCom from './components/NavCom';

const App = () => {
  return (
    <Router>
      <NavCom />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
