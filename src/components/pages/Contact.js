import React from 'react';

   const bodyStyle = {
      backgroundColor: '#a7abdd'
   }
export default function Contact() {
    return (
       <body style = { bodyStyle }>
      <div style = {{ marginLeft: '30px', marginRight: '30px', backgroundColor: '#d8e1ff', padding: '15px 15px 15px 15px' }}>
        <h1>Contact</h1>
      
        <form>

         <div className="mb-3">
            <label for="name" className="form-label">Name:</label>
            <input type="name" className="form-control" id="name"/>
         </div>
         <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
         </div>
         <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="textarea" placeholder="message required"></textarea>
         </div>
   
           <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div> 
      </body> 
    );
  }
  