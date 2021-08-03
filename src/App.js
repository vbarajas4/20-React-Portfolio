import React from 'react';
import "./App.css";
import Nav from './components/Nav';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
// import Resume from "./components/pages/Resume";

function App() {
  return (
    <div>
      <Nav />
      <Greeting />
      <About />
      <Portfolio />
      <Footer />

    
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
