import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { watchlistUtils } from '../Utils/watchlist.js';

import { RenderRow } from './row.jsx';
import { RenderCard } from './card.jsx';
import { Loading } from './loading.jsx';
import { Error } from './error.jsx';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 


        
        this.state = {
            table: this.isItMobile(),
            currencyList: [],
            username: '',
            watchlist: [],
            position: '',
            path: window.location.pathname.substr(1)
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.isItMobile = this.isItMobile.bind(this);
    }
    
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
        //Set a listener on change of the mainStore (emit) to update the state
        mainStore.on('change',this.handleStoreChange.bind(this));
        //Set a listener on change of the watchlistStore (emit) to update the state
        watchlistStore.on('change',this.handleStoreChange.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
        mainStore.removeListener('change',this.handleStoreChange);
        watchlistStore.removeListener('change',this.handleStoreChange);
    }
    
    updateWindowDimensions() {
        this.setState({table:this.isItMobile()});
    }
    
    isItMobile(){
        if(window.innerWidth <= 768) return false; else return true;
    }
    
    handleStoreChange(){
        var userInfo = mainStore.getUserProfile();
        var theCurrencies = mainStore.getCurrencyList();
        var theWatchlist = watchlistStore.getWatchlist();
        var thePosition = mainStore.getPosition();
        
        this.setState({
            username: userInfo.username,
            currencyList: theCurrencies,
            watchlist: theWatchlist,
            position: thePosition
        }); 
    }   
    
    isInTheWatchlist(symbol){
        var includedCoins = this.state.watchlist.filter(function(item){
            return (item.symbol===symbol);
        });
        return (includedCoins.length===1);
    }
    
    RenderAsTable(){
        if(this.state.currencyList.length!=0 && this.state.currencyList!=null){
            var theData = this.state.currencyList.map((itemData,index) => 
                          <RenderRow data={itemData} arrayPosition={index} key={index}
                          isWatching={this.isInTheWatchlist(itemData.symbol)}
                          path={this.state.path} username={this.state.username} />);
        }if(this.state.currencyList.length===0 || this.state.currencyList==null){ 
            return <Loading />;
        }
        
        return(
            <div>
                <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Market Cap</th>
                                <th>Price</th>
                                <th>Volume (24h)</th>
                                <th>Circulating Supply</th>
                                <th>Change (24h)</th>
                                <th>Price Graph (5d)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {theData}
                        </tbody>
                    </table>
            </div>
        );
    }
    
    
    RenderAsCards(){
        if(this.state.currencyList.length!=0 && this.state.currencyList!=null){
            var theData = this.state.currencyList.map((itemData,index) => 
                          <RenderCard data={itemData} arrayPosition={index} key={index}
                          isWatching={this.isInTheWatchlist(itemData.symbol)}
                          path={this.state.path} username={this.state.username} />);
        }if(this.state.currencyList.length===0 || this.state.currencyList==null){ 
            return <Loading />;
        }
                      
        return(
                <div>
                    {theData}
                </div>
            );
    }
    
    render(){
        // const aux = {
        //     userFetch: this.props.userFetch,
        //     initalizeData: this.props.initalizeData
        // };

        // if (aux.userFetch.pending) {
        // return <Loading/>;
        // } else if (aux.userFetch.rejected) {
        // return <Error error={aux.userFetch.reason}/>;
        // } else if (aux.userFetch.fulfilled) {
        //     {this.handleStoreChange()}
        // }
        
        // if (aux.initializeData.pending) {
        // return <Loading/>;
        // } else if (aux.initializeData.rejected) {
        // return <Error error={aux.initializeData.reason}/>;
        // } else if (aux.initializeData.fulfilled) {
        //     {this.handleStoreChange()}
            return(
                <div>
                    {this.state.table === true ? this.RenderAsTable() : this.RenderAsCards() }
                </div>
            );
        // }
    
}}

