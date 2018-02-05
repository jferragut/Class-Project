import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class WatchlistStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.model = {
            watchlistAddStatus: '',
            watchlistRemoveStatus: '',
            watchlist: ''
        };
    }
    
    
    // Return methods
    getWatchlistAddStatus(){
        return this.model.watchlistAddStatus;
    }
    
    getWatchlistRemoveStatus(){
        return this.model.watchlistRemoveStatus;
    }
    
    getWatchlist(){
        return this.model.watchlist;
    }
    
    
    // Functions that process action data
    removeWatchlistItem(status, action, data){
        if(status==200){
            this.model = {
                watchlistRemoveStatus: 'Item '+data+' was successfully removed from your watchlist.',
                watchlist: data
            };
        }else{
            this.model = {
                watchlistRemoveStatus: 'Item '+data+' could not be removed.',
                watchlist: data
            };
        }
        this.emit('change');
    }
    
    addWatchlistItem(status, action, data){
        if(status==200){
            this.model = {
                watchlistAddStatus: 'Item '+data+' was successfully added to your watchlist.',
                watchlist: data
            };
        }else{
            this.model = {
                watchlistAddStatus: 'Item '+data+' could not be removed.',
                watchlist: data
            };
        }
        this.emit('change');
    }
    
    handleActions(action){
        switch(action.actionType)
        {
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