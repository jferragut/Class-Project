import React from 'react';
import * as mainActions from '../Actions/mainActions.js';

export var dateUtil = {
    
    retrieveDate(){
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
         return date;
    }
    
};














export class DateUtil extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

   
}