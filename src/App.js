import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Screen2} from './screen2'

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Screen1 from 'C:/Users/khbegum/Documents/ReactApp/test-ptoj/src/Screen1.js'
import  BwinList  from 'C:/Users/khbegum/Documents/ReactApp/test-ptoj/src/bwinList.js';
import Header from 'C:/Users/khbegum/Documents/ReactApp/test-ptoj/src/header.js'
import x from './x';


function App() {
  
  return (
    <Router>
      <div><header  />
    <div>
      <Switch>
             <Route exact path="/screen2" component={Screen2}/>
            <Route exact path="/" component={Screen1}/>
            <Route exact path="/x" component={x} />
           
            
            
            />
            {/* <Route
  exact
  path="/edit/:id"
  
  render = {props => <Edit {...props} key={this.props.location.key} /> } />
/> */}
           
            </Switch>
      
    </div>
    </div>
    </Router>
  );
}

export default App;
