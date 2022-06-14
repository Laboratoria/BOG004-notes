import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import  Login  from "../components/Login";
import Wall from "../components/Wall";
import { Router, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from 'history';
// import {Router} from '../componentes/App.js'

jest.mock("../firebase/firebase.js");

test("router", async () => {
    const history = createMemoryHistory({ initialEntries: [''] });
  render(<Router navigator={history} location={history.location} > <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="/Wall" element={<Wall/>} />
   </Routes></Router>);
  fireEvent.click(screen.getByText("google"));
  await waitFor(() => screen.getByText(/Inicia Sesion con/i));
  expect(screen.getByText(/Bloc de Notas/i)).toBeInTheDocument();
});
