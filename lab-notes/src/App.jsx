import React from 'react';
import "styles/App.css"
import app from './services/firebaseConfig';

import { SignIn } from './pages/SignIn'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


    const App = () => {
      return(
        <Router>
          <Routes>
            <Route path='' element={<SignIn />}/>
            <Route path='/' element={<SignIn />}/>
          </Routes>
        </Router>
         // <p>hola</p>
      )
  };

export default App;

