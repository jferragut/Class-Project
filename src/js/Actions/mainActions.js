import mainDispatcher from '../Dispatchers/mainDispatcher.js';
import thinkCrypto from '../Utils/ThinkCryptoAPI.js';


export function initalizeData(username){
      GetCurrencies();
      GetUserWatchlist(username);
}


//***********************************
// Begin User Actions
//***********************************



// (PUT) INFORMATION ADDED IN SPECIFIED USER PROFILE
export function RegisterConfirm(history, username, first_name, last_name, email, password, is_active, email_contact, subscription_status) {
  
  var requestBody = {
  "username": username,
  "first_name": first_name,
  "last_name": last_name,
  "email": email,
  "password": password,
  "is_active": is_active,
  "email_contact": String(email_contact),
  "subscription_status": String(subscription_status)
  };
  
  thinkCrypto.registerConfirm(requestBody).then(function(requestBody){
      mainDispatcher.dispatch({
          actionType: 'REGISTER_CONFIRM',
          actionData: {
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            is_active: is_active,
            email_contact: email_contact,
            subscription_status: subscription_status
          }
        });
    }).catch(function(){
      console.log('error');
    });
    history.push('/profile');
}


// (POST) INFORMATION CHANGE IN SPECIFIED USER PROFILE
export function EditProfileConfirm(history, username, first_name, last_name, email, password, passwordRetry, email_contact, subscription_status) {
  
  var requestBody = {
  "username": username,
  "first_name": first_name,
  "last_name": last_name,
  "email": email,
  "email_contact": email_contact,
  "subscription_status": subscription_status
  };
  
  thinkCrypto.registerConfirm(requestBody).then(function(dataReadyToSave){
      mainDispatcher.dispatch({
          actionType: 'EDITPROFILE_CONFIRM',
          actionData: {
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            email_contact: email_contact,
            subscription_status: subscription_status
          }
        });
        history.push('/profile');
    });
}


// (POST) A PASSWORD CHANGE FOR SPECIFIED USER
export function PasswordResetConfirm(history, username, password) {
  var requestBody = {
  "username": username,
  "password": password,
  };
  
  thinkCrypto.passwordResetConfirm(requestBody).then(function(dataReadyToSave){
      mainDispatcher.dispatch({
        actionType: 'PASSWORD_RESET_CONFIRM',
        actionData: {
          username: username,
          password: password,
        }
      });
      history.push('/profile');
  });
}


// (POST) Validate User Login with oAuth
export function UserLogin(history, username, password, client_id, client_secret){
    var logInBody = {
        grant_type: 'password',
        username: username,
        password: password,
        client_id: client_id,
        client_secret: client_secret
    };
   let serialize = function(obj) {
      var str = [];
      for(var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            console.log("The response came back successfully: ", this);
            var responseBody = JSON.parse(xhttp.responseText);
            
            thinkCrypto.accessToken = responseBody.access_token;
            mainDispatcher.dispatch({
              actionType: 'USER_LOGIN',
              actionData: {
                username: username
              } //data 
            }); //dispatch 
            history.push('/profile');
      } //If statement
    }; 
    //function
    xhttp.open("POST", "https://class-project-backend-innecco9.c9users.io/api/o/token/", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.addEventListener('error', function(error) {
    console.log("ERROR on the response!!! ", error);
  });
    xhttp.send(serialize(logInBody));
}



//***********************************
// Begin Currency Actions
//***********************************

// (GET) Gets the list of all Currencies in the database
export function GetCurrencies(){
    
    thinkCrypto.getCurrencies().then(function(dataReadyToSave){
      
      mainDispatcher.dispatch({
        actionType: 'GET_CURRENCIES',
        actionData: dataReadyToSave
      });
      
    });
}


//***********************************
// Begin Watchlist Actions
//***********************************

// (GET) - Gets the user watchlist
export function GetUserWatchlist(username){
    thinkCrypto.getWatchlist(username).then(function(dataReadyToSave){
            mainDispatcher.dispatch({
              actionType: 'GET_USER_WATCHLIST',
              actionData: dataReadyToSave
            });
    });
}

// (DELETE) - Removes Currency from Watchlist
export function RemoveFromWatchlist(symbol, username){
    thinkCrypto.removeFromWatchlist(symbol, username).then(function(dataReadyToSave){
            mainDispatcher.dispatch({
              actionType: 'REMOVE_WATCHLIST_ITEM',
              actionData: dataReadyToSave
            });
    });
}

// (PUT) - Adds Currency to Watchlist
export function AddToWatchlist(symbol, username){
    thinkCrypto.addToWatchlist(symbol, username).then(function(dataReadyToSave){
            mainDispatcher.dispatch({
              actionType: 'ADD_WATCHLIST_ITEM',
              actionData: dataReadyToSave
            });
    });
}


//***********************************
// Begin Reddit Action
//***********************************

// (GET) - Gets the requested subreddit
export function GetSubreddit(query){
    thinkCrypto.getSubreddit(query).then(function(dataReadyToSave){
            mainDispatcher.dispatch({
              actionType: 'SUBREDDIT_RESULTS',
              actionData: dataReadyToSave
            });
    });
}