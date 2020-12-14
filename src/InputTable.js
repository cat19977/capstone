
import React from "react";
import "./inputTable.css";

const InputTablePrevalence = ({on_change}) =>{
      return (
        <table className='prevalence'>
          <thead>
          <tr className="heading1">
            <td>Year</td>
            <td>Mean</td>
            <td>Variance</td>
          </tr>
          </thead>
          <tbody>
          <tr className='row'>
            <td className='counter'>1</td>
            <td><input placeholder={.05} className = 'hi' name = '1mp' onChange={on_change}/></td>
            <td><input placeholder={.2} className = 'hi' name = '1vp' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td className='counter'>2</td>
            <td><input placeholder={.05} className = 'hi' name = '2mp' onChange={on_change}/></td>
            <td><input placeholder={.1} className = 'hi' name = '2vp' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td className='counter'>3</td>
            <td><input placeholder={.15} className = 'hi' name = '3mp' onChange={on_change}/></td>
            <td><input placeholder={.2} className = 'hi' name = '3vp' onChange={on_change}/></td>
          
          </tr>
          <tr className='row'>
            <td className='counter'>4</td>
            <td><input placeholder={.25} className = 'hi' name = '4mp' onChange={on_change}/></td>
            <td><input placeholder={.3} className = 'hi' name = '4vp' onChange={on_change}/></td>
            
          </tr>
          <tr className='row'>
            <td className='counter'>5</td>
            <td><input placeholder={.5} className = 'hi' name = '5mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '5vp' onChange={on_change}/></td>
           
          </tr>
          <tr className='row'>
            <td className='counter'>6</td>
            <td><input placeholder={.5} className = 'hi' name = '6mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '6vp' onChange={on_change}/></td>
           
          </tr>
          <tr className='row'>
            <td className='counter'>7</td>
            <td><input placeholder={.5} className = 'hi' name = '7mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '7vp' onChange={on_change}/></td>

          </tr>
          <tr className='row'>
            <td className='counter'>8</td>
            <td><input placeholder={.5} className = 'hi' name = '8mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '8vp' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td className='counter'>9</td>
            <td><input placeholder={.5} className = 'hi' name = '9mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '9vp' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td className='counter'>10</td>
            <td><input placeholder={.5} className = 'hi' name = '10mp' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '10vp' onChange={on_change}/></td>
          </tr>
          </tbody>
          </table>
      )
    }

    const InputTableEfficcacy = ({on_change}) =>{
      return (
        <table>
          <thead>
          <tr className="heading">
            <td>Mean</td>
            <td>Variance</td>
          </tr>
          </thead>
          <tbody className='table2'>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '1me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '1ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '2me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '2ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '3me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '3ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '4me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '4ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '5me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '5ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '6me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '6ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '7me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '7ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '8me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '8ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '9me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '9ve' onChange={on_change}/></td>
          </tr>
          <tr className='row'>
            <td><input placeholder={.5} className = 'hi' name = '10me' onChange={on_change}/></td>
            <td><input placeholder={.25} className = 'hi' name = '10ve' onChange={on_change}/></td>
          </tr>
          </tbody>
          </table>
      )
    }

    const InputTables = ({on_change}) =>{
    return(
      <div className="table_container">
        <InputTablePrevalence on_change={on_change}/>
        <InputTableEfficcacy on_change={on_change}/>
      </div>
    )
    }

  export default InputTables
