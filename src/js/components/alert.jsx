import React from 'react';


export class Alert extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "",   //set the inital value of the content state
        };

    }
    
    
    render(){
        var usedClasses = "siteAlert d-none"  //set initial value of usedClasses
        if(this.state.content==""){
            usedClasses = "siteAlert d-none"  //if no content present, display none
        }
        else{
            usedClasses = "siteAlert container-fluid text-center d-block" //otherwise, apply all classes and display block
        };
        
        return(    //Plug usedClasses in the 'className' property, and send content to the innerHTML for p
            <div className={usedClasses}>
                <p>{this.state.content}</p>   
            </div>            
            );
    }
}