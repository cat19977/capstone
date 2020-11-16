import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Distribution from "./distribution.js";
class TabsMenu extends Component{
    render(){
    const results = this.props.results
    const val1 = this.props.val1
    console.log(this.props.val1)
    console.log(this.props.results)
    
    if(val1.toString() === ''){
        return (<p>Loading...</p>)
    }
    return (
      <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Lane Departure</Tab>
          <Tab>Forward Collision</Tab>
          <Tab>Comparison</Tab>
        </TabList>
        <TabPanel>
            {results?
             <Distribution
             data_type= {val1}
             results = {results}
             type = 'ld'
         />:
            null
            }

        </TabPanel>
        <TabPanel>
        {results?
             <Distribution
             data_type= {val1}
             results = {results}
             type = 'fc'
         />:
            null
            }
        </TabPanel>
        <TabPanel>
        {results?
             <Distribution
             data_type= {val1}
             results = {results}
             type = 'both'
         />:
            null
            }
        </TabPanel>
      </Tabs>
    );
  }
}

  export default TabsMenu;
