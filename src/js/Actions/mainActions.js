import mainDispatcher from '../Dispatchers/mainDispatcher';
import thinkCrypto from '../Utils/ThinkCryptoAPI.js';


export function initalizeData(username){
      GetCurrencies();
      GetUserWatchlist(username);
}


//***********************************
// Begin User Actions
//***********************************

// (GET) Function to validate the User Login
export function UserValidate(history, username, password) {
  var formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  thinkCrypto.userValidate().then(function(dataReadyToSave){
      
      mainDispatcher.dispatch({
        actionType: 'VALIDATE_USER',
        actionData: {
          username: username, 
          password: password, 
        }
      });
      history.push('/profile');
  });
}


// (PUT) INFORMATION ADDED IN SPECIFIED USER PROFILE
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
  
  thinkCrypto.registerConfirm().then(function(dataReadyToSave){
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
        history.push('/profile');
    });
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
