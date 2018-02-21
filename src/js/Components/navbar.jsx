import React from 'react';
import tc_logo from '../../images/tc_logo.png';
import { Link,NavLink } from 'react-router-dom';


export class Navbar extends React.Component{

    constructor() {
    
        super();
        
        this.state = {
            view: this.isItMobile(),
            theMenu: {
                mobile: [
                    this.addItem('Home', '/'),
                    this.addItem('Dashboard', '/dashboard'),
                    this.addItem('Login', '/login'),
                    this.addItem('Contact Us', '/'),
                    this.addItem('About Us', '/'),
                    this.addItem('Blog', '/')
                ],
                desktop:[
                    this.addItem('Home', '/'),
                    this.addItem('Contact Us', '/'),
                    this.addItem('About Us', '/'),
                    this.addItem('Blog', '/')
                ]
            }
        };
        
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.isItMobile = this.isItMobile.bind(this);
    }
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({view:this.isItMobile()});
    }
    
    addItem(itemName, itemURL, itemLinks = null) {
    
        return {
            id: Math.random(),
            label: itemName,
            url: itemURL,
            links: itemLinks
        };
    }
    
    addLink(linkName, linkURL) {
    
        return {
            label: linkName,
            url: linkURL
        };
    }

    
    render(){
        return (
            <nav className="container-fluid navbar fixed-top navbar-light bg-light py-0">
                   <a className="navbar-brand" ><img className="logo" src= { 'public/'+tc_logo }  />Think Crypto</a>
                    
                    <div className="navbar-nav ml-auto px-3 d-none">
                        <ul className="no-list-style">
                            <li><NavLink className="nav-item active nav-link" to="/dashboard" >Dashboard</NavLink></li>
                            <li><NavLink className="nav-item active nav-link" to="/login" >Login </NavLink></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                            <span className="navbar-toggler-icon my-toggler"></span>
                    </button>
                    
                    {(this.state.view===true) ? this.renderLikeAHamburger(this.state.theMenu.desktop) : this.renderLikeAHamburger(this.state.theMenu.mobile)}
            </nav>
        );
    }
    
    isItMobile(){
        if(window.innerWidth <= 880) return false; else return true;
    }
    
    renderMenuItems(menuData){
        var items = menuData.map((item) => {
            return this.renderNavItem(item);
        });
        return items;
    }
    
    renderLikeAHamburger(listOfNavitems){
        var links = listOfNavitems.map(function(currentElement){
            return <li key={currentElement.id} className="nav-item active"><a className="nav-link" href={currentElement.url}>{currentElement.label}</a></li>;
        });
        
        return (
                <div className="navbar-collapse collapse dropdown-menu-right text-right" id="collapsingNavbar2">
                    <ul className="navbar-nav mx-auto">
                        {links}
                    </ul>
                </div>
        );
    }
  
  
}