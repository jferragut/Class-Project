import React from 'react';
import { Link } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { watchlistUtils } from '../Utils/watchlist.js';
import { RenderRow } from './row.jsx';
import { RenderCard } from './card.jsx';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        var userInfo = mainStore.getUserInfo();
        mainActions.GetCurrencies();
        var theCurrencies = mainStore.getCurrencyList();
        
        this.state = {
            table: this.isItMobile(),
            currencyList: theCurrencies,
            username: userInfo.username,
            watchlist: [],
            path: window.location.pathname.substr(1)
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        
        mainActions.GetUserWatchlist(userInfo.username);
    }
    
    
    componentWillMount(){
        
    }
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions);
        //Set a listener on change of the mainStore (emit) to update the state
        mainStore.on('change',this.handleStoreChange);
        //Set a listener on change of the watchlistStore (emit) to update the state
        watchlistStore.on('change',this.handleStoreChange);
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
        this.setState({
            currencyList: mainStore.getCurrencyList(),
            watchlist: watchlistStore.getWatchlist()
        }); 
    }   
    
    RenderAsTable(){
        
        var theData = this.state.currencyList.map((itemData,index) => 
                      <RenderRow data={itemData} arrayPosition={index} key={index}
                      isWatching={this.state.watchlist.includes(itemData.symbol)}
                      path={this.state.path} username={this.state.username} />);
        return(
            <div>
                <table className="table table-inverse table-hover">
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
        var theData = this.state.currencyList.map((itemData,index) => 
                      <RenderRow data={itemData} arrayPosition={index} key={index}
                      isWatching={this.state.watchlist.includes(itemData.symbol)}
                      path={this.state.path} username={this.state.username} />);
                      
        return(
                <div>
                    {theData}
                </div>
            );
    }
    
    render(){
        // debugger;
        return(
            <div>
                {this.state.table === true ? this.RenderAsTable() : this.RenderAsCards() }
            </div>
        );
    }
    
}





