import { useState } from 'react';
import './App.css';
import Home from './page/home';
import Dashboard from './page/Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
