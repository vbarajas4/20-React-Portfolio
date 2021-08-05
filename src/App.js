import React from 'react';

import { HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
//import Wrapper from './components/Wrapper';

  
function App() {

  document.body.style.backgroundColor = '#d8e1ff';
  
  return (
    <div id='app'>
      <Nav />
      <HashRouter path='/' exact><About/></HashRouter> 
      <HashRouter path='/portfolio' exact><Portfolio/></HashRouter>
      <HashRouter path='/contact' exact><Contact/></HashRouter>
      <HashRouter path='/resume' exact><Resume/></HashRouter>
      <Footer />
    </div>
  );
}

export default App;




