import React from "react";
import "./ParamBar.css";
import TabsMenu from "./TabsMenu.js";
import calc_data from "./Calculator.js";
import Select from "react-select";

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

const SelectType = ({ func }) => {
  return (
    <div className="text_boxes">
      <select name="option_type" onSelect={func}>
        <option value="ls">Lives Saved</option>
        <option value="cp">Crashes Prevented</option>
      </select>
    </div>
  );
};

const select_option = [
  { value: "ls", label: "Lives Saved" },
  { value: "cp", label: "Crashes Prevented" },
];

const styles = {
  control: (base) => ({
    ...base,
    height: "20px",
    fontSize: "15px",
    width: "70px",
    backgroundColor: "white",
    borderColor: "#75787B",
    marginBottom: "15px",
    minHeight: "10px",
    boxBhadow: "-.5px 0 0 #861F41;",
    borderRadius: "2px",
    textAlign: "top",
    alignItems: "top",
    justifyContent: "top",
  }),
  container: (provided) => ({
    ...provided,
    width: "250px",
    minHeight: "1px",
    textAlign: "top",
    border: "none",
    justifyContent: "top",
  }),
};

/* const SelectType = ({func, option_type}) => {
  return(
      <Select className= "SelectType"
      name='option_type'
      value={select_option.find(item => item.value === {option_type})}
      //onChange={func}
      options={select_option}
      styles = {styles}
      />)} */

//name is name of state to be changed, func is handle change
const TextBoxes = ({ name, func }) => {
  return (
    <div className="text_boxes">
      <input type="input" name={name} onChange={func} />
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
      num_crash: 378000000,
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
    //const { num_crash, num_death, year } = this.state;

    
    const val = this.state.value;
    let TabsComponent;
    console.log(val);
    if (val.toString !== "") {
      TabsComponent = (
        <TabsMenu results={this.state.results} option_type={val} />
      );
    } else {
      TabsComponent = null;
    }
    return (
      <div class="App-body">
        <div class="dropdown">
          <button className="param-button">Year</button>
          <SelectYear func={this.handleSelect} />

          <button className="param-button" onClick={() => this.onClickParam}>
            Number Crashes
          </button>
          <TextBoxes name="num_crash" func={this.handleChange} />

          <button className="param-button" onClick={this.onClickParam}>
            Number Deaths
          </button>
          <TextBoxes name="num_death" func={this.handleChange} />

          <button className="param-button" onClick={this.onClickParam}>
            Data Type
          </button>
          <div className="text_boxes">
            <select value={this.state.value} onChange={this.handleSelect.bind(this)}>
              <option value="ls">Lives Saved</option>
              <option value="cp">Crashes Prevented</option>
            </select>
          </div>
          <button className="estimate_btn" onClick={this.handleClick}>
            Simulate
          </button>
        </div>
        <div>
            <TabsMenu results={this.state.results} val1={this.state.option_type.toString()}/>
        </div>
      </div>
    );
  }
}

export default ParamBar;
