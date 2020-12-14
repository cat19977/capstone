import React from "react";
import Plot from "react-plotly.js";
import './distribution.css'

const yr_dict = {
  1: "2018",
  2: "2019",
  3: "2020",
  4: "2021",
  5: "2022",
  6: "2023",
  7: "2024",
  8: "2025",
  9: "2026",
  10: "2027",
};

class Distribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NC15: 3780000,
      ND15: 9804,
    };
  }
  render() {
    var res_dict = this.props.results;
    //set display based on which tab is selected
    var display;
    var display1;
    var display2;
    var display3;
    if(!res_dict){
      return null;
    }
    if (this.props.type === "both_comp") {
      display = this.props.data_type === "cp" ? res_dict[0]["pcf"] : res_dict[0]["lsf"];
      display1 = this.props.data_type === "cp" ? res_dict[0]["pcl"] : res_dict[0]["lsl"];
      display2 = this.props.data_type === "cp" ? res_dict[1]["pcf"] : res_dict[1]["lsf"];
      display3 = this.props.data_type === "cp" ? res_dict[1]["pcl"] : res_dict[1]["lsl"];
    }
    else if (this.props.type === "both") {
      display =
        this.props.data_type === "cp" ? res_dict["pcf"] : res_dict["lsf"];
      display1 =
        this.props.data_type === "cp" ? res_dict["pcl"] : res_dict["lsl"];
    } else if (this.props.type === "fc") {
      display =
        this.props.data_type === "cp" ? res_dict["pcf"] : res_dict["lsf"];
      //display = res_dict['pcf']
    } else if (this.props.type === "ld") {
      display =
        this.props.data_type === "cp" ? res_dict["pcl"] : res_dict["lsl"];
    }

    var title = this.props.data_type === "ls" ? "<b>Lives Saved Over Time<b>" : "<b>Crashes Prevented Over Time<b>";
    var y_title = this.props.data_type === "ls" ? "Lives Saved" : "Crashes Prevented";
    var layout = {
      legend: {
        font: {
          family: 'sans-serif',
          size: 18,
          color: '#5b5c5e'
        }},
      autosize: true,
      title: title,
      xaxis: {
        title: 'Year',
        titlefont:{
          color:'#5b5c5e'}
        },
        font: {
          family: 'sans-serif',
          size: 16,
          color: '#5b5c5e',
        },
      yaxis: {
        title: y_title,
        titlefont:{
          color:'#5b5c5e'},
        automargin: true},
    plot_bgcolor:"#ffffff00",
      paper_bgcolor:"#ffffff00",
      displayModeBar: false,
      margin: {
        l: 55,
        r: 10,
        b: 50,
        t: 45,
        pad: 0
      },
        width: 850,
        height: 500,
    };

    //get traces (1 from each year)
    var traces = [];
    if (this.props.type === 'both_comp'){
        var mean_fc_pred = []
        var mean_ld_pred = []
        var mean_fc_cust = []
        var mean_ld_cust = []
        const yrs = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027]
        for (var j = 0; j < 10; j++) {
            mean_fc_pred.push(display[j].reduce((a, b) => a + b) / display[j].length);
            mean_ld_pred.push(display1[j].reduce((a, b) => a + b) / display1[j].length);
            mean_fc_cust.push(display2[j].reduce((a, b) => a + b) / display2[j].length);
            mean_ld_cust.push(display3[j].reduce((a, b) => a + b) / display3[j].length);
          }
        var trace_fc_pred = {
            x: yrs,
            y: mean_fc_pred,
            type: 'scatter',
            name: 'Mean Forward Collision Predicted',
            line: {color: '#861F41'}
        };
        var trace_fc_cust = {
          x: yrs,
          y: mean_fc_cust,
          type: 'scatter',
          name: 'Mean Forward Collision Custom',
          line: {color: '#E87722'}
        };
          var trace_ld_pred= {
            x: yrs,
            y: mean_ld_pred,
            type: 'scatter',
            name: 'Mean Lane Departure Predicted',
            line: {color: 'grey'}
        };
        var trace_ld_cust = {
          x: yrs,
          y: mean_ld_cust,
          type: 'scatter',
          name: 'Mean Lane Departure Custom',
          line: {color: 'black'}
      };
        traces = [trace_fc_cust, trace_ld_cust, trace_fc_pred, trace_ld_pred]
    }
    else if (this.props.type !== 'both') {
      for (var i = 0; i < 10; i++) {
        traces.push({
          y: display[i],
          type: "box",
          name: yr_dict[i + 1],
        });
      }
    }
    else{
        var mean_fc = []
        var mean_ld = []
        const yrs = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027]
        for (var k = 0; k < 10; k++) {
            mean_fc.push(display[k].reduce((a, b) => a + b) / display[k].length);
            mean_ld.push(display1[k].reduce((a, b) => a + b) / display1[k].length);
          }
        var trace_fc = {
            x: yrs,
            y: mean_fc,
            type: 'scatter',
            name: 'Mean Forward Collision',
            line: {color: '#861F41'}
        };
        var trace_ld = {
            x: yrs,
            y: mean_ld,
            name: 'Mean Lane Departure',
            type: 'scatter',
            line: {color: '#E87722'}
        };
        traces = [trace_fc, trace_ld]
    }

    return (
        <Plot width="100%" data={traces} layout={layout} config ={{displayModeBar:false}}/>
    );
  }
}
export default Distribution;
