import React from 'react';

export class Loading extends React.Component{
    
    render(){
        return(
        <div className="loadingOverlay">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        );
    }
}