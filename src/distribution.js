import React from "react";
import Plot from "react-plotly.js";

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
      NC15: 378000000,
      ND15: 9804,
    };
  }
  render() {
    var res_dict = this.props.results;
    console.log(this.props.type);
    console.log(this.props.data_type);
    //set display based on which tab it selected
    var display = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var display1 = false;
    if (this.props.type == "both") {
      display =
        this.props.data_type == "cp" ? res_dict["pcf"] : res_dict["lsf"];
      display1 =
        this.props.data_type == "cp" ? res_dict["pcl"] : res_dict["lsl"];
    } else if (this.props.type == "fc") {
      display =
        this.props.data_type == "cp" ? res_dict["pcf"] : res_dict["lsf"];
      //display = res_dict['pcf']
    } else if (this.props.type == "ld") {
      display =
        this.props.data_type == "cp" ? res_dict["pcl"] : res_dict["lsl"];
    }

    var title = this.props.data_type == "ls" ? "Lives Saved Over Time" : "Crashes Prevented Over Time";
    var y_title = this.props.data_type == "ls" ? "Lives Saved" : "Crashes Prevented";
    var layout = {
      autosize: true,
      title: title,
      xaxis: {
        title: 'Year'},
      yaxis: {
        title: y_title},
    
    };

    //get traces (1 from each year)
    if (this.props.type != 'both') {
      var traces = [];
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
        for (var i = 0; i < 10; i++) {
            mean_fc.push(display[i].reduce((a, b) => a + b) / display[i].length);
            mean_ld.push(display1[i].reduce((a, b) => a + b) / display1[i].length);
          }
        var trace_fc = {
            x: yrs,
            y: mean_fc,
            type: 'scatter',
            name: 'Mean Forward Collision'
        };
        var trace_ld = {
            x: yrs,
            y: mean_ld,
            name: 'Mean Lane Departure',
            type: 'scatter',
        };
        traces = [trace_fc, trace_ld]
    }

    return (
      <div>
        <div></div>
        <Plot width="100%" data={traces} layout={layout} />
      </div>
    );
  }
}
export default Distribution;
