import React from 'react';


export class Ticker extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "This is where the ticker data will be displayed.",   //set the inital value of the content state
        };

    }
    
    
    render(){
        //Display of the div and data begins here
        return(    
            <div className="tickerData container-fluid d-block my-auto">
                <p>{this.state.content}</p>   
            </div>            
            );
    }
}