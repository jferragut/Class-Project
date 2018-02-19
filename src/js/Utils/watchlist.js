import * as mainActions from '../Actions/mainActions.js';

export var watchlistUtils = {
    
    watchlistToggle(watching,symbol,path,username){
        // console.log(path);
        // User logged in and Currency is on watchlist, so user requests removal.
        if(watching===true) mainActions.RemoveFromWatchlist(symbol,username); 
        // User Logged in and Currency is not on watchlist, so user wants to add it.
        else if(watching===false) mainActions.AddToWatchlist(symbol,username);
        // User is not Logged in, so redirect to login page
        else this.props.history.push('/login?src='+path); 
    }
    
};