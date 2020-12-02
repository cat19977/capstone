import React, { useState } from "react";
import "./Parambar2.css";
import TabsMenu from "./TabsMenu.js";
import calc_data from "./Calculator1.js";
import DataGrid from 'react-data-grid';
import InputTable from "./InputTable"
import 'react-data-grid/dist/react-data-grid.css';


  const SelectType = ({ value, on_change }) => {
    return (
      <select value={value} onChange={on_change}>
        <option value="ls">Lives Saved</option>
        <option value="cp">Crashes Prevented</option>
      </select>
    );
  };



class ParamBar2 extends React.Component {
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
    this.handleSelectTable = this.handleSelectTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onClickParam = this.onClickParam.bind(this);
    this.results_dict={"1m":0, "1v":0, "2m":0, "2v":0, "3m":0, "3v":0, "4m":0, "4v":0, "5m":0, "5v":0,
        "6m":0, "6v":0, "7m":0, "7v":0, "8m":0, "8v":0, "9m":0, "9v":0, '10m':0, "10v":0}
        }

  handleChange(e) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectTable(e){
    //name of text box is same as name of state so that it updates that val
      this.results_dict[[e.target.name]] = e.target.value ;
      console.log(this.results_dict)
    }

  handleSelect(event) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ value: event.target.value });
  }
  

  handleClick(e) {
    const result = calc_data(this.state.num_death, this.state.num_crash);
    this.setState({ results: result });
    this.setState({ option_type: this.state.value });
    console.log(result);
  }

  onClickParam(e) {}

  render() {
    return (
      <div className='ParamBody2'>
        <div className='grid'>
          <InputTable on_change={this.handleSelectTable.bind(this)}/>
          <button className="param-button" onClick={this.onClickParam}>
            Data Type
          </button>
          <div className="text_boxes">
            <SelectType
              value={this.state.value}
              on_change={this.handleSelect.bind(this)}
            />
          <button className="estimate_btn1" onClick={this.handleClick}>
            Simulate
          </button>
          </div>
        </div>
        <TabsMenu
          results={this.state.results}
          val1={this.state.option_type.toString()}
        />
        </div>
      
    );
  }
}

export default ParamBar2;
