import mainDispatcher from '../Dispatchers/mainDispatcher';


//Basic flux action
// export function SetTurn(task,player1Name,player2Name){
    
//       mainDispatcher.dispatch({
//         actionType: 'SET_PLAYER',
//         data: {
//           task: task,
//           player1Name: player1Name,
//           player2Name: player2Name
//         }
//       });
    
// }

//API request with form data (POST)
// export function SendResult(index){
    
//     var formData = new FormData();
//     formData.append("player1", player1Name);
//     formData.append("player2", player2Name);
//     formData.append("winner", winner);
    
//     console.log(winner);
    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // console.log("The response came back successfully: ",this);
              
//             gameDispatcher.dispatch({
//               actionType: 'SAVE_SCORES',
//               actionData: JSON.parse(this.response)   
//             });
//         }
//     };
//     xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/game", true);
//     xhttp.addEventListener('error',function(error){
//         console.log("ERROR on the response!!! ",error);
//     });
//     xhttp.send(formData);
//     this.GetScoreboard();
// }


//Api request with no form data (GET)
export function GetCurrencies(username){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'GET_CURRENCIES',
              actionData: dataReadyToSave
            });
        }
    };
    xhttp.open("GET", "https://class-project-backend-jonnywrites.c9users.io/api/currencies/", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send();
}

//Api request with no form data (POST)
export function RemoveFromWatchlist(symbol, user_id){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'REMOVE_WATCHLIST_ITEM',
              actionData: dataReadyToSave
            });
        }
    };
    xhttp.open("DELETE", "https://class-project-backend-jonnywrites.c9users.io/api/user/"+user_id+"/watchlist/"+symbol, true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send();
}


export function AddToWatchlist(symbol, user_id){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'ADD_WATCHLIST_ITEM',
              actionData: dataReadyToSave,
              data: symbol
            });
        }
    };
    xhttp.open("PUT", "https://class-project-backend-jonnywrites.c9users.io/api/user/"+user_id+"/watchlist/"+symbol, true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    });
    xhttp.send();
}


export function UserValidated(username, password) {
  
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
//   console.log('User info sent');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //   console.log("The response came back successfully: ", this);
    
      mainDispatcher.dispatch({
        actionType: 'VALIDATE_USER',
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

export function LoginConfirm(){
    
      mainDispatcher.dispatch({
        actionType: 'LOGIN_CONFIRM',
        data: {}
      });
    
}
export function EmailContact(){
    
      mainDispatcher.dispatch({
        actionType: 'EMAIL_CONTACT',
        data: {}
      });
    
}
/*export function RegisterConfirm(){
    
      mainDispatcher.dispatch({
        actionType: 'REGISTER_CONFIRM',
        data: {
          firstname:
          lastname:
          firstname:
          firstname:
          firstname:
        }
      });
      
      xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/game", true);
  xhttp.addEventListener('error', function(error) {
    console.log("ERROR on the response!!! ", error);
  });
  xhttp.send(formData);
    
}*/