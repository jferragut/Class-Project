import React from 'react';
import {TableData} from './tabledata.jsx';
import {DetailView} from './detailview.jsx';


export class DataArea extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 
        
        this.state = {
            content: "",   //set the inital value of the content state
        };

    }
    
    checkReturnType(){
        if(this.props.viewTable===true){
            return <TableData history={this.props.history} />;
        }else{
            return <DetailView />;
        }
    }
    
    render(){
        return(
            <div className={"dataArea col-12 col-md-10 " + this.props.className.join(' ')}>
                {this.checkReturnType()}
            </div>
        );
    }
    
}