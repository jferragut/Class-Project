import React from 'react';
import { DataArea } from './dataarea.jsx';
import { AdBar } from './adbar.jsx';
import { Ticker } from './ticker.jsx';
import { Alert } from './alert.jsx';

export class Layout extends React.Component{
    
    render(){
        return(
            <div className="container-fluid position-relative">
                <Alert />
                <Ticker />
                <DataArea />
                <AdBar />
            </div>
            );
    }
    
}