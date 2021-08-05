import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
//import { Route } from 'react-router-dom';
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
      <BrowserRouter>
      <Switch>
      <Route path='/' exact><About/></Route> 
      <Route path='/portfolio' exact><Portfolio/></Route>
      <Route path='/contact' exact><Contact/></Route>
      <Route path='/resume' exact><Resume/></Route>
      <Route component = { About }></Route>
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;




