import React from "react";
import "./ParamBar.css";
import TabsMenu from "./TabsMenu.js";
import calc_data from "./Calculator.js";
import Tooltip from "react-simple-tooltip";

const SelectYear = ({ func }) => {
  return (
    <div className="text_boxes">
      <select name="year" onSelect={func}>
        <option value="1">2018</option>
        <option value="2">2019</option>
        <option value="3">2020</option>
        <option value="4">2021</option>
        <option value="5">2022</option>
        <option value="6">2023</option>
        <option value="7">2024</option>
        <option value="8">2025</option>
        <option value="9">2026</option>
        <option value="10">2027</option>
        <option value="11">All</option>
      </select>
    </div>
  );
};

const ToolTipButtons = ({ name, content}) => {
  return(
  <Tooltip
    className='tooltip'
    id="tooltip"
    content={content}
    background ='white'
    color = 'black'
    fontSize = '12px'
    placement	= 'right'
    border = '#75787B'
    padding = {6}
    radius = {2}
  >
    <button className="param-button">{name}</button>
  </Tooltip>
  );
}

const SelectType = ({ value, on_change }) => {
  return (
    <select value={value} onChange={on_change}>
      <option value="ls">Lives Saved</option>
      <option value="cp">Crashes Prevented</option>
    </select>
  );
};

const TextBoxes = ({ name, func }) => {
  const default_val = name === "num_crash" ? 378000 : 9804;
  return (
    <div className="text_boxes">
      <input
        type="input"
        name={name}
        onChange={func}
        placeholder={default_val}
      />
    </div>
  );
};

/* const SelectType = React.forwardRef((func,ref ) => (
  <select value={this.state.value} onChange={func}>
    <option value="ls">Lives Saved</option>
    <option value="cp">Crashes Prevented</option>
  </select>
)); */

class ParamBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //each of these is state to whether input box is showing for each param
      results: false,
      num_crash: 378000,
      num_death: 9804,
      value: "ls",
      year: "11",
      option_type: "ls",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onClickParam = this.onClickParam.bind(this);
  }
  handleChange(e) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    const result = calc_data(this.state.num_death, this.state.num_crash);
    this.setState({ results: result });
    this.setState({ option_type: this.state.value });
    console.log(result);
  }

  handleSelect(event) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ value: event.target.value });
  }

  onClickParam(e) {}

  render() {
    return (
      <div class='ParamBody'>
        <div class="dropdown">
          <button className="param-button">Year</button>
          <SelectYear func={this.handleSelect} />

          <ToolTipButtons name='Number Crashes' content='Estimated number of crashes that occur in a year.'/>

          <TextBoxes name="num_crash" func={this.handleChange} />

          <ToolTipButtons name='Number Deaths' content='Estimated number of crash related deaths that occur in a year.'/>
          
          <TextBoxes name="num_death" func={this.handleChange} />

          <button className="param-button" onClick={this.onClickParam}>
            Data Type
          </button>
          <div className="text_boxes">
            <SelectType
              value={this.state.value}
              on_change={this.handleSelect.bind(this)}
            />
          </div>
          <button className="estimate_btn" onClick={this.handleClick}>
            Simulate
          </button>
        </div>
        <TabsMenu
          results={this.state.results}
          val1={this.state.option_type.toString()}
        />
      </div>
      
    );
  }
}

export default ParamBar;
