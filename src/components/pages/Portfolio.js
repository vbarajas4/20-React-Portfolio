import React from 'react';
import { Router } from 'react-router';


const containerStyle = {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    height: '70%',
    width: '70%',
    marginTop: '70px',
    marginLeft: '20px',
    marginBottom: '70px',
   
}
function Portfolio() {
    return (

  <div className="container" style = { containerStyle }>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100">
              <a href="https://damaximum.github.io/Productivity-Hub/">
                <img src={require("../../assets/Productivity-Hub-SS.png").default} className="card-img-top" alt="Productivity Hub"/></a>
              <div className="card-body">
                <h5 className="card-title">Productivity Hub</h5>
                <p className="card-text"> A productivity app that helps you stay focus and stay on task.</p>
                <a href="https://github.com/Damaximum/Productivity-Hub" className="btn btn-primary">View Github Project</a>
              </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100">
              <a href="https://drive.google.com/file/d/1s9tP2GXIVzUjj3-pFf9cVIeCK2VXAXbX/view">
                <img src={require("../../assets/Team-Profile-Cards.png").default} className="card-img-top" alt="Profile cards"/></a>
              <div className="card-body">
                <h5 className="card-title">Team Profile</h5>
                <p className="card-text"> An application that helps you keep track of your employees profile.</p>
                <a href="https://github.com/vbarajas4/10-OOP-Team-Profile" className="btn btn-primary">View Github Project</a>
              </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100">
              <a href="https://vbarajas4.github.io/05-Third-Party-API-WorkDayScheduler/">
                <img src={require("../../assets/Daily-Planner-Blank.png").default} className="card-img-top" alt="work schedule"/></a>
              <div className="card-body">
                <h5 className="card-title">Daily Work Planner</h5>
                <p className="card-text">An application that allows the user to see their appointments for the day color coding times by past, present, and future events .</p>
                <a href="https://github.com/vbarajas4/05-Third-Party-API-WorkDayScheduler" className="btn btn-primary">View Github Project</a>      
              </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100">
              <a href="https://vbarajas4.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                <img src={require("../../assets/Weather-Dashboard.png").default} className="card-img-top" alt="Productivity Hub"/></a>
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text"> An application that lets the user see the current weather and the forecast for the next 5 days.</p>
                <a href="https://github.com/vbarajas4/06-Server-Side-APIs-Weather-Dashboard" className="btn btn-primary">View Github Project</a>
              </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100">
              <a href="https://vbarajas4.github.io/03-HW-Password-Generator/">
                <img src={require("../../assets/Password-Generator-SS.png").default} className="card-img-top" alt="Password Generator"/></a>
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">An application that generates a random password for a user based on the criteria selected</p>
                <a href="https://github.com/vbarajas4/03-HW-Password-Generator" className="btn btn-primary">View Github Project</a>   
              </div>
            </div>
        </div>   
    </div>
  </div>
    )
}

export default Portfolio;