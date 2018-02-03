import * as mainActions from '../Actions/mainActions.js';


export var watchlistUtils = {
    
    watchlistStatusCheck(status){
            if(this.state.isLoggedIn===true && status===true) return "fa-bell"; else return "fa-bell-o";
    },
    
    watchlistToggle(status,symbol){
        // User logged in and Currency is on watchlist, so user requests removal.
        if(this.state.isLoggedIn===true && status===true) mainActions.RemoveFromWatchlist(symbol,this.state.username); 
        // User Logged in and Currency is not on watchlist, so user wants to add it.
        else if(this.state.isLoggedIn===true && status===false) mainActions.AddToWatchlist(symbol,this.state.username);
        else this.props.history.push('/login'); 
    }
    
};