import React, { Component} from 'react';
import NavLinks from './Navlinks';
import './SideDrawer.css';

class SideDrawer extends Component{
    render(){
        return(
            <aside className="side-drawer" onClick={this.props.click}>
            <NavLinks />
            </aside>
        )
    }
}

export default SideDrawer;