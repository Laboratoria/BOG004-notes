import React from 'react';
import "./App.css"
import Login from 'pages/login';
import {
    useFirebaseApp
} from 'reactfire';
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from './pages/sign-in'
// import Wall from './components/Wall'


function App() {
    const firebase = useFirebaseApp();
    console.log('Revisando config firebase', firebase)
    return (
        <div className = 'App'>
        <Auth />
            <Router>
                <switch>
                <Route path='./home'>
                    <sign-in></sign-in>
                </Route>
                </switch>
            </Router>
        </div>
    )
}

export default App;

