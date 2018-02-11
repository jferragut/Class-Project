import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class WatchlistStore extends EventEmmiter{
    
    constructor(){
        super();
        this.model = {
            watchlist: []
        };
    }
    
    // Return methods
    getWatchlist(){
        return this.model.watchlist;
    }
    
    
    // Functions that process action data
    getWatchlistObject(data){
        this.model = {watchlist: data};
        this.emit('change');
    }
    
    removeWatchlistItem(data){
        this.model = {watchlist: data};
        this.emit('change');
    }
    
    addWatchlistItem(status, action, data){
        if(status==200){
            this.model = {
                watchlist: data
            };
        }else{
            this.model = {
                watchlist: data
            };
        }
        this.emit('change');
    }
    
    handleActions(action){
        switch(action.actionType)
        {
            case "GET_USER_WATCHLIST": this.getWatchlistObject(action.actionData,action.status); break;
            case "REMOVE_WATCHLIST_ITEM_FAILED": this.removeWatchlistItem(action.status, action.actionData, action.data); break;
            case "REMOVE_WATCHLIST_ITEM": this.removeWatchlistItem(action.status, action.actionData, action.data); break;
            case "ADD_WATCHLIST_ITEM_FAILED": this.addWatchlistItem(action.status, action.actionData, action.data); break;
            case "ADD_WATCHLIST_ITEM": this.addWatchlistItem(action.status, action.actionData, action.data); break;
        }
    }
}

var watchlistStore = new WatchlistStore();
mainDispatcher.register(watchlistStore.handleActions.bind(watchlistStore));
window.mainDispatcher = mainDispatcher;
export default watchlistStore;