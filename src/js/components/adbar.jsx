import React from 'react';


export class AdSideBar extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "",   //set the inital value of the content state
        };

    }
        
    render(){
        
        
        return(
            <div className="adSideBar col-12 col-md-2 d-none d-md-inline-block">
                <p>This is my Desktop Adbar!</p>
                {this.state.content}
                
                <div className="adSideBarMobile d-inline-block d-md-none">
                    <p>Mobile Adbar!</p>
                    {this.state.content}
                </div>
            </div>            
            );
    }
    
}