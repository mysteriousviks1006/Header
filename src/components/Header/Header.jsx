import {React,Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navlinks from './Navlinks';
import './Header.css';
import SideDrawer from './SideDrawer';
 



class Header extends Component{  
  state = {
    SideDrawerOpen:false
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  };

  backdropClickHandler = () =>{
    this.setState({SideDrawerOpen:false})
  }
 
  render(){
    let sideDrawer;
     if(this.state.SideDrawerOpen) {
       sideDrawer = <SideDrawer click={this.backdropClickHandler}/>
     } 

    return (
      <Fragment>
        {sideDrawer}
      <header className="main-header">
        <button className="menu-btn" onClick={this.drawerToggleClickHandler}>
          <span />
          <span />
          <span />
        </button>
        <h2 className="title">
          <Link to="/">Home</Link>
        </h2>
        <nav className="header-nav">
          <Navlinks />
        </nav>
      </header>
      </Fragment>
    );
  }
}

export default Header;