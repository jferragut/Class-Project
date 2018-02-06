import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                height: 'auto'
            },
            viewTable: true,
            dataAlign: []
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillMount(){
        this.createAd();
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
    
    handleChange(){
        
    }
    
    createAd(){
        if(this.state.createAd.position == 'right'){
            this.setState({
                dataAlign: this.state.dataAlign.concat(["order-1"])
            // console.log(this.dataAlign);
            });
        }else{
            this.setState({
                dataAlign: this.state.dataAlign.concat(["order-2"])
            });
            // console.log(this.dataAlign);
        }
    }
    
    render(){
        return(
            <div className="dashboard">
                <div className="topBarRegion">
                    <Alert />   
                    <Ticker />  
                </div>
                <div className="middleContent">
                    <div className="row">
                        <BrowserRouter>
                                <Switch>
                                    <Route exact path='/dashboard'>
                                        <DataArea className={this.state.dataAlign} history={this.props.history} viewTable={true} /> 
                                    </Route>
                                    <Route exact path='/coin'>
                                        <DataArea className={this.state.dataAlign} history={this.props.history} viewTable={false} /> 
                                    </Route>
                                </Switch>
                        </BrowserRouter>
                        <AdBarZone createAd={this.createAd} />   
                    </div>
                </div>
            </div>
            );
    }
    
}