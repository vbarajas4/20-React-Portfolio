import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";


  
function App() {

  document.body.style.backgroundColor = '#d8e1ff';
  
  return (
    <div id='app'>
      
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Nav />
      <Switch>
      <Route path='/' exact component={ About }></Route> 
      <Route path='/portfolio' component={ Portfolio } ></Route>
      <Route path='/contact' component={ Contact }></Route>
      <Route path='/resume'component={ Resume }></Route>
      <Route component = { About }></Route>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;




