import * as mainActions from '../Actions/mainActions.js';

var ThinkCryptoAPI = {
        // *runtime* context of which API to call
        pendingPromises: [],
        accessToken: "u8yime2L8sHX6fE01rDiyfzJm8uL6J",
      
        removePendingPromise: function(element) {
            const index = this.pendingPromises.indexOf(element);
            this.pendingPromises.splice(index, 1);
        },
        
        addPendingPromise: function(element) {
            this.pendingPromises.push(element);
        },
        
        getPendingStatus: function() {
            return (this.pendingPromises.length == 0);
        },
      
        //Returns a promise with the request that was made
        callMethod: function(methodType, url, requestBodyData = '') {
            
            var callPromise = new Promise((resolve, reject)=>{
            
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = (response) => {
                    
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        this.removePendingPromise(callPromise);
                        const dataReadyToSave = JSON.parse(xhttp.responseText);
                        resolve(dataReadyToSave);
                    }
                };
                xhttp.open(methodType, url, true);
                xhttp.setRequestHeader('Authorization', 'Bearer ' + this.accessToken);
                xhttp.addEventListener('error',(error) => {
                    this.removePendingPromise(callPromise);
                    console.log("ERROR on the response!!! ",error);
                    alert('Check the request! there is an error happening on the backend!');
                    reject('ERROR on the response!!! ',error);
                });
                xhttp.send(JSON.stringify(requestBodyData));
            });
            this.addPendingPromise(callPromise);
            return callPromise;
        },
      
        //Get all currencies from API and returns a promise
        getCurrencies: function() {
            
            return this.callMethod(
            'GET',
            process.env.HOST+'currencies/',
            );
        
        },
        
        
        registerConfirm: function(requestBody) {
            return this.callMethod(
            'PUT',
            process.env.HOST+'user/',
            requestBody
            );
        },
        
        editProfileConfirm: function(requestBody) {
            return this.callMethod(
            'POST',
            process.env.HOST+'user/',
            requestBody
            );
        },
        
        passwordResetConfirm: function(requestBody) {
            return this.callMethod(
            'POST',
            process.env.HOST+ 'user/'+ requestBody.username + "/cp",
            requestBody
            );
        },
        
        getWatchlist: function(username) {
            return this.callMethod(
            'GET',
            process.env.HOST+ 'user/'+username+'/watchlist'
            );
        },
        
        addToWatchlist: function(symbol, username) {
            return this.callMethod(
            'PUT',
            process.env.HOST+'user/'+username+'/watchlist/'+symbol
            );
        },
        
        removeFromWatchlist: function(symbol, username) {
            return this.callMethod(
            'DELETE',
            process.env.HOST+'user/'+username+'/watchlist/'+symbol
            );
        },
        
        getSubreddit: function(query) {
            return this.callMethod(
            'GET',
            'https://class-project-backend-jonnywrites.c9users.io/api/reddit/'+query
            );
        }
};

export default ThinkCryptoAPI;