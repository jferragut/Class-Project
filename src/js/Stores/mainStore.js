import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js'
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.aux = {
        username: null,
        password: null,
        };
        
        this.isLoggedIn = false;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: []
        };
    }
    
    getUserInfo(){
        return this.aux;
    }
    
    getCurrencyList(){
        console.log(this.model.currencyList);
        return this.model.currencyList;
    }
    
    
    setCurrencyList(data){
        console.log(data);
        this.model = {
          currencyList: data
        };
        this.emit('change');
        console.log(this.model.currencyList);
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
            // case "SET_CURRENCY_LIST": this.setCurrencyList(action.data); break;
            // case "SAVE_SCORES": this.saveScores(action.actionData); break;
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;