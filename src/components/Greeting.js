import React, { useState } from 'react';

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  const [greeting, setGreeting] = useState('My name is Vanessa Maldonado!');

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white" style={{ display: 'flex', justifyContent: 'center', fontSize: '50px' }}>
        Welcome!
      </div>
      <div className="card-body">
        <p className="card-text" style={{ display: 'flex', justifyContent: 'center', fontSize: '50px' }}>
          {greeting}
        </p>
      </div>
    </div>
  );
}
