import React from 'react';
import "styles/App.css"
import Login from 'pages/login';
import SignIN from './pages/signIn.jsx'
// import Wall from './components/Wall'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
    } from "react-router-dom";

    export default function App() {
        return (
          <div className='App'>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">About</Link>
                  </li>
                  <li>
                    <Link to="/sign-in">Users</Link>
                  </li>
                </ul>
              </nav>
                  <Routes>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signIn">
                  <SignIN />
                </Route>
                {/* <Route path="/">
                  <Home />
                </Route> */}
              </Routes>
            </div>
          </Router>
          </div>
        );
      }

// function App() {
//     const firebase = useFirebaseApp();
//     console.log('Revisando config firebase', firebase)
//     return (
//         <div className = 'App'>
//         <Auth />
//             <Router>
//                 <switch>
//                 <Route path='./home'>
//                     <sign-in></sign-in>
//                 </Route>
//                 </switch>
//             </Router>
//         </div>
//     )
// }

// export default App;

