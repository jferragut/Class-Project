import EventEmmiter from 'events';

import * as MainActions from '../Actions/mainActions.js';
import mainDispatcher from '../Dispatchers/mainDispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        
        this.isLoggedIn = true;  //default status of user login should be set to false until they have logged in.
        this.model = {
            currencyList: [],
            position: '',
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
            }
        };
    }

    setModel(newModel){
        this.model = Object.assign(this.model, newModel);
        this.emit('change');
    }
    
    // Return methods \\
    
    getPosition(){
        return this.model.position;
    }
    
    getUserProfile(){
        return this.model.profile;
    }
    
    getCurrencyList(){
        return this.model.currencyList;
    }
    
    getLoginStatus(){
        return this.isLoggedIn;
    }
    
    // Functions that process action data \\
    
    setStorePosition(data){
        this.setModel({ position: data });
    }

    setCurrencyList(data){
        this.setModel({ currencyList: data });
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
    
<<<<<<< HEAD
    
=======
>>>>>>> 62af2b2f95bb8ee31188ec387ed24f3d4491bd39
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
    
    logUserIn(){
        if(mainStore.registerConfirm == true){
        this.isLoggedIn = true;
        
        }
        else return false;
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
            case "INITIALIZED": this.setStorePosition(action.position); break;
            case "GET_CURRENCIES": this.setCurrencyList(action.actionData); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            case "REGISTER_CONFIRM": this.registerConfirm(action.actionData); break;
            case "EDITPROFILE_CONFIRM": this.editProfileConfirm(action.actionData); break;
            case "PASSWORD_RESET_CONFIRM": this.passwordResetConfirm(action.actionData); break;
            
        }
    }
}

var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;