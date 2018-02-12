import mainDispatcher from '../Dispatchers/mainDispatcher.js';

export function setStorePosition(position){
      mainDispatcher.dispatch({
        actionType: 'SET_STORE_POSITION',
        position: position
      });
}

//***********************************
// Begin User Actions
//***********************************


// Function to validate the User Login
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
  xhttp.open("POST", "https://class-project-backend-jonnywrites.c9users.io/api/user/", true);
  xhttp.addEventListener('error', function(error) {
    console.log("ERROR on the response!!! ", error);
  });
  xhttp.send(formData);
}

// Action to Confirm Login
export function LogInConfirm(task){
    
      mainDispatcher.dispatch({
        actionType: 'LOGIN_CONFIRM',
        data: {}
      });
      this.props.history.push('/profile');
      
    
}



export function RegisterConfirm(history, username, first_name, last_name, email, password, passwordRetry, email_contact, subscription_status) {
  
  var requestBody = {
  "username": username,
  "first_name": first_name,
  "last_name": last_name,
  "email": email,
  "password": password,
  "email_contact": email_contact,
  "subscription_status": subscription_status
  };
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
      
      ///success!!!!
      
      
      mainDispatcher.dispatch({
          actionType: 'REGISTER_CONFIRM',
          data: {
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            email_contact: email_contact,
            subscription_status: subscription_status
          }
        });
          this.props.history.push('/profile');

      }
    };
    debugger;
    xhttp.open("PUT", "https://class-project-backend-innecco9.c9users.io/api/user/"+username, true);
    xhttp.addEventListener('error', function(error) {
      console.log("ERROR on the response!!! ", error);
    });
    xhttp.send(JSON.stringify(requestBody));
}


//***********************************
// Begin Currency Actions
//***********************************


// API request with no form data (GET) - Gets the list of all Currencies in the database
export function GetCurrencies(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            console.log("The response came back successfully: ",this);
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


//***********************************
// Begin Watchlist Actions
//***********************************


// API request with no form data (GET) - Gets the user watchlist
export function GetUserWatchlist(username){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'GET_USER_WATCHLIST',
              actionData: dataReadyToSave,
              status: 200  
            });
        }
    };
    xhttp.open("GET", "https://class-project-backend-jonnywrites.c9users.io/api/user/"+username+"/watchlist", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
        mainDispatcher.dispatch({
              actionType: 'GET_USER_WATCHLIST',
              actionData: error,
              status: ''
            });
    });
    xhttp.send();
}

// API request with no form data (DELETE) - Removes Currency from Watchlist
export function RemoveFromWatchlist(symbol, user_id){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'REMOVE_WATCHLIST_ITEM',
              status: this.status,
              actionData: dataReadyToSave,
              data: symbol
            });
        }
    };
    xhttp.open("DELETE", "https://class-project-backend-jonnywrites.c9users.io/api/user/"+user_id+"/watchlist/"+symbol, true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
        mainDispatcher.dispatch({
          actionType: 'REMOVE_WATCHLIST_ITEM_FAILED',
          status: this.status,
          actionData: error,
          data: symbol
        });
    });
    xhttp.send();
}

// API request with no form data (PUT) - Adds Currency to Watchlist
export function AddToWatchlist(symbol, user_id){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response) {
        
        if (this.readyState == 4 && this.status == 200) {
            // console.log("The response came back successfully: ",this);
            // debugger;
            const dataReadyToSave = JSON.parse(this.response);
            mainDispatcher.dispatch({
              actionType: 'ADD_WATCHLIST_ITEM',
              status: this.status,
              actionData: dataReadyToSave,
              data: symbol
            });
        }
    };
    xhttp.open("PUT", "https://class-project-backend-jonnywrites.c9users.io/api/user/"+user_id+"/watchlist/"+symbol, true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
        mainDispatcher.dispatch({
          actionType: 'ADD_WATCHLIST_ITEM_FAILED',
          status: this.status,
          actionData: error,
        });
    });
    xhttp.send();
}