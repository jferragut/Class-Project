import React from 'react';

import { DataArea } from './dataarea.jsx';
import { AdBarZone } from './adbar.jsx';
import { Ticker } from './ticker.jsx';
import { Alert } from './alert.jsx';

export class Dashboard extends React.Component{
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            createAd: {
                image: 'https://gsws002.files.wordpress.com/2012/10/popchips-nothing-fake-about-em-600-93670.jpg', 
                url: 'http://www.google.com',
                // position should be right or left
                position: 'right',
                width: '100%',
                height: 'auto',
            },
            viewTable: true
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillMount(){
        
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
    
    handleChange(){
        
    }
    
    render(){
        var dataAlign = [];
        if(this.state.createAd.position === 'right'){
            dataAlign.push("order-1");
            // console.log(this.dataAlign);
        }else{
            dataAlign.push("order-2");
            // console.log(this.dataAlign);
        }
        
        return(
            <div className="dashboard">
                <div className="topBarRegion">
                    <Alert />   
                    <Ticker />  
                </div>
                <div className="middleContent">
                    <div className="row">
                        <DataArea className={dataAlign} history={this.props.history} viewTable={this.state.viewTable} /> 
                        <AdBarZone createAd={this.state.createAd} />   
                    </div>
                </div>
            </div>
            );
    }
    
}