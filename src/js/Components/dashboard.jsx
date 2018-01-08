import React from 'react';

import { DataArea } from './dataarea.jsx';
import { AdBarZone } from './adbar.jsx';
import { Ticker } from './ticker.jsx';
import { Alert } from './alert.jsx';

export class Dashboard extends React.Component{
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            // 1=right, 2=left, 3=pop-up
            layout: 1    
        };
        

    }
    
    render(){
        var classPresent = document.querySelector("#adBarZone").classList.contains("order-2");
        if(classPresent==true){
            const dataAlign = "order-1";
            console.log(this.dataAlign);
        }else{
            const dataAlign = "order-2";
            console.log(this.dataAlign);
        }
        
        return(
            <div className="dashboard">
                <div className="topBarRegion">
                    <Alert />   
                    <Ticker />  
                </div>
                <div className="middleContent">
                    <div className="row">
                        <DataArea className={this.dataAlign} /> 
                        <AdBarZone createAd={this.theAd} />   
                    </div>
                </div>
            </div>
            );
    }
    
}