import React from 'react';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '15px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
 
          <div style={linkStyle}>
            <a href="#">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Resume</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    );
  }
  
