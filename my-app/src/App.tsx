import React,{useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import ShowForm from './Components/ShowForm';
import FixedMenuLayout from './Components/FixedMenuLayout';
import AboutConcept from './Components/AboutConcept';
import Hero from './Components/Hero';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Page/Home';
import HomeLoanApplication from './Components/Page/HomeLoanApplication';

function App() {
  return (
<div className="App">
<BrowserRouter>
<FixedMenuLayout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route index element={<Home />} />
          <Route path="/HomeLoanApplication" element={<HomeLoanApplication/>}/>
        
      </Routes>
    </BrowserRouter>

      
      {/* <HomeLoanApplication initialValue ={formFields} formUtilities={formUtilities}/> */}
     {/* <ShowForm fields={formFields}/> */}
    </div>
  );
}

export default App;
