import React from 'react';


export class DataArea extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "",   //set the inital value of the content state
        };

    }
    
    
    render(){
        
        return(
            <div className="dataArea col-12 col-md-10">
                <p>Welcome to our Data area! This is where we will display all charts, tables, and data.</p>
                {this.state.content}
            </div>
            );
    }
    
}