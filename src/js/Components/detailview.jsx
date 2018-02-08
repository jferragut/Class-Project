import React from 'react';
import mainStore from '../Stores/mainStore.js';
import watchlistStore from '../Stores/watchlistStore.js';
import * as mainActions from '../Actions/mainActions.js';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {watchlistUtils} from '../Utils/watchlist';

export class DetailView extends React.Component{
    
    constructor(){
        
        super(); 
        
        this.state = {
            table: this.isItMobile(),
            currencyList: [],
            isLoggedIn: mainStore.getLoginStatus(),
            username: mainStore.getUserInfo().username
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        mainActions.GetCurrencies();
    }
    
    
    componentWillMount(){
        watchlistUtils.watchlistToggle = watchlistUtils.watchlistToggle.bind(this);
        watchlistUtils.watchlistStatusCheck = watchlistUtils.watchlistStatusCheck.bind(this);
    }
    
    componentDidMount() {
        //window resize listener
        window.addEventListener('resize', this.updateWindowDimensions);
        //Set a listener on the change of the store (emit) to set state of the currencyList in the state
        mainStore.on('change',this.handleStoreChange.bind(this));
        watchlistStore.on('change',this.handleStoreChange.bind(this));
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
        this.setState({
            currencyList: mainStore.getCurrencyList() 
        }); 
    }
    
    
    renderChart(){
        
    }
    
    render(){
        // debugger;
        return(
            <div>
                {this.renderChart()}
            </div>
        );
    }
    
    
    
}





