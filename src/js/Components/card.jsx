import React from 'react';
import { Link } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist.js';

export class RenderRow extends React.Component{
    
    render(){
        var actiondata = this.props.data;  
        var theProps = this.props;
        
        return(
            <div key={actiondata.rank} className="card currencyCard">
                <div className="card-body">
                    <i 
                        className={'fa ' + ( (theProps.isWatching) ? "fa-bell":"fa-bell-o")} 
                        onClick={()=>watchlistUtils.watchlistToggle(theProps.isWatching,actiondata.symbol,theProps.path,theProps.username)}
                        aria-hidden="true" data-toggle="tooltip" 
                        title={((theProps.isWatching) ? "Remove from Watchlist":"Add to Watchlist")}>
                    </i>
                    <h5 className="card-title">{actiondata.rank}  <Link to={{pathname:'/coin',search:'?name='+actiondata.name}}>{actiondata.name}  {actiondata.symbol}</Link></h5>
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
}