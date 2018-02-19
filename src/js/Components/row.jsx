import React from 'react';
import { Link } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist.js';

export class RenderRow extends React.Component{
    render(){
        return(
        <tr>
            <td>{this.props.data.rank}</td>
            <td><Link to =  {{pathname:'/coin',
                            search:'?symbol='+this.props.data.symbol}}>
                            {this.props.data.name}</Link></td>
            <td>{this.props.data.symbol}</td>
            <td>{this.props.data.market_cap_usd}</td>
            <td>{this.props.data.price_usd}</td>
            <td>{this.props.data.volume_24h_usd}</td>
            <td>{this.props.data.available_supply}</td>
            <td>{this.props.data.percent_change_24h}</td>
            <td>
                <Sparklines data={this.props.data.ticker_history.split(',')}>
                    <SparklinesLine color="white" />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </td>
            <td><i 
                    className={'fa ' + ( (this.props.data.beingWatched===true) ? "fa-bell":"fa-bell-o")} 
                    onClick={()=>watchlistUtils.watchlistToggle(this.props.isWatching,
                    this.props.data.symbol,this.props.path,this.props.username)}
                    aria-hidden="true" data-toggle="tooltip" 
                    title={((this.props.isWatching) ? "Remove from Watchlist":"Add to Watchlist")}>
                </i></td>
        </tr>    
        );
    }
}





