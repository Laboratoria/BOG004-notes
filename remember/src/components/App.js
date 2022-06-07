import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from './Login';
import Wall from './Wall';

const App = () => {
        return(
          <Routes> 
            <Route path="/" element={<Login/>} />
            <Route path="/Wall" element={<Wall/>} />
      
          </Routes>
        )
      }
export default App;