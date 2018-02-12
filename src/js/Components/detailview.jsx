import React from 'react';

import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { watchlistUtils } from '../Utils/watchlist.js';

var ReactHighstock = require('react-highcharts/ReactHighstock.src');


export class DetailView extends React.Component{
    
    constructor(){
        
        super(); 
        mainActions.GetCurrencies();
        var userInfo = mainStore.getUserProfile();
        var theCurrencies = mainStore.getCurrencyList();
        
        this.state = {
            currencyList: theCurrencies,
            isLoggedIn: mainStore.getLoginStatus(),
            username: userInfo.username,
            queryParameter: window.location.search.split("=")[1],
            watchlist: [],
            data: [],
            position: mainStore.getPosition()
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }
    
    
    componentWillMount(){
        this.setState = {currencyList: mainStore.getCurrencyList()};
        watchlistUtils.watchlistToggle = watchlistUtils.watchlistToggle.bind(this);
    }
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions);
        //Set a listener on the change of the store (emit) to set state of the currencyList in the state
        mainStore.on('change',this.handleStoreChange);
        watchlistStore.on('change',this.handleStoreChange);
    }
    
    componentWillUnmount() {
        //unload listeners
        window.removeEventListener('resize', this.updateWindowDimensions);
        mainStore.remove();
        watchlistStore.remove();
    }
    
    updateWindowDimensions() {
        this.setState({table:this.isItMobile()});
    }
    
    isItMobile(){
        if(window.innerWidth <= 768) return false; else return true;
    }
    
    handleStoreChange(){
        // debugger;
        this.setState({
            currencyList: mainStore.getCurrencyList(),
            watchlist: watchlistStore.getWatchlist(),
            position: mainStore.getPosition()
        }); 
        console.log(this.state.currencyList,this.state.position);
        console.log(this.state.currencyList[this.state.position]);
    }
    
    getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
    
    
    render(){
        const data = [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]];
        var xValues = this.getCol(data, 0);
        var yValues = this.getCol(data, 1);
        var m = (xValues[1] - xValues[0]) / (yValues[1] - yValues[0]);
        var b = yValues[0] - m * xValues[0];
        const index = this.state.position;
        var list = this.state.currencyList[index];
        console.log(list);
        var config = {
          type: { type: 'line' },
          rangeSelector: {
            selected: 1
          },
          title: {
            text: this.state.queryParameter+" Charts"
          },
          navigator: {
              yAxis: {
                title: {
                    text: '24h Vol',
                }
              }
          },
          yAxis: [{ // Primary yAxis
                title: {
                    text: 'Price (USD)',
                },
                opposite: true
            },{ // Secondary yAxis
                title: {
                    text: 'Market Cap',
                },
                opposite: false
            }],
          series: [{
            name: this.state.queryParameter,
            color: 'blue',
            data: data,
            tooltip: {
              valueDecimals: 2
            },
          },{
            name: "Regression Line",
            color: 'red',
            marker: {enabled:false},
            lineWidth: 5,
            data: [[Math.min(...xValues), m * Math.min(...xValues) + b], 
                   [Math.max(...xValues), m * Math.max(...xValues) + b]],
          }],
        };
        // debugger;
        return(
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
                        <ReactHighstock config={config} />
                    </div>
                    <div className="tab-pane fade" id="markets" role="tabpanel" aria-labelledby="markets-tab">
                    Market data goes here
                    </div>
                    <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                    Social data goes here
                    </div>
                </div>
                
            </div>
        );
    }

}