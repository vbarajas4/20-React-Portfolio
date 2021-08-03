import React from 'react';

export default function Nav() {
    
  
  
    return (

      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 fs-2 fw-bold p-2">Vanessa Maldonado</span>
  
            <ul className="nav justify-content-end" >
              <li className="nav-item" >
                <a className="nav-link active text-dark h5" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark h5" href="/Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark h5" href="/Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark h5" href="/Resume">Resume</a>
              </li>

            </ul>
        </div>
      </nav>
    );
  }
  



// const linkStyle = { border: '1px black', padding: '15px' };



    //     <nav className="main-header-menu">
  //       <section
  //         style={{
  //           display: 'flex',
  //           fontFamily: 'helvetica',
  //           flexDirection: 'row',
  //           alignItems: 'flex-start',
  //           justifyContent: 'flex-end',
  //         }}
  //       >
 
  //         <div style={linkStyle}>
  //           <a href="#">About</a>
  //         </div>
  //         <div style={linkStyle}>
  //           <a href="#">Portfolio</a>
  //         </div>
  //         <div style={linkStyle}>
  //           <a href="#">Resume</a>
  //         </div>
  //         <div style={linkStyle}>
  //           <a href="#">Contact</a>
  //         </div>
  //       </section>
  //     </nav>