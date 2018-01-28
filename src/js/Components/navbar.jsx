import React from 'react';
import tc_logo from '../../images/tc_logo.png';
import Login from './login.jsx';
import { NavLink } from 'react-router-dom'


export class Navbar extends React.Component{

    constructor() {
    
        super();
    
        this.theMenu = {
            horizontal: [
                this.addItem('Dashboard', '/'),
                this.addItem('Login', '/')
            ],
            vertical:[
                this.addItem('Home', '/'),
                this.addItem('Contact Us', '/'),
                this.addItem('About Us', '/'),
                this.addItem('Blog', '/')
                
                ]
        };
        
        //  console.log(this.theMenu);     
            
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
            <nav className="navbar fixed-top navbar-light bg-light py-0">
                   <a className="navbar-brand" href="#" ><img className="logo" src= { 'public/'+tc_logo } />Think Crypto</a>
                    
                    <div className="navbar-nav ml-auto px-3 d-inline-block">
                        <ul className="no-list-style">
                            <li><NavLink className="nav-item active nav-link" to="/dashboard" >Dashboard</NavLink></li>
                            <li><NavLink className="nav-item active nav-link" to="/login">Login </NavLink></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                        <span className="navbar-toggler-icon my-toggler"></span>
                    </button>
                    
                    {this.renderLikeAHamburger(this.theMenu.vertical)}
                    
                </nav>
    
    
        );
    }
    
    renderMenuItems(menuData){
    var items = menuData.map((item) => {
        return this.renderNavItem(item);
    });
    
    // console.log("The Menu Data",items);
    return items;
    
  }
    
  
    
    renderLikeAHamburger(listOfNavitems){
        
        var links = listOfNavitems.map(function(currentElement){
         return <li key={currentElement.id} className="nav-item active"><a className="nav-link" href={currentElement}>{currentElement.label}</a></li>
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