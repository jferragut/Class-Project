import EventEmmiter from 'events';

import * as MainActions from '../actions/mainActions.js'
import mainDispatcher from '../dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.isLoggedIn = false;  //default status of user login should be set to false until they have logged in.
        
    }
    
    
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    
    setCurrencyList(data){
        this.model=({
          currencyList: [{data}]
        });
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
            case "SET_CURRENCY_LIST": this.setCurrencyList(action.data); break;
            case "SAVE_SCORES": this.saveScores(action.actionData); break;
            case "CLEAR_SCORES": this.clearScores(); break;
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;