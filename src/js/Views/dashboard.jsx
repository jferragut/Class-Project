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
                    <Ticker />  
                </div>
                <div className="middleContent">
                    <div className="row">
                        <BrowserRouter>
                                <Switch>
                                    <Route exact path='/dashboard' props={this.props}>
                                        <DataArea   className={this.state.dataAlign} 
                                                    history={this.props.history} 
                                                    viewTable={true} 
                                                    currencyList={this.state.currencyList}
                                                    username={this.state.username}/> 
                                    </Route>
                                    <Route exact path='/coin' props={this.props}>
                                        <DataArea   className={this.state.dataAlign} 
                                                    history={this.props.history} 
                                                    viewTable={false} 
                                                    currencyList={this.state.currencyList}
                                                    username={this.state.username}/> 
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