import React from 'react';

import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { watchlistUtils } from '../Utils/watchlist.js';
import stockConfig from '../Utils/stockConfig.js';

var ReactHighstock = require('react-highcharts/ReactHighstock.src');


export class DetailView extends React.Component{
    
    constructor(){
        
        super(); 
        var userInfo = mainStore.getUserProfile();
        var theCurrencies = mainStore.getCurrencyList();
        var theWatchlist = watchlistStore.getWatchlist();
        if(watchlistStore.getWatchlist().length==0) mainActions.GetUserWatchlist(userInfo.username);
        this.state = {
            currencyList: theCurrencies,
            isLoggedIn: mainStore.getLoginStatus(),
            username: userInfo.username,
            queryParameter: window.location.search.split("=")[1],
            watchlist: theWatchlist,
            data: [],
            position: mainStore.getPosition()
        };
        
        this.handleStoreChange = this.handleStoreChange.bind(this);
        stockConfig.run = stockConfig.run.bind(this);
    }
    
    
    componentWillMount(){
        // this.setState({currencyList: mainStore.getCurrencyList()});
        watchlistUtils.watchlistToggle = watchlistUtils.watchlistToggle.bind(this);
    }
    
    componentDidMount() {
        //Set a listener on the change of the store (emit) to set state of the currencyList in the state
        mainStore.on('change',this.handleStoreChange.bind(this));
        watchlistStore.on('change',this.handleStoreChange.bind(this));
    }
    
    componentWillUnmount() {
        //unload listeners
        mainStore.removeListener('change',this.handleStoreChange);
        watchlistStore.removeListener('change',this.handleStoreChange);
    }
    
    
    handleStoreChange(){
        this.setState({
            currencyList: mainStore.getCurrencyList(),
            watchlist: watchlistStore.getWatchlist(),
            position: mainStore.getPosition()
        }); 
    }
    
    getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
    
    
    render(){
        var theList = this.state.currencyList;
        var listSelector = theList[this.state.position];
        if(theList.length===0) return <div className="loadingOverlay"><i className="fa fa-spinner fa-spin"></i></div>;
        
        // debugger;
        return(
            <div className="row container-fluid">
                <div className="col-12 col-sm-4">
                    {listSelector.name}
                    <ul>
                        <li>Sample Link 1</li>
                        <li>Sample Link 2</li>
                        <li>Sample Link 3</li>
                        <li>Sample Link 4</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-12">
                            {listSelector.name} 
                            {listSelector.price_usd}USD
                            per 1 {listSelector.symbol}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h3>Market Cap</h3>
                            {listSelector.market_cap_usd}USD
                            {listSelector.market_cap_usd / listSelector.price_usd}{listSelector.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Volume (24h)</h3>
                            {listSelector.volume_24h_usd}USD
                            {listSelector.volume_24h_usd / listSelector.price_usd}{listSelector.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Circulating Supply</h3>
                            {listSelector.available_supply / listSelector.price_usd}{listSelector.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Max Supply</h3>
                            {listSelector.total_supply / listSelector.price_usd}{listSelector.symbol}
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <ul className="nav nav-tabs" id="navTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="charts-tab" data-toggle="tab" href="#charts" role="tab" aria-controls="charts" aria-selected="true">Charts</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="markets-tab" data-toggle="tab" href="#markets" role="tab" aria-controls="markets" aria-selected="true">Markets</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="true">Social</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="navTabContent">
                        <div className="tab-pane fade show active" id="charts" role="tabpanel" aria-labelledby="charts-tab">
                            <ReactHighstock config={stockConfig.run()} />
                        </div>
                        <div className="tab-pane fade" id="markets" role="tabpanel" aria-labelledby="markets-tab">
                        Market data goes here
                        </div>
                        <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                        Social data goes here
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}