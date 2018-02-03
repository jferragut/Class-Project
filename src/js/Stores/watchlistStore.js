import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class WatchlistStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.model = {
            watchlist: ''
        };
    }
    
  
    removeWatchlistItem(data, symbol){
        if(data=='success'){
            this.model = {
                watchlist: 'Item '+symbol+' was successfully removed from your watchlist.'
            };
        }else{
            this.model = {
                watchlist: 'Item '+symbol+' could not be removed.'
            };
        }
        this.emit('change');
    }
    
    addWatchlistItem(data, symbol){
        if(data=='success'){
            this.model = {
                watchlist: 'Item '+symbol+' was successfully added to your watchlist.'
            };
        }else{
            this.model = {
                watchlist: 'Item '+symbol+' could not be removed.'
            };
        }
        this.emit('change');
    }
    
    handleActions(action){
        switch(action.actionType)
        {
            case "REMOVE_WATCHLIST_ITEM": this.removeWatchlistItem(action.actionData, action.data); break;
            case "ADD_WATCHLIST_ITEM": this.addWatchlistItem(action.actionData, action.data); break;
        }
    }
}

var watchlistStore = new WatchlistStore();
mainDispatcher.register(watchlistStore.handleActions.bind(watchlistStore));
window.mainDispatcher = mainDispatcher;
export default watchlistStore;