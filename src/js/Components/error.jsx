import React from 'react';


export class Error extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        var errorText = (function(){
            switch(this.props.route.error){
                case "404":
                    return "Error 404 - The specified page could not be found.";
                default:
                    return String(this.props.route.error);
        }})();
        return(
            <div className="errorFrame">
                <h1>ERROR</h1>
                <p>{errorText}</p>
            </div>
            );
    }
    
}