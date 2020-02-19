import React, { Component } from 'react';
import axios from 'axios';

import { withRouter } from 'react-router';
const createHistory = require('history').createBrowserHistory();
export class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bwins: [],
            leagues: [],
            isInEditMode: false,
           
            idChanged: false,
            key:""
        }
        this.buildOptions = this.buildOptions.bind(this);
        this.onSave = this.onSave.bind(this);
                
    }
    buildOptions() {
        var arr = [];

        for (let i = 0; i <= this.state.leagues.length - 1; i++) {
            arr.push(<option value={this.state.leagues.key}>{this.state.leagues[i].LeagueID}</option>)
        }

        return arr;
    }
    
    
   
    edit(id) {
        
        this.setState({
            key:id-1
        })
         
        if (id != 0) {
            this.setState({
                isInEditMode: true,
            
            })
        }
       
    }
    onSave(id) {
        
    }
    

    componentDidMount() {
        axios.get("http://localhost:3000/football").then((res) => {
            console.log(res.data);
            this.setState({ bwins: res.data });
        })
        axios.get(" http://localhost:3100/leagues").then((res) => {
            console.log(res.data);
            this.setState({ leagues: res.data });
        })
    }
    getLegaueId(value) {

        for (let i = 0; i <this.state.leagues.length - 1; i++) {
          if (this.state.leagues[i].id == value) {

            return this.state.leagues[i].LeagueName;
          }
        }
      }
    handleSelectChange = (event) => {
        alert(event.target.value)

        for (let i = 0; i < this.state.bwins.length - 1; i++) {
            if (this.state.leagues[i].LeagueID== event.target.value) {
                alert(this.state.leagues[i].LeagueName)
this.setState({...this.state.bwins[this.state.key].OB1_Name1=this.state.leagues[i].LeagueName});

               



                this.setState({
                    idChanged: true
                });

            }
        }
       

       

    }
    render() {
        return (
            <div  >

                <p> {localStorage.getItem("newSportName")}>>{localStorage.getItem("newSportregion")}>>{localStorage.getItem("newSport")}>>{localStorage.getItem("newSportType")}</p>
                <table border="1">
                    <thead>
                        <th>_Id</th><th>BWIN Name</th><th>
                            BWIN_Id</th>
                        <th>
                            OB1_Name1</th><th>
                            OB1_Id1</th><th>
                            OB2_Name2</th><th>OB2_Id2</th>
                        <th>
                            OB3_Name3
      </th><th>
                            OB3_Id3</th><th>OB4_Name4</th><th>OB4_Id4</th>
                    </thead>
                    <tbody>{this.state.bwins.map((bwin, i) =>  <tr><td>{bwin.key}</td><td>{bwin.BWIN_Name}</td><td>{bwin.BWIN_Id}</td>
                             <td>{bwin.OB1_Name1}</td>{this.state.isInEditMode ? <td><select disabled={!this.state.isInEditMode} onChange={this.handleSelectChange}>
                            {this.buildOptions()}

                        </select></td> : <td>{bwin.OB1_Id1}</td>}<td>{bwin.OB2_Name2}</td><td>{bwin.OB2_Id2}</td><td>{bwin.OB3_Name3}</td><td>{bwin.OB3_Id3}</td><td>{bwin.OB4_Name4}</td><td>{bwin.OB3_Id3}</td><td><button onClick={() => this.edit(bwin.id)} >Edit</button></td><td><button onClick={this.onSave(bwin.id)}>Save</button></td></tr>


                   
                        
                    )}</tbody>
                </table>



            </div>
        )
    }
}
export default Screen2;