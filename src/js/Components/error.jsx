import React from 'react';


export class Error extends React.Component{

    render(){
        var errorText = (function(){
            switch(this.props.error){
                case "404":
                    return "Error 404 - The specified page could not be found.";
                default:
                    return this.props.error;
        }})();
        return(
            <div className="errorFrame">
                <h1>ERROR</h1>
                <p>{errorText}</p>
            </div>
            );
    }
    
}