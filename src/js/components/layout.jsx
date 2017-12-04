import React from 'react';
import { DataArea } from './dataarea.jsx';
import { AdSideBar } from './adbar.jsx';
import { Ticker } from './ticker.jsx';
import { Alert } from './alert.jsx';

export class Layout extends React.Component{
    
    render(){
        return(
            <div className="container-fluid no-gutters px-0">
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