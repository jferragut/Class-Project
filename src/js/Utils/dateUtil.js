import React from 'react';
import * as mainActions from '../Actions/mainActions.js';

export var dateUtil = {
    
    retrieveDate(){
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
         return date;
    }
    
};














