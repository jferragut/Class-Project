import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.profile = {
        username: null,
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        passwordRetry: null,
        email_contact: null,
        subscription_status: null,
        };
        
        this.isLoggedIn = false;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: [],
            watchlist: ''
        };
        
        
    }
    
    getUserProfile(){
        return this.profile;
    }
    
    // Return methods
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    getLoginStatus(){
        return this.isLoggedIn;
    }
    
    getUserInfo(){
        return this.profile;
    }

    registerConfirm(data){
        this.profile.username= data.username,
        this.profile.first_name= data.first_name,
        this.profile.last_name= data.last_name,
        this.profile.email= data.email,
        this.profile.password= data.password,
        this.profile.passwordRetry= data.passwordRetry,
        this.profile.email_contact= data.email_contact,
        this.profile.subscription_status= data.subscription_status,
        this.emit('change');
        return true;
    }
    
    // Functions that process action data
    logUserIn(){
        if(mainStore.registerConfirm == true){
        this.isLoggedIn = true;
        this.emit('change');
        }
        else return false;
    }
    
    
    setCurrencyList(data){
        this.model = {
          currencyList: data
        };
        this.emit('change');
    }
    
    validateUser(data){
        if(data=="true"){
            this.isLoggedIn = true;
        }else{
            this.isLoggedIn = false;
        }
        this.emit('change');
    }
    
  
    handleActions(action){
        switch(action.actionType)
        {
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            case "LOGIN_CONFIRM": this.logUserIn(action); break;
            case "REGISTER_CONFIRM": this.registerConfirm(action); break;
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;