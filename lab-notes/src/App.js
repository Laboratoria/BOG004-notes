import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Home";
import Notes from "./view/Notes";
import NotFound from "./view/NotFound";
import Navigator from "../src/components/Navigator";
import React from "react"; 
function App() {
  return (
    <BrowserRouter>
    <Navigator> </Navigator>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="*" element={<NotFound/>}/>x
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
