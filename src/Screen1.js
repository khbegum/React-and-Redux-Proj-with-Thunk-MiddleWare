import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {selectRegion, nextPage, thunk_action_creator3, thunk_action_creator4} from './actions/urls'
import {selectSport} from './actions/urls'
import {tennis} from './actions/urls'
import {football} from './actions/urls'
import {others} from './actions/urls'
import {prematch} from './actions/urls'
import {inPlay} from './actions/urls'

import {connect} from 'react-redux'

import {Screen2} from './screen2'

import axios from'axios';
import { render } from '@testing-library/react';
import store from './store';
const createHistory= require('history').createBrowserHistory();
class Screen1 extends Component {
 constructor(props){
   super(props)
    
    this.dropInput=React.createRef();
        this.state = {
            urls:[],           
            toggle:true,
            tiggle:true,          
            otherSports: [],
            selectRegionValue:'',
            sportName:'',
            selectSportValue:'',
            type:'',
            regions:[]
              }
        
    }
    buildOptions=()=> {
        var arr = [];

        for (let i = 0; i <= this.props.data.otherSports.length - 1; i++) {
            arr.push(<option value={this.props.data.otherSports[i].sportName} key={this.props.data.otherSports[i].sportId}>{this.props.data.otherSports[i].sportName}</option>)
        }

        return arr;
    }
    buildOptionsRegions=()=> {
        var arr = [];

        for (let i = 0; i <= this.props.data.regions.length - 1; i++) {
            arr.push(<option value={this.props.data.regions[i].regionName} key={this.props.data.regions[i].regionId}>{this.props.data.regions[i].regionName}</option>)
        }

        return arr;
    }
    componentDidMount(){
        // axios.get("http://localhost:3600/sports/").then((res) => {
        //     console.log(res.data);
        //     this.setState({ otherSports: res.data });
        // })
        // axios.get("http://localhost:3800/regions/").then((res) => {
        //     console.log(res.data);
        //     this.setState({ regions: res.data });
        // })
        store.dispatch(thunk_action_creator3());
        store.dispatch(thunk_action_creator4())
    }

   
    

   
    handleDropdownChange=(e)=> {
        this.props.dispatch(selectRegion(e.target.value))
        // this.setState({ selectRegionValue: e.target.value});
      }
      handleDropdownSportChange=(e)=> {
        this.props.dispatch(selectSport(e.target.value))
        // this.setState({ selectSportValue: e.target.value});
      }
      tennis=()=>{
        this.props.dispatch(tennis())
    //     this.setState({toggle:false,
    //     tiggle:true,
    // sportName:"Tennis"});

      }
      football=()=>{
        this.props.dispatch(football())
    //     this.setState({toggle:false,
    //     tiggle:true,
    // sportName:"Football"});

      }
      others=()=>{
        this.props.dispatch(others())

    //     this.setState({toggle:false,
    //     tiggle:false,
    //     sportName:"Others"
    // });
      }
      prematch=()=>{
        this.props.dispatch(prematch())
        //   this.setState({
        //       type:"Prematch"
        //   })

      }
      inPlay=()=>{
        this.props.dispatch(inPlay())
        // this.setState({
        //     type:"Inplay"
        // })
    }
        onUpdate = () => {
           
          this.props.dispatch(nextPage())
    //         // window.location.reload();
    //         let newUrls=[...this.props.data.urls];
    //         let newUrl={
                
    //             gameName:this.props.data.sportName,
    // region:this.props.data.selectRegionValue,
    //     otherSport:this.props.data.selectSportValue,
    //     type:this.props.data.type,
    //         }
    //         axios.post("http://localhost:3006/urls/",newUrl).then((res)=>{
    //             newUrls.push(newUrl);
    //             this.setState({urls:newUrls})
    //             localStorage.setItem("newSportName",newUrl.gameName)
    //             localStorage.setItem("newSportregion",newUrl.region)
    //             localStorage.setItem("newSport",newUrl.otherSport)
    //             localStorage.setItem("newSportType",newUrl.type)
                
    //             console.log(newUrl)
    //         })
            this.props.history.push('/x')       
        }
        



    render(){
       
        return (
            <div >               

    <div>
                <h1 align="center">BWIN LEAGUE MAPPING</h1>
                {console.log(this.props)}
        <h1>{this.props.data.toggle}</h1>
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

                                                <select disabled={this.props.toggle}
                                                id="dropdown" onChange={this.handleDropdownChange} >
                                                    {/* <option value="" >Select your Region</option>
                                         
                                                    <option value="Asia">Asia</option>
                                                    <option value="Africa">Africa</option>
                                                    <option value="UK">UK</option>
                                                    <option value="USA">USA</option>
                                                    <option value="North America">North America</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Europe">Europe</option>
                                                    <option value="South America">South America</option>
                                                    <option value="Middle East">Middle East</option> */}
                                                    {this.buildOptionsRegions()}
    </select></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                            {/* <div>Selected value is : {this.props.data.selectValue}</div> */}
                            </div>
                            <div className="col-md-4">
                                <br />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><h4>Select Other Sport :</h4></td><td>

                                                <select  disabled={this.props.tiggle} onChange={this.handleDropdownSportChange}>
                                                    {/* <option value="" disabled >Other Sports</option>
                                                    <option value="Basketball">Basketball</option>
                                                    <option value="HandBall">HandBall</option>
                                                    <option value="Golf">Golf</option>
                                                    <option value="Ice Hockey">Ice Hockey</option>
                                                    <option value="Volley Ball">Volley Ball</option>
                                                    <option value="Beach Volley Ball">Beach Volley Ball</option>
                                                    <option value="others">Others</option> */}
                                                   {this.buildOptions()}


                                                </select>
                                            </td></tr>

                                    </tbody>
                                </table>
                                
                                <div className="row">
                                    <div className="col-sm-1"><h3 class="one"></h3></div>
                                    <div className="col-sm-10"></div>
                                    <div className="col-sm-1">
                                        <button onClick={()=>this.onUpdate()} className="btn btn-success pull-right">Go to Next</button></div>
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
        </div>
            
            </div>
        )
    }
    
}
const mapStatetToProps=(state)=>{
    return{
        data:state
    }

}
export default connect (mapStatetToProps) (Screen1);