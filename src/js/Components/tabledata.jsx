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
            path: window.location.pathname.substr(1),
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.isItMobile = this.isItMobile.bind(this);
    }
    
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({table:this.isItMobile()});
    }
    
    isItMobile(){
        if(window.innerWidth <= 768) return false; else return true;
    }
    
    RenderAsTable(){
        if(this.props.currencyList.length!=0 && typeof(this.props.currencyList)!='undefined'){
            var theData = this.props.currencyList.map((theCoin,index) => 
                          <RenderRow data={theCoin} 
                          history={this.props.history}
                          key={index}
                          isWatching={theCoin.beingWatched}
                          path={this.state.path} 
                          username={this.props.username} />);
        }if(this.props.currencyList.length===0 || typeof(this.props.currencyList)=='undefined'){ 
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
        if(this.props.currencyList.length!=0 && typeof(this.props.currencyList)!='undefined'){
            var theData = this.props.currencyList.map((theCoin,index) => 
                          <RenderCard data={theCoin} key={index}
                          isWatching={theCoin.beingWatched}
                          path={this.state.path}
                          username={this.props.username} />);
        }if(this.props.currencyList.length===0 || typeof(this.props.currencyList)=='undefined'){ 
            return <Loading />;
        }
                      
        return(
                <div>
                    {theData}
                </div>
        );
    }
    
    render(){
            return(
                <div>
                    {this.state.table === true ? this.RenderAsTable() : this.RenderAsCards() }
                </div>
            );
    }
    
}

