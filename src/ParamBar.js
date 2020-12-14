import React from "react";
import "./ParamBar.css";
import TabsMenu from "./TabsMenu.js";
import calc_data from "./Calculator.js";
import Tooltip from "react-simple-tooltip";
import Accordion1 from './Accordion.js'
import ParamBar2 from './ParamBar2.js'
import calc_data2 from "./Calculator1.js";

const  format_results = async (results) =>{
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
      var results1 = calc_data2(result[res]);
      resfr['lsf'].push(results1['lsfc'])
      resfr['lsl'].push(results1['lsld'])
      resfr['pcf'].push(results1['cpld'])
      resfr['pcl'].push(results1['cpfc'])
    }
    return resfr
}


const ToolTipButtons = ({ name, content}) => {
  return(
  <Tooltip
    className='tooltip'
    id="tooltip"
    content={content}
    background ='white'
    color = 'black'
    fontSize = '14px'
    fontWeight = 'normal'
    placement	= 'right'
    border = '#75787B'
    padding = {6}
    radius = {2}
  >
    <button className="param-button">{name}</button>
  </Tooltip>
  );
}


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

const Bar1 = (props)=>(
  <div className="dropdown">
    <div className='input_group'>
      <ToolTipButtons name='Number Crashes' content='Estimated number of crashes that occur in a year.' />
      <TextBoxes name="num_crash" func={props.handleChange.bind(this)} />
    </div>
    <div className='input_group'>
      <ToolTipButtons name='Number Deaths' content='Estimated number of crash related deaths that occur in a year.' />
      <TextBoxes name="num_death" func={props.handleChange.bind(this)} />
    </div>
    <div className='loading'>
      <button className="estimate_btn" name='predicted' onClick={props.handleClick.bind(this)}>
        Simulate
      </button>
    </div>
  </div>
)

class ParamBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //each of these is state to whether input box is showing for each param
      results: false,
      num_crash: 378000,
      num_death: 9804,
      value: "ls",
      option_type: "ls",
      tab_counter: 1,
      results2: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.on_select = this.on_select.bind(this);
    this.getResults = this.getResults.bind(this);
    this.handleSelectTable = this.handleSelectTable.bind(this)
    this.results_dict2={1:{"1mp":.5, "1vp":0.25,"1me":.5,"1ve":0.25,},
    2:{"2mp":.5, "2vp":0.25,"2me":.5,"2ve":0.25},
    3:{"3mp":.5, "3vp":0.25,"3me":.5,"3ve":0.25},
    4:{"4mp":.5, "4vp":0.25,"4me":.5,"4ve":0.25},
    5:{"5mp":.5, "5vp":0.25,"5me":.5,"5ve":0.25},
    6:{"6mp":.5, "6vp":0.25,"6me":.5,"6ve":0.25},
    7:{"7mp":.5, "7vp":0.25,"7me":.5,"7ve":0.25},
    8:{"8mp":.5, "8vp":0.25,"8me":.5,"8ve":0.25},
    9:{"9mp":.5, "9vp":0.25,"9me":.5,"9ve":0.25},
    10:{"10mp":.5, "10vp":0.25,"10me":.5,"10ve":0.25}}       

  }

  handleSelectTable(e){
    //name of text box is same as name of state so that it updates that val
      var yr = parseInt(e.target.name, 10);
      var name = e.target.name
      console.log(e.target.name)
      this.results_dict2[yr][name] = Number(e.target.value);
    }
  
  getResults(data){
     this.setState({results: data})
  }

  handleChange(e) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    if(e.target.name==='custom'){
      let res1 = format_results(this.results_dict2)
      res1.then(res => {
      this.setState({results2: res,
            option_type2: this.state.value});
      })
     }
      else{
      let p = calc_data(this.state.num_death, this.state.num_crash)
      p.then(res => {
      this.setState({ 
        results: res,
        option_type: this.state.value
      })
      })
    }
  }
  

  handleSelect(event) {
    //name of text box is same as name of state so that it updates that val
    this.setState({ value: event.target.value });
  }

  //gets tab number 
  on_select(e){
    this.setState({ tab_counter: e});
  }

  render() {
    const bar1 = <Bar1 handleChange={this.handleChange} value={this.state.value} handleSelect={this.handleSelect} handleClick={this.handleClick}/>
    const bar2 = <ParamBar2 handleSelectTable = {this.handleSelectTable} handleClick={this.handleClick}/>
    return (
    <div className="App-body">
      <div className='ParamBody'>
        <div className='wlabel'>
        <Accordion1 input_panel={bar1} paramBar2={bar2}/>
        </div>
        <TabsMenu
          results_custom = {this.state.results2}
          results={this.state.results}
          val1={this.state.option_type.toString()}
          on_select={this.on_select.bind(this)}
          />
      </div>
      </div>
    );
  }
}

export default ParamBar;
