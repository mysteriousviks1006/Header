import {React,Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Navlinks extends Component{
    render(){
        return(
            <ul className="nav-links">
                <li>
                    <NavLink to="/user/report">Report</NavLink>
                </li>
                <li>
                    <NavLink to="/user/add">Add</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
          </ul>
        );
    }
}

export default Navlinks;