import React from "react";
import { useHistory} from "react-router-dom";
import "./About.css"

const About = () =>{

    function HomeButton() {
        let history = useHistory();
      
        function handleClick() {
          history.push("/");
        }
      
        return (
          <button className='Abt' type="button" onClick={handleClick}>
            Home
          </button>
        );
      }
  
    return (
        <div className="app_abt">
        <div className='header-cont'>
          <div className='grp1'>
          <img
            src="https://www.vtti.vt.edu/img/vtti_logo.png"
            className="color-logo"
            alt=""
          />
            <h1 className='title'>Advanced Driver Asssistance System Estimation Tool</h1>
            </div>
            <HomeButton/>
        </div>
        <div className='content'>
            <h1>About the Project</h1>
            <p className= 'about'>Over the past 40 years automobile accidents have been a leading cause of death in America. A primary factor responsible for these casualties is human error, which can be mitigated by implementing safety features that assist the driver, including advanced driver assistance systems (ADAS). Our team, the Robust Drivers, worked with Dr. Feng Guo from the Virginia Tech Transportation Institute to develop an information reference dashboard to display how many lives ADAS can save. By reviewing research articles that demonstrate the efficacy and prevalence of ADAS, our team was able to construct a Monte-Carlo simulation using a beta distribution of our data. We then developed an online interface using our Monte-Carlo simulations which allows users to obtain estimations of preventable accidents and death. However, the research reports that were used to construct the model only provide relatively reliable data for the next 10 years. To resolve this limitation, users are also able to customize the input data, to acquire a prediction with good explanatory elasticity. This model will help any interested groups by serving as a useful reference for their research or exploration needs.
</p>
        </div>
        </div>
    );
  }

export default About