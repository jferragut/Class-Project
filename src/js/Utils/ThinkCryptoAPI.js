import * as mainActions from '../Actions/mainActions.js';

var ThinkCryptoAPI = {
        // *runtime* context of which API to call
        pendingPromises: [],
      
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
        callMethod: function(methodType, url, data = '') {
            
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
                xhttp.addEventListener('error',(error) => {
                    this.removePendingPromise(callPromise);
                    console.log("ERROR on the response!!! ",error);
                    reject('ERROR on the response!!! ',error);
                });
                xhttp.send(JSON.stringify(data));
            });
            this.addPendingPromise(callPromise);
            return callPromise;
        },
      
        //Get all currencies from API and returns a promise
        getCurrencies: function() {
            
            return this.callMethod(
            'GET',
            'https://class-project-backend-jonnywrites.c9users.io/api/currencies/'
            );
        
        }
};

export default ThinkCryptoAPI;