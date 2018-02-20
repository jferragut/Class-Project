import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';

import { DataArea } from '../Components/dataarea.jsx';
import { AdBarZone } from '../Components/adbar.jsx';
import { Ticker } from '../Components/ticker.jsx';
import { Alert } from '../Components/alert.jsx';

export class Dashboard extends React.Component{
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            table: this.isItMobile(),
            createAd: {
                image: 'https://gsws002.files.wordpress.com/2012/10/popchips-nothing-fake-about-em-600-93670.jpg', 
                url: 'http://www.google.com',
                // position should be right or left
                position: 'right',
                width: '100%',
                height: 'auto'
            },
            viewTable: true,
            dataAlign: [],
            isLoggedIn: false,
            username: '',
            currencyList: [],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentWillMount(){
        this.handleStoreChange();
        this.createAd();
        
        this.props.history.listen((evt)=>{
            if(evt.pathname==="/dashboard") this.setState({viewTable:true});
            else if(evt.pathname==="/coin") this.setState({viewTable:false});
        });
    }
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
        mainStore.addListener('change', this.handleStoreChange.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
        mainStore.removeListener('change', this.handleStoreChange);
    }
    
    updateWindowDimensions() {
        this.setState({table:this.isItMobile()});
    }
    
    isItMobile(){
        if(window.innerWidth <= 768) return false; else return true;
    }
    
    handleStoreChange(){
        var userInfo = mainStore.getUserProfile();
        var loginStatus = mainStore.getLoginStatus();
        var theCurrencies = mainStore.getCurrencyList();
        
        this.setState({
            isLoggedIn: loginStatus,
            username: userInfo.username,
            currencyList: theCurrencies,
        }); 
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
                    <Ticker coins={this.state.currencyList}/>  
                </div>
                <div className="middleContent px-3">
                    <div className="row">
                        <DataArea   className={this.state.dataAlign} 
                                    history={this.props.history} 
                                    viewTable={this.state.viewTable} 
                                    currencyList={this.state.currencyList}
                                    username={this.state.username}/> 
                        <AdBarZone createAd={this.createAd} />   
                    </div>
                </div>
            </div>
            );
    }
    
}