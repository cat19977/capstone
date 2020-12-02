import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Distribution from "./distribution.js";
import './TabsMenu.css'
class TabsMenu extends Component{
    render(){
    const results = this.props.results
    const val1 = this.props.val1
    return (
    <div className="tabs_container">
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
      </div>
    );
  }
}

  export default TabsMenu;
