import React,{Component} from 'react';
import axios from 'axios';
import  BwinList  from 'C:/Users/khbegum/Documents/ReactApp/test-ptoj/src/bwinList.js';
export class Bwin extends  Component{
    constructor(){
super();
this.state={
    bwins:[]
}
    }
    componentDidMount(){
        axios.get("http://localhost:3000/bwins").then((response)=>{
            console.log(response.data);
            this.setState({todos:response.data})
        })
    }

render(){
    return(
        <div>
            <BwinList bwins={this.state.bwins}></BwinList>
        </div>
    )
}
}