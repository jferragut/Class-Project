import React from 'react';
import {TableData} from './tabledata.jsx';


export class DataArea extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "",   //set the inital value of the content state
        };

    }
    
    
    render(){
        // console.log(this.props.className);
        return(
            <div className={"dataArea col-12 col-md-10 " + this.props.className.join(' ')}>
                <TableData v='1'/>
            </div>
            );
    }
    
}