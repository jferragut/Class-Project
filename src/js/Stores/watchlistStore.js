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
    
    setModel(newModel){
        this.model = Object.assign(this.model, newModel);
        this.emit('change');
    }
    
    // Return methods
    getWatchlist(){
        return this.model.watchlist;
    }
    
    
    // Functions that process action data
    updateWatchlist(data){
        this.setModel({ watchlist: data });
    }
    
    
    handleActions(action){
        switch(action.actionType)
        {
            case "GET_USER_WATCHLIST": this.updateWatchlist(action.actionData); break;
            case "REMOVE_WATCHLIST_ITEM": this.updateWatchlist(action.actionData); break;
            case "ADD_WATCHLIST_ITEM": this.updateWatchlist(action.actionData); break;
        }
    }
}

var watchlistStore = new WatchlistStore();
mainDispatcher.register(watchlistStore.handleActions.bind(watchlistStore));
window.mainDispatcher = mainDispatcher;
export default watchlistStore;