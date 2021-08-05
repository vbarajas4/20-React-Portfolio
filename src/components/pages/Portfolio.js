import React from 'react';
import Project from '../../components/Project';


const projectCard = [

  {
    deployedLink: "https://damaximum.github.io/Productivity-Hub/",
    imageIcon: "Productivity-Hub-SS.png",
    descriptionImage: "Productivity Hub",
    projectName: "Productivity Hub",
    projectDescription: "A productivity app that helps you stay focus and stay on task.",
    githubLink: "https://github.com/Damaximum/Productivity-Hub",
    id: 1
  },
  {
    deployedLink: "https://drive.google.com/file/d/1s9tP2GXIVzUjj3-pFf9cVIeCK2VXAXbX/view",
    imageIcon: "Team-Profile-Cards.png",
    descriptionImage: "Profile Cards",
    projectName: "Team Profile",
    projectDescription: "An application that helps you keep track of your employees profile.",
    githubLink: "https://github.com/vbarajas4/10-OOP-Team-Profile",
    id: 2
  },
  {
    deployedLink: "https://vbarajas4.github.io/05-Third-Party-API-WorkDayScheduler/",
    imageIcon: "Daily-Planner-Blank.png",
    descriptionImage: "work schedule",
    projectName: "Daily Work Planner",
    projectDescription: "An application that allows the user to see their appointments for the day color coding times by past, present, and future events.",
    githubLink: "https://github.com/vbarajas4/05-Third-Party-API-WorkDayScheduler",
    id: 3
  },
  {
    deployedLink: "https://vbarajas4.github.io/06-Server-Side-APIs-Weather-Dashboard/",
    imageIcon: "Weather-Dashboard.png",
    descriptionImage: "Weather Dashboard",
    projectName: "Weather Dashboard",
    projectDescription: "An application that lets the user see the current weather and the forecast for the next 5 days.",
    githubLink: "https://github.com/vbarajas4/06-Server-Side-APIs-Weather-Dashboard",
    id: 4
  },
  {
    deployedLink: "https://vbarajas4.github.io/03-HW-Password-Generator/",
    imageIcon: "Password-Generator-SS.png",
    descriptionImage: "Password Generator",
    projectName: "Password Generator",
    projectDescription: "An application that generates a random password for a user based on the criteria selected.",
    githubLink: "https://github.com/vbarajas4/03-HW-Password-Generator",
    id: 5
  }
 
];

function Portfolio() {
    return (
      <div>
        {projectCard.map((project ) => (
          <Project project = { project } />
        ))}
      </div>
    )
  };
  
  export default Portfolio;

      
  