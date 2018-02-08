import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.aux = {
        username: 'test',
        password: 'test',
        };
        
        this.isLoggedIn = true;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: [],
            watchlist: ''
        };
        
        this.emailContact = false;
    }
    
    // Return methods
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    getLoginStatus(){
        return this.isLoggedIn;
    }
    
    getUserInfo(){
        return this.aux;
    }

    registerConfirm(){
        return true;
    }
    
    // Functions that process action data
    logUserIn(){
        this.isLoggedIn = true;
        this.emit('change');
    }
    
    changeEmailContactPref(){
        this.emailContact = true;
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
    
    registerConfirm(){
        
    }
  
    handleActions(action){
        switch(action.actionType)
        {
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            case "LOGIN_CONFIRM": this.logUserIn(action); break;
            case "EMAIL_CONTACT": this.changeEmailContactPref(action); break;
            case "REGISTER_CONFIRM": this.registerConfirm(action); break;
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;