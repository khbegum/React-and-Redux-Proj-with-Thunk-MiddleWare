import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {thunk_action_creator, thunk_action_creator2,edit,save,selectChange,cancel,search} from './actions/urls'
import store from './store';

const createHistory = require('history').createBrowserHistory();

export class Screen2 extends Component {
    
    constructor(props) {
        super(props);
        // this.state = {
        //     bwins: [],
        //     leagues: [],
        //     isInEditMode: false,

        //     idChanged: false,
        //     key: ""
        // }
        

    }
    buildOptions=()=> {
        // var arr = [];

        // for (let i = 0; i <= this.state.leagues.length - 1; i++) {
        //     arr.push(<option value={this.state.leagues.key} key={this.state.leagues[i].key}>{this.state.leagues[i].LeagueID}</option>)
        // }

        // return arr;
        var arr = [];

        for (let i = 0; i <= this.props.posts.leagues.length - 1; i++){
            arr.push(<option value={this.props.posts.leagues.key} key={this.props.posts.leagues[i].key}>{this.props.posts.leagues[i].LeagueID}</option>)
        }

        return arr;
    }



    edit=(id) =>{

        // this.setState({
        //     isInEditMode: true,

        //     key: id - 1
        // })
        this.props.dispatch(edit(id))

        
    }



    componentDidMount() {
        console.log(this.props)
        // axios.get("http://localhost:3000/football").then((res) => {
        //     console.log(res.data);
        //     this.setState({ bwins: res.data });
        // })
        store.dispatch(thunk_action_creator());
        // axios.get(" http://localhost:3100/leagues").then((res) => {
        //     console.log(res.data);
        //     this.setState({ leagues: res.data });
        // })
        store.dispatch(thunk_action_creator2());
    }
    onSave=(id)=>{
       
       for(let i=0;i<this.props.bwins.length;i++){
           if(id==this.props.bwins[i].id){
        axios.put("http://localhost:3000/football/"+this.props.posts.bwins[i].id,this.props.bwins[i]).then((res)=>{
            // this.setState({
            //     isInEditMode:false,
            // key:-1
            // })
            this.props.dispatch(save())
             this.props.history.push("/screen2"); 
        })}
            }}
    // getLegaueId=(value) =>{

    //     for (let i = 0; i < this.state.leagues.length - 1; i++) {
    //         if (this.state.leagues[i].id == value) {

    //             return this.state.leagues[i].LeagueName;
    //         }
    //     }
    // }
    handleSelectChange = (event) => {
        alert(event.target.value)
        for (let i = 0; i < this.props.bwins.length - 1; i++) {
            if (this.props.leagues[i].LeagueID == event.target.value) {
                alert(this.props.leagues[i].LeagueName)
                
                this.props.bwins[i].OB1_Name1 =this.props.leagues[i].LeagueName;
                    this.props.bwins[i].OB1_Id1 = event.target.value;
                    this.props.dispatch(selectChange())
                //     this.setState({
                // isInEditMode:true,
                // idChanged: true
                // });

               

            }
        }





    }
    cancel=()=> {
        window.location.reload();
        this.props.dispatch(cancel())
        // this.setState({
        //     isInEditMode: false
        // })
    }
    delete=(bwin)=>{
        // alert(bwin.id)

    };
    handleSearch=(e)=>{
e.preventDefault();
const searchValue=this.getSearchValue.value;
const row=this.props.bwins.filter((bwin)=>{
    return bwin.BWIN_Id===searchValue;
})
this.props.dispatch(search(row))
// this.setState({
// bwins:row
// })
    }
    render() {
        
        return (
            <div  >
                   <h1>Hello</h1>
            {/* <h1>{this.props.posts.type}</h1>
        <h1>{this.props.posts.selectRegionValue}</h1> */}
        <p>{console.log(this.props.posts)}</p>

                {/* <p> {localStorage.getItem("newSportName")}>>{localStorage.getItem("newSportregion")}>>{localStorage.getItem("newSport")}>>{localStorage.getItem("newSportType")}</p> */}
    {/* <p>type={this.props.type}</p><h1>{this.props.gameName}</h1> */}
                <div>
                    <form onSubmit={this.handleSearch}><input type={Number} id="search" ref={(input)=>this.getSearchValue = input} /></form>
                    
                </div>
                <table border="1">
                    <thead>
                        <tr>
                        <th>_Id</th>
                        <th>BWIN Name</th>
                        <th>BWIN_Id</th>
                        <th>OB1_Name1</th>
                        <th>OB1_Id1</th>
                        <th>OB2_Name2</th>
                        <th>OB2_Id2</th>
                        <th>OB3_Name3</th>
                        <th>OB3_Id3</th>
                        <th>OB4_Name4</th>
                        <th>OB4_Id4</th>
                        <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    {/* <tbody>{this.props.posts.bwins.map((bwin,i) =>
                        <tr key={bwin.id}>
                            <td>{bwin.key}</td>
                            <td>{bwin.BWIN_Name}</td>
                            <td>{bwin.BWIN_Id}</td>
                            <td>{bwin.OB1_Name1}</td>
                            {this.props.key===i?
                                <td><select disabled={!this.props.isInEditMode}
                                    onChange={this.handleSelectChange}>{this.buildOptions()}</select></td>
                                :
                                <td>{bwin.OB1_Id1}</td>}
                            <td>{bwin.OB2_Name2}</td>
                            <td>{bwin.OB2_Id2}</td>
                            <td>{bwin.OB3_Name3}</td>
                            <td>{bwin.OB3_Id3}</td>
                            <td>{bwin.OB4_Name4}</td>
                            <td>{bwin.OB3_Id3}</td>
                            
                            {this.props.isInEditMode ?
                                <td><table><tbody>
                                    <tr><td><button onClick={()=>this.onSave(bwin.id)}>Save</button></td>
                                    <td><button onClick={this.cancel}>Cancel</button></td></tr>
                                    </tbody></table>
                                   
                                </td>
                                :
                                <td>
                                <button onClick={() => this.edit(bwin.id)} >Edit</button>
                            </td>}
                                <td><button onClick={this.delete(bwin)}>Delete</button>
                                </td>
                        </tr>




                    )}</tbody> */}
                </table>
                         
                

            </div>
        )
    }
}
const mapStatetToProps=(state)=>{
    return{
        posts:state
    }

}
const mapDispatchToProps = dispatch =>({
    //we'll fill this in and explain it later!
})
export default connect(mapStatetToProps,mapDispatchToProps)(Screen2);