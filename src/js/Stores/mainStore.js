import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';
import watchlistStore from '../Stores/watchlistStore.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        
        this.isLoggedIn = true;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: [],
            profile: {
                username: "test",
                first_name: null,
                last_name: null,
                email: null,
                password: null,
                passwordRetry: null,
                is_active: null,
                last_login: null,
                date_joined:null,
                email_contact: null,
                subscription_status: null
            },
            reddit: {}
        };
        
        watchlistStore.on("change",this.handleWatchlistChange.bind(this));
    }

    setModel(newModel){
        this.model = Object.assign(this.model, newModel);
        this.emit('change');
    }
    
    // Return methods
    getUserProfile(){
        return this.model.profile;
    }
    
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    getLoginStatus(){
        return this.isLoggedIn;
    }
    
    getSubredditResults(){
        return this.model.reddit;
    }
    
    // Functions that process action data
    setCurrencyList(data){
        this.setModel({ currencyList: data });
    }
    
    handleWatchlistChange(){
        var theWatchlist = watchlistStore.getWatchlist();
        //reset beingWatched property for each coin
        this.model.currencyList.forEach(function(theCoin){
                theCoin.beingWatched=false;
        });
        //check to see which coins are beingWatched in the recently updated watchlist
        this.model.currencyList.forEach(function(theCoin){
            theWatchlist.forEach((watchlistCoin)=>{
                if(theCoin.symbol===watchlistCoin.symbol) theCoin.beingWatched=true;
            });
        });
        this.emit('change');
    }   
    
    registerConfirm(data){
        this.setModel({ 
            profile: {
                username: data.username,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                passwordRetry: data.passwordRetry,
                is_active: data.is_active,
                email_contact: data.email_contact,
                subscription_status: data.subscription_status 
            }
        });
    }
    
    editProfileConfirm(data){
        this.setModel({ 
            profile: {
                username: data.username,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                is_active: data.is_active,
                email_contact: data.email_contact,
                subscription_status: data.subscription_status         
            }
            
        });
    }
    
    passwordResetConfirm(data){
        this.setModel({ 
            profile: {
                password: data.password,
                passwordRetry: data.passwordRetry,
            }
        });
    }
    
    setSubredditResults(data){
        this.setModel({ 
            reddit: data
        });
    }
    
    logUserIn(){
        if(mainStore.registerConfirm == true){
            this.isLoggedIn = true;
            this.emit('change');
        }
        else{
            this.isLoggedIn =false; 
            this.emit('change');
        } 
    }
    
    validateUser(data){
        if(data=="true"){
            this.isLoggedIn = true;
        }else{
            this.isLoggedIn = false;
        }
        
    }
    
  
    handleActions(action){
        switch(action.actionType)
        {
            case "SET_STORE_POSITION": this.setStorePosition(action.position); break;
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            case "REGISTER_CONFIRM": this.registerConfirm(action.actionData); break;
            case "EDITPROFILE_CONFIRM": this.editProfileConfirm(action.actionData); break;
            case "PASSWORD_RESET_CONFIRM": this.passwordResetConfirm(action.actionData); break;
            case "SUBREDDIT_RESULTS": this.setSubredditResults(action.actionData); break;
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;