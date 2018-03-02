import React from 'react';

import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { watchlistUtils } from '../Utils/watchlist.js';
import stockConfig from '../Utils/stockConfig.js';
import {Social} from './social.jsx';

var ReactHighstock = require('react-highcharts/ReactHighstock.src');


export class DetailView extends React.Component{
    
    constructor(props){
        
        super(props); 

        this.state = {
            username: this.props.username,
            queryParameter: window.location.search.split("=")[1],
            path: window.location.pathname.substr(1),
            coin: []
        };
        
        stockConfig.run = stockConfig.run.bind(this);
    }
    
    
    componentWillMount(){
        this.extractCoinData();
        watchlistUtils.watchlistToggle = watchlistUtils.watchlistToggle.bind(this);
    }
    
    extractCoinData(){
        var theCoin = this.props.currencyList.filter(coin => (coin.symbol === this.state.queryParameter));
        if(theCoin.length!=0) this.setState({coin: theCoin[0]}); else alert("Coin not found.");
    }
    
    getCol(matrix, col){
        var column = [];
        for(var i=0; i<matrix.length; i++){
           column.push(matrix[i][col]);
        }
        return column;
      }
    
    render(){
        mainActions.GetSubreddit(this.state.coin.name);
        var marketCap = Number(this.state.coin.market_cap_usd) / Number(this.state.coin.price_usd) ;
        var volume = Number(this.state.coin.volume_24h_usd) / Number(this.state.coin.price_usd) ; 
        var circulatingSupply = Number(this.state.coin.available_supply) / Number(this.state.coin.price_usd) ;
        var maxSupply = Number(this.state.coin.total_supply) / Number(this.state.coin.price_usd) ;
        this.results = mainStore.getSubredditResults(this);
        return(
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="row">
                        <div className="col-12">
                            <h2>{this.state.coin.name}</h2>
                            <i className={'fa ' + ((this.state.coin.beingWatched===true) ? "fa-bell" : "fa-bell-o")} 
                                onClick={() =>  watchlistUtils.watchlistToggle( this.state.coin.beingWatched,
                                                                                this.state.coin.symbol,
                                                                                this.state.path,
                                                                                this.props.username)}
                                aria-hidden="true" data-toggle="tooltip" 
                                title={((this.state.coin.isWatching) ? "Remove from Watchlist":"Add to Watchlist")}>
                            </i>
                            <h3>{this.state.coin.price_usd}USD
                            per 1 {this.state.coin.symbol}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h3>Market Cap</h3>
                            {this.state.coin.market_cap_usd}USD
                            {marketCap}{this.state.coin.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Volume (24h)</h3>
                            {this.state.coin.volume_24h_usd}USD
                            {volume}{this.state.coin.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Circulating Supply</h3>
                            {circulatingSupply}{this.state.coin.symbol}
                        </div>
                        <div className="col-12 col-md-3">
                            <h3>Max Supply</h3>
                            {maxSupply}{this.state.coin.symbol}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <h3>{this.state.coin.name} Quicklinks:</h3>
                    <ul>
                        <li>Sample Link 1</li>
                        <li>Sample Link 2</li>
                        <li>Sample Link 3</li>
                        <li>Sample Link 4</li>
                    </ul>
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
                            <Social coin={this.state.coin.name} result={this.results}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}