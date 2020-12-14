import React, { Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Distribution from "./distribution.js";
import "./TabsMenu.css";
import {FormControl, RadioGroup, FormLabel, FormControlLabel, Radio} from '@material-ui/core';


const Checkboxes = (props) =>{
  return(
  <div className='check-cont' style={{display:'flex', flexDirection: 'row'}}>
    {props.show?
    <Checkbox1 show={props.show} names={['Foward Collision','Lane Departure']} ops={['fc', 'ld', 'both']} title={'System Type'} onChange={props.onChange} value={props.val1}/>:
    null}
    <Checkbox1 show={props.show} names={['Lives Saved','Crashed Prevented']} ops={['ls', 'cp']} title={'Data Type'} onChange={props.onChange} value={props.val2}/>
  </div>
  )
}
const Checkbox1 = (props) => {
  const names = props.names
  const ops = props.ops
  const style ={
    display:'flex',
    flexDirection: 'column',
  }
  let value = props.value
  let change_func = props.onChange;
  return (
    <div className="checkboxes1" style={style}>
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.title}</FormLabel>
        <RadioGroup aria-label="gender" name={props.title} value={value} onChange={change_func}>
          <FormControlLabel value={ops[0]} control={<Radio />} label={names[0]} />
          <FormControlLabel value={ops[1]} control={<Radio />} label={names[1]} />
          {props.title==="System Type" && props.show?
          <FormControlLabel value={ops[2]} control={<Radio />} label="Both" />:
          null}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

class TabsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      system_type: 'fc',
      data_type: 'ls'
    };
    this.onChangeCheck = this.onChangeCheck.bind(this);
  }

  onChangeCheck(e){
    const val = e.target.value
    const name = e.target.name
    if(name === 'System Type'){
        this.setState({system_type: val})
    }
    else if(name === 'Data Type'){
      this.setState({data_type: val})
    }
  }

  render() {
    const results = this.props.results;
    const results2 = this.props.results_custom;

    //const display = this.props.display
    return (
      <div className="tabs_container">
        <Tabs defaultIndex={0} onSelect={this.props.on_select}>
          <TabList>
            <Tab>Predicted</Tab>
            <Tab>Custom</Tab>
            <Tab>Comparison</Tab>
          </TabList>
          <TabPanel>
            <Checkboxes onChange={this.onChangeCheck} val1={this.state.system_type} val2={this.state.data_type} show={true}/>
            {results ? (
              <Distribution
                data_type={this.state.data_type}
                results={results}
                type={this.state.system_type}
              />
            ) : null}
          </TabPanel>
          <TabPanel>
          <Checkboxes onChange={this.onChangeCheck} val1={this.state.system_type} val2={this.state.data_type} show={true}/>
            {results2 ? (
              <Distribution
                data_type={this.state.data_type}
                results={results2}
                type={this.state.system_type}
              />
            ) : null}
          </TabPanel>
          <TabPanel>
          <Checkboxes onChange={this.onChangeCheck} val1={this.state.system_type} val2={this.state.data_type} show={false}/>
            {results && results2? (
              <Distribution
                data_type={this.state.data_type}
                results={[results, results2]}
                type="both_comp"
              />
            ) : null}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabsMenu;
