import React from 'react';
import { DataArea } from './dataarea.jsx';
import { AdBar } from './adbar.jsx';

export class Layout extends React.Component{
    
    render(){
        
        
        return(
            
            
            <div>
                <Alert />
                <Ticker />
                <DataArea />
                <AdBar />
            </div>
            
            
            );
    }
    
}