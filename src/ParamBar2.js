import React from "react";
import "./Parambar2.css";
import Distribution from "./distribution.js";
import calc_data from "./Calculator1.js";
import InputTables from "./InputTable"
import 'react-data-grid/dist/react-data-grid.css';
import Tooltip from "react-simple-tooltip";


  const ToolTipButtons = ({ name, content}) => {
    return(
    <Tooltip
      className='tooltip'
      id="tooltip"
      content={content}
      background ='white'
      color = 'black'
      fontSize = '14px'
      placement	= 'top'
      border = '#75787B'
      padding = {6}
      radius = {2}
    >
      <button className="param-button2">{name}</button>
    </Tooltip>
    );
  }

  const format_results = (results) =>{
    var resfr = {'lsf':[], 'lsl':[], 'pcl':[], 'pcf':[]}
    var result = []
    for(var key in results){
      var yr_res = results[key]
      var temp_result = {'mp':'','vp':'', 'me':'', 've':''}
      for(var key1 in yr_res){
        var new_key = key1.slice(-2)
        temp_result[new_key] = yr_res[key1]
      }
      result.push(temp_result);
      }
      for(var res in result){
        var results1 = calc_data(result[res]);
        resfr['lsf'].push(results1['lsfc'])
        resfr['lsl'].push(results1['lsld'])
        resfr['pcf'].push(results1['cpld'])
        resfr['pcl'].push(results1['cpfc'])
      }
      return resfr
  }



class ParamBar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //each of these is state to whether input box is showing for each param
      results: false,
      num_crash: 378000,
      num_death: 9804,
      value: "ls",
      option_type: "ls",
    };
    this.handleSelectTable = this.handleSelectTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //puts vals in table
  handleSelectTable(e){
    //name of text box is same as name of state so that it updates that val
      var yr = parseInt(e.target.name, 10);
      var name = e.target.name
      this.results_dict[yr][name] = Number(e.target.value);
    }

  //handles select type dropdown
  handleSelect(event) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ value: event.target.value });
  }
  

  //handles when estimate is clicked
  handleClick(e) {
    const resfr = format_results(this.results_dict)
    this.setState({ results: resfr });
    this.setState({ option_type: this.state.value});
  }

  render() {
   /*  const tab_num = this.props.tab_num;
    var type;
    if(tab_num===0){
      type='ld'
    }
    else if(tab_num===1){
      type='fc'
    }
    else{
      type = 'both'
    } */
    return (
      <div className='ParamBody2'>

        <div className='wlabel2'>
        <div className='grid'>
        <div className="row">
            <div className="column">
                <ToolTipButtons name='Prevalence' content='Percentage of cars with driver assistance systems.'/>
              </div>
            <div className="column">
              <ToolTipButtons name='Efficacy' content='Percentage of crashes prevented by the sysyem.'/>
              </div>
        </div>
          <InputTables on_change={this.props.handleSelectTable}/>
          <div className="text_boxes">
          <button className="estimate_btn1" name='custom' onClick={this.props.handleClick.bind(this)}>
            Simulate
          </button>
          </div>
        </div>
        </div>
        <div className = 'Graphs'>
        {this.state.results?
             <Distribution
             data_type= {this.state.option_type.toString()}
             results = {this.state.results}
             type = 'both'
         />:
            null
            }
        </div>
        </div>
      
    );
  
}
}

export default ParamBar2;
