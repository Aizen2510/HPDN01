import { useState } from 'react';
import './App.css';
import Login from './page/Auth/Login';
import Register from './page/Auth/register';
import Home from './page/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
