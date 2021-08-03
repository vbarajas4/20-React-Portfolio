import React, { useState } from 'react';
import "./App.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
//import Wrapper from './components/Wrapper';

function App() {

  // const [currentPage, setCurrentPage] = useState('About');
  
  // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //   return <Contact />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
      

    
    </div>
  );
}

export default App;






//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//     </div>
//   );
// }
