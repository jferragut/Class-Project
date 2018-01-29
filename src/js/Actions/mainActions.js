import mainDispatcher from '../Dispatchers/mainDispatchers.js';

//Basic flux action
export function SetTurn(task,player1Name,player2Name){
    
      mainDispatcher.dispatch({
        actionType: 'SET_PLAYER',
        data: {
          task: task,
          player1Name: player1Name,
          player2Name: player2Name
        }
      });
    
}
/*
//API request with form data (POST)
export function SendResult(winner,player1Name,player2Name){
    
    var formData = new FormData();
    formData.append("player1", player1Name);
    formData.append("player2", player2Name);
    formData.append("winner", winner);
    
    console.log(winner);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("The response came back successfully: ",this);
              
            gameDispatcher.dispatch({
              actionType: 'SAVE_SCORES',
              actionData: JSON.parse(this.response)   
            });
        }
    };
    xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/game", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send(formData);
    this.GetScoreboard();
}


//Api request with no form data (GET)
export function GetScoreboard(){
    
    console.log("Getting the latest score from the API");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {

        if (this.readyState == 4 && this.status == 200) {
            console.log("The response came back successfully: ",this);
            
            const dataReadyToSave = JSON.parse(this.response);
            gameDispatcher.dispatch({
              actionType: 'SAVE_SCORES',
              actionData: dataReadyToSave.data
            });
        }
    };
    xhttp.open("GET", "https://assets.breatheco.de/apis/tictactoe/api/games", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send();
}

//API request with no form data (POST)
export function ClearScores(){
    

    console.log("Clearing Remote Scoreboard");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {

        if (this.readyState == 4 && this.status == 200) {
            console.log("The response came back successfully: ",this);
            
            // const dataReadyToSave = JSON.parse(this.response);
            gameDispatcher.dispatch({
              actionType: 'CLEAR_SCORES',
              actionData: []
            });
        }
    };
    xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/clean", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send();   
    this.GetScoreboard();
}*/


export function UserValidated(username, password) {
  
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  console.log('User info sent');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("The response came back successfully: ", this);
    
      mainDispatcher.dispatch({
        actionType: 'USER_SIGNIN',
        data: {
          username: username, 
          password: password, 
        }
      });
    }
  };
    
                            //need to add link of crypto api 
  xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/game", true);
  xhttp.addEventListener('error', function(error) {
    console.log("ERROR on the response!!! ", error);
  });
  xhttp.send(formData);
}