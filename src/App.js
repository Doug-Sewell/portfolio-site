import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import JobExperience from './Components/JobExperience/JobExperience';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Route path="/" exact component={Header} />
        <Route path="/professional-experience" exact component={JobExperience} />
        <Route path="/Contact" exact component={Contact} />
    </BrowserRouter>
  );
}

export default App;
