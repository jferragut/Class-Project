import React from 'react';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist.js';

export class TableData extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            table: this.isItMobile(),
            currencyList: [],
            isLoggedIn: mainStore.getLoginStatus(),
            username: mainStore.getUserInfo().username,
            watchlistAddStatus: '',
            watchlistRemoveStatus: '',
            watchlist: ''
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        mainActions.GetCurrencies();
    }
    
    
    componentWillMount(){
        watchlistUtils.watchlistToggle = watchlistUtils.watchlistToggle.bind(this);
        watchlistUtils.watchlistStatusCheck = watchlistUtils.watchlistStatusCheck.bind(this);
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
            watchlistAddStatus: watchlistStore.getWatchlistAddStatus(),
            watchlistRemoveStatus: watchlistStore.getWatchlistRemoveStatus(),
            watchlist: watchlistStore.getWatchlist()
        }); 
    }
    
    RenderAsTable(){
        // debugger;
        var actiondata = this.state.currencyList;
        return(
            <div>
                <table className="table table-hover">
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
                                <th>Price Graph (7d)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actiondata.map((itemData,index) => this.RenderRow(itemData,index))}
                        </tbody>
                    </table>
            </div>
        );
    }
    
    RenderRow(theData,index){
        // debugger;
        var actiondata = this.state.currencyList[index];
     
        return(
        <tr key={actiondata.rank}>
            <td>{actiondata.rank}</td>
            <td>{actiondata.name}</td>
            <td>{actiondata.symbol}</td>
            <td>{actiondata.market_cap_usd}</td>
            <td>{actiondata.price_usd}</td>
            <td>{actiondata.volume_24h_usd}</td>
            <td>{actiondata.available_supply}</td>
            <td>{actiondata.percent_change_24h}</td>
            <td>
                <Sparklines data={actiondata.ticker_history.split(',')}>
                    <SparklinesLine color="#354152" />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </td>
            <td><i className={"fa "+watchlistUtils.watchlistStatusCheck(index,actiondata.symbol)} aria-hidden="true" data-toggle="tooltip" title="Add to Watchlist" onClick={()=>watchlistUtils.watchlistToggle(actiondata.watchlistStatus,actiondata.symbol)}></i></td>
        </tr>    
        );
    }
    
    RenderAsCards(){
        var actiondata = this.state.currencyList;
        // console.log("Rendering as a card");
        return(
                <div>
                    {actiondata.map((itemData,index) => this.renderCard(itemData,index))}
                </div>
            );
    }
    
    renderCard(theData,index){
        var actiondata = this.state.currencyList[index];
        return(
            <div key={actiondata.rank} className="card currencyCard">
                <div className="card-body">
                    <i className={"fa "+watchlistUtils.watchlistStatusCheck(actiondata.watchlistStatus)} aria-hidden="true" data-toggle="tooltip" title="Add to Watchlist" onClick={()=>watchlistUtils.watchlistToggle(actiondata.watchlistStatus,actiondata.symbol)}></i>
                    <h5 className="card-title">{actiondata.rank}  {actiondata.name}  {actiondata.symbol}</h5>
                    <p className="card-text">Price: {actiondata.price_usd}</p>
                    <p className="card-text">Change 24 Hrs: {actiondata.percent_change_24h}</p>
                    <Sparklines data={actiondata.ticker_history.split(',')}>
                        <SparklinesLine color="#354152" />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                </div>
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





