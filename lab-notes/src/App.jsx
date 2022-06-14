import React from 'react';
import "styles/App.css"
// import app from './services/firebaseConfig';

import { SignIn } from './pages/SignIn'
//import { SignOut } from './pages/SignOut'
import { Timeline } from './pages/Timeline'

import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
//import Navigator from 'components/navigate';

    const App = () => {
      return(
        <Router>
        {/* <Navigator></Navigator> */}
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/Timeline' element={<Timeline />}/>
          </Routes>
        </Router>
      )
  };


export default App;

