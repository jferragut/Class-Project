import React from 'react';

import { DataArea } from './dataarea.jsx';
import { AdSideBar } from './adbar.jsx';
import { Ticker } from './ticker.jsx';
import { Alert } from './alert.jsx';
import { Navbar } from './navbar.jsx';

export class Dashboard extends React.Component{
    
    render(){
        return(
            <div className="dashboard">
                <div className="topBarRegion">
                    <Alert />   
                    <Ticker />  
                </div>
                <div className="middleContent">
                    <div className="row">
                        <DataArea /> 
                        <AdSideBar />   
                    </div>
                </div>
            </div>
            );
    }
    
}