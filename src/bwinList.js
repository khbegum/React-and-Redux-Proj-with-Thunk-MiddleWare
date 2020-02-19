

import React, { Component } from 'react';

const BwinList = (props) => {

  

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th colspan="2">BWIN</th>

                    <th colspan="2">OB1 (CD)</th>
                    <th colspan="2">OB2 (CR)</th>
                    <th colspan="2">OB3 (LD)</th>
                    <th colspan="2">OB4 (LR)</th>
                    <th colspan="2">OP</th>
                </tr>
               </thead>
         

{/*             <tr>
                <td  >League Name</td>
                <td >League ID</td>
                <td >League Name</td>
                <td  >League ID</td>
                <td  >League Name</td>
                <td >League ID</td>
                <td  >League Name</td>
                <td  >League ID</td>
                <td >League Name</td>
                <td  >League ID</td>
               
            </tr>
            </thead>
            
            <tbody>{props.bwins.map((bwin,i) =>
                <tr  key={i.BWIN_Id}> 
                <td>{bwin.BWIN_Name}</td>
                    <td>{bwin.BWIN_Id}</td>
                    <td>{bwin.OB1_Name1}</td>  
                    <td>{bwin.OB1_Id1}</td>
                    <td>{bwin.OB2_Name2}</td>
                    <td>{bwin.OB2_Id2}</td>
                   <option value="">5676</option>
                    <td>{bwin.OB3_Name3}</td>
                    <td>{bwin.OB3_Id3}</td>
                    <td>{bwin.OB4_Name4}</td>
                    <td>{bwin.OB4_Id4}</td> 
                    <td><button onClick={()=>{props.deleteBwin(bwin)}}>Delete</button></td>
                    <td><button onClick={()=>this.editClick(bwin.id)}>Edit</button></td>
                </tr>
            )} */}
            
{/* </tbody> */}


        </table>
        
    );
}

export default BwinList;
 
 
