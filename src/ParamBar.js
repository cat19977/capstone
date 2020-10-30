import React from 'react';
import './ParamBar.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

class ParamBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            //each of these is state to whether input box is showing for each param
            crash_risk: false,
            prevalence: false,
            efficacy: false,
            fatality: false
        };
    }

    render() {
        const {fatality, crash_risk, prevalence, efficacy} = this.state;
        var angle_up = <FontAwesomeIcon icon={"angle-up"}/>;
        var angle_down = <FontAwesomeIcon icon={"angle-down"}/>;
        var text_boxes = <div class='text_boxes'>
                <div class = 'low'>
                    <label for='low'>Low</label>
                    <input class='input' id='low' type="input" type="text"/>
                </div>
                <div class = 'medium'>
                    <label for='medium'>Medium</label>
                    <input class="input" id='medium' type="text"/>
                </div>
                <div class = 'high'>
                    <label for='high'>High</label>
                    <input class="input" id='high' type="text"/>
                </div>
            </div>
        return (
            <div class = "dropdown">
                <label class='drop-label'> Parameters: </label>
                <button onClick={() => this.setState({crash_risk: !crash_risk})}>Crash Risk Without System
                {crash_risk ? angle_down: angle_up}  
                </button>
                { crash_risk 
                    ? text_boxes
                    : null
                }
                <button onClick={() => this.setState({prevalence: !prevalence})}>Prevalence 
                {prevalence ? angle_down: angle_up}  
                    </button>
                { prevalence 
                    ? text_boxes
                    : null
                }
                <button onClick={() => this.setState({efficacy: !efficacy})}>Efficacy
                {efficacy ? angle_down: angle_up} 
                </button>
                { efficacy 
                    ? text_boxes
                    : null
                }
                <button onClick={() => this.setState({fatality: !fatality})}>Fatality Rate
                {fatality ? angle_down: angle_up} 
                </button>
                { fatality
                    ? text_boxes
                    : null
                }
            </div>  
        )
    }

}

export default ParamBar;