import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Card from './components/Card/Card';
import Features from './pages/Features';
import Privacy from './pages/Privacy';
import Help from './pages/Help';
import Security from './pages/Security';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/card" element={<Card />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/security" element={<Security />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
