import React from 'react';

function Portfolio() {
    return (

        <section className="container" id="projects">
            <h2 className="container-title">Projects</h2>
            <div className="grid-layout">

                <div className="web-image project-1" id="full-size-image">  
                    <a href="https://damaximum.github.io/Productivity-Hub/">
                        <img src="./assets/images/Productivity-Hub-SS.png" alt="Productivity Hub Screenshot" className="screenshot"/></a>
                    <div className="image-title">
                        <h3>Productivity Hub</h3>
                        <p>HTML/CSS/JS/API</p>        
                        <a href="https://github.com/Damaximum/Productivity-Hub">GitHub Link</a>
                    </div>
                </div>

                <div className="project-2 web-image">
                    <a href="https://vbarajas4.github.io/03-HW-Password-Generator/">
                        <img src="./assets/images/Password-Generator-SS.png" alt="Password Generator screenshot" className="screenshot"/></a>
                    <div className="image-title">
                        <h3>Password Generator</h3>
                        <p>JavaScript</p> 
                        <a href="https://github.com/vbarajas4/03-HW-Password-Generator">GitHub Link</a>
                    </div>
                </div>

                <div className="project-3 web-image">
                    <a href="https://vbarajas4.github.io/05-Third-Party-API-WorkDayScheduler/">
                        <img src="./assets/images/Daily-Planner-Blank.png" alt="work schedule screenshot" className="screenshot"/></a>
                    <div className="image-title">
                        <h3>Daily Work Planner</h3>
                        <p>Third Party API</p>
                        <a href="https://github.com/vbarajas4/05-Third-Party-API-WorkDayScheduler">GitHub Link</a>
                    </div>
                </div>

                <div className="project-4 web-image">
                    <a href="https://vbarajas4.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                        <img src="./assets/images/Weather-Dashboard.png" alt="Weather dashboard" className="screenshot"/></a>
                    <div className="image-title">
                        <h3>Weather Dashboard</h3>
                        <p>Server Side API</p>
                        <a href="https://github.com/vbarajas4/06-Server-Side-APIs-Weather-Dashboard">GitHub Link</a>
                    </div>
                </div>

                <div className="project-5 web-image">
                    <a href="https://drive.google.com/file/d/1s9tP2GXIVzUjj3-pFf9cVIeCK2VXAXbX/view">
                    <img src="./assets/images/Team-Profile-Cards.png" alt="Profile Cards" className="screenshot"/> </a>
                    <div className="image-title">
                        <h3>Team Profile</h3>
                        <p>OOP</p>
                        <a href="https://github.com/vbarajas4/10-OOP-Team-Profile">GitHub Link</a>
                    </div>
               
                </div>
            </div>
                      
        </section>
    )

}

export default Portfolio;