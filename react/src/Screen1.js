import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import {Screen2} from './screen2'

import axios from'axios';
const createHistory= require('history').createBrowserHistory();
class Screen1 extends Component {
 
    constructor() {
        super();
       
    this.dropInput=React.createRef();
        this.state = {
            value: 'select',
            value: 'item',
            toggle:true,
            tiggle:true,
            regions: [],
            otherSports: [],
            selectRegionValue:'',
            sportName:'',
            selectSportValue:'',
            type:'',
            urls:[]
            




        }
        this.tennis = this.tennis.bind(this);
        this.football = this.football.bind(this);
        this.others = this.others.bind(this);
        this.inPlay = this.inPlay.bind(this);
        this.prematch=this.prematch.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleDropdownSportChange= this.handleDropdownSportChange.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/bwinmappings-api/bwin/regions")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                // let teamsFromApi = data.map(team => { return { value: team, display: team } })
                // this.setState({ clients: [{ value: '', display: '(Select)' }].concat(teamsFromApi) });
                console.log(this.state.regions);
            }).catch(error => {
                console.log(error);
            });

        fetch("http://localhost:8080/bwinmappings-api/bwin/otherSports")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                // let teamsFromApi = data.map(team => { return { value: team, display: team } })
                // this.setState({ servers: [{ value: '', display: '(Select)' }].concat(teamsFromApi) });
                console.log(this.state.otherSports);
            }).catch(error => {
                console.log(error);
            });
    }
    
    
    // onChanged = (event) => {
    //     this.setState({ value: event.target.value });
    // }

    //     onUpadate= (e) => {
    //         this.setState({ [e.target.item]: e.target.value })
    //         this.props.history.push('/mappingpage')
    //     }
    // }
    handleDropdownChange(e) {
        this.setState({ selectRegionValue: e.target.value});
      }
      handleDropdownSportChange(e) {
        this.setState({ selectSportValue: e.target.value});
      }
      tennis(){

        this.setState({toggle:false,
        tiggle:true,
    sportName:"Tennis"});

      }
      football(){

        this.setState({toggle:false,
        tiggle:true,
    sportName:"Football"});

      }
      others(){

        this.setState({toggle:false,
        tiggle:false,
        sportName:"Others"
    });
      }
      prematch(){
          this.setState({
              type:"Prematch"
          })

      }
      inPlay(){
        this.setState({
            type:"Inplay"
        })}
        onUpdate = () => {
            
           
            // window.location.reload();
            let newUrls=[...this.state.urls];
            let newUrl={
                
                gameName:this.state.sportName,
    region:this.state.selectRegionValue,
        otherSport:this.state.selectSportValue,
        type:this.state.type,
            }
            axios.post("http://localhost:3000/urls/",newUrl).then((res)=>{
                newUrls.push(newUrl);
                this.setState({urls:newUrls})
                localStorage.setItem("newSportName",newUrl.gameName)
                localStorage.setItem("newSportregion",newUrl.region)
                localStorage.setItem("newSport",newUrl.otherSport)
                localStorage.setItem("newSportType",newUrl.type)
                
                console.log(newUrl)
            })
            createHistory.push('/screen2')
            

           
        }



    render() {
        
        return (
            <div >

                <h1 align="center">BWIN LEAGUE MAPPING</h1>
<Form>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-4">


                            <a href="#"class="thumbnail" onClick={this.tennis}>
                                <img width="200px" height="200px" src="https://rukminim1.flixcart.com/image/832/832/jmux18w0/ball/q/j/3/70-73-hibounce-standard-65-6-na-cricket-tennis-ball-stumper-original-imaf9zyzwts9j7fz.jpeg?q=70" className="tennis" />


                                <h3 align="center" >Tennis</h3>
                                <p align="center" >Ut non erat enim. Pellentesque<br />
                                    maximus sem eu libero porta<br />
                                    volutpat. Proin porta eros eget.</p>
                            </a>
                        </div>

                        <div 
                            className="col-md-4 ">


                            <a href="#" class="thumbnail"onClick={this.football}>
                                <img align="center" width="200px" height="200px" src="https://5.imimg.com/data5/IJ/JK/MY-11744895/playing-football-500x500.jpg" className="tennis" />


                                <h3 align="center">Football</h3>
                                <p align="center" >Duis sodales vitae ipsum non<br />
                                    facilisis. Donec convallis diam in<br />
                                    arcu mollis pulvinar.</p>
                            </a>
                        </div>

                        <div  className="col-md-4">


                            <a href="#" class="thumbnail" onClick={this.others}>
                                <img  width="200px" height="200px"src="https://images-na.ssl-images-amazon.com/images/I/71HcCPZfH5L._SL1500_.jpg" className="tennis" />

                                <h3 color="black" align="center">Others</h3>
                                <p align="center" >Class aptent taciti sociosqu ad<br />
                                    litora torquent per conubia, per<br />
                                    inceptos himenaeos</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="rectangle">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-4 col-md-offset-1">
                                <br />
                                    
                                
                                <table  > 
                                    
                                
                                    <tbody >   
                                        <tr >         
                                       
                                            
                                         
                                            <td><h4>Select Region :</h4> </td><td>

                                                <select disabled={this.state.toggle}
                                                id="dropdown" onChange={this.handleDropdownChange} >
                                                    <option value=""selected >Select your Region</option>
                                                    {/* <option value="select" placeholder="select"></option> */}
                                                    <option value="Asia">Asia</option>
                                                    <option value="Africa">Africa</option>
                                                    <option value="UK">UK</option>
                                                    <option value="USA">USA</option>
                                                    <option value="North America">North America</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Europe">Europe</option>
                                                    <option value="South America">South America</option>
                                                    <option value="Middle East">Middle East</option>
    </select></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                            {/* <div>Selected value is : {this.state.selectValue}</div> */}
                            </div>
                            <div className="col-md-4">
                                <br />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><h4>Select Other Sport :</h4></td><td>

                                                <select  disabled={this.state.tiggle} onChange={this.handleDropdownSportChange}>
                                                    <option value="" disabled selected>Other Sports</option>
                                                    <option value="Basketball">Basketball</option>
                                                    <option value="HandBall">HandBall</option>
                                                    <option value="Golf">Golf</option>
                                                    <option value="Ice Hockey">Ice Hockey</option>
                                                    <option value="Volley Ball">Volley Ball</option>
                                                    <option value="Beach Volley Ball">Beach Volley Ball</option>
                                                    <option value="others">Others</option>


                                                </select>
                                            </td></tr>

                                    </tbody>
                                </table>
                                
                                <div className="row">
                                    <div className="col-sm-1"><h3 class="one"></h3></div>
                                    <div className="col-sm-10"></div>
                                    <div className="col-sm-1">
                                        <button onClick={this.onUpdate} className="btn btn-success pull-right">Go to Next</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row" align="center">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h4>Select Type :</h4> </td><td> &nbsp;&nbsp;&nbsp;&nbsp;
                                    
            <input type="radio" id="1" name="yesno" value="1" onClick={this.prematch}/>Prematch &nbsp;&nbsp;&nbsp;&nbsp;
            
            <input type="radio" id="1" name="yesno" value="2"onClick={this.inPlay}/>Inplay

            <br/>
                                        
                            
                            </td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">

                        <h2 align="center" text="disabled">Contact Support</h2>
                        <p align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus<br />
                            fermentum elementum nunc a efficitur. Vivamus mollis faucibus<br />
                            enim, a imperdiet dolor varius sit amet.</p>  &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="column">
                            <div className="small"> &nbsp; &nbsp;&nbsp;<strong>Subject Line</strong>
                            </div>
                            {''}
                            <div className="big"> &nbsp; &nbsp;&nbsp;<strong>Comments</strong>

                            </div>
                            <button className="btn btn-primary pull-right">Send Email</button>
                        </div>
                    </div>
                </div>
                </Form>
                {/* <Screen2 selectRegionValue={this.state.selectRegionValue} selectSportValue={this.state.selectSportValue} sportName={this.state.sportName} type={this.state.type} ></Screen2> */}
            </div>
        );
    }
}

export default withRouter(Screen1);