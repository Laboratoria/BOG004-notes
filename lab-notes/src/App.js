import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Home";
import Register from "./view/Register";
import Notes from "./view/Notes";
import NotFound from "./view/NotFound";
import Navigator from "../src/components/Navigator";
function App() {
  return (
    <BrowserRouter>
    <Navigator> </Navigator>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/register"
          element={<Register/>}
        />
        <Route
          path="/notes"
          element={<Notes/>}
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
