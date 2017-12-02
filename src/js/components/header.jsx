import React from 'react';
import { Navbar } from './navbar.jsx';


export class Header extends React.Component{
    
    render(){
        
        
        return(
            <div className="header">
                <Navbar />
                This is my header!
            </div>
            );
    }
    
}