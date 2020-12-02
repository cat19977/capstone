import React from 'react';
import Plot from 'react-plotly.js';
import "./Graph.css"
import "./distribution.css"

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        
        };
        this.data_bar =''
        this.data_int=''
        this.layout_int=''
        this.get_data_bar = this.get_data_bar.bind(this);
        this.get_data_int =  this.get_data_int.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.input !== nextProps.input;
      }
    get_data_bar(){
        var data = [
            {
              x: [0, 1, 2],
              y: [6, 10, 2],
              error_y: {
                type: 'data',
                array: [1, 2, 3],
                visible: true
              },
              type: 'scatter'
            }
          ];
        
        this.data_bar = data;
    }

    get_data_int(){
        var trace1 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
            y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 
            fill: "tozerox", 
            fillcolor: "rgba(0,100,80,0.2)", 
            line: {color: "transparent"}, 
            name: "Fair", 
            showlegend: false, 
            type: "scatter"
          };
          var trace2 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
            y: [5.5, 3, 5.5, 8, 6, 3, 8, 5, 6, 5.5, 4.75, 5, 4, 7, 2, 4, 7, 4.4, 2, 4.5], 
            fill: "tozerox", 
            fillcolor: "rgba(0,176,246,0.2)", 
            line: {color: "transparent"}, 
            name: "Premium", 
            showlegend: false, 
            type: "scatter"
          };
          var trace3 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
            y: [11, 9, 7, 5, 3, 1, 3, 5, 3, 1, -1, 1, 3, 1, -0.5, 1, 3, 5, 7, 9], 
            fill: "tozerox", 
            fillcolor: "rgba(231,107,243,0.2)", 
            line: {color: "transparent"}, 
            name: "Fair", 
            showlegend: false, 
            type: "scatter"
          };
          var trace4 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            line: {color: "rgb(0,100,80)"}, 
            mode: "lines", 
            name: "Fair", 
            type: "scatter"
          };
          var trace5 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5], 
            line: {color: "rgb(0,176,246)"}, 
            mode: "lines", 
            name: "Premium", 
            type: "scatter"
          };
          var trace6 = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            y: [10, 8, 6, 4, 2, 0, 2, 4, 2, 0], 
            line: {color: "rgb(231,107,243)"}, 
            mode: "lines", 
            name: "Ideal", 
            type: "scatter"
          };
        var i = this.props.input;
        if(i===1){
            this.data_int = [trace1, trace4]
        }
        else if(i===2){
            this.data_int = [trace2, trace5]
        }
        else(
            this.data_int = [trace3, trace6]
        )
        var layout = {
        autosize: true,
        paper_bgcolor: "rgba(0,0,0,0)", 
        plot_bgcolor: "rgb(229,229,229)", 
        xaxis: {
            gridcolor: "rgb(255,255,255)", 
            range: [1, 10], 
            showgrid: true, 
            showline: false, 
            showticklabels: true, 
            tickcolor: "rgb(127,127,127)", 
            ticks: "outside", 
            zeroline: false
        }, 
        yaxis: {
            gridcolor: "rgb(255,255,255)", 
            showgrid: true, 
            showline: false, 
            showticklabels: true, 
            tickcolor: "rgb(127,127,127)", 
            ticks: "outside", 
            zeroline: false
        },
        automargin:true,
        title: 'Plot1',
        margin: {
            l: 50,
            r: 10,
            b: 50,
            t: 50,
            pad: 1
          },
        }
        this.layout_int = layout
    }


render() {
    //this.get_data_bar()
    this.get_data_int()
    //var data_bar=this.data_bar;
    var data_int=this.data_int;
    var int_layout = this.layout_int;
    return(
        <div class='plots' display='flex' flex-direction='row'>
            <div class='graph1' width='50%'>
            <Plot width="100%"
                data={data_int}
                layout={int_layout}
                config = {{responsive: true}}
            />
            </div>
            <div class='graph2' width='50%'>
            {/* <Plot width="100%"
                data={data_bar}
                layout ={ {autosize: true,
                    paper_bgcolor: "rgba(0,0,0,0)",
                    title: 'Plot2',
                    margin: {
                        l: 50,
                        r: 10,
                        b: 50,
                        t: 50,
                        pad: 1
                      },
                    }}
                config = {{responsive: true}}
            /> */}
            </div>
        </div>
            
    )
    }
}

export default Graph;