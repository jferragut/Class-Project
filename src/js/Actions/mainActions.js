import mainDispatcher from '../Dispatchers/mainDispatcher';
import thinkCrypto from '../Utils/ThinkCryptoAPI.js';


export function initalizeData(username){
      GetCurrencies();
      GetUserWatchlist(username);
}


//***********************************
// Begin User Actions
//***********************************


// Function to validate the User Login

export function UserValidate(history, username, password) {
  
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
//   console.log('User info sent');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log("The response came back successfully: ", this);
      
      GetUserWatchlist(username);
      
      mainDispatcher.dispatch({
        actionType: 'VALIDATE_USER',
        data: {
          username: username, 
          password: password, 
        }
      });
      history.push('/profile');
    }
  };
    
                            //need to add link of crypto api 
  xhttp.open("GET", "https://class-project-backend-jonnywrites.c9users.io/api/user/", true);
  xhttp.addEventListener('error', function(error) {
    console.log("ERROR on the response!!! ", error);
  });
  xhttp.send(formData);
}

// Action to Confirm Login




export function RegisterConfirm(history, username, first_name, last_name, email, password, is_active, email_contact, subscription_status) {
  
  var requestBody = {
  "username": username,
  "first_name": first_name,
  "last_name": last_name,
  "email": email,
  "password": password,
  "is_active": is_active,
  "email_contact": email_contact,
  "subscription_status": subscription_status
  };
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
      
      ///success!!!!
      console.log('Register confirm');
      
      mainDispatcher.dispatch({
          actionType: 'REGISTER_CONFIRM',
          data: {
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
          
        history.push('/profile');

      }
    };
    
    xhttp.open("PUT", "https://class-project-backend-innecco9.c9users.io/api/user/", true);
    xhttp.addEventListener('error', function(error) {
      console.log("ERROR on the response!!! ", error);
    });
    xhttp.send(JSON.stringify(requestBody));
}
export function EditProfileConfirm(history, username, first_name, last_name, email, password, passwordRetry, email_contact, subscription_status) {
  
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
          actionType: 'EDITPROFILE_CONFIRM',
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
          history.push('/profile');

      }
    };
    
    xhttp.open("POST", "https://class-project-backend-innecco9.c9users.io/api/user/"+username, true);
    xhttp.addEventListener('error', function(error) {
      console.log("ERROR on the response!!! ", error);
    });
    xhttp.send(JSON.stringify(requestBody));
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


