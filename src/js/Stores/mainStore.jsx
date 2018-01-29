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
    
    /*getCurrentPlayer(){
        return this.model.currentPlayer;
    }
    
    getScore(){
        return this.scoreData;
    }
    
    setPlayer(data){
        this.model=({
          currentPlayer: data.task,
          player1Name: data.player1Name,
          player2Name: data.player2Name
        });
        this.emit('change');
    }
    
    saveScores(data){
        this.scoreData = data;
        console.log(data);
        this.emit('change');
    }
    
    clearScores(){
        this.scoreData = [];
        console.log(this.scoreData);
        this.emit('change');
    } */
   
    
    
    handleActions(action){
        switch(action.actionType)
        {
            case "SET_PLAYER": this.setPlayer(action.data); break;
            case "SAVE_SCORES": this.saveScores(action.actionData); break;
            case "CLEAR_SCORES": this.clearScores(); break;
            case "VALIDATE_USER": this.validateUser(action.actionData); break;
            
        }
    }


var mainStore = new MainStore();
mainDispatcher.register(mainStore.handleActions.bind(mainStore));
window.mainDispatcher = mainDispatcher;
export default mainStore;