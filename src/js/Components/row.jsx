import React from 'react';
import { Link } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist.js';

export class RenderRow extends React.Component{
    
    storePosition(props){
        mainActions.setStorePosition(props);
    }
    
    render(){
        var actiondata = this.props.data;  
        var theProps = this.props;
        
        return(
        <tr>
            <td>{actiondata.rank}</td>
            <td><Link to={{pathname:'/coin',search:'?name='+actiondata.name}} 
                onClick={()=> this.storePosition(theProps.arrayPosition)}>{actiondata.name}</Link></td>
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
            <td><i 
                    className={'fa ' + ( (theProps.isWatching===true) ? "fa-bell":"fa-bell-o")} 
                    onClick={()=>watchlistUtils.watchlistToggle(theProps.isWatching,actiondata.symbol,theProps.path,theProps.username,theProps.arrayPosition)}
                    aria-hidden="true" data-toggle="tooltip" 
                    title={((theProps.isWatching) ? "Remove from Watchlist":"Add to Watchlist")}>
                </i></td>
        </tr>    
        );
    }
}

//<i className={"fa "+}  onClick={}></i>




