import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export class Header extends Component{
    render(){
        return(
            <div>
<ul className="navbar-nav mr-auto">
    <li className="nav-item">
        
        <Link to="/">Screen1
        </Link>
        <Link to="/screen2">Screen2
        </Link>

    </li>

</ul>
            </div>
        )}}
        export default Header;