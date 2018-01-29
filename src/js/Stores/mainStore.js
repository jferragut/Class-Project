import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js'
import mainDispatcher from '../Dispatchers/mainDispatchers.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.aux = {
        username: null,
        password: null,
        };
        
        this.isLoggedIn = false;  //default status of user login should be set to false until they have logged in.
        
    }
    
    getUserInfo(){
        return this.aux;
    }
    
<<<<<<< HEAD:src/js/Stores/mainStore.jsx
    /*getCurrentPlayer(){
        return this.model.currentPlayer;
=======
    getCurrencyList(){
        return this.model.currencyList;
>>>>>>> 8aa8abf43862a6c22d31c8990bbf6149d20bcb4e:src/js/Stores/mainStore.js
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
<<<<<<< HEAD:src/js/Stores/mainStore.jsx
    } */
   
    
=======
    }
  
>>>>>>> 8aa8abf43862a6c22d31c8990bbf6149d20bcb4e:src/js/Stores/mainStore.js
    
    handleActions(action){
        switch(action.actionType)
        {
            case "SET_CURRENCY_LIST": this.setCurrencyList(action.data); break;
            case "SAVE_SCORES": this.saveScores(action.actionData); break;
            case "CLEAR_SCORES": this.clearScores(); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            
        }
    }


var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;