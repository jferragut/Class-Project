import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.isLoggedIn = false;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: [],
            position: '',
            profile: ''
        };
    }

    setModel(newModel){
        this.model = Object.assign(this.model, newModel);
        this.emit('change');
    }
    
    // Return methods
    getPosition(){
        return this.model.position;
    }
    
    
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    getLoginStatus(){
        return this.isLoggedIn;
    }
    
    // Functions that process action data
    setStorePosition(data){
        this.setModel({ position: data });
    }

    setCurrencyList(data){
        this.setModel({ currencyList: data });
    }
    
    registerConfirm(data){
        this.setModel({ profile: data });
        
    }
    getUserProfile(){
        return this.model.profile;
    }
    editProfileConfirm(data){
        this.setModel({ profile: data });
        
    }
    
    logUserIn(){
        if(mainStore.registerConfirm == true){
        this.isLoggedIn = true;
        this.emit('change');
        }
        else return false;
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
            case "SET_STORE_POSITION": this.setStorePosition(action.position); break;
            case "INITIALIZED": this.setStorePosition(action); break;
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            case "REGISTER_CONFIRM": this.registerConfirm(action); break;
            case "EDITPROFILE_CONFIRM": this.editProfileConfirm(action); break;
            
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;