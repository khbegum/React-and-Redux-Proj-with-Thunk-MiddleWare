import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Screen2 from './screen2';
import Screen1 from './Screen1';
import axios from'axios';
import createHistory from 'history/createBrowserHistory';
const history= createHistory();
class Screen extends Component{
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
            urls:[],
            kh:"kjnk"
            




        }
        this.tennis = this.tennis.bind(this);
        this.football = this.football.bind(this);
        this.others = this.others.bind(this);
        this.inPlay = this.inPlay.bind(this);
        this.prematch=this.prematch.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleDropdownSportChange= this.handleDropdownSportChange.bind(this);
    }

   
    
    
   
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
        render(){
            return(
                <div>
                    <Screen1 kh={this.state.kh}history={history} handleDropdownChange={(e)=>this.handleDropdownChange(e)}
                     handleDropdownSportChange={this.handleDropdownSportChange}
                    tennis = {()=>this.tennis()}
                    football = {this.football}
                  others = {this.others}
                  inPlay = {this.inPlay}
                  prematch={this.prematch}
                  tiggle={this.state.tiggle}
                  toggle={this.state.toggle}
                  onUpdate={this.onUpdate}
                  sportName={this.state.sportName}
                    region={this.state.selectRegionValue}
                        otherSport={this.state.selectSportValue}
                        type={this.state.type}
                  ></Screen1>
                    <Screen2
                    sportName={this.state.sportName}
                    region={this.state.selectRegionValue}
                        otherSport={this.state.selectSportValue}
                        type={this.state.type}></Screen2>
                </div>
            )
        }
}
export default Screen;