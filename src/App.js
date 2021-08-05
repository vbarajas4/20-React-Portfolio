import React from 'react';

import { Route } from 'react-router-dom';
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
      <Route path='/' exact><About/></Route> 
      <Route path='/portfolio' exact><Portfolio/></Route>
      <Route path='/contact' exact><Contact/></Route>
      <Route path='/resume' exact><Resume/></Route>
      <Footer />
    </div>
  );
}

export default App;




