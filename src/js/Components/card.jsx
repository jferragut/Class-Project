import React from 'react';
import { Link } from 'react-router-dom';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist.js';

export class RenderCard extends React.Component{
    
    render(){
        return(
            <div key={this.props.data.rank} className="card currencyCard">
                <div className="card-body">
                    <i 
                        className={'fa ' + ( (this.props.data.beingWatched===true) ? "fa-bell":"fa-bell-o")} 
                        onClick={()=>watchlistUtils.watchlistToggle(this.props.isWatching,
                                this.props.data.symbol,this.props.path,this.props.username)}
                                aria-hidden="true" data-toggle="tooltip" 
                                title={((this.props.isWatching) ? "Remove from Watchlist":"Add to Watchlist")}>
                    </i>
                    <h5 className="card-title">{this.props.data.rank}  <Link to = {{pathname:'/coin',
                                                                                search:'?symbol='+this.props.data.symbol}}>
                                                                                {this.props.data.name}</Link></h5>
                    <p className="card-text">Price: &emsp;${this.props.data.price_usd} per {this.props.data.symbol}</p>
                    <p className="card-text">Change 24 Hrs: &emsp;{this.props.data.percent_change_24h} %</p>
                    <Sparklines data={this.props.data.ticker_history.split(',')}>
                        <SparklinesLine color="white" />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                </div>
            </div>
        );
    }
}